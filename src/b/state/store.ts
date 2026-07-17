// Single source of truth for the Document Upload prototype.
// A tiny framework-free pub/sub store holding the request + per-document state machine,
// with a simulated upload/validation/failure pipeline. Uploading each file = submission
// (PRD FR-03); documents are independent — completing one never flips a sibling (AC-14).

export type DocStatus =
  | "not-started"
  | "selected"
  | "uploading"
  | "uploaded"
  | "validation-error"
  | "failed";

export interface FileInfo {
  name: string;
  sizeLabel: string; // e.g. "1.2 MB"
  typeLabel: string; // e.g. "PDF"
  url: string; // object URL for previewing the actual file the user picked
}

export interface DocState {
  id: string;
  name: string;
  description: string;
  isOther: boolean; // the "Other document" catch-all — requires a document-type note
  status: DocStatus;
  file?: FileInfo;
  note?: string; // Other: entered document-type note (retained on retry — UX-20)
  progress?: number; // 0–100 while uploading
  message?: string; // validation or failure explanation (plain language)
  /** Prototype-only: make this document's first upload attempt fail, to demo failed→retry. */
  demoFailOnce?: boolean;
}

export interface RequestState {
  id: string;
  loanLabel: string; // "Personal loan · Request #4821"
  dueDateLabel: string; // "Jul 10"
  docCount: number;
  docs: DocState[];
}

export type MobileView = "overview" | "doc";

export interface AppState {
  request: RequestState;
  activeDocId: string | null;
  view: MobileView;
}

// ---- Configurable validation placeholders (PRD: intake does not fix these) ----
export const UPLOAD_CONFIG = {
  maxSizeMb: 10,
  allowedExtensions: ["pdf", "jpg", "jpeg", "png"] as const,
  allowedLabel: "PDF, JPG, or PNG",
};

// ---- Fake request data ----
function seedRequest(): RequestState {
  const docs: DocState[] = [
    {
      id: "proof-of-income",
      name: "Proof of income",
      description:
        "A recent pay stub, W-2, or benefits statement from the last 60 days. One file per document.",
      isOther: false,
      status: "not-started",
    },
    {
      id: "photo-id",
      name: "Government-issued photo ID",
      description:
        "Driver's license, state ID, or passport — include the back if it has information.",
      isOther: false,
      status: "not-started",
      demoFailOnce: true, // first upload attempt fails, retry succeeds (demonstrates failed→retry)
    },
    {
      id: "proof-of-residence",
      name: "Proof of residence",
      description:
        "A utility bill or lease from the last 60 days that shows your current address.",
      isOther: false,
      status: "not-started",
    },
    {
      id: "other",
      name: "Other document",
      description:
        "Sending something we didn't list? Tell us what it is so your loan team can route it correctly.",
      isOther: true,
      status: "not-started",
    },
  ];
  return {
    id: "4821",
    loanLabel: "Personal loan · Request #4821",
    dueDateLabel: "Jul 10",
    docCount: docs.length,
    docs,
  };
}

// ---- Helpers ----
function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}
function extensionOf(name: string): string {
  const dot = name.lastIndexOf(".");
  return dot >= 0 ? name.slice(dot + 1).toLowerCase() : "";
}
function typeLabelOf(name: string): string {
  const ext = extensionOf(name);
  return ext === "jpeg" ? "JPG" : ext.toUpperCase();
}

type Listener = () => void;

class Store {
  private state: AppState = {
    request: seedRequest(),
    activeDocId: null,
    view: "overview",
  };
  private listeners = new Set<Listener>();
  private timers = new Map<string, ReturnType<typeof setInterval>>();

  // ---- Subscription ----
  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  private emit(): void {
    for (const fn of this.listeners) fn();
  }

  // ---- Reads ----
  getState(): AppState {
    return this.state;
  }
  get docs(): DocState[] {
    return this.state.request.docs;
  }
  getDoc(id: string): DocState | undefined {
    return this.docs.find((d) => d.id === id);
  }
  get uploadedCount(): number {
    return this.docs.filter((d) => d.status === "uploaded").length;
  }
  get allUploaded(): boolean {
    return this.docs.every((d) => d.status === "uploaded");
  }
  /** The next not-started document, for "Next document" navigation. */
  nextOutstandingId(afterId?: string): string | null {
    const outstanding = this.docs.filter((d) => d.status !== "uploaded");
    if (outstanding.length === 0) return null;
    if (afterId) {
      const idx = this.docs.findIndex((d) => d.id === afterId);
      const after = this.docs.slice(idx + 1).find((d) => d.status !== "uploaded");
      if (after) return after.id;
    }
    return outstanding[0].id;
  }

  // ---- UI navigation ----
  setActive(id: string | null): void {
    this.state.activeDocId = id;
    this.emit();
  }
  openDoc(id: string): void {
    this.state.activeDocId = id;
    this.state.view = "doc";
    this.emit();
  }
  backToOverview(): void {
    this.state.view = "overview";
    this.emit();
  }

  // ---- Document actions (state machine) ----
  private patch(id: string, next: Partial<DocState>): void {
    const doc = this.getDoc(id);
    if (!doc) return;
    Object.assign(doc, next);
  }

  private revokeUrl(doc: DocState | undefined): void {
    if (doc?.file?.url) URL.revokeObjectURL(doc.file.url);
  }

  /** Validate + associate a chosen file. → 'selected' or 'validation-error'. */
  selectFile(id: string, file: File): void {
    this.revokeUrl(this.getDoc(id)); // free any previously-selected file's object URL
    const ext = extensionOf(file.name);
    const sizeMb = file.size / (1024 * 1024);
    if (!(UPLOAD_CONFIG.allowedExtensions as readonly string[]).includes(ext)) {
      this.patch(id, {
        status: "validation-error",
        file: undefined,
        message: `That file type isn't supported. Choose a ${UPLOAD_CONFIG.allowedLabel} file.`,
      });
    } else if (sizeMb > UPLOAD_CONFIG.maxSizeMb) {
      this.patch(id, {
        status: "validation-error",
        file: undefined,
        message: `That file is ${formatSize(file.size)} — larger than the ${UPLOAD_CONFIG.maxSizeMb} MB limit. Choose a smaller ${UPLOAD_CONFIG.allowedLabel} file.`,
      });
    } else {
      this.patch(id, {
        status: "selected",
        message: undefined,
        file: {
          name: file.name,
          sizeLabel: formatSize(file.size),
          typeLabel: typeLabelOf(file.name),
          url: URL.createObjectURL(file),
        },
      });
    }
    this.emit();
  }

  /** Begin the (simulated) upload = submission. Requires a selected file (+ note for Other). */
  upload(id: string): void {
    const doc = this.getDoc(id);
    if (!doc || !doc.file) return;
    if (doc.isOther && !doc.note?.trim()) return; // gated by note (UX-15)

    this.clearTimer(id);
    this.patch(id, { status: "uploading", progress: 0, message: undefined });
    this.emit();

    const timer = setInterval(() => {
      const d = this.getDoc(id);
      if (!d) return this.clearTimer(id);
      const next = Math.min(100, (d.progress ?? 0) + 12);
      if (next >= 100) {
        this.clearTimer(id);
        if (d.demoFailOnce) {
          this.patch(id, {
            status: "failed",
            progress: undefined,
            demoFailOnce: false, // retry will succeed
            message:
              "Something went wrong on our end — your file and note are still here. Try again, or come back later.",
          });
        } else {
          this.patch(id, { status: "uploaded", progress: 100, message: undefined });
        }
      } else {
        this.patch(id, { progress: next });
      }
      this.emit();
    }, 150);
    this.timers.set(id, timer);
  }

  cancelUpload(id: string): void {
    this.clearTimer(id);
    // Return to the selected state so the customer can retry or replace.
    this.patch(id, { status: "selected", progress: undefined });
    this.emit();
  }
  retry(id: string): void {
    this.upload(id);
  }
  /** Replace/remove a selected file before submission (UX-11). */
  removeFile(id: string): void {
    this.clearTimer(id);
    const doc = this.getDoc(id);
    this.revokeUrl(doc);
    this.patch(id, {
      status: "not-started",
      file: undefined,
      progress: undefined,
      message: undefined,
      note: doc?.isOther ? doc.note : undefined, // Other keeps its note (UX-20)
    });
    this.emit();
  }
  // `silent` updates the note without notifying subscribers — used for per-keystroke input so the
  // field isn't re-rendered (which would drop focus). The view toggles the Upload button directly.
  setNote(id: string, note: string, silent = false): void {
    this.patch(id, { note });
    if (!silent) this.emit();
  }

  private clearTimer(id: string): void {
    const t = this.timers.get(id);
    if (t) {
      clearInterval(t);
      this.timers.delete(id);
    }
  }

  /** Prototype convenience: reset the whole flow. */
  reset(): void {
    for (const id of this.timers.keys()) this.clearTimer(id);
    for (const doc of this.docs) this.revokeUrl(doc);
    this.state = { request: seedRequest(), activeDocId: null, view: "overview" };
    this.emit();
  }

  /** Demo-only (scenario explorer): jump straight to a named set of document states; `focus`
   *  selects the doc shown in the desktop panel / mobile drill-in. */
  loadScenario(overrides: Record<string, Partial<DocState>>, focus?: string): void {
    for (const id of this.timers.keys()) this.clearTimer(id);
    for (const doc of this.docs) this.revokeUrl(doc);
    this.state = {
      request: seedRequest(),
      activeDocId: focus ?? null,
      view: focus ? "doc" : "overview",
    };
    for (const [id, patch] of Object.entries(overrides)) this.patch(id, patch);
    this.emit();
  }
}

export const store = new Store();

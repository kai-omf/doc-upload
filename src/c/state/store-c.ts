// Single source of truth for Option C "Instant Upload".
// Option A's single-page layout, but each document uploads on its own the moment you tap its Upload
// button — so every upload is "pointed" at that document's ID (the backend can't infer which file is
// which). Client-side type/size validation happens on select; the server upload is per-document and
// independent, with immediate success/failure. Documents never affect one another.

export type DocStatus =
  | "not-started" // nothing staged → drop zone
  | "validation-error" // staged file failed size/type → inline error + drop zone
  | "note-required" // Other doc has a file but no note yet → amber "Needs attention"
  | "selected" // staged + valid, waiting for this doc's Upload → blue "Ready"
  | "uploading" // this document is uploading → determinate progress
  | "uploaded" // sent to the server, read-only → green "Uploaded"
  | "failed"; // server-side upload failure → red "Failed", retry

export interface FileInfo {
  name: string;
  sizeLabel: string;
  typeLabel: string;
  url: string; // object URL for previewing the actual file the user picked
}

export interface DocState {
  id: string;
  name: string;
  description: string;
  isOther: boolean;
  required: boolean;
  status: DocStatus;
  file?: FileInfo;
  note?: string;
  progress?: number; // 0–100 while uploading
  message?: string;
  /** Prototype-only: make this document's first upload attempt fail, to demo failed→retry. */
  demoFailOnce?: boolean;
}

export interface RequestState {
  id: string;
  loanLabel: string;
  dueDateLabel: string;
  docCount: number;
  docs: DocState[];
}

export interface AppState {
  request: RequestState;
}

// ---- Configurable validation placeholders (PRD: intake does not fix these) ----
export const UPLOAD_CONFIG = {
  maxSizeMb: 10,
  allowedExtensions: ["pdf", "jpg", "jpeg", "png"] as const,
  allowedLabel: "PDF, JPG, or PNG",
};

const UPLOAD_TICK_MS = 90;
const UPLOAD_STEP = 12; // progress per tick → ~750ms upload

function seedRequest(): RequestState {
  const docs: DocState[] = [
    {
      id: "proof-of-income",
      name: "Proof of income",
      description:
        "A recent pay stub, W-2, or benefits statement from the last 60 days. One file per document.",
      isOther: false,
      required: true,
      status: "not-started",
    },
    {
      id: "photo-id",
      name: "Government-issued photo ID",
      description:
        "Driver's license, state ID, or passport — include the back if it has information.",
      isOther: false,
      required: true,
      status: "not-started",
      demoFailOnce: true, // first upload attempt fails, retry succeeds
    },
    {
      id: "proof-of-residence",
      name: "Proof of residence",
      description:
        "A utility bill or lease from the last 60 days that shows your current address.",
      isOther: false,
      required: true,
      status: "not-started",
    },
    {
      id: "other",
      name: "Other document",
      description:
        "Sending something we didn't list? Tell us what it is so your loan team can route it correctly.",
      isOther: true,
      required: true,
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

class StoreC {
  private state: AppState = { request: seedRequest() };
  private listeners = new Set<Listener>();
  private timers = new Map<string, ReturnType<typeof setInterval>>();

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  private emit(): void {
    for (const fn of this.listeners) fn();
  }

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
  get isUploading(): boolean {
    return this.docs.some((d) => d.status === "uploading");
  }

  private patch(id: string, next: Partial<DocState>): void {
    const doc = this.getDoc(id);
    if (!doc) return;
    Object.assign(doc, next);
  }
  private revokeUrl(doc: DocState | undefined): void {
    if (doc?.file?.url) URL.revokeObjectURL(doc.file.url);
  }
  /** The staged status a doc with a valid file should hold, honoring the Other note gate. */
  private stagedStatus(doc: DocState): DocStatus {
    if (doc.isOther && !doc.note?.trim()) return "note-required";
    return "selected";
  }

  /** Validate + stage a chosen file (instant, no network). → 'selected' | 'note-required' | 'validation-error'. */
  selectFile(id: string, file: File): void {
    const doc = this.getDoc(id);
    if (!doc) return;
    this.revokeUrl(doc);
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
      const fileInfo: FileInfo = {
        name: file.name,
        sizeLabel: formatSize(file.size),
        typeLabel: typeLabelOf(file.name),
        url: URL.createObjectURL(file),
      };
      const staged = { ...doc, file: fileInfo };
      this.patch(id, { file: fileInfo, message: undefined, status: this.stagedStatus(staged) });
    }
    this.emit();
  }
  replaceFile(id: string, file: File): void {
    this.selectFile(id, file);
  }
  removeFile(id: string): void {
    const doc = this.getDoc(id);
    this.clearTimer(id);
    this.revokeUrl(doc);
    this.patch(id, {
      status: "not-started",
      file: undefined,
      progress: undefined,
      message: undefined,
      note: doc?.isOther ? doc.note : undefined,
    });
    this.emit();
  }
  // `silent` keeps input focus (no re-render); the view syncs the gate imperatively.
  setNote(id: string, note: string, silent = false): void {
    const doc = this.getDoc(id);
    if (!doc) return;
    doc.note = note;
    if (doc.file && (doc.status === "selected" || doc.status === "note-required")) {
      doc.status = this.stagedStatus(doc);
    }
    if (!silent) this.emit();
  }

  /** Upload this one document (independent of the others). Requires a staged, valid file. */
  upload(id: string): void {
    const doc = this.getDoc(id);
    if (!doc || doc.status !== "selected" || !doc.file) return;
    this.clearTimer(id);
    this.patch(id, { status: "uploading", progress: 0, message: undefined });
    this.emit();

    const timer = setInterval(() => {
      const d = this.getDoc(id);
      if (!d) return this.clearTimer(id);
      const next = Math.min(100, (d.progress ?? 0) + UPLOAD_STEP);
      if (next >= 100) {
        this.clearTimer(id);
        if (d.demoFailOnce) {
          this.patch(id, {
            status: "failed",
            progress: undefined,
            demoFailOnce: false,
            message: "Something went wrong on our end — your file is still here. Try again.",
          });
        } else {
          this.patch(id, { status: "uploaded", progress: 100, message: undefined });
        }
      } else {
        this.patch(id, { progress: next });
      }
      this.emit();
    }, UPLOAD_TICK_MS);
    this.timers.set(id, timer);
  }

  /** Retry a failed upload — restage to selected, then upload. */
  retry(id: string): void {
    const doc = this.getDoc(id);
    if (!doc || doc.status !== "failed" || !doc.file) return;
    doc.status = "selected";
    this.upload(id);
  }

  private clearTimer(id: string): void {
    const t = this.timers.get(id);
    if (t) {
      clearInterval(t);
      this.timers.delete(id);
    }
  }

  reset(): void {
    for (const id of [...this.timers.keys()]) this.clearTimer(id);
    for (const doc of this.docs) this.revokeUrl(doc);
    this.state = { request: seedRequest() };
    this.emit();
  }

  /** Demo-only (scenario explorer): jump straight to a named set of document states. */
  loadScenario(overrides: Record<string, Partial<DocState>>): void {
    this.reset();
    for (const [id, patch] of Object.entries(overrides)) this.patch(id, patch);
    this.emit();
  }
}

export const storeC = new StoreC();

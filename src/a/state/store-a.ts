// Single source of truth for the Option A "Checklist Hub" prototype.
// A framework-free pub/sub store holding the request + a per-document *batch* state machine.
//
// One-milestone model: you STAGE each file (validated on the spot, still editable), then a single
// `submitAll()` sends the whole batch. Staging never touches the network — validation is instant and
// client-side. Submission is the only server step, simulated as a *staggered* per-document cascade.
// Documents are independent: one failing never flips a sibling.

export type DocStatus =
  | "not-started" // nothing staged yet → drop zone
  | "ready" // staged, valid, editable → blue "Ready"
  | "validation-error" // staged file failed size/type → inline error + drop zone
  | "note-required" // Other doc has a file but no note yet → amber "Needs attention"
  | "submitting" // during batch submit → determinate progress
  | "submitted" // sent, read-only → green "Submitted"
  | "failed"; // server-side submit failure → red "Failed", retry

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
  isOther: boolean; // the "Other document" catch-all — requires a document-type note to be ready
  required: boolean;
  status: DocStatus;
  file?: FileInfo;
  note?: string; // Other: entered document-type note (retained across replace/retry)
  progress?: number; // 0–100 while submitting
  message?: string; // validation or failure explanation (plain language)
  /** Prototype-only: make this document's first submit attempt fail, to demo failed→retry. */
  demoFailOnce?: boolean;
}

export interface RequestState {
  id: string;
  loanLabel: string; // "Personal loan · Request #4821"
  dueDateLabel: string; // "Jul 10"
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

// ---- Batch-submit choreography timing (the signature moment) ----
// Each ready doc starts SUBMIT_STAGGER_MS after the previous, then fills to 100% over roughly
// SUBMIT_FILL_MS, so completions cascade rather than snapping all at once.
const SUBMIT_STAGGER_MS = 220;
const SUBMIT_TICK_MS = 90;
const SUBMIT_STEP = 16; // progress added per tick → ~700ms fill

// ---- Fake request data ----
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
      demoFailOnce: true, // first submit attempt fails, retry succeeds (demonstrates failed→retry)
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

class StoreA {
  private state: AppState = { request: seedRequest() };
  private listeners = new Set<Listener>();
  private timers = new Map<string, ReturnType<typeof setInterval>>();
  private delays = new Set<ReturnType<typeof setTimeout>>();
  private _submitting = false;

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
  get readyCount(): number {
    return this.docs.filter((d) => d.status === "ready").length;
  }
  get submittedCount(): number {
    return this.docs.filter((d) => d.status === "submitted").length;
  }
  get allReady(): boolean {
    return this.docs.every((d) => d.status === "ready");
  }
  get allSubmitted(): boolean {
    return this.docs.every((d) => d.status === "submitted");
  }
  /** Batch submit is only offered once every document is staged and valid (all "ready"). */
  get canSubmit(): boolean {
    return !this._submitting && this.docs.length > 0 && this.docs.every((d) => d.status === "ready");
  }
  get isSubmitting(): boolean {
    return this._submitting;
  }
  /** Plain-language reason the Submit button is disabled (for the helper note + a11y). */
  get submitBlockReason(): string | null {
    if (this._submitting) return "Submitting your documents…";
    if (this.allSubmitted) return null;
    const notStarted = this.docs.filter((d) => d.status === "not-started").length;
    const errors = this.docs.filter((d) => d.status === "validation-error").length;
    const notes = this.docs.filter((d) => d.status === "note-required").length;
    if (errors) return `Fix ${errors} file ${errors === 1 ? "issue" : "issues"} before submitting.`;
    if (notes) return `Add a note to ${notes} document${notes === 1 ? "" : "s"} before submitting.`;
    if (notStarted)
      return `Add ${notStarted} more document${notStarted === 1 ? "" : "s"} to submit.`;
    return null;
  }

  // ---- Document actions (state machine) ----
  private patch(id: string, next: Partial<DocState>): void {
    const doc = this.getDoc(id);
    if (!doc) return;
    Object.assign(doc, next);
  }

  /** Resolve the status a doc with a valid file should hold, honoring the Other note gate. */
  private resolvedReady(doc: DocState): DocStatus {
    if (doc.isOther && !doc.note?.trim()) return "note-required";
    return "ready";
  }

  /** Validate + stage a chosen file (instant, no network). → 'ready' | 'note-required' | 'validation-error'. */
  stageFile(id: string, file: File): void {
    if (this._submitting) return;
    const doc = this.getDoc(id);
    if (!doc) return;
    this.revokeUrl(doc); // free any previously-staged file's object URL before replacing
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
      const staged: DocState = {
        ...doc,
        file: {
          name: file.name,
          sizeLabel: formatSize(file.size),
          typeLabel: typeLabelOf(file.name),
          url: URL.createObjectURL(file),
        },
        message: undefined,
      };
      this.patch(id, { file: staged.file, message: undefined, status: this.resolvedReady(staged) });
    }
    this.emit();
  }

  /** Replace the staged file with a new one (pre-submit edit). */
  replaceFile(id: string, file: File): void {
    this.stageFile(id, file);
  }

  private revokeUrl(doc: DocState | undefined): void {
    if (doc?.file?.url) URL.revokeObjectURL(doc.file.url);
  }

  /** Remove a staged file (pre-submit edit). Other keeps its note. */
  removeFile(id: string): void {
    if (this._submitting) return;
    const doc = this.getDoc(id);
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

  // `silent` updates the note without notifying subscribers — used for per-keystroke input so the
  // field isn't re-rendered (which would drop focus). The view re-derives gating on blur/submit.
  setNote(id: string, note: string, silent = false): void {
    const doc = this.getDoc(id);
    if (!doc) return;
    doc.note = note;
    // A staged Other doc flips between note-required ↔ ready as the note gains/loses content.
    if (doc.file && (doc.status === "ready" || doc.status === "note-required")) {
      doc.status = this.resolvedReady(doc);
    }
    if (!silent) this.emit();
  }

  /** Send the whole batch. Ready docs cascade to 'submitting' → 'submitted' (one demo failure). */
  submitAll(): void {
    if (!this.canSubmit) return;
    this._submitting = true;
    const ready = this.docs.filter((d) => d.status === "ready");
    for (const d of ready) this.patch(d.id, { status: "submitting", progress: 0, message: undefined });
    this.emit();

    ready.forEach((doc, i) => {
      const delay = setTimeout(() => {
        this.delays.delete(delay);
        this.runSubmit(doc.id);
      }, i * SUBMIT_STAGGER_MS);
      this.delays.add(delay);
    });
  }

  /** Drive one document's determinate submit fill, then land it on submitted / failed. */
  private runSubmit(id: string): void {
    this.clearTimer(id);
    const timer = setInterval(() => {
      const d = this.getDoc(id);
      if (!d) return this.clearTimer(id);
      const next = Math.min(100, (d.progress ?? 0) + SUBMIT_STEP);
      if (next >= 100) {
        this.clearTimer(id);
        if (d.demoFailOnce) {
          this.patch(id, {
            status: "failed",
            progress: undefined,
            demoFailOnce: false, // retry will succeed
            message:
              "Something went wrong on our end — your file and note are still here. Try again.",
          });
        } else {
          this.patch(id, { status: "submitted", progress: 100, message: undefined });
        }
        this.settleAfterSubmit();
      } else {
        this.patch(id, { progress: next });
      }
      this.emit();
    }, SUBMIT_TICK_MS);
    this.timers.set(id, timer);
  }

  /** Once no document is still submitting, release the batch lock (allows retry of failures). */
  private settleAfterSubmit(): void {
    const stillGoing = this.docs.some((d) => d.status === "submitting");
    if (!stillGoing) this._submitting = false;
  }

  /** Retry a single failed document's submission. */
  retry(id: string): void {
    const doc = this.getDoc(id);
    if (!doc || doc.status !== "failed") return;
    this._submitting = true;
    this.patch(id, { status: "submitting", progress: 0, message: undefined });
    this.emit();
    this.runSubmit(id);
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
    for (const id of [...this.timers.keys()]) this.clearTimer(id);
    for (const d of this.delays) clearTimeout(d);
    this.delays.clear();
    for (const doc of this.docs) this.revokeUrl(doc);
    this._submitting = false;
    this.state = { request: seedRequest() };
    this.emit();
  }

  /** Demo-only (scenario explorer): jump straight to a named set of document states. */
  loadScenario(overrides: Record<string, Partial<DocState>>): void {
    this.reset(); // stop timers, revoke urls, fresh seed (emits once)
    for (const [id, patch] of Object.entries(overrides)) this.patch(id, patch);
    this.emit();
  }
}

export const storeA = new StoreA();

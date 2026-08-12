// Single source of truth for Option C "Instant Upload" — phase one.
// Option A's single-page layout, but each document uploads on its own the moment you tap its Upload
// button, so every upload is "pointed" at that document's pre-assigned ID (the backend can't infer
// which file is which). A document can hold more than one file (for example several scanned pages);
// the files are gathered one at a time and uploaded together against the one document ID. Client-side
// type/size validation happens on add; the server upload is per-document and independent.

export type DocStatus =
  | "not-started" // no files yet → drop zone
  | "validation-error" // an add was rejected and no valid file is staged yet
  | "selected" // at least one valid file staged, waiting for this doc's Upload → blue "Ready"
  | "uploading" // this document is uploading → determinate progress
  | "uploaded" // sent to the server, read-only → green "Uploaded"
  | "failed"; // server-side upload failure → red "Failed", retry

export interface FileInfo {
  name: string;
  sizeLabel: string;
  typeLabel: string;
  bytes: number; // raw size, so a document can show a running total across its files
  url: string; // object URL for previewing the actual file the user picked
}

/** One staged/uploaded file within a document. `id` is a stable handle for replace/remove. */
export interface StagedFile {
  id: string;
  info: FileInfo;
}

export interface DocState {
  id: string; // safe slug used in the DOM (doc-id) and as the store key
  documentId: string; // pre-assigned backend document ID (e.g. "&I100BKST") — uploads are pointed at this
  name: string;
  isOther: boolean;
  required: boolean;
  status: DocStatus;
  files: StagedFile[]; // 0..N files, uploaded together against documentId
  message?: string; // last add/validation error (shown by the add zone) or upload-failure text
  progress?: number; // 0–100 while uploading
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

// Phase-one document catalogue (Michael's supplied list). `slug` is DOM-safe; `documentId` is the
// pre-assigned backend ID the upload is pointed at. Descriptions are intentionally omitted in phase one.
function mk(
  slug: string,
  documentId: string,
  name: string,
  extra: Partial<DocState> = {},
): DocState {
  return { id: slug, documentId, name, isOther: false, required: true, status: "not-started", files: [], ...extra };
}

function seedRequest(): RequestState {
  // A representative auto-loan request drawn from the phase-one catalogue.
  const docs: DocState[] = [
    mk("vehicle-insurance", "&P110AUTO", "Proof of full coverage vehicle insurance"),
    mk("vehicle-photo-front", "&I100PHFDR", "Picture of vehicle (Front/Driver Side)"),
    mk("vehicle-photo-back", "&I100PHBPS", "Picture of vehicle (Back/Passenger Side)"),
    mk("bill-of-sale", "&V139BOSI", "Bill of Sale", { demoFailOnce: true }),
    mk("payoff-letter", "&I100PAYAU", "Payoff Letter/Statement"),
  ];
  return {
    id: "4821",
    loanLabel: "Auto loan · Request #4821",
    dueDateLabel: "Jul 10",
    docCount: docs.length,
    docs,
  };
}

// A request for a single document → the focused one-document view (no rail/progress).
function seedSingleRequest(): RequestState {
  const docs: DocState[] = [mk("inspection-report", "&I100INSRP", "Inspection Report")];
  return { id: "4821", loanLabel: "Auto loan · Request #4821", dueDateLabel: "Jul 10", docCount: 1, docs };
}

// A smaller return visit — demonstrates session progress resetting (e.g. 0 of 3) because documents
// completed on a previous visit are no longer returned by the request.
function seedReturnVisit(): RequestState {
  const docs: DocState[] = [
    mk("vehicle-insurance", "&P110AUTO", "Proof of full coverage vehicle insurance"),
    mk("bill-of-sale", "&V139BOSI", "Bill of Sale"),
    mk("payoff-letter", "&I100PAYAU", "Payoff Letter/Statement"),
  ];
  return { id: "4821", loanLabel: "Auto loan · Request #4821", dueDateLabel: "Jul 10", docCount: 3, docs };
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
  private fileSeq = 0;
  // True when the customer lands on the standalone page with no active/expired request → empty state.
  private _noRequest = false;

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
  /** False when there's no active document request → the page shows its empty state. */
  get hasRequest(): boolean {
    return !this._noRequest;
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

  private revokeUrls(doc: DocState | undefined): void {
    for (const f of doc?.files ?? []) if (f.info.url) URL.revokeObjectURL(f.info.url);
  }

  /** Client-side type/size validation (no network). Returns the staged FileInfo or an error message. */
  private validateFile(file: File): { ok: true; info: FileInfo } | { ok: false; message: string } {
    const ext = extensionOf(file.name);
    const sizeMb = file.size / (1024 * 1024);
    if (!(UPLOAD_CONFIG.allowedExtensions as readonly string[]).includes(ext)) {
      return { ok: false, message: `That file type isn't supported. Choose a ${UPLOAD_CONFIG.allowedLabel} file.` };
    }
    if (sizeMb > UPLOAD_CONFIG.maxSizeMb) {
      return {
        ok: false,
        message: `That file is ${formatSize(file.size)} — larger than the ${UPLOAD_CONFIG.maxSizeMb} MB limit. Choose a smaller ${UPLOAD_CONFIG.allowedLabel} file.`,
      };
    }
    return {
      ok: true,
      info: {
        name: file.name,
        sizeLabel: formatSize(file.size),
        typeLabel: typeLabelOf(file.name),
        bytes: file.size,
        url: URL.createObjectURL(file),
      },
    };
  }

  /** A running "N files · total size" summary for a document (or "None yet" when empty). */
  filesSummary(doc: DocState): string {
    const n = doc.files.length;
    if (n === 0) return "None yet";
    const total = doc.files.reduce((sum, f) => sum + (f.info.bytes || 0), 0);
    return `${n} file${n === 1 ? "" : "s"} · ${formatSize(total)}`;
  }

  /** Recompute a document's gathering-phase status (uploading/uploaded/failed are left untouched). */
  private syncStatus(doc: DocState): void {
    if (doc.status === "uploading" || doc.status === "uploaded" || doc.status === "failed") return;
    if (doc.files.length >= 1) doc.status = "selected";
    else if (doc.message) doc.status = "validation-error";
    else doc.status = "not-started";
  }

  /** Validate + add one or more files to a document (a document can hold several, in page order). */
  addFiles(id: string, files: File[]): void {
    const doc = this.getDoc(id);
    if (!doc || files.length === 0) return;
    let lastError: string | undefined;
    let rejected = 0;
    for (const file of files) {
      const result = this.validateFile(file);
      if (!result.ok) {
        lastError = result.message;
        rejected += 1;
      } else {
        doc.files.push({ id: `f${++this.fileSeq}`, info: result.info });
      }
    }
    doc.message =
      rejected > 1
        ? `${rejected} files couldn't be added. Use ${UPLOAD_CONFIG.allowedLabel} files up to ${UPLOAD_CONFIG.maxSizeMb} MB each.`
        : lastError;
    this.syncStatus(doc);
    this.emit();
  }
  addFile(id: string, file: File): void {
    this.addFiles(id, [file]);
  }
  /** Reorder by final index (used by keyboard up/down). Clamps the target index. */
  moveFile(id: string, fileId: string, toIndex: number): void {
    const doc = this.getDoc(id);
    if (!doc) return;
    const from = doc.files.findIndex((f) => f.id === fileId);
    if (from < 0) return;
    const clamped = Math.max(0, Math.min(toIndex, doc.files.length - 1));
    if (clamped === from) return;
    const [moved] = doc.files.splice(from, 1);
    doc.files.splice(clamped, 0, moved);
    this.emit();
  }
  /** Reorder by dropping before another file (used by drag). `beforeFileId` null → move to the end. */
  reorderFile(id: string, fileId: string, beforeFileId: string | null): void {
    const doc = this.getDoc(id);
    if (!doc || beforeFileId === fileId) return;
    const from = doc.files.findIndex((f) => f.id === fileId);
    if (from < 0) return;
    const [moved] = doc.files.splice(from, 1);
    let insertAt = doc.files.length;
    if (beforeFileId != null) {
      const idx = doc.files.findIndex((f) => f.id === beforeFileId);
      if (idx >= 0) insertAt = idx;
    }
    doc.files.splice(insertAt, 0, moved);
    this.emit();
  }
  replaceFile(id: string, fileId: string, file: File): void {
    const doc = this.getDoc(id);
    const staged = doc?.files.find((f) => f.id === fileId);
    if (!doc || !staged) return;
    const result = this.validateFile(file);
    if (!result.ok) {
      doc.message = result.message;
    } else {
      if (staged.info.url) URL.revokeObjectURL(staged.info.url);
      staged.info = result.info;
      doc.message = undefined;
    }
    this.syncStatus(doc);
    this.emit();
  }
  removeFile(id: string, fileId: string): void {
    const doc = this.getDoc(id);
    if (!doc) return;
    const staged = doc.files.find((f) => f.id === fileId);
    if (staged?.info.url) URL.revokeObjectURL(staged.info.url);
    doc.files = doc.files.filter((f) => f.id !== fileId);
    if (doc.files.length) doc.message = undefined;
    this.syncStatus(doc);
    this.emit();
  }

  /** Upload this one document (all its files, pointed at documentId). Requires ≥1 staged file. */
  upload(id: string): void {
    const doc = this.getDoc(id);
    if (!doc || doc.status !== "selected" || doc.files.length === 0) return;
    this.clearTimer(id);
    doc.status = "uploading";
    doc.progress = 0;
    doc.message = undefined;
    this.emit();

    const timer = setInterval(() => {
      const d = this.getDoc(id);
      if (!d) return this.clearTimer(id);
      const next = Math.min(100, (d.progress ?? 0) + UPLOAD_STEP);
      if (next >= 100) {
        this.clearTimer(id);
        if (d.demoFailOnce) {
          d.status = "failed";
          d.progress = undefined;
          d.demoFailOnce = false;
          d.message = "Something went wrong on our end — your files are still here. Try again.";
        } else {
          d.status = "uploaded";
          d.progress = 100;
          d.message = undefined;
        }
      } else {
        d.progress = next;
      }
      this.emit();
    }, UPLOAD_TICK_MS);
    this.timers.set(id, timer);
  }

  /** Retry a failed upload. */
  retry(id: string): void {
    const doc = this.getDoc(id);
    if (!doc || doc.status !== "failed" || doc.files.length === 0) return;
    doc.status = "selected";
    doc.message = undefined;
    this.upload(id);
  }

  private clearTimer(id: string): void {
    const t = this.timers.get(id);
    if (t) {
      clearInterval(t);
      this.timers.delete(id);
    }
  }
  private teardown(): void {
    for (const id of [...this.timers.keys()]) this.clearTimer(id);
    for (const doc of this.docs) this.revokeUrls(doc);
  }

  reset(): void {
    this.teardown();
    this._noRequest = false;
    this.state = { request: seedRequest() };
    this.emit();
  }

  /** Demo/edge case: land the page with no active request → empty state (no cards, no rail). */
  loadEmptyRequest(): void {
    this.teardown();
    this.state = { request: seedRequest() };
    this._noRequest = true;
    this.emit();
  }

  /** Demo/edge case: a request for a single document → focused one-document view (no rail/progress). */
  loadSingleRequest(): void {
    this.teardown();
    this._noRequest = false;
    this.state = { request: seedSingleRequest() };
    this.emit();
  }

  /** Demo/edge case: a smaller return visit → session progress reflects only the documents returned. */
  loadReturnVisit(): void {
    this.teardown();
    this._noRequest = false;
    this.state = { request: seedReturnVisit() };
    this.emit();
  }

  /** Demo-only (scenario explorer): jump straight to a named set of document states. */
  loadScenario(overrides: Record<string, Partial<DocState>>): void {
    this.reset();
    for (const [id, patch] of Object.entries(overrides)) {
      const doc = this.getDoc(id);
      if (doc) Object.assign(doc, patch);
    }
    this.emit();
  }
}

export const storeC = new StoreC();

// du-app — the application shell + orchestrator. Subscribes to the store and renders the whole UI:
// responsive OneApp web chrome, the overview (banner + progress + document list) and the shared
// doc-step view (all per-document states). Desktop (>=840px) is a persistent two-column
// list-detail; mobile (<=839px) is a single-column drill-in. All interaction flows through event
// delegation on this element into store actions. The banner morphs Info -> Success when complete.
import "./du-app.css";
import "@shared/chrome/du-web-nav";
import "@shared/components/oneapp-poc-alert";
import "@shared/components/oneapp-poc-button";
import "@shared/components/oneapp-poc-note-input";
import "./../components/du-progress-header";
import "./../components/du-upload-progress";
import "@shared/components/du-drop-zone";
import "@shared/components/du-file-row";
import "./../components/du-document-item";
import "./../components/du-button-stack";
import "@shared/components/du-file-preview";
import type { DuFilePreview } from "@shared/components/du-file-preview";
import "@shared/dev/du-scenario-dock";
import type { DuScenarioDock } from "@shared/dev/du-scenario-dock";
import { SCENARIOS_B } from "../state/scenarios-b";
import { store, type DocState, type DocStatus } from "../state/store";
import { isDesktop, onBreakpointChange } from "@shared/chrome/responsive";
import { icon } from "@shared/icons";

const SECURITY_NOTE = "Files are encrypted in transit and shared only with your loan team.";

function escAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export class DuApp extends HTMLElement {
  private unsub: Array<() => void> = [];
  private lastSig = "";
  private replaceInput!: HTMLInputElement;
  private replaceTargetId: string | null = null;
  private liveRegion!: HTMLElement; // polite SR announcements (status changes, no focus move)
  private preview!: DuFilePreview;
  private dock!: DuScenarioDock;
  private prevStatus = new Map<string, DocStatus>();
  private lastFocusKey = "";

  connectedCallback(): void {
    this.replaceInput = document.createElement("input");
    this.replaceInput.type = "file";
    this.replaceInput.className = "replace-input";
    this.replaceInput.accept = ".pdf,.jpg,.jpeg,.png";
    this.replaceInput.addEventListener("change", () => {
      const file = this.replaceInput.files?.[0];
      if (file && this.replaceTargetId) store.selectFile(this.replaceTargetId, file);
      this.replaceInput.value = "";
    });
    this.append(this.replaceInput);

    // Visually-hidden live region: announces upload progress/success/errors without moving focus
    // (A11Y-03). Persists across re-renders (re-appended each render).
    this.liveRegion = document.createElement("div");
    this.liveRegion.className = "sr-only";
    this.liveRegion.setAttribute("role", "status");
    this.liveRegion.setAttribute("aria-live", "polite");
    this.append(this.liveRegion);

    // Preview overlay lives at document.body (top layer) so it survives this element's re-renders.
    this.preview = document.createElement("du-file-preview") as DuFilePreview;
    document.body.appendChild(this.preview);

    // Demo scenario explorer — a separate body-level overlay, never part of the flow layout.
    this.dock = document.createElement("du-scenario-dock") as DuScenarioDock;
    this.dock.items = SCENARIOS_B.map((s) => ({ id: s.id, label: s.label, group: s.group }));
    this.dock.addEventListener("scenario-pick", (e) => this.applyScenario((e as CustomEvent<string>).detail));
    document.body.appendChild(this.dock);

    this.attachEvents();
    this.unsub.push(store.subscribe(this.onChange));
    this.unsub.push(onBreakpointChange(this.onChange)); // breakpoint flips also re-run onChange
    this.onChange(); // initial ensure-active + render

    // Deep link: /b/?scenario=<id> opens straight into that state.
    const initial = new URLSearchParams(location.search).get("scenario");
    if (initial && SCENARIOS_B.some((s) => s.id === initial)) this.applyScenario(initial);
  }
  disconnectedCallback(): void {
    this.unsub.forEach((u) => u());
    this.unsub = [];
    this.preview?.remove();
    this.dock?.remove();
  }

  private applyScenario(id: string): void {
    const sc = SCENARIOS_B.find((s) => s.id === id);
    if (!sc) return;
    sc.apply();
    this.dock.active = id;
    const url = new URL(location.href);
    url.searchParams.set("scenario", id);
    history.replaceState(null, "", url);
  }

  // ---- Re-render policy: full render on structural change; light progress update on upload ticks.
  private onChange = (): void => {
    // Desktop is always list-detail, so an active document must exist. Seed it to the first doc;
    // the resulting emit re-enters onChange with activeDocId set.
    if (isDesktop() && !store.getState().activeDocId && store.docs.length) {
      store.setActive(store.docs[0].id);
      return;
    }
    this.checkAnnouncements();
    const sig = this.signature();
    if (sig !== this.lastSig) this.render();
    else this.updateProgress();
  };

  // Announce status transitions politely (no focus move).
  private checkAnnouncements(): void {
    const wasComplete = store.docs.every((d) => this.prevStatus.get(d.id) === "uploaded");
    for (const d of store.docs) {
      const prev = this.prevStatus.get(d.id);
      if (prev && prev !== d.status) {
        if (d.status === "uploading") this.announce(`Uploading ${d.name}.`);
        else if (d.status === "uploaded") this.announce(`${d.name} uploaded.`);
        else if (d.status === "failed") this.announce(`${d.name} upload failed. ${d.message ?? ""}`);
        else if (d.status === "validation-error") this.announce(d.message ?? "That file can't be added.");
      }
      this.prevStatus.set(d.id, d.status);
    }
    if (store.allUploaded && !wasComplete) {
      this.announce(
        `All ${store.getState().request.docCount} documents uploaded. You're all set.`,
      );
    }
  }
  private announce(text: string): void {
    if (this.liveRegion) this.liveRegion.textContent = text;
  }
  private signature(): string {
    const s = store.getState();
    return JSON.stringify([
      isDesktop(),
      s.view,
      s.activeDocId,
      store.allUploaded,
      s.request.docs.map((d) => d.status),
    ]);
  }
  private updateProgress(): void {
    const s = store.getState();
    const doc = s.activeDocId ? store.getDoc(s.activeDocId) : undefined;
    const bar = this.querySelector("du-upload-progress");
    if (bar && doc && typeof doc.progress === "number") bar.setAttribute("value", String(doc.progress));
  }

  // ---- Event delegation ----
  private attachEvents(): void {
    this.addEventListener("open-doc", (e) => {
      const item = (e.target as HTMLElement).closest("du-document-item") as HTMLElement | null;
      const id = item?.dataset.docId;
      if (id) isDesktop() ? store.setActive(id) : store.openDoc(id);
    });
    this.addEventListener("file-chosen", (e) => {
      const active = store.getState().activeDocId;
      if (active) store.selectFile(active, (e as CustomEvent<File>).detail);
    });
    this.addEventListener("file-action", (e) => {
      const active = store.getState().activeDocId;
      if (!active) return;
      const action = (e as CustomEvent<string>).detail;
      if (action === "remove") store.removeFile(active);
      else if (action === "replace") this.openReplacePicker(active);
      else if (action === "preview") {
        const file = store.getDoc(active)?.file;
        if (file) this.preview.open({ url: file.url, name: file.name, type: file.typeLabel });
      }
    });
    this.addEventListener("note-change", (e) => {
      const active = store.getState().activeDocId;
      if (!active) return;
      store.setNote(active, (e as CustomEvent<string>).detail, true); // silent — don't drop focus
      const doc = store.getDoc(active);
      const hasNote = !!doc?.note?.trim();
      const btn = this.querySelector('[data-action="upload"]');
      if (btn) hasNote ? btn.removeAttribute("disabled") : btn.setAttribute("disabled", "");
      // Keep the note field's error state in sync as the user types (no re-render → focus preserved).
      const note = this.querySelector("oneapp-poc-note-input");
      if (note) {
        if (hasNote) {
          note.removeAttribute("invalid");
        } else {
          note.setAttribute("error", "Add a short name so your loan team knows what it is.");
          note.setAttribute("invalid", "");
        }
      }
    });
    this.addEventListener("nav-back", () => this.exitOrBack());
    this.addEventListener("click", (e) => {
      const t = e.target as HTMLElement;
      if (t.closest("du-file-row, du-document-item, du-drop-zone")) return; // own custom events
      const el = t.closest("[data-action]") as HTMLElement | null;
      if (el) this.handleAction(el.dataset.action!);
    });
  }

  private openReplacePicker(id: string): void {
    this.replaceTargetId = id;
    this.replaceInput.click();
  }
  private exitOrBack(): void {
    // On a mobile doc-step the back link returns to the overview; everywhere else "Back to home
    // page" leaves the flow for the selector at "/" (base-path aware for GitHub Pages).
    if (!isDesktop() && store.getState().view === "doc") store.backToOverview();
    else window.location.assign(import.meta.env.BASE_URL);
  }
  private handleAction(action: string): void {
    const active = store.getState().activeDocId;
    switch (action) {
      case "upload":
        if (active) store.upload(active);
        break;
      case "cancel":
        if (active) store.removeFile(active);
        break;
      case "cancel-upload":
        if (active) store.cancelUpload(active);
        break;
      case "retry":
        if (active) store.retry(active);
        break;
      case "choose-different":
        if (active) store.removeFile(active);
        break;
      case "next": {
        const next = active ? store.nextOutstandingId(active) : store.nextOutstandingId();
        if (next) isDesktop() ? store.setActive(next) : store.openDoc(next);
        break;
      }
      case "done":
        this.exitOrBack();
        break;
      case "exit":
        window.location.assign(import.meta.env.BASE_URL);
        break;
    }
  }

  // ---- Render ----
  private render(): void {
    this.lastSig = this.signature();
    const s = store.getState();
    const desktop = isDesktop();
    const mobileDoc = !desktop && s.view === "doc";
    const activeDoc = s.activeDocId ? store.getDoc(s.activeDocId) : undefined;
    const backLabel = mobileDoc ? "Back to documents" : "Back to home page";

    // A render is "navigation" when the active document or the mobile view changes (drill-in / next
    // document). In-place status changes on the same document keep the same key. Only navigation
    // gets the mobile step-in motion; in-place changes cross-fade calmly.
    const focusKey = desktop ? `d:${s.activeDocId}` : `${s.view}:${s.activeDocId}`;
    const navigated = focusKey !== this.lastFocusKey;

    let main = "";
    if (desktop) {
      main = `
        ${this.headlineHtml()}
        <div class="banner-wrap">${this.bannerHtml()}</div>
        <div class="grid">
          <div class="rail">
            ${this.progressHeaderHtml()}
            ${this.docListHtml(s.activeDocId)}
          </div>
          <div class="panel">${activeDoc ? this.docStepHtml(activeDoc, true, navigated) : ""}</div>
        </div>`;
    } else if (mobileDoc && activeDoc) {
      main = `
        ${this.progressHeaderHtml()}
        <div class="step-wrap">${this.docStepHtml(activeDoc, false, navigated)}</div>`;
    } else {
      // mobile overview
      main = `
        ${this.headlineHtml()}
        <div class="banner-wrap">${this.bannerHtml()}</div>
        ${this.progressHeaderHtml()}
        ${this.docListHtml(s.activeDocId)}
        ${store.allUploaded ? `<du-button-stack class="mobile-done"><div class="stack-buttons"><oneapp-poc-button hierarchy="primary" full label="Back to home page" data-action="exit"></oneapp-poc-button></div></du-button-stack>` : ""}`;
    }

    this.innerHTML = "";
    this.append(this.replaceInput, this.liveRegion);
    const shell = document.createElement("div");
    shell.style.display = "contents";
    shell.innerHTML = `
      <du-web-nav back-label="${escAttr(backLabel)}"></du-web-nav>
      <main class="app-content" aria-label="Upload Documents"><div class="page">${main}</div></main>
      <footer class="footer" aria-hidden="true"></footer>`;
    this.append(shell);

    // Predictable focus (A11Y-06): on navigation, move focus to that step's heading — but not on
    // in-place changes (file select, upload ticks) so we never steal focus mid-interaction.
    if ((desktop || mobileDoc) && navigated) {
      this.querySelector<HTMLElement>("[data-step-heading]")?.focus();
    }
    this.lastFocusKey = focusKey;
  }

  private headlineHtml(): string {
    return `<h1 class="headline headline-page">Upload Documents</h1>`;
  }
  private bannerHtml(): string {
    const req = store.getState().request;
    if (store.allUploaded) {
      return `<oneapp-poc-alert type="success" heading="You're all set" supporting="We've sent your ${req.docCount} documents to your loan team for review. There's nothing else you need to do right now."></oneapp-poc-alert>`;
    }
    // Reached from the Document Center entry banner, which already said "documents requested". This
    // one orients the guided task (deadline + the one-at-a-time mechanic) instead of re-announcing.
    // Encryption reassurance lives at the drop zone here, so it isn't repeated in the banner.
    return `<oneapp-poc-alert type="info" heading="Upload your documents by ${escAttr(req.dueDateLabel)}" supporting="Open each document below to upload it — your loan team reviews them as they come in."></oneapp-poc-alert>`;
  }
  private progressHeaderHtml(): string {
    return `<du-progress-header uploaded="${store.uploadedCount}" total="${store.getState().request.docCount}"></du-progress-header>`;
  }
  private docListHtml(activeId: string | null): string {
    const desktop = isDesktop();
    const items = store.docs
      .map((d) => {
        const railStatus =
          d.status === "selected" || d.status === "validation-error" ? "not-started" : d.status;
        const active = desktop && d.id === activeId ? " active" : "";
        return `<du-document-item data-doc-id="${d.id}" name="${escAttr(d.name)}" status="${railStatus}"${active}></du-document-item>`;
      })
      .join("");
    return `<div class="doc-list">${items}</div>`;
  }

  private securityNoteHtml(): string {
    return `<p class="security-note"><span class="lock">${icon("lock", 16)}</span><span>${SECURITY_NOTE}</span></p>`;
  }
  private docHeaderHtml(doc: DocState): string {
    return `<div class="doc-header">
        <h2 class="doc-title headline-tile" tabindex="-1" data-step-heading>${escHtml(doc.name)}</h2>
        <p class="doc-desc body-supporting">${escHtml(doc.description)}</p>
      </div>`;
  }
  private docTitleHtml(doc: DocState): string {
    return `<h2 class="doc-title headline-tile" tabindex="-1" data-step-heading>${escHtml(doc.name)}</h2>`;
  }
  private noteInputHtml(doc: DocState): string {
    // The Other document can't be uploaded without a note, so show the field in an error state while
    // it's empty. du-app toggles `invalid` live on note-change so it clears as soon as text is typed.
    const invalid = !doc.note?.trim();
    return `<oneapp-poc-note-input
        label="What is this document?"
        placeholder="e.g. Employment verification letter"
        helper="Add a short name so your loan team knows what it is."
        value="${escAttr(doc.note ?? "")}"
        ${invalid ? 'invalid error="Add a short name so your loan team knows what it is."' : ""}></oneapp-poc-note-input>`;
  }
  private fileRowHtml(doc: DocState, actions: string): string {
    const meta = doc.file ? `${doc.file.sizeLabel} · ${doc.file.typeLabel}` : "";
    return `<du-file-row name="${escAttr(doc.file?.name ?? "")}" meta="${escAttr(meta)}" actions="${actions}"></du-file-row>`;
  }
  private primaryBtn(label: string, action: string, disabled = false): string {
    return `<oneapp-poc-button hierarchy="primary" full label="${escAttr(label)}" data-action="${action}"${disabled ? " disabled" : ""}></oneapp-poc-button>`;
  }
  private tertiaryBtn(label: string, action: string): string {
    return `<oneapp-poc-button hierarchy="tertiary" label="${escAttr(label)}" data-action="${action}"></oneapp-poc-button>`;
  }
  // Buttons render primary-first in the DOM; the button-stack CSS lays them out (vertical full-width
  // on mobile, right-aligned horizontal on desktop). An optional helper note sits above the group.
  private buttonStack(buttons: string, note?: string): string {
    return `<du-button-stack>${note ? `<p class="stack-note">${escHtml(note)}</p>` : ""}<div class="stack-buttons">${buttons}</div></du-button-stack>`;
  }

  private docStepHtml(doc: DocState, desktop: boolean, enter: boolean): string {
    const step = enter ? "step step--enter" : "step";
    switch (doc.status) {
      case "not-started":
        return `<div class="${step}">
          ${this.docHeaderHtml(doc)}
          <du-drop-zone></du-drop-zone>
          ${this.securityNoteHtml()}
        </div>`;
      case "validation-error":
        return `<div class="${step}">
          ${this.docHeaderHtml(doc)}
          <oneapp-poc-alert type="error" heading="That file can't be added" supporting="${escAttr(doc.message ?? "")}"></oneapp-poc-alert>
          <du-drop-zone></du-drop-zone>
          ${this.securityNoteHtml()}
          ${this.buttonStack(this.primaryBtn("Upload document", "upload", true))}
        </div>`;
      case "selected": {
        const needsNote = doc.isOther && !doc.note?.trim();
        return `<div class="${step}">
          ${this.docHeaderHtml(doc)}
          ${doc.isOther ? this.noteInputHtml(doc) : ""}
          ${this.fileRowHtml(doc, "replace,remove")}
          ${this.buttonStack(
            this.primaryBtn("Upload document", "upload", needsNote) +
              this.tertiaryBtn("Cancel", "cancel"),
          )}
        </div>`;
      }
      case "uploading":
        return `<div class="${step}">
          ${this.docTitleHtml(doc)}
          ${this.fileRowHtml(doc, "")}
          <du-upload-progress value="${doc.progress ?? 0}" label="Uploading ${escAttr(doc.file?.name ?? "")}"></du-upload-progress>
          ${this.buttonStack(
            this.tertiaryBtn("Cancel upload", "cancel-upload"),
            "Keep this screen open while your file uploads.",
          )}
        </div>`;
      case "uploaded": {
        const next = store.nextOutstandingId(doc.id);
        const primary = next
          ? this.primaryBtn("Next document", "next")
          : this.primaryBtn("Back to home page", "exit");
        // Only offer "Back to documents" while more remain; on the last upload it's redundant
        // with the "Back to home page" primary.
        const tertiary = !desktop && next ? this.tertiaryBtn("Back to documents", "done") : "";
        return `<div class="${step}">
          ${this.docTitleHtml(doc)}
          <div class="uploaded-confirm">
            ${this.fileRowHtml(doc, "preview")}
            <p class="uploaded-caption">${icon("check-circle", 16)} Uploaded · just now</p>
          </div>
          ${this.buttonStack(primary + tertiary)}
        </div>`;
      }
      case "failed":
        return `<div class="${step}">
          ${this.docTitleHtml(doc)}
          <oneapp-poc-alert type="error" heading="Upload failed" supporting="${escAttr(doc.message ?? "")}"></oneapp-poc-alert>
          ${doc.isOther ? this.noteInputHtml(doc) : ""}
          ${this.fileRowHtml(doc, "replace,remove")}
          ${this.buttonStack(
            this.primaryBtn("Try again", "retry") +
              this.tertiaryBtn("Choose a different file", "choose-different"),
          )}
        </div>`;
    }
  }
}

customElements.define("du-app", DuApp);

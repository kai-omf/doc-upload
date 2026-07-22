// du-c-app — the Direction C (Instant Upload) shell + orchestrator. Option A's single-page layout,
// but each document uploads on its own via a per-card Upload button — so every upload is "pointed"
// at that document's ID. No batch submit. Subscribes to store-c; renders OneApp web chrome, the
// Info↔Success banner, the checklist card stack, and — per breakpoint — the desktop request rail
// (instant mode: no Submit CTA) or the mobile compact progress + a completion button. Upload progress
// ticks take a light in-place update path (no full re-render) so animations never restart. Errors are
// immediate and local per card — no batch scroll-to-top summary.
import "./du-c-app.css";
import "@shared/chrome/du-web-nav";
import "@shared/components/oneapp-poc-alert";
import "@shared/components/oneapp-poc-button";
import "@shared/components/du-checklist-card";
import "@shared/components/du-request-rail";
import "@shared/components/du-session-progress";
import "@shared/components/du-file-preview";
import type { DuFilePreview } from "@shared/components/du-file-preview";
import "@shared/dev/du-scenario-dock";
import type { DuScenarioDock } from "@shared/dev/du-scenario-dock";
import { SCENARIOS_C } from "../state/scenarios-c";
import { storeC, type DocState, type DocStatus } from "../state/store-c";
import type { RailData } from "@shared/components/du-request-rail";
import { isDesktop, onBreakpointChange } from "@shared/chrome/responsive";

function escAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export class DuCApp extends HTMLElement {
  private unsub: Array<() => void> = [];
  private lastSig = "";
  private replaceInput!: HTMLInputElement;
  private replaceTargetId: string | null = null;
  private liveRegion!: HTMLElement;
  private preview!: DuFilePreview;
  private dock!: DuScenarioDock;
  private prevStatus = new Map<string, DocStatus>();
  private renderedStatus = new Map<string, DocStatus>();
  private cardTops = new Map<string, number>();
  private wasAllUploaded = false;
  private reduceMotion = false;

  connectedCallback(): void {
    this.replaceInput = document.createElement("input");
    this.replaceInput.type = "file";
    this.replaceInput.className = "replace-input";
    this.replaceInput.accept = ".pdf,.jpg,.jpeg,.png";
    this.replaceInput.tabIndex = -1;
    this.replaceInput.setAttribute("aria-hidden", "true");
    this.replaceInput.addEventListener("change", () => {
      const file = this.replaceInput.files?.[0];
      if (file && this.replaceTargetId) storeC.replaceFile(this.replaceTargetId, file);
      this.replaceInput.value = "";
    });
    this.append(this.replaceInput);

    this.liveRegion = document.createElement("div");
    this.liveRegion.className = "sr-only";
    this.liveRegion.setAttribute("role", "status");
    this.liveRegion.setAttribute("aria-live", "polite");
    this.append(this.liveRegion);

    this.preview = document.createElement("du-file-preview") as DuFilePreview;
    document.body.appendChild(this.preview);

    this.dock = document.createElement("du-scenario-dock") as DuScenarioDock;
    this.dock.items = SCENARIOS_C.map((s) => ({ id: s.id, label: s.label, group: s.group }));
    this.dock.addEventListener("scenario-pick", (e) => this.applyScenario((e as CustomEvent<string>).detail));
    document.body.appendChild(this.dock);

    this.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.attachEvents();
    this.unsub.push(storeC.subscribe(this.onChange));
    this.unsub.push(onBreakpointChange(this.onChange));
    this.onChange();

    const initial = new URLSearchParams(location.search).get("scenario");
    if (initial && SCENARIOS_C.some((s) => s.id === initial)) this.applyScenario(initial);
  }
  disconnectedCallback(): void {
    this.unsub.forEach((u) => u());
    this.unsub = [];
    this.preview?.remove();
    this.dock?.remove();
  }

  private applyScenario(id: string): void {
    const sc = SCENARIOS_C.find((s) => s.id === id);
    if (!sc) return;
    sc.apply();
    this.dock.active = id;
    const url = new URL(location.href);
    url.searchParams.set("scenario", id);
    history.replaceState(null, "", url);
  }

  // ---- Re-render policy: full render on structural change; light progress tick while uploading.
  private onChange = (): void => {
    this.checkAnnouncements();
    const sig = this.signature();
    if (sig !== this.lastSig) {
      this.captureCardTops();
      this.render();
      this.playFlip();
    } else {
      this.updateProgress();
    }
  };

  // ---- FLIP reflow: cards change height between states; siblings should slide, not jump. ----
  private captureCardTops(): void {
    this.cardTops.clear();
    this.querySelectorAll<HTMLElement>("du-checklist-card").forEach((c) => {
      const id = c.getAttribute("doc-id");
      if (id) this.cardTops.set(id, c.getBoundingClientRect().top);
    });
  }
  private playFlip(): void {
    if (this.reduceMotion) return;
    this.querySelectorAll<HTMLElement>("du-checklist-card").forEach((c) => {
      const id = c.getAttribute("doc-id");
      if (!id) return;
      const prev = this.cardTops.get(id);
      if (prev == null) return;
      const dy = prev - c.getBoundingClientRect().top;
      if (Math.abs(dy) < 1) return;
      c.style.transition = "none";
      c.style.transform = `translateY(${dy}px)`;
      requestAnimationFrame(() => {
        c.style.transition = "transform var(--du-dur-base) var(--du-ease-standard)";
        c.style.transform = "";
        c.addEventListener("transitionend", () => { c.style.transition = ""; }, { once: true });
      });
    });
  }

  private signature(): string {
    return JSON.stringify([
      isDesktop(),
      storeC.allUploaded,
      storeC.isUploading,
      storeC.docs.map((d) => d.status),
    ]);
  }

  // In-place upload tick: advance each uploading card's determinate bar without a re-render.
  private updateProgress(): void {
    for (const d of storeC.docs) {
      if (d.status !== "uploading") continue;
      const card = this.querySelector(`du-checklist-card[doc-id="${d.id}"]`);
      const fill = card?.querySelector<HTMLElement>(".submit-progress .fill");
      const pct = card?.querySelector<HTMLElement>(".submit-progress .pct");
      if (fill) fill.style.width = `${d.progress ?? 0}%`;
      if (pct) pct.textContent = `Uploading… ${d.progress ?? 0}%`;
      card?.querySelector(".submit-progress .track")?.setAttribute("aria-valuenow", String(d.progress ?? 0));
    }
  }

  private checkAnnouncements(): void {
    for (const d of storeC.docs) {
      const prev = this.prevStatus.get(d.id);
      if (prev && prev !== d.status) {
        if (d.status === "selected") this.announce(`${d.name} ready to upload.`);
        else if (d.status === "validation-error")
          this.announce(d.message ?? "That file can't be added.");
        else if (d.status === "uploaded") this.announce(`${d.name} uploaded.`);
        else if (d.status === "failed")
          this.announce(`${d.name} didn't go through. ${d.message ?? ""}`);
      }
      this.prevStatus.set(d.id, d.status);
    }
    if (storeC.allUploaded && !this.wasAllUploaded) {
      this.announce(`All ${storeC.getState().request.docCount} documents uploaded. You're all set.`);
    }
    this.wasAllUploaded = storeC.allUploaded;
  }
  private announce(text: string): void {
    if (this.liveRegion) this.liveRegion.textContent = text;
  }

  // ---- Event delegation ----
  private cardIdOf(e: Event): string | null {
    const card = (e.target as HTMLElement).closest("du-checklist-card") as HTMLElement | null;
    return card?.getAttribute("doc-id") ?? null;
  }
  private attachEvents(): void {
    this.addEventListener("file-chosen", (e) => {
      const id = this.cardIdOf(e);
      if (id) storeC.selectFile(id, (e as CustomEvent<File>).detail);
    });
    this.addEventListener("file-action", (e) => {
      const id = this.cardIdOf(e);
      if (!id) return;
      const action = (e as CustomEvent<string>).detail;
      if (action === "upload") storeC.upload(id);
      else if (action === "remove") storeC.removeFile(id);
      else if (action === "replace") this.openReplacePicker(id);
      else if (action === "retry") storeC.retry(id);
      else if (action === "preview") {
        const file = storeC.getDoc(id)?.file;
        if (file) this.preview.open({ url: file.url, name: file.name, type: file.typeLabel });
      }
    });
    this.addEventListener("note-change", (e) => {
      const id = this.cardIdOf(e);
      if (!id) return;
      storeC.setNote(id, (e as CustomEvent<string>).detail, true); // silent — keep input focus
      this.syncGating(id);
    });
    this.addEventListener("exit", () => this.goHome()); // rail exit CTA (dispatches CustomEvent)
    this.addEventListener("nav-back", () => this.goHome());
    // The mobile completion button is a plain button (not the rail) — wire its click to go home.
    this.addEventListener("click", (e) => {
      const el = (e.target as HTMLElement).closest('[data-action="exit"]');
      if (el && !el.closest("du-request-rail")) this.goHome();
    });
  }

  private goHome(): void {
    window.location.assign(import.meta.env.BASE_URL);
  }
  private openReplacePicker(id: string): void {
    this.replaceTargetId = id;
    this.replaceInput.click();
  }

  // After a silent note change: refresh the affected card's pill + note error + rail, without
  // re-rendering the card body (which would drop the note field's focus). Gates the Upload button.
  private syncGating(id: string): void {
    const doc = storeC.getDoc(id);
    const card = this.querySelector(`du-checklist-card[doc-id="${id}"]`);
    if (doc && card) {
      card.querySelector("du-status-pill")?.setAttribute("status", doc.status);
      card.querySelector<HTMLElement>(".card")?.setAttribute("data-status", doc.status);
      const note = card.querySelector("oneapp-poc-note-input");
      if (note) {
        if (doc.status === "note-required") {
          note.setAttribute("error", "Add a short note so we can route this document.");
          note.setAttribute("invalid", "");
        } else {
          note.removeAttribute("invalid");
        }
      }
      // Enable/disable this card's Upload button as the note gate opens/closes.
      const upload = card.querySelector('oneapp-poc-button[data-action="upload"]');
      if (upload) {
        if (doc.status === "note-required") upload.setAttribute("disabled", "");
        else upload.removeAttribute("disabled");
      }
    }
    this.refreshRail();
  }

  private railData(): RailData {
    return {
      docs: storeC.docs.map((d) => ({ name: d.name, status: d.status })),
      submittedCount: storeC.uploadedCount,
      total: storeC.getState().request.docCount,
      allSubmitted: storeC.allUploaded,
      canSubmit: false,
      submitting: storeC.isUploading,
      blockReason: null,
      mode: "instant",
      verb: "uploaded",
    };
  }
  private refreshRail(): void {
    const rail = this.querySelector("du-request-rail") as (HTMLElement & { data: RailData }) | null;
    if (rail) rail.data = this.railData();
  }

  // ---- Render ----
  private cardHtml(doc: DocState): string {
    const meta = doc.file ? `${doc.file.typeLabel} · ${doc.file.sizeLabel}` : "";
    return `<du-checklist-card
      mode="instant"
      doc-id="${doc.id}"
      name="${escAttr(doc.name)}"
      description="${escAttr(doc.description)}"
      status="${doc.status}"
      ${doc.isOther ? "is-other" : ""}
      file-name="${escAttr(doc.file?.name ?? "")}"
      file-meta="${escAttr(meta)}"
      note="${escAttr(doc.note ?? "")}"
      message="${escAttr(doc.message ?? "")}"
      progress="${doc.progress ?? 0}"></du-checklist-card>`;
  }
  private bannerHtml(): string {
    const req = storeC.getState().request;
    if (storeC.allUploaded) {
      return `<oneapp-poc-alert type="success" heading="You're all set" supporting="We've uploaded your ${req.docCount} documents to your loan team for review. There's nothing else you need to do right now."></oneapp-poc-alert>`;
    }
    // Reached from the Document Center entry banner, which already delivered "documents requested".
    // Orients the task (deadline + the per-document upload model) rather than re-announcing.
    return `<oneapp-poc-alert type="info" heading="Upload your documents by ${escAttr(req.dueDateLabel)}" supporting="Add each file below, then upload it — each document is sent to your loan team on its own. Everything's encrypted."></oneapp-poc-alert>`;
  }

  private render(): void {
    this.lastSig = this.signature();
    const desktop = isDesktop();
    const total = storeC.getState().request.docCount;
    const cards = storeC.docs.map((d) => this.cardHtml(d)).join("");
    const doneCta = storeC.allUploaded
      ? `<div class="c-done"><oneapp-poc-button hierarchy="primary" full label="Back to home page" data-action="exit"></oneapp-poc-button></div>`
      : "";

    const main = desktop
      ? `
        <h1 class="a-headline headline-page">Upload Documents</h1>
        <div class="banner-wrap">${this.bannerHtml()}</div>
        <div class="a-grid">
          <div class="card-stack">${cards}</div>
          <div class="rail-col"><du-request-rail></du-request-rail></div>
        </div>`
      : `
        <h1 class="a-headline headline-page">Upload Documents</h1>
        <div class="banner-wrap">${this.bannerHtml()}</div>
        <du-session-progress compact submitted="${storeC.uploadedCount}" total="${total}" verb="uploaded"></du-session-progress>
        <div class="card-stack">${cards}</div>
        ${doneCta}`;

    const changed = new Set<string>();
    for (const d of storeC.docs) {
      if (this.renderedStatus.get(d.id) !== d.status) changed.add(d.id);
    }
    const wasAll =
      storeC.docs.length > 0 && storeC.docs.every((d) => this.renderedStatus.get(d.id) === "uploaded");
    const justCompleted = storeC.allUploaded && !wasAll;

    this.innerHTML = "";
    this.append(this.replaceInput, this.liveRegion);
    const shell = document.createElement("div");
    shell.style.display = "contents";
    shell.innerHTML = `
      <du-web-nav current="loans" back-label="Back to home page"></du-web-nav>
      <main class="a-content" aria-label="Upload Documents"><div class="a-page">${main}</div></main>
      <footer class="a-footer" aria-hidden="true"></footer>`;
    this.append(shell);

    for (const id of changed) {
      this.querySelector(`du-checklist-card[doc-id="${id}"]`)?.setAttribute("data-anim", "");
    }
    for (const d of storeC.docs) this.renderedStatus.set(d.id, d.status);

    // Bind the desktop rail exit CTA + wire the rail data.
    this.refreshRail();

    if (justCompleted) {
      const heading = this.querySelector<HTMLElement>('oneapp-poc-alert[type="success"] .heading');
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }
    }
  }
}
customElements.define("du-c-app", DuCApp);

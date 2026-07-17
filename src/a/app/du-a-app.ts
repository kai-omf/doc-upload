// du-a-app — the Direction A (Checklist Hub) shell + orchestrator. Subscribes to store-a and renders
// the whole page: OneApp web chrome, the Info↔Success banner, the checklist card stack, and — per
// breakpoint — the desktop sticky request rail or the mobile compact progress + sticky submit bar.
// All interaction flows through event delegation into batch-store actions. Progress ticks during the
// submit cascade take a light in-place update path (no full re-render) so animations never restart.
// Motion (FLIP reflow, submit cascade, sticky shadows) is layered on in du-a-app's Phase 5 additions.
import "./du-a-app.css";
import "./motion-a.css";
import "@shared/chrome/du-web-nav";
import "@shared/components/oneapp-poc-alert";
import "@shared/components/oneapp-poc-button";
import "../components/du-checklist-card";
import "../components/du-request-rail";
import "../components/du-session-progress";
import "../components/du-submit-bar";
import "@shared/components/du-file-preview";
import type { DuFilePreview } from "@shared/components/du-file-preview";
import "@shared/dev/du-scenario-dock";
import type { DuScenarioDock } from "@shared/dev/du-scenario-dock";
import { SCENARIOS_A } from "../state/scenarios-a";
import { storeA, type DocState, type DocStatus } from "../state/store-a";
import type { RailData } from "../components/du-request-rail";
import type { SubmitBarData } from "../components/du-submit-bar";
import { isDesktop, onBreakpointChange } from "@shared/chrome/responsive";

function escAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export class DuAApp extends HTMLElement {
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
  private wasAllSubmitted = false;
  private reduceMotion = false;
  private onScroll = (): void => this.updateStickyShadow();

  connectedCallback(): void {
    this.replaceInput = document.createElement("input");
    this.replaceInput.type = "file";
    this.replaceInput.className = "replace-input";
    this.replaceInput.accept = ".pdf,.jpg,.jpeg,.png";
    this.replaceInput.tabIndex = -1; // triggered programmatically; never a keyboard tab stop
    this.replaceInput.setAttribute("aria-hidden", "true");
    this.replaceInput.addEventListener("change", () => {
      const file = this.replaceInput.files?.[0];
      if (file && this.replaceTargetId) storeA.replaceFile(this.replaceTargetId, file);
      this.replaceInput.value = "";
    });
    this.append(this.replaceInput);

    // Visually-hidden polite live region — staging results and the submit cascade are announced
    // without moving focus (A11Y). Re-appended on each render so it survives innerHTML rebuilds.
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
    this.dock.items = SCENARIOS_A.map((s) => ({ id: s.id, label: s.label, group: s.group }));
    this.dock.addEventListener("scenario-pick", (e) => this.applyScenario((e as CustomEvent<string>).detail));
    document.body.appendChild(this.dock);

    this.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.attachEvents();
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.unsub.push(storeA.subscribe(this.onChange));
    this.unsub.push(onBreakpointChange(this.onChange));
    this.onChange();

    // Deep link: /a/?scenario=<id> opens straight into that state.
    const initial = new URLSearchParams(location.search).get("scenario");
    if (initial && SCENARIOS_A.some((s) => s.id === initial)) this.applyScenario(initial);
  }
  disconnectedCallback(): void {
    this.unsub.forEach((u) => u());
    this.unsub = [];
    window.removeEventListener("scroll", this.onScroll);
    this.preview?.remove();
    this.dock?.remove();
  }

  private applyScenario(id: string): void {
    const sc = SCENARIOS_A.find((s) => s.id === id);
    if (!sc) return;
    sc.apply();
    this.dock.active = id;
    const url = new URL(location.href);
    url.searchParams.set("scenario", id);
    history.replaceState(null, "", url);
  }

  // ---- Re-render policy: full render on structural change; light progress update on submit ticks.
  private onChange = (): void => {
    this.checkAnnouncements();
    const sig = this.signature();
    if (sig !== this.lastSig) {
      this.captureCardTops(); // FLIP: remember where cards are before the DOM changes
      this.render();
      this.playFlip(); // …then slide them from the old position to the new one
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
        c.addEventListener(
          "transitionend",
          () => {
            c.style.transition = "";
          },
          { once: true },
        );
      });
    });
  }

  // Soft top shadow on the mobile submit bar only while content scrolls beneath it (layering cue).
  private updateStickyShadow(): void {
    const bar = this.querySelector("du-submit-bar");
    if (!bar) return;
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
    bar.toggleAttribute("data-raised", !atBottom);
  }

  private signature(): string {
    return JSON.stringify([
      isDesktop(),
      storeA.allSubmitted,
      storeA.canSubmit,
      storeA.isSubmitting,
      storeA.docs.map((d) => d.status),
    ]);
  }

  // In-place submit-cascade tick: advance each submitting card's determinate bar without a re-render.
  private updateProgress(): void {
    for (const d of storeA.docs) {
      if (d.status !== "submitting") continue;
      const card = this.querySelector(`du-checklist-card[doc-id="${d.id}"]`);
      const fill = card?.querySelector<HTMLElement>(".submit-progress .fill");
      const pct = card?.querySelector<HTMLElement>(".submit-progress .pct");
      if (fill) fill.style.width = `${d.progress ?? 0}%`;
      if (pct) pct.textContent = `Submitting… ${d.progress ?? 0}%`;
      const track = card?.querySelector(".submit-progress .track");
      track?.setAttribute("aria-valuenow", String(d.progress ?? 0));
    }
  }

  private checkAnnouncements(): void {
    for (const d of storeA.docs) {
      const prev = this.prevStatus.get(d.id);
      if (prev && prev !== d.status) {
        if (d.status === "ready") this.announce(`${d.name} ready to submit.`);
        else if (d.status === "validation-error")
          this.announce(d.message ?? "That file can't be added.");
        else if (d.status === "submitted") this.announce(`${d.name} submitted.`);
        else if (d.status === "failed")
          this.announce(`${d.name} didn't go through. ${d.message ?? ""}`);
      }
      this.prevStatus.set(d.id, d.status);
    }
    if (storeA.allSubmitted && !this.wasAllSubmitted) {
      this.announce(
        `All ${storeA.getState().request.docCount} documents submitted. You're all set.`,
      );
    }
    this.wasAllSubmitted = storeA.allSubmitted;
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
      if (id) storeA.stageFile(id, (e as CustomEvent<File>).detail);
    });
    this.addEventListener("file-action", (e) => {
      const id = this.cardIdOf(e);
      if (!id) return;
      const action = (e as CustomEvent<string>).detail;
      if (action === "remove") storeA.removeFile(id);
      else if (action === "replace") this.openReplacePicker(id);
      else if (action === "retry") storeA.retry(id);
      else if (action === "preview") {
        const file = storeA.getDoc(id)?.file;
        if (file) this.preview.open({ url: file.url, name: file.name, type: file.typeLabel });
      }
    });
    this.addEventListener("note-change", (e) => {
      const id = this.cardIdOf(e);
      if (!id) return;
      storeA.setNote(id, (e as CustomEvent<string>).detail, true); // silent — keep input focus
      this.syncGating(id);
    });
    this.addEventListener("submit", () => storeA.submitAll());
    this.addEventListener("exit", () => this.goHome());
    this.addEventListener("nav-back", () => this.goHome());
  }

  // "Back to home page" (nav back link + rail/submit-bar CTA) → the flow selector at "/".
  // BASE_URL is base-path aware (e.g. "/" locally, "/doc-upload/" on GitHub Pages).
  private goHome(): void {
    window.location.assign(import.meta.env.BASE_URL);
  }

  private openReplacePicker(id: string): void {
    this.replaceTargetId = id;
    this.replaceInput.click();
  }

  // After a silent note change: refresh the affected card's status pill + the rail/submit-bar CTA,
  // without re-rendering the card body (which would drop the note field's focus).
  private syncGating(id: string): void {
    const doc = storeA.getDoc(id);
    const card = this.querySelector(`du-checklist-card[doc-id="${id}"]`);
    if (doc && card) {
      card.querySelector("du-status-pill")?.setAttribute("status", doc.status);
      card.querySelector<HTMLElement>(".card")?.setAttribute("data-status", doc.status);
      // Keep the note field's error state in sync with the gate as the user types (note-required ↔
      // ready), toggling the attribute rather than re-rendering the body so focus is preserved.
      const note = card.querySelector("oneapp-poc-note-input");
      if (note) {
        if (doc.status === "note-required") {
          note.setAttribute("error", "Add a short note so we can route this document.");
          note.setAttribute("invalid", "");
        } else {
          note.removeAttribute("invalid");
        }
      }
    }
    this.refreshCtas();
  }

  private railData(): RailData {
    return {
      docs: storeA.docs.map((d) => ({ name: d.name, status: d.status })),
      submittedCount: storeA.submittedCount,
      total: storeA.getState().request.docCount,
      allSubmitted: storeA.allSubmitted,
      canSubmit: storeA.canSubmit,
      submitting: storeA.isSubmitting,
      blockReason: storeA.submitBlockReason,
    };
  }
  private submitBarData(): SubmitBarData {
    return {
      allSubmitted: storeA.allSubmitted,
      canSubmit: storeA.canSubmit,
      submitting: storeA.isSubmitting,
      blockReason: storeA.submitBlockReason,
    };
  }
  private refreshCtas(): void {
    const rail = this.querySelector("du-request-rail") as (HTMLElement & { data: RailData }) | null;
    if (rail) rail.data = this.railData();
    const bar = this.querySelector("du-submit-bar") as (HTMLElement & { data: SubmitBarData }) | null;
    if (bar) bar.data = this.submitBarData();
  }

  // ---- Render ----
  private cardHtml(doc: DocState): string {
    const meta = doc.file ? `${doc.file.typeLabel} · ${doc.file.sizeLabel}` : "";
    return `<du-checklist-card
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
    const req = storeA.getState().request;
    if (storeA.allSubmitted) {
      return `<oneapp-poc-alert type="success" heading="You're all set" supporting="We've submitted your ${req.docCount} documents to your loan team for review. There's nothing else you need to do right now."></oneapp-poc-alert>`;
    }
    return `<oneapp-poc-alert type="info" heading="Documents for your personal loan" supporting="Your loan team needs these by ${escAttr(req.dueDateLabel)} to keep your request on track. Add each one, then submit them together."></oneapp-poc-alert>`;
  }

  private render(): void {
    this.lastSig = this.signature();
    const desktop = isDesktop();
    const total = storeA.getState().request.docCount;
    const cards = storeA.docs.map((d) => this.cardHtml(d)).join("");

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
        <du-session-progress compact submitted="${storeA.submittedCount}" total="${total}"></du-session-progress>
        <div class="card-stack">${cards}</div>
        <du-submit-bar></du-submit-bar>`;

    // Which cards changed status since the last render — only these animate their body swap / pop.
    const changed = new Set<string>();
    for (const d of storeA.docs) {
      if (this.renderedStatus.get(d.id) !== d.status) changed.add(d.id);
    }
    const wasAllSubmitted =
      storeA.docs.length > 0 &&
      storeA.docs.every((d) => this.renderedStatus.get(d.id) === "submitted");
    const justCompleted = storeA.allSubmitted && !wasAllSubmitted;

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
    for (const d of storeA.docs) this.renderedStatus.set(d.id, d.status);

    this.refreshCtas();
    this.updateStickyShadow();

    // On completion, move focus to the success heading once (predictable focus, announced politely
    // by the live region either way). Never yank focus mid-cascade or on in-place edits.
    if (justCompleted) {
      const heading = this.querySelector<HTMLElement>('oneapp-poc-alert[type="success"] .heading');
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }
    }
  }
}
customElements.define("du-a-app", DuAApp);

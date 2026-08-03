// du-checklist-card — the per-document card for the Direction A checklist. One contract across all
// states (not-started · validation-error · note-required · ready · submitting · submitted · failed):
// header (title + status pill, stacked on mobile) → description → a body that swaps per status.
// Composes the shared drop-zone / file-row / note-input / alert primitives. Status is always shown
// with icon + text (via du-status-pill), never colour alone.
// Events bubble up to du-a-app, which resolves the owning card via its `doc-id`:
//   • "file-chosen"  (from drop-zone)          — a File was picked/dropped
//   • "file-action"  ("replace"|"remove"|"preview"|"retry") — a row/footer action
//   • "note-change"  (from note-input)         — the Other note changed
// (Figma: Doc Upload / Checklist Card, node 119:1163.)
import "./du-checklist-card.css";
import "./du-status-pill";
import "@shared/components/du-drop-zone";
import "@shared/components/du-file-row";
import "@shared/components/oneapp-poc-note-input";
import "@shared/components/oneapp-poc-alert";
import "@shared/components/oneapp-poc-button";
import type { DocStatus } from "./status-meta";

export class DuChecklistCard extends HTMLElement {
  // `mode`: "batch" (A — stage then one Submit) or "instant" (C — a per-card Upload button that
  // uploads this document on its own). Defaults to batch.
  static observedAttributes = [
    "doc-id",
    "name",
    "description",
    "status",
    "is-other",
    "file-name",
    "file-meta",
    "note",
    "message",
    "progress",
    "accept",
    "hint",
    "mode",
    // Multi-file (front/back) documents — when `sided` is present the body renders two slots.
    "sided",
    "front-file-name",
    "front-file-meta",
    "front-message",
    "back-file-name",
    "back-file-meta",
    "back-message",
    "back-optional",
  ];
  connectedCallback(): void {
    this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }

  private get status(): DocStatus {
    return (this.getAttribute("status") ?? "not-started") as DocStatus;
  }

  private bodyMarkup(): string {
    if (this.hasAttribute("sided")) return this.sidedBody();
    const status = this.status;
    const fileName = this.getAttribute("file-name") ?? "";
    const fileMeta = this.getAttribute("file-meta") ?? "";
    const note = this.getAttribute("note") ?? "";
    const message = this.getAttribute("message") ?? "";
    const progress = Number(this.getAttribute("progress") ?? "0");
    const accept = this.getAttribute("accept") ?? ".pdf,.jpg,.jpeg,.png";
    const hint = this.getAttribute("hint") ?? "PDF, JPG, or PNG · up to 10 MB";
    const isOther = this.hasAttribute("is-other");

    const instant = this.getAttribute("mode") === "instant";

    const dropZone = `<du-drop-zone accept="${accept}" hint="${hint}"></du-drop-zone>`;
    const fileRow = (actions: string) =>
      `<du-file-row variant="filled" name="${fileName}" meta="${fileMeta}" actions="${actions}"></du-file-row>`;
    const noteField = (invalid: boolean) => `
      <oneapp-poc-note-input
        label="What is this document?"
        placeholder="e.g. Bank statement"
        value="${note.replace(/"/g, "&quot;")}"
        helper="Tell us what it is so your loan team can route it correctly."
        ${invalid ? 'invalid error="Add a short note so we can route this document."' : ""}>
      </oneapp-poc-note-input>`;
    // Batch (A) only: the "Other" doc asks the customer to name the document (its note field). Instant
    // mode (C) treats "Other" as an ordinary document — the team-member description is passed straight
    // into the title/description slots upstream, so there's no special treatment and no note field.
    const otherLead = isOther && !instant ? noteField(false) : "";
    const errorAlert = `<oneapp-poc-alert type="error" heading="We couldn't add that file" supporting="${message}"></oneapp-poc-alert>`;
    // Instant mode only: the per-card Upload button (disabled while a required note is missing).
    const uploadBtn = (disabled: boolean) =>
      instant
        ? `<oneapp-poc-button class="upload-btn" hierarchy="primary" size="default" label="Upload document" data-action="upload"${disabled ? " disabled" : ""}></oneapp-poc-button>`
        : "";
    const progressMarkup = (verb: string) =>
      `<div class="submit-progress">
         <div class="track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}" aria-label="${verb} ${fileName}">
           <div class="fill" style="width:${progress}%"></div>
         </div>
         <p class="pct">${verb}… ${progress}%</p>
       </div>`;

    switch (status) {
      case "not-started":
        return otherLead + dropZone;
      case "validation-error":
        return otherLead + errorAlert + dropZone;
      case "note-required":
        // Batch (A) only: the note field shows an error until a type is entered. du-a-app toggles the
        // field's `invalid` attribute live as the user types (note-required ↔ ready), so the body is
        // never re-rendered mid-edit (which would drop input focus). Instant mode (C) no longer gates
        // on a customer note — the "Other" description is team-provided — so this state never occurs.
        return noteField(true) + fileRow("replace,remove") + uploadBtn(true);
      case "ready": // A batch: staged, waiting for the single Submit
        return otherLead + fileRow("replace,remove");
      case "selected": // C instant: staged, waiting for this doc's Upload
        return otherLead + fileRow("replace,remove") + uploadBtn(false);
      case "submitting":
        return fileRow("") + progressMarkup("Submitting");
      case "uploading":
        return fileRow("") + progressMarkup("Uploading");
      case "submitted":
      case "uploaded":
        return fileRow("preview");
      case "failed":
        return (
          otherLead +
          `<oneapp-poc-alert type="error" heading="That didn't go through" supporting="${message}"></oneapp-poc-alert>` +
          fileRow("") +
          `<div class="failed-actions">
             <oneapp-poc-button hierarchy="primary" size="small" label="Try again" data-action="retry"></oneapp-poc-button>
             <oneapp-poc-button hierarchy="tertiary" size="small" label="Choose a different file" data-action="replace"></oneapp-poc-button>
           </div>`
        );
      default:
        return dropZone;
    }
  }

  // Multi-file (front/back) body — instant mode only. The back reveals only once the front has a
  // file (sequential single zone), and both sides upload together via the one Upload button.
  private sidedBody(): string {
    const status = this.status;
    const progress = Number(this.getAttribute("progress") ?? "0");
    const accept = this.getAttribute("accept") ?? ".pdf,.jpg,.jpeg,.png";
    const hint = this.getAttribute("hint") ?? "PDF, JPG, or PNG · up to 10 MB";
    const message = this.getAttribute("message") ?? "";
    const name = this.getAttribute("name") ?? "document";

    const front = {
      name: this.getAttribute("front-file-name") ?? "",
      meta: this.getAttribute("front-file-meta") ?? "",
      message: this.getAttribute("front-message") ?? "",
    };
    const back = {
      name: this.getAttribute("back-file-name") ?? "",
      meta: this.getAttribute("back-file-meta") ?? "",
      message: this.getAttribute("back-message") ?? "",
    };
    const backLabel = this.hasAttribute("back-optional") ? "Back (optional)" : "Back";

    const wrap = (side: string, label: string, inner: string) =>
      `<div class="side" data-side="${side}"><p class="side-label">${label}</p>${inner}</div>`;
    const zone = `<du-drop-zone accept="${accept}" hint="${hint}"></du-drop-zone>`;
    const row = (n: string, m: string, actions: string) =>
      `<du-file-row variant="filled" name="${n}" meta="${m}" actions="${actions}"></du-file-row>`;
    const sideError = (msg: string) =>
      `<oneapp-poc-alert type="error" heading="We couldn't add that file" supporting="${msg}"></oneapp-poc-alert>`;
    const progressMarkup = `
      <div class="submit-progress">
        <div class="track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}" aria-label="Uploading ${name}">
          <div class="fill" style="width:${progress}%"></div>
        </div>
        <p class="pct">Uploading… ${progress}%</p>
      </div>`;

    // Terminal / in-flight doc states: show whichever sides hold a file.
    if (status === "uploading") {
      return (
        (front.name ? wrap("front", "Front", row(front.name, front.meta, "")) : "") +
        (back.name ? wrap("back", backLabel, row(back.name, back.meta, "")) : "") +
        progressMarkup
      );
    }
    if (status === "uploaded" || status === "submitted") {
      return (
        (front.name ? wrap("front", "Front", row(front.name, front.meta, "preview")) : "") +
        (back.name ? wrap("back", backLabel, row(back.name, back.meta, "preview")) : "")
      );
    }
    if (status === "failed") {
      return (
        `<oneapp-poc-alert type="error" heading="That didn't go through" supporting="${message}"></oneapp-poc-alert>` +
        (front.name ? wrap("front", "Front", row(front.name, front.meta, "replace,remove")) : "") +
        (back.name ? wrap("back", backLabel, row(back.name, back.meta, "replace,remove")) : "") +
        `<div class="failed-actions"><oneapp-poc-button hierarchy="primary" size="small" label="Try again" data-action="retry"></oneapp-poc-button></div>`
      );
    }

    // Gathering (not-started / validation-error / selected): sequential reveal.
    const frontSlot = front.name
      ? wrap("front", "Front", row(front.name, front.meta, "replace,remove"))
      : wrap("front", "Front", (front.message ? sideError(front.message) : "") + zone);
    // The back slot appears only once the front has a valid file.
    const backSlot = front.name
      ? back.name
        ? wrap("back", backLabel, row(back.name, back.meta, "replace,remove"))
        : wrap("back", backLabel, (back.message ? sideError(back.message) : "") + zone)
      : "";
    // Upload appears once the front is in; enabled only when the doc is ready (required sides filled).
    const upload = front.name
      ? `<oneapp-poc-button class="upload-btn" hierarchy="primary" size="default" label="Upload document" data-action="upload"${status === "selected" ? "" : " disabled"}></oneapp-poc-button>`
      : "";
    return frontSlot + backSlot + upload;
  }

  private render(): void {
    const name = this.getAttribute("name") ?? "";
    const description = this.getAttribute("description") ?? "";
    const status = this.status;
    const headingId = `card-h-${this.getAttribute("doc-id") ?? name.replace(/\s+/g, "-")}`;

    this.innerHTML = `
      <section class="card" data-status="${status}" aria-labelledby="${headingId}">
        <div class="header">
          <div class="title-row">
            <h2 class="title" id="${headingId}">${name}</h2>
            <du-status-pill status="${status}"></du-status-pill>
          </div>
          ${description ? `<p class="desc">${description}</p>` : ""}
        </div>
        <div class="body">${this.bodyMarkup()}</div>
      </section>`;

    // Footer action buttons (retry / choose-different) → re-emit as "file-action".
    this.querySelectorAll<HTMLElement>("[data-action]").forEach((el) => {
      el.addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("file-action", { detail: el.dataset.action, bubbles: true }),
        );
      });
    });
  }
}
customElements.define("du-checklist-card", DuChecklistCard);

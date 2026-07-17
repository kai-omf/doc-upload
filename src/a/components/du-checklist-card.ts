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
import type { DocStatus } from "../state/store-a";

export class DuChecklistCard extends HTMLElement {
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
    const status = this.status;
    const fileName = this.getAttribute("file-name") ?? "";
    const fileMeta = this.getAttribute("file-meta") ?? "";
    const note = this.getAttribute("note") ?? "";
    const message = this.getAttribute("message") ?? "";
    const progress = Number(this.getAttribute("progress") ?? "0");
    const accept = this.getAttribute("accept") ?? ".pdf,.jpg,.jpeg,.png";
    const hint = this.getAttribute("hint") ?? "PDF, JPG, or PNG · up to 10 MB";
    const isOther = this.hasAttribute("is-other");

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
    const errorAlert = `<oneapp-poc-alert type="error" heading="We couldn't add that file" supporting="${message}"></oneapp-poc-alert>`;

    switch (status) {
      case "not-started":
        return isOther ? noteField(false) + dropZone : dropZone;
      case "validation-error":
        return (isOther ? noteField(false) : "") + errorAlert + dropZone;
      case "note-required":
        // The note field shows an error until a type is entered. du-a-app toggles the field's
        // `invalid` attribute live as the user types (note-required ↔ ready), so the body is never
        // re-rendered mid-edit (which would drop input focus).
        return noteField(true) + fileRow("replace,remove");
      case "ready":
        return (isOther ? noteField(false) : "") + fileRow("replace,remove");
      case "submitting":
        return (
          fileRow("") +
          `<div class="submit-progress">
             <div class="track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}" aria-label="Submitting ${fileName}">
               <div class="fill" style="width:${progress}%"></div>
             </div>
             <p class="pct">Submitting… ${progress}%</p>
           </div>`
        );
      case "submitted":
        return fileRow("preview");
      case "failed":
        return (
          (isOther ? noteField(false) : "") +
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
          <p class="desc">${description}</p>
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

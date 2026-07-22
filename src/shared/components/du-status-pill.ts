// du-status-pill — the per-document status chip for the Single Page. Always icon + text (never
// color alone). Colors follow the Pencil status palette: neutral (not started), blue (ready /
// submitting), amber (needs attention), green (submitted), red (failed).
// (Figma: Doc Upload / Document Status, node 110:1125.)
import "./du-status-pill.css";
import { icon } from "@shared/icons";
import { STATUS_META, type DocStatus } from "./status-meta";

export class DuStatusPill extends HTMLElement {
  static observedAttributes = ["status", "label"];
  connectedCallback(): void {
    this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }
  private render(): void {
    const status = (this.getAttribute("status") ?? "not-started") as DocStatus;
    const meta = STATUS_META[status] ?? STATUS_META["not-started"];
    const label = this.getAttribute("label") ?? meta.label;
    this.innerHTML = `
      <span class="pill" data-tone="${meta.tone}">
        <span class="glyph" aria-hidden="true">${icon(meta.glyph, 16)}</span>
        <span class="label">${label}</span>
      </span>`;
  }
}
customElements.define("du-status-pill", DuStatusPill);

// du-document-item — checklist/rail row: status icon circle + name/status + chevron; navigates
// into that document's focused step. `status` drives icon glyph + colors (icon AND text, never
// color alone). `active` = desktop selected treatment (blue surface + navy border).
// Renders as a real <button> so it is keyboard-operable. Emits "open-doc".
// (Figma: Doc Upload / B / Document Item, node 137:1179.)
import "./du-document-item.css";
import { icon, type IconName } from "@shared/icons";

const STATUS_GLYPH: Record<string, IconName> = {
  "not-started": "page-flip",
  uploading: "upload",
  uploaded: "check",
  failed: "warning-circle",
};
const STATUS_LABEL: Record<string, string> = {
  "not-started": "Not started",
  uploading: "Uploading…",
  uploaded: "Uploaded",
  failed: "Upload failed — tap to retry",
};

export class DuDocumentItem extends HTMLElement {
  static observedAttributes = ["name", "status", "status-label", "active"];
  connectedCallback(): void {
    this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }
  private render(): void {
    const name = this.getAttribute("name") ?? "";
    const status = this.getAttribute("status") ?? "not-started";
    const statusLabel = this.getAttribute("status-label") ?? STATUS_LABEL[status] ?? "";
    const active = this.hasAttribute("active");
    const glyph = STATUS_GLYPH[status] ?? "page-flip";
    this.innerHTML = `
      <button class="item" type="button"${active ? ' aria-current="true"' : ""}>
        <span class="icon-wrap" aria-hidden="true">${icon(glyph, 20)}</span>
        <span class="text">
          <span class="name">${name}</span>
          <span class="status">${statusLabel}</span>
        </span>
        <span class="chevron" aria-hidden="true">${icon("chevron-right", 24)}</span>
      </button>`;
    this.querySelector("button")!.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("open-doc", { bubbles: true }));
    });
  }
}
customElements.define("du-document-item", DuDocumentItem);

// du-drop-zone — file selection target. Decorative icon + instructions + a "Choose file"
// button that triggers a visually-hidden native <input type=file> (the keyboard-equivalent path);
// desktop drag-and-drop is a progressive enhancement. Emits "file-chosen" with the File.
// (Figma: Doc Upload / Upload Drop Zone, node 106:964.)
import "./du-drop-zone.css";
import "./du-decorative-icon";
import "./oneapp-poc-button";

export class DuDropZone extends HTMLElement {
  static observedAttributes = ["accept", "hint"];
  private input?: HTMLInputElement;

  connectedCallback(): void {
    if (!this.querySelector(".zone")) this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected && this.querySelector(".zone")) this.render();
  }

  private render(): void {
    const accept = this.getAttribute("accept") ?? ".pdf,.jpg,.jpeg,.png";
    const hint = this.getAttribute("hint") ?? "PDF, JPEG, or PNG · up to 10 MB";
    this.innerHTML = `
      <div class="zone">
        <du-decorative-icon glyph="upload" size="large"></du-decorative-icon>
        <div class="instructions">
          <p class="headline">Drag and drop your file here</p>
          <p class="hint">${hint}</p>
        </div>
        <oneapp-poc-button hierarchy="secondary" size="small" label="Choose file"></oneapp-poc-button>
        <input type="file" accept="${accept}" tabindex="-1" aria-hidden="true" />
      </div>`;

    const zone = this.querySelector<HTMLElement>(".zone")!;
    const button = this.querySelector("oneapp-poc-button")!;
    this.input = this.querySelector<HTMLInputElement>('input[type="file"]')!;

    button.addEventListener("click", () => this.input!.click());
    this.input.addEventListener("change", () => {
      const file = this.input!.files?.[0];
      if (file) this.emit(file);
      this.input!.value = "";
    });

    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("is-dragover");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("is-dragover"));
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("is-dragover");
      const file = e.dataTransfer?.files?.[0];
      if (file) this.emit(file);
    });
  }

  private emit(file: File): void {
    this.dispatchEvent(new CustomEvent("file-chosen", { detail: file, bubbles: true }));
  }
}
customElements.define("du-drop-zone", DuDropZone);

// du-drop-zone — file selection target. Responsive by breakpoint:
//   • Desktop (≥840): decorative icon + "Drag and drop your file here" + a "Choose file" button that
//     triggers a visually-hidden native <input type=file>; drag-and-drop is a progressive enhancement.
//   • Mobile (≤839): the whole area is a single tappable <button> — "Tap to choose a file" — since
//     drag-and-drop is meaningless on touch. Keyboard-operable natively; no drag language.
// Emits "file-chosen" with the File. (Figma: Upload Drop Zone 106:964; mobile 381:14698.)
import "./du-drop-zone.css";
import "./du-decorative-icon";
import "./oneapp-poc-button";
import { isDesktop, onBreakpointChange } from "../chrome/responsive";

export class DuDropZone extends HTMLElement {
  static observedAttributes = ["accept", "hint"];
  private input?: HTMLInputElement;
  private offBreakpoint?: () => void;

  connectedCallback(): void {
    this.render();
    // Re-render on breakpoint flips so the desktop ↔ mobile affordance swaps even if the host app
    // doesn't rebuild this node.
    this.offBreakpoint = onBreakpointChange(() => this.render());
  }
  disconnectedCallback(): void {
    this.offBreakpoint?.();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }

  private render(): void {
    const accept = this.getAttribute("accept") ?? ".pdf,.jpg,.jpeg,.png";
    const hint = this.getAttribute("hint") ?? "PDF, JPG, or PNG · up to 10 MB";
    const desktop = isDesktop();

    if (desktop) {
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
    } else {
      // Mobile: the entire zone is the tap target (a real button → keyboard-operable for free).
      this.innerHTML = `
        <button type="button" class="zone zone--tap">
          <du-decorative-icon glyph="upload" size="large"></du-decorative-icon>
          <div class="instructions">
            <p class="headline">Tap to choose a file</p>
            <p class="hint">${hint}</p>
          </div>
        </button>
        <input type="file" accept="${accept}" tabindex="-1" aria-hidden="true" />`;
    }

    this.input = this.querySelector<HTMLInputElement>('input[type="file"]')!;
    this.input.addEventListener("change", () => {
      const file = this.input!.files?.[0];
      if (file) this.emit(file);
      this.input!.value = "";
    });

    if (desktop) {
      const zone = this.querySelector<HTMLElement>(".zone")!;
      this.querySelector("oneapp-poc-button")!.addEventListener("click", () => this.input!.click());
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
    } else {
      this.querySelector<HTMLButtonElement>(".zone--tap")!.addEventListener("click", () =>
        this.input!.click(),
      );
    }
  }

  private emit(file: File): void {
    this.dispatchEvent(new CustomEvent("file-chosen", { detail: file, bubbles: true }));
  }
}
customElements.define("du-drop-zone", DuDropZone);

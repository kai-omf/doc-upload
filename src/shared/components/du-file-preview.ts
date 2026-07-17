// du-file-preview — a lightweight in-app preview overlay for a staged/uploaded document. Uses a
// native <dialog> (focus trap, Esc-to-close, inert background for free). Renders images inline and
// PDFs in an <iframe>; anything else falls back to a download link. One instance is appended by each
// app shell; call `open({ url, name, type })` to show it. The prototype holds real object URLs for
// files the user actually picked, so this shows the genuine document.
import "./du-file-preview.css";
import { icon } from "../icons";

export interface PreviewFile {
  url: string;
  name: string;
  type: string; // "PDF" | "JPG" | "PNG" | …
}

export class DuFilePreview extends HTMLElement {
  private dialog!: HTMLDialogElement;

  connectedCallback(): void {
    if (!this.dialog) this.render();
  }

  private render(): void {
    this.innerHTML = `
      <dialog class="preview" aria-label="Document preview">
        <div class="preview-grab" aria-hidden="true"></div>
        <div class="preview-head">
          <p class="preview-name"></p>
          <button type="button" class="preview-close" aria-label="Close preview">${icon("close", 24)}</button>
        </div>
        <div class="preview-body"></div>
      </dialog>`;
    this.dialog = this.querySelector("dialog")!;
    this.querySelector(".preview-close")!.addEventListener("click", () => this.close());
    // Click on the backdrop (outside the dialog's own box) closes it.
    this.dialog.addEventListener("click", (e) => {
      if (e.target === this.dialog) this.close();
    });
    // Free the object URL's <img>/<iframe> when the dialog closes (Esc or programmatic).
    this.dialog.addEventListener("close", () => {
      const body = this.querySelector(".preview-body");
      if (body) body.innerHTML = "";
    });
  }

  open(file: PreviewFile): void {
    if (!this.dialog) this.render();
    this.querySelector(".preview-name")!.textContent = file.name;
    const body = this.querySelector<HTMLElement>(".preview-body")!;
    const isImage = /^(jpe?g|png|gif|webp)$/i.test(file.type);
    if (!file.url) {
      body.innerHTML = `<p class="preview-fallback">Preview isn't available for this file.</p>`;
    } else if (isImage) {
      body.innerHTML = `<img class="preview-image" src="${file.url}" alt="${file.name}" />`;
    } else {
      body.innerHTML = `<iframe class="preview-frame" src="${file.url}" title="${file.name}"></iframe>`;
    }
    if (!this.dialog.open) this.dialog.showModal();
  }

  close(): void {
    if (this.dialog?.open) this.dialog.close();
  }
}
customElements.define("du-file-preview", DuFilePreview);

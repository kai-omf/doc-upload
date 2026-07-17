// du-upload-progress — determinate upload bar (track + primary fill) + right-aligned "N%".
// Driven from the store's real upload percent. (Figma: node 130:1163.)
import "./du-upload-progress.css";

export class DuUploadProgress extends HTMLElement {
  static observedAttributes = ["value", "label"];
  connectedCallback(): void {
    if (!this.querySelector(".wrap")) this.render();
    this.sync();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.sync();
  }
  private render(): void {
    this.innerHTML = `
      <div class="wrap">
        <div class="track" role="progressbar" aria-valuemin="0" aria-valuemax="100">
          <div class="fill"></div>
        </div>
        <p class="caption"></p>
      </div>`;
  }
  private sync(): void {
    const value = Math.max(0, Math.min(100, Number(this.getAttribute("value") ?? "0")));
    const track = this.querySelector<HTMLElement>(".track");
    const fill = this.querySelector<HTMLElement>(".fill");
    const caption = this.querySelector<HTMLElement>(".caption");
    if (!track || !fill || !caption) return;
    fill.style.width = `${value}%`;
    caption.textContent = `${Math.round(value)}%`;
    track.setAttribute("aria-valuenow", String(Math.round(value)));
    track.setAttribute("aria-label", this.getAttribute("label") ?? "Upload progress");
  }
}
customElements.define("du-upload-progress", DuUploadProgress);

// du-progress-header — "Your documents · N of M uploaded" over an M-segment bar.
// Filled segments = uploaded count. (Figma: Doc Upload / B / Progress Header, node 134:1152.)
import "./du-progress-header.css";

export class DuProgressHeader extends HTMLElement {
  static observedAttributes = ["uploaded", "total"];
  connectedCallback(): void {
    this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }
  private render(): void {
    const uploaded = Number(this.getAttribute("uploaded") ?? "0");
    const total = Math.max(1, Number(this.getAttribute("total") ?? "4"));
    const segments = Array.from(
      { length: total },
      (_, i) => `<span class="seg"${i < uploaded ? " data-filled" : ""}></span>`,
    ).join("");
    this.innerHTML = `
      <div class="wrap">
        <div class="labels">
          <p class="title">Your documents</p>
          <p class="count">${uploaded} of ${total} uploaded</p>
        </div>
        <div class="segments" aria-hidden="true">${segments}</div>
      </div>`;
  }
}
customElements.define("du-progress-header", DuProgressHeader);

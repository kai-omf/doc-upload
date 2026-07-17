// du-decorative-icon — the blue circular icon tile (drop zone hero + file-row leading icon).
// glyph = icon name; size = large(56) | medium(48) | small(40).
import "./du-decorative-icon.css";
import { icon, type IconName } from "../icons";

export class DuDecorativeIcon extends HTMLElement {
  static observedAttributes = ["glyph", "size"];
  connectedCallback(): void {
    this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }
  private render(): void {
    const glyph = (this.getAttribute("glyph") as IconName) ?? "upload";
    const size = this.getAttribute("size") ?? "small";
    const inner = size === "large" ? 32 : size === "medium" ? 24 : 20;
    this.innerHTML = `<span class="tile">${icon(glyph, inner)}</span>`;
  }
}
customElements.define("du-decorative-icon", DuDecorativeIcon);

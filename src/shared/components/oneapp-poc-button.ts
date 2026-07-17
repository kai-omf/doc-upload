// oneapp-poc-button — DS-aligned button (contract: components/button.md).
// Renders a native <button> in light DOM; hierarchy·size·disabled·busy·full-width.
// Consumers listen for "click" on the element; disabled/busy block activation.
import "./oneapp-poc-button.css";
import { icon, type IconName } from "../icons";

export class OneappPocButton extends HTMLElement {
  static observedAttributes = ["disabled", "busy"];
  private btn?: HTMLButtonElement;

  connectedCallback(): void {
    if (!this.btn) this.render();
    this.sync();
  }

  attributeChangedCallback(): void {
    if (this.btn) this.sync();
  }

  private render(): void {
    const label = (this.getAttribute("label") ?? this.textContent ?? "").trim();
    const iconStart = this.getAttribute("icon-start") as IconName | null;
    const iconEnd = this.getAttribute("icon-end") as IconName | null;
    this.textContent = "";
    this.btn = document.createElement("button");
    this.btn.type = "button";
    this.btn.className = "btn";
    this.btn.innerHTML = `
      <span class="content" style="display:inline-flex;align-items:center;gap:var(--omf-cx-gap-x-component-default,8px);">
        ${iconStart ? icon(iconStart, 20) : ""}
        <span class="label">${label}</span>
        ${iconEnd ? icon(iconEnd, 20) : ""}
      </span>
      <span class="loader" aria-hidden="true"><span></span><span></span><span></span></span>`;
    // Block activation while busy (native disabled already blocks disabled).
    this.btn.addEventListener(
      "click",
      (e) => {
        if (this.hasAttribute("busy")) {
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      },
      true,
    );
    this.append(this.btn);
  }

  private sync(): void {
    if (!this.btn) return;
    this.btn.disabled = this.hasAttribute("disabled");
    const busy = this.hasAttribute("busy");
    this.btn.setAttribute("aria-busy", busy ? "true" : "false");
    const label = this.getAttribute("label");
    if (label) {
      const el = this.btn.querySelector(".label");
      if (el && el.textContent !== label) el.textContent = label;
    }
  }
}

customElements.define("oneapp-poc-button", OneappPocButton);

// oneapp-poc-alert — DS-aligned alert (contract: components/alert.md).
// Type=info|success|warning|error. `heading` attribute = title; slotted text = supporting.
// Used for both the persistent status banner (info↔success) and inline validation/failure alerts.
import "./oneapp-poc-alert.css";
import { icon, type IconName } from "../icons";

const TYPE_ICON: Record<string, IconName> = {
  info: "info-circle",
  success: "check-circle",
  warning: "warning-triangle",
  error: "warning-circle",
};

export class OneappPocAlert extends HTMLElement {
  static observedAttributes = ["type", "heading", "supporting"];

  connectedCallback(): void {
    this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }

  private render(): void {
    const type = this.getAttribute("type") ?? "info";
    const heading = this.getAttribute("heading") ?? "";
    const supporting = this.getAttribute("supporting") ?? this.textContent?.trim() ?? "";
    const isError = type === "error" || type === "warning";
    this.innerHTML = `
      <div class="alert" role="${isError ? "alert" : "status"}">
        <span class="icon">${icon(TYPE_ICON[type] ?? "info-circle", 24)}</span>
        <div class="body">
          ${heading ? `<p class="heading">${heading}</p>` : ""}
          ${supporting ? `<p class="supporting">${supporting}</p>` : ""}
        </div>
      </div>`;
  }
}

customElements.define("oneapp-poc-alert", OneappPocAlert);

// du-file-row — selected/uploading/uploaded/failed file row: blue file icon + name/meta + actions.
// `actions` picks the trailing controls: "replace,remove" (selected/failed), "preview" (uploaded),
// or "" (uploading — actions hidden). Emits "file-action" with the action name.
// (Figma: Doc Upload / B / File Row, node 136:1165.)
import "./du-file-row.css";
import "./oneapp-poc-button";
import { icon } from "../icons";

export class DuFileRow extends HTMLElement {
  static observedAttributes = ["name", "meta", "actions"];
  connectedCallback(): void {
    this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }
  private render(): void {
    const name = this.getAttribute("name") ?? "";
    const meta = this.getAttribute("meta") ?? "";
    const actions = (this.getAttribute("actions") ?? "")
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean);

    const actionMarkup = actions
      .map((a) => {
        if (a === "remove") {
          return `<button type="button" class="remove" data-action="remove" aria-label="Remove ${name}">${icon("trash", 20)}</button>`;
        }
        const label = a === "preview" ? "Preview" : a === "replace" ? "Replace" : a;
        return `<oneapp-poc-button hierarchy="tertiary" size="small" label="${label}" data-action="${a}"></oneapp-poc-button>`;
      })
      .join("");

    this.innerHTML = `
      <div class="row">
        <span class="icon-wrap" aria-hidden="true">${icon("page", 20)}</span>
        <div class="text">
          <p class="name">${name}</p>
          <p class="meta">${meta}</p>
        </div>
        ${actionMarkup ? `<div class="actions">${actionMarkup}</div>` : ""}
      </div>`;

    this.querySelectorAll<HTMLElement>("[data-action]").forEach((el) => {
      el.addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("file-action", { detail: el.dataset.action, bubbles: true }),
        );
      });
    });
  }
}
customElements.define("du-file-row", DuFileRow);

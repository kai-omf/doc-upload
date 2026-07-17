// du-submit-bar — the mobile sticky bottom bar wrapping the batch Submit CTA. A soft top shadow
// fades in once content scrolls beneath it (du-a-app toggles [data-raised]). Mirrors the rail CTA:
// "Submit documents" while editing (disabled until every doc is ready, busy during the cascade) and
// "Back to home page" once all submitted. Emits "submit" / "exit".
import "./du-submit-bar.css";
import "@shared/components/oneapp-poc-button";

export interface SubmitBarData {
  allSubmitted: boolean;
  canSubmit: boolean;
  submitting: boolean;
  blockReason: string | null;
}

export class DuSubmitBar extends HTMLElement {
  private _data: SubmitBarData | null = null;

  set data(value: SubmitBarData) {
    this._data = value;
    this.render();
  }
  get data(): SubmitBarData | null {
    return this._data;
  }
  connectedCallback(): void {
    if (this._data) this.render();
  }

  private render(): void {
    const d = this._data;
    if (!d) return;
    const ctaLabel = d.allSubmitted ? "Back to home page" : "Submit documents";
    const ctaAction = d.allSubmitted ? "exit" : "submit";
    const disabled = !d.allSubmitted && !d.canSubmit;
    const caption =
      !d.allSubmitted && d.blockReason
        ? `<p class="caption" role="status">${d.blockReason}</p>`
        : "";

    this.innerHTML = `
      <div class="bar">
        ${caption}
        <oneapp-poc-button
          hierarchy="primary" size="default" full
          label="${ctaLabel}" data-action="${ctaAction}"
          ${disabled ? "disabled" : ""} ${d.submitting ? "busy" : ""}></oneapp-poc-button>
      </div>`;

    const cta = this.querySelector<HTMLElement>("[data-action]");
    cta?.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent(ctaAction, { bubbles: true }));
    });
  }
}
customElements.define("du-submit-bar", DuSubmitBar);

// du-request-rail — the desktop sticky rail (q50qn pattern): session progress, a per-document
// checklist mirror, a "you can edit until you submit" note, and the single batch Submit CTA.
// Driven by a `data` property set by du-a-app (re-renders on assignment). The CTA emits "submit"
// while editing and "exit" once everything is submitted (label morphs to "Back to home page").
// (Figma: A4 Request Rail, node 344:14656.)
import "./du-request-rail.css";
import "./du-session-progress";
import "@shared/components/oneapp-poc-button";
import { icon } from "@shared/icons";
import type { DocStatus } from "../state/store-a";
import { STATUS_META, TONE_COLOR } from "./status-meta";

export interface RailDoc {
  name: string;
  status: DocStatus;
}
export interface RailData {
  docs: RailDoc[];
  submittedCount: number;
  total: number;
  allSubmitted: boolean;
  canSubmit: boolean;
  submitting: boolean;
  blockReason: string | null;
}

export class DuRequestRail extends HTMLElement {
  private _data: RailData | null = null;

  set data(value: RailData) {
    this._data = value;
    this.render();
  }
  get data(): RailData | null {
    return this._data;
  }
  connectedCallback(): void {
    if (this._data) this.render();
  }

  private render(): void {
    const d = this._data;
    if (!d) return;

    const rows = d.docs
      .map((doc) => {
        const meta = STATUS_META[doc.status] ?? STATUS_META["not-started"];
        return `
          <li class="row">
            <span class="row-icon" style="color:${TONE_COLOR[meta.tone]}" aria-hidden="true">${icon(meta.glyph, 20)}</span>
            <span class="row-name">${doc.name}</span>
            <span class="row-status" style="color:${TONE_COLOR[meta.tone]}">${meta.label}</span>
          </li>`;
      })
      .join("");

    const ctaLabel = d.allSubmitted ? "Back to home page" : "Submit documents";
    const ctaAction = d.allSubmitted ? "exit" : "submit";
    const disabled = !d.allSubmitted && !d.canSubmit;
    const helper = d.allSubmitted
      ? ""
      : `<p class="helper">You can add, replace, or remove files until you submit.</p>`;
    const blockNote =
      !d.allSubmitted && d.blockReason
        ? `<p class="block-reason" role="status">${d.blockReason}</p>`
        : "";

    this.innerHTML = `
      <aside class="rail" aria-label="Request summary">
        <du-session-progress submitted="${d.submittedCount}" total="${d.total}"></du-session-progress>
        <ul class="checklist">${rows}</ul>
        <div class="divider" role="presentation"></div>
        ${helper}
        <oneapp-poc-button
          hierarchy="primary" size="default" full
          label="${ctaLabel}" data-action="${ctaAction}"
          ${disabled ? "disabled" : ""} ${d.submitting ? "busy" : ""}></oneapp-poc-button>
        ${blockNote}
      </aside>`;

    const cta = this.querySelector<HTMLElement>("[data-action]");
    cta?.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent(ctaAction, { bubbles: true }));
    });
  }
}
customElements.define("du-request-rail", DuRequestRail);

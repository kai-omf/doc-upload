// du-session-progress — "Session progress · N of M submitted" over a continuous fill bar.
// Used in the desktop request rail and (compact) at the top of the mobile layout. The fill is the
// submitted fraction; it animates up as the batch-submit cascade lands each document.
// (Figma: A4 Request Rail › Session Progress, node 344:14657.)
import "./du-session-progress.css";

export class DuSessionProgress extends HTMLElement {
  // `verb` is the count noun — "submitted" (A batch) or "uploaded" (C instant).
  static observedAttributes = ["submitted", "total", "compact", "verb"];
  connectedCallback(): void {
    this.render();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.render();
  }
  private render(): void {
    const submitted = Number(this.getAttribute("submitted") ?? "0");
    const total = Math.max(1, Number(this.getAttribute("total") ?? "4"));
    const verb = this.getAttribute("verb") ?? "submitted";
    const pct = Math.round((Math.min(submitted, total) / total) * 100);
    this.innerHTML = `
      <div class="wrap">
        <div class="labels">
          <p class="title">Session progress</p>
          <p class="count">${submitted} of ${total} ${verb}</p>
        </div>
        <div class="track" role="progressbar" aria-valuemin="0" aria-valuemax="${total}"
             aria-valuenow="${submitted}" aria-label="Documents ${verb}">
          <div class="fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }
}
customElements.define("du-session-progress", DuSessionProgress);

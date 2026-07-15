// oneapp-poc-note-input — plain-text field for the "Other document" note (pattern from
// components/email-input.md, without email validation). Emits "note-change" with the value;
// `invalid` + `error` drive the error state; error is programmatically linked via aria-describedby.
import "./oneapp-poc-note-input.css";

let uid = 0;

export class OneappPocNoteInput extends HTMLElement {
  static observedAttributes = ["label", "placeholder", "value", "helper", "error", "invalid"];
  private input?: HTMLInputElement;
  private fieldId = `note-${uid++}`;

  connectedCallback(): void {
    if (!this.input) this.render();
    this.sync();
  }
  attributeChangedCallback(): void {
    if (this.input) this.sync();
  }

  private render(): void {
    const msgId = `${this.fieldId}-msg`;
    this.innerHTML = `
      <div class="field-wrap">
        <label for="${this.fieldId}"></label>
        <input id="${this.fieldId}" type="text" autocomplete="off" aria-describedby="${msgId}" />
        <p class="message" id="${msgId}"></p>
      </div>`;
    this.input = this.querySelector("input")!;
    this.input.addEventListener("input", () => {
      this.setAttribute("value", this.input!.value);
      this.dispatchEvent(new CustomEvent("note-change", { detail: this.input!.value, bubbles: true }));
    });
  }

  private sync(): void {
    if (!this.input) return;
    const label = this.getAttribute("label") ?? "";
    const invalid = this.hasAttribute("invalid");
    const message = (invalid ? this.getAttribute("error") : this.getAttribute("helper")) ?? "";
    this.querySelector("label")!.textContent = label;
    this.input.placeholder = this.getAttribute("placeholder") ?? "";
    const value = this.getAttribute("value") ?? "";
    if (this.input.value !== value) this.input.value = value;
    this.input.setAttribute("aria-invalid", invalid ? "true" : "false");
    const msg = this.querySelector(".message")!;
    msg.textContent = message;
    (msg as HTMLElement).style.display = message ? "" : "none";
  }
}

customElements.define("oneapp-poc-note-input", OneappPocNoteInput);

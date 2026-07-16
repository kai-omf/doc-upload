// du-button-stack — action layout for a focused step. Buttons live in a `.stack-buttons` group
// (primary first in the DOM), with an optional helper note above. Mobile: vertical, full-width
// primary with the tertiary beneath. Desktop: a right-aligned horizontal row (tertiary left,
// primary right, sized to content). Layout-only; the doc-step composes the buttons as children.
// (Figma: Button Stack 16:838; "button-stack update" 267:13921.)
import "./du-button-stack.css";

export class DuButtonStack extends HTMLElement {}
customElements.define("du-button-stack", DuButtonStack);

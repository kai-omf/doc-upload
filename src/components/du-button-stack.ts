// du-button-stack — vertical action layout for a focused step: an optional helper note above a
// full-width primary button with an optional tertiary/link action beneath. Layout-only (no JS
// behavior); the doc-step composes the buttons as light-DOM children.
// (Figma: Button Stack, node 16:838.)
import "./du-button-stack.css";

export class DuButtonStack extends HTMLElement {}
customElements.define("du-button-stack", DuButtonStack);

// du-home — the prototype flow selector at "/". OneApp web chrome (Home active, no back row) plus
// option cards linking to A ("/a/"), B ("/b/"), and C ("/c/"). Links are built from BASE_URL so they
// resolve locally ("/") and under the Pages subpath ("/doc-upload/").
import "./du-home.css";
import "@shared/chrome/du-web-nav";
import { icon } from "@shared/icons";

const BASE = import.meta.env.BASE_URL;

export class DuHome extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = `
      <du-web-nav current="home"></du-web-nav>
      <main class="home-main" aria-label="Choose a flow">
        <div class="home-page">
          <h1 class="headline-page home-title">Document upload</h1>
          <p class="home-sub body-supporting">Three prototype directions for the same flow. Pick one to explore.</p>
          <div class="home-cards">
            <a class="flow-card" href="${BASE}a/">
              <span class="flow-eyebrow">Direction A</span>
              <span class="flow-name">Single Page</span>
              <span class="flow-desc">See every document at once, stage files with instant validation, then submit them all together.</span>
              <span class="flow-go">Open ${icon("chevron-right", 18)}</span>
            </a>
            <a class="flow-card" href="${BASE}b/">
              <span class="flow-eyebrow">Direction B</span>
              <span class="flow-name">Guided Flow</span>
              <span class="flow-desc">Upload one document at a time in a focused, step-by-step flow with a document rail.</span>
              <span class="flow-go">Open ${icon("chevron-right", 18)}</span>
            </a>
            <a class="flow-card" href="${BASE}c/">
              <span class="flow-eyebrow">Direction C</span>
              <span class="flow-name">Instant Upload</span>
              <span class="flow-desc">Every document on one page — each file uploads the moment you add it, no submit step.</span>
              <span class="flow-go">Open ${icon("chevron-right", 18)}</span>
            </a>
          </div>
        </div>
      </main>
      <footer class="home-footer" aria-hidden="true"></footer>`;
  }
}
customElements.define("du-home", DuHome);

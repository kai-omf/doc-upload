// du-web-nav — responsive OneApp *web* chrome (not the native-app chrome the Figma B-screens used
// for the design exploration). Desktop (>=840px): full web nav bar (wordmark + primary nav +
// utility + Log Out). Mobile (<=839px): condensed bar (wordmark + Menu). Both share a contextual
// "back" row. The primary/utility items are non-interactive placeholders; the back button emits
// "nav-back". (Figma: mobile web chrome 132:5307; desktop web bar 206:8721.)
import "./du-web-nav.css";
import { icon } from "../icons";
import logoFull from "../assets/onemain-financial.svg"; // full "OneMain Financial" (desktop)
import logoMark from "../assets/onemain.svg"; // truncated "OneMain" (mobile, Figma 132:5323)

export class DuWebNav extends HTMLElement {
  static observedAttributes = ["back-label"];
  connectedCallback(): void {
    if (!this.querySelector(".back-row")) this.render();
    this.syncBack();
  }
  attributeChangedCallback(): void {
    if (this.isConnected) this.syncBack();
  }

  private render(): void {
    this.innerHTML = `
      <nav class="bar desktop-bar" aria-label="Primary">
        <div class="bar-inner">
          <div class="nav-left">
            <img class="logo logo-lg" src="${logoFull}" alt="OneMain Financial" />
            <div class="primary-nav">
              <a href="#">Home</a>
              <a href="#" class="current" aria-current="page">Loans</a>
              <a href="#">Cards</a>
              <a href="#">MyMoney</a>
            </div>
          </div>
          <div class="nav-right">
            <div class="utility">
              <span class="util-item"><span class="util-chip">${icon("help", 20)}</span>Help</span>
              <span class="util-item"><span class="util-chip">${icon("user", 20)}</span>Profile</span>
            </div>
            <button type="button" class="logout">Log Out</button>
          </div>
        </div>
      </nav>
      <nav class="bar mobile-bar" aria-label="Primary">
        <div class="bar-inner">
          <img class="logo logo-sm" src="${logoMark}" alt="OneMain" />
          <button type="button" class="menu-btn">${icon("menu", 24)}<span>Menu</span></button>
        </div>
      </nav>
      <div class="back-row">
        <div class="back-row-inner">
          <button type="button" class="back-btn">${icon("arrow-left", 20)}<span class="back-label"></span></button>
        </div>
      </div>`;

    this.querySelector(".back-btn")!.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("nav-back", { bubbles: true }));
    });
  }

  private syncBack(): void {
    const label = this.querySelector(".back-label");
    if (label) label.textContent = this.getAttribute("back-label") ?? "Back";
  }
}
customElements.define("du-web-nav", DuWebNav);

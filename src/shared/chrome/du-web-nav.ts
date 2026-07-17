// du-web-nav — responsive OneApp *web* chrome. Desktop (>=840px): full web nav bar (logo + primary
// nav + utility + Log Out). Mobile (<=839px): condensed bar (logo + Menu). Both share an optional
// contextual "back" row (hidden when no `back-label` is set — e.g. the home selector).
// Attributes: `current` (home|loans|cards|mymoney) marks the active nav item; `back-label` sets the
// back link text. The Home item links to the site root (BASE_URL); other items are placeholders.
// Emits "nav-back" from the back button.
import "./du-web-nav.css";
import { icon } from "../icons";
import logoFull from "../assets/onemain-financial.svg"; // full "OneMain Financial" (desktop)
import logoMark from "../assets/onemain.svg"; // truncated "OneMain" (mobile, Figma 132:5323)

const BASE = import.meta.env.BASE_URL; // "/" locally, "/doc-upload/" on Pages
const NAV = [
  { key: "home", label: "Home", href: BASE },
  { key: "loans", label: "Loans", href: "#" },
  { key: "cards", label: "Cards", href: "#" },
  { key: "mymoney", label: "MyMoney", href: "#" },
];

export class DuWebNav extends HTMLElement {
  static observedAttributes = ["back-label", "current"];
  connectedCallback(): void {
    if (!this.querySelector(".bar")) this.render();
    this.sync();
  }
  attributeChangedCallback(): void {
    if (this.isConnected && this.querySelector(".bar")) this.sync();
  }

  private render(): void {
    const current = this.getAttribute("current") ?? "loans";
    const items = NAV.map((n) => {
      const active = n.key === current;
      return `<a href="${n.href}" data-key="${n.key}"${active ? ' class="current" aria-current="page"' : ""}>${n.label}</a>`;
    }).join("");
    this.innerHTML = `
      <nav class="bar desktop-bar" aria-label="Primary">
        <div class="bar-inner">
          <div class="nav-left">
            <a class="logo-link" href="${BASE}" aria-label="OneMain Financial home"><img class="logo logo-lg" src="${logoFull}" alt="OneMain Financial" /></a>
            <div class="primary-nav">${items}</div>
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
          <a class="logo-link" href="${BASE}" aria-label="OneMain Financial home"><img class="logo logo-sm" src="${logoMark}" alt="OneMain" /></a>
          <button type="button" class="menu-btn">${icon("menu", 24)}<span>Menu</span></button>
        </div>
      </nav>
      <div class="back-row" hidden>
        <div class="back-row-inner">
          <button type="button" class="back-btn">${icon("arrow-left", 20)}<span class="back-label"></span></button>
        </div>
      </div>`;

    this.querySelector(".back-btn")!.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("nav-back", { bubbles: true }));
    });
  }

  private sync(): void {
    // Active nav item
    const current = this.getAttribute("current") ?? "loans";
    this.querySelectorAll<HTMLAnchorElement>(".primary-nav a").forEach((a) => {
      const active = a.dataset.key === current;
      a.classList.toggle("current", active);
      if (active) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    // Back row (shown only when a label is provided)
    const backLabel = this.getAttribute("back-label");
    const backRow = this.querySelector<HTMLElement>(".back-row");
    const label = this.querySelector(".back-label");
    if (backLabel) {
      backRow?.removeAttribute("hidden");
      if (label) label.textContent = backLabel;
    } else {
      backRow?.setAttribute("hidden", "");
    }
  }
}
customElements.define("du-web-nav", DuWebNav);

// du-scenario-dock — a demo-only floating launcher for jumping between prototype scenarios/states.
// Deliberately separate from the flow layout (appended to document.body) so it never shifts or
// clutters the real A/B screens. Three visibility states:
//   • hidden  — nothing on screen (for clean demos)
//   • pill    — a small collapsed launcher
//   • open    — the labelled scenario list
// Controls: click the pill to open; the panel's × collapses to the pill; the panel's ⊘ (or Shift+.)
// fully hides the dock. Restore a hidden dock with Shift+. (desktop) or a long-press on the
// bottom-left corner (mobile). "." toggles the panel (and un-hides if hidden). Esc collapses.
// Set `items` ([{ id, label, group? }]) and `active` (current id); emits "scenario-pick" (detail:id).
import "./du-scenario-dock.css";
import { icon } from "../icons";

export interface ScenarioItem {
  id: string;
  label: string;
  group?: string;
}

const CORNER = 72; // px hot-zone from the bottom-left for the restore long-press
const HOLD_MS = 550; // long-press duration to restore on mobile

export class DuScenarioDock extends HTMLElement {
  private _items: ScenarioItem[] = [];
  private _active = "";
  private open = false;
  private dockHidden = false;
  private holdTimer?: ReturnType<typeof setTimeout>;
  private holdOrigin?: { x: number; y: number };

  set items(v: ScenarioItem[]) {
    this._items = v;
    this.render();
  }
  set active(v: string) {
    this._active = v;
    this.syncActive();
  }

  connectedCallback(): void {
    this.render();
    document.addEventListener("keydown", this.onKey);
    // Mobile restore gesture: long-press the bottom-left corner while hidden.
    document.addEventListener("touchstart", this.onTouchStart, { passive: true });
    document.addEventListener("touchmove", this.onTouchMove, { passive: true });
    document.addEventListener("touchend", this.cancelHold, { passive: true });
    document.addEventListener("touchcancel", this.cancelHold, { passive: true });
  }
  disconnectedCallback(): void {
    document.removeEventListener("keydown", this.onKey);
    document.removeEventListener("touchstart", this.onTouchStart);
    document.removeEventListener("touchmove", this.onTouchMove);
    document.removeEventListener("touchend", this.cancelHold);
    document.removeEventListener("touchcancel", this.cancelHold);
    this.cancelHold();
  }

  // Keyboard: "." toggles the panel (un-hides if hidden); Shift+"." (">") hides/shows the whole dock.
  private onKey = (e: KeyboardEvent): void => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target as HTMLElement)?.tagName ?? "");
    if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === ">") {
      e.preventDefault();
      this.dockHidden ? this.show() : this.hide();
    } else if (e.key === ".") {
      e.preventDefault();
      this.dockHidden ? this.show() : this.toggle();
    } else if (e.key === "Escape" && this.open && !this.dockHidden) {
      this.toggle(false);
    }
  };

  private onTouchStart = (e: TouchEvent): void => {
    if (!this.dockHidden) return;
    const t = e.touches[0];
    if (!t) return;
    if (t.clientX <= CORNER && t.clientY >= window.innerHeight - CORNER) {
      this.holdOrigin = { x: t.clientX, y: t.clientY };
      this.holdTimer = setTimeout(() => this.show(), HOLD_MS);
    }
  };
  private onTouchMove = (e: TouchEvent): void => {
    if (this.holdTimer == null || !this.holdOrigin) return;
    const t = e.touches[0];
    if (!t) return;
    if (Math.hypot(t.clientX - this.holdOrigin.x, t.clientY - this.holdOrigin.y) > 12) this.cancelHold();
  };
  private cancelHold = (): void => {
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = undefined;
    }
    this.holdOrigin = undefined;
  };

  private toggle(force?: boolean): void {
    if (this.dockHidden) return this.show();
    this.open = force ?? !this.open;
    this.sync();
  }
  private hide(): void {
    this.dockHidden = true;
    this.open = false;
    this.sync();
  }
  private show(): void {
    this.dockHidden = false;
    this.open = true;
    this.sync();
  }
  private sync(): void {
    const dock = this.querySelector<HTMLElement>(".dock");
    dock?.setAttribute("data-open", String(this.open));
    dock?.setAttribute("data-hidden", String(this.dockHidden));
    if (this.open && !this.dockHidden) this.querySelector<HTMLElement>(".dock-list button")?.focus();
  }

  private syncActive(): void {
    this.querySelectorAll<HTMLElement>(".dock-list button").forEach((b) => {
      b.toggleAttribute("data-active", b.dataset.id === this._active);
    });
  }

  private render(): void {
    const groups = new Map<string, ScenarioItem[]>();
    for (const it of this._items) {
      const g = it.group ?? "";
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g)!.push(it);
    }
    const list = [...groups.entries()]
      .map(([g, items]) => {
        const heading = g ? `<li class="dock-group">${g}</li>` : "";
        const rows = items
          .map(
            (it) =>
              `<li><button type="button" data-id="${it.id}"${it.id === this._active ? " data-active" : ""}>${it.label}</button></li>`,
          )
          .join("");
        return heading + rows;
      })
      .join("");

    this.innerHTML = `
      <div class="dock" data-open="${this.open}" data-hidden="${this.dockHidden}">
        <div class="dock-panel" role="dialog" aria-label="Scenario explorer">
          <div class="dock-head">
            <span class="dock-title">${icon("beaker", 18)} Scenario explorer</span>
            <div class="dock-head-actions">
              <button type="button" class="dock-hide" aria-label="Hide scenario explorer">${icon("eye-off", 20)}</button>
              <button type="button" class="dock-x" aria-label="Collapse scenario explorer">${icon("close", 20)}</button>
            </div>
          </div>
          <ul class="dock-list">${list}</ul>
          <p class="dock-hint"><kbd>.</kbd> toggle · <kbd>⇧.</kbd> hide</p>
        </div>
        <button type="button" class="dock-toggle" aria-label="Open scenario explorer">
          ${icon("beaker", 20)}<span>Scenarios</span>
        </button>
      </div>`;

    this.querySelector(".dock-toggle")!.addEventListener("click", () => this.toggle());
    this.querySelector(".dock-x")!.addEventListener("click", () => this.toggle(false));
    this.querySelector(".dock-hide")!.addEventListener("click", () => this.hide());
    this.querySelectorAll<HTMLElement>(".dock-list button").forEach((b) => {
      b.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("scenario-pick", { detail: b.dataset.id }));
        this.toggle(false);
      });
    });
  }
}
customElements.define("du-scenario-dock", DuScenarioDock);

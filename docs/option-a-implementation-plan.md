# Option A — "Single Page" Implementation Plan

Plan to build **Option A** in code, alongside Option B, sharing a common foundation. Motion is a
first-class concern throughout; the target is a smooth, choreographed experience with **no jarring
reflows or hard cuts**. The signature moment is the **staggered per-document batch-submit cascade**.

## 1. Goal & relationship to Option B

Option A is the **all-at-once batch checklist**: every document is an inline card on one page; you
stage files (validated on the spot, still editable), then a single **Submit documents** sends the
whole batch. It contrasts with B's guided drill-in. We reuse B's stack and most primitives so A is
a fair, consistent counterpart — same chrome, tokens, fonts, motion vocabulary, and copy.

**Stack (unchanged from B):** Vite + TypeScript (strict) + vanilla Web Components, light-DOM
rendering, `--omf-cx-*` tokens, self-hosted Merchant fonts, pub/sub store, Playwright verification.

## 2. Routing, entries & the home selector

Three pages via **Vite multi-page** (clean URLs, works under the Pages base path):

- **`/`** — home **flow selector** (the "Home" nav item points here)
- **`/a/`** — Option A (Single Page)
- **`/b/`** — Option B (Guided Flow, existing)

```
index.html            # home selector  → src/home/main-home.ts
a/index.html          # Option A        → src/a/main-a.ts
b/index.html          # Option B        → src/b/main-b.ts

vite.config.ts:
  build.rollupOptions.input = { home: 'index.html', a: 'a/index.html', b: 'b/index.html' }
```

**Repo structure:**
```
src/
  shared/
    styles/          # tokens import, app.css, motion.css (extended)
    icons/           # icon set (+ dashed-circle, check-circle, page-flip, warning, …)
    components/      # oneapp-poc-button, -alert, -note-input, du-decorative-icon,
                     # du-drop-zone, du-file-row (generalized)
    chrome/          # du-web-nav (desktop bar + mobile), responsive.ts
  home/              # flow-selector page (main-home.ts + du-home)
  b/                 # existing Option B (moved from root)
  a/
    state/store-a.ts
    components/      # du-checklist-card, du-status-pill, du-request-rail,
                     # du-session-progress, du-submit-bar
    app/du-a-app.ts, views-a.ts, motion-a.css
    main-a.ts
```

**The home selector (`du-home`):** full OneMain web chrome with **Home active**, a short intro, and
**two option cards** — "Single Page (Option A)" → `/a/` and "Guided Flow (Option B)" → `/b/` —
each with a one-line description. It's the prototype's hub; lightweight, not a real product page.

**Cross-page links must respect the base path.** Build every inter-page link from
`import.meta.env.BASE_URL` (e.g. `` `${import.meta.env.BASE_URL}a/` ``) so links resolve both
locally (`/`) and on GitHub Pages (`/doc-upload/`). The Pages `BASE_PATH` mechanism already in place
carries over unchanged.

**Nav changes (shared `du-web-nav`):**
- The **Home** item links to `import.meta.env.BASE_URL` (the selector).
- Active item is **configurable** per page: `Home` active on `/`; the flow pages keep **Loans**
  active (as today). Add a `current` attribute/prop to select it.

## 3. State model — the batch / one-milestone machine

`src/a/state/store-a.ts` (pub/sub, same shape as B's store).

**Per-document status:**
```
'not-started' | 'ready' | 'validation-error' | 'note-required'
             | 'submitting' | 'submitted' | 'failed'
```
- `not-started` → drop zone
- `ready` → staged, valid, **editable** (file row + Replace/Remove); blue "Ready"
- `validation-error` → staged file failed size/type; inline error + drop zone
- `note-required` → "Other" doc has a file but no note; amber "Needs attention"
- `submitting` → during batch submit (determinate progress)
- `submitted` → green check, **read-only** (Preview only)
- `failed` → server-side submit failure; retry

**DocState:** `{ id, name, description, isOther, required, status, file?, note?, progress?, message? }`

**Derived:** `readyCount`, `allReady`, `submittedCount`, `allSubmitted`, `canSubmit`.

**Actions:**
- `stageFile(id, file)` — **client-side validation on staging** (extension + size, instant, no
  network): valid → `ready` (or `note-required` if Other w/o note); invalid → `validation-error`.
- `setNote(id, note)` — gates the Other doc; `note-required` ↔ `ready`.
- `replaceFile(id, file)` / `removeFile(id)` — edit while staged (pre-submit only).
- `submitAll()` — transitions `ready` docs to `submitting`, runs the **staggered simulated
  choreography** (per-doc progress timers offset by `stagger`), each → `submitted`, with one demo
  `failed` path. Sets `allSubmitted` → banner morph.
- `retry(id)`, `reset()`.

Seed = 4 docs (incl. one Other), realistic filenames for staged/submitted demos.

## 4. Component inventory (reuse vs new)

| Component | Source | Notes |
|---|---|---|
| `oneapp-poc-button` / `-alert` / `-note-input`, `du-decorative-icon`, icons | shared (B) | reused |
| `du-web-nav` (desktop + mobile) | shared (B) | + configurable `current`, Home→BASE_URL |
| `du-drop-zone` | shared | reused |
| `du-file-row` | shared, generalized | add `readonly` mode (Preview only) + filename truncation |
| **`du-checklist-card`** | new | core A card: header (status pill + title, **stacked on mobile**), description, body per status |
| **`du-status-pill`** | new | dashed-circle "Not started" · "Ready" · "Submitting %" · green "Submitted" · red "Failed" · amber "Needs attention" |
| **`du-request-rail`** (desktop) | new | q50qn pattern: eyebrow + identity + session progress + per-doc checklist + processing note + Submit + helper |
| **`du-session-progress`** | new | "Session progress · N of M" + continuous bar (rail + mobile top) |
| **`du-submit-bar`** (mobile) | new | sticky bottom bar wrapping the Submit CTA |
| **`du-a-app`** | new | orchestrator: store sub, responsive render, event delegation, FLIP motion |
| **`du-home`** | new | flow selector page |

## 5. Responsive behavior

Breakpoint **840px** (shared `responsive.ts`).
- **Desktop (≥840):** headline + full-width Info banner + `[Card Stack ≈696 | Request Rail ≈360]`.
  Rail is **`position: sticky`** so it stays in view while the card column scrolls.
- **Mobile (≤839):** single column — headline + banner + **compact `du-session-progress`** + card
  stack; **sticky Submit bar** at the bottom with a top divider/shadow that appears once content
  scrolls beneath it. Cards use the **stacked header** (status pill above title); filename truncates.

## 6. Motion & choreography — the emphasis

Motion communicates *what changed*; never decorative or blocking. Token-driven; collapses under
`prefers-reduced-motion`.

### 6.1 Tokens (extend B's `motion.css`)
- Durations: `fast 120` · `base 220` · `slow 380` · **`stage 260`** (card body swap) ·
  **`submit-step 700`** (per-doc fill) · **`stagger 90`** (between cards).
- Easing: `ease-out` (entrances) · `spring` cubic-bezier(0.34,1.4,0.5,1) (confirmations) ·
  `standard` (movement) · `linear` (progress).

### 6.2 Smooth reflow via FLIP (the core problem)
Cards change height between states (drop zone ≈208 ↔ file row ≈92 ↔ +progress ↔ read-only),
reflowing every card below. To make it **never jump**:
- **FLIP** pass in `du-a-app` around each render: capture card boxes **before**, animate old→new
  positions (`translateY`, `base`/`ease-out`) **after** — siblings **slide**, don't snap.
- Changing card's **inner body cross-fades** over `stage`; its **height animates** (WAAPI or
  grid-rows `0fr→1fr`). The drop zone melts into the file row; the stack settles.

### 6.3 State-by-state
- **Stage** (`not-started → ready`): drop zone fades out / file row in; pill cross-fades gray-dashed
  → blue "Ready"; height shrinks (FLIP settles siblings); rail row updates.
- **Validation error:** error alert **slides in** above the drop zone; pill → amber/red. **No shake**
  (calm).
- **Note required:** note-input expands in (height + fade); pill → amber; Submit stays disabled
  (cross-fade) until note non-empty.
- **Replace / remove:** reverse of staging; height grows; siblings FLIP.

### 6.4 The staggered batch-submit cascade (payoff)
On **Submit documents**:
1. Submit button → **busy** (loader dots; blocks re-activation).
2. Cards flip `ready → submitting` in a **per-doc stagger** (`stagger` apart): each file row reveals
   a determinate bar filling 0→100% over `submit-step`, then flips to `submitted` — **green check
   pops** (`spring`, scale 0.6→1). Deliberate, not a jarring simultaneous flip.
3. Rail **session bar fills progressively** (animated width) as each completes; rail checklist rows
   flip to green "Submitted" in sync.
4. On the **last** completion:
   - **Banner morphs** Info → Success (cross-fade + gentle settle). *(A morphs on submit completion,
     not on last stage — unlike B.)*
   - Submit CTA cross-fades **"Submit documents" → "Back to home page."**
   - Cards go **read-only**: Replace/Remove fade out, **Preview** fades in.
5. Focus moves to the success heading (announced politely; not yanked mid-cascade).

A `failed` doc stops at red "Failed" with **Try again**; its rail row goes red; banner stays Info
until all succeed.

### 6.5 Micro-interactions & ambient
- Buttons: press-scale 0.975 (`fast`). Cards (desktop): hover lift; none on mobile.
- Drop zone: hover border; dragover → primary border + tint; keyboard picker always available.
- **Sticky elements** (desktop rail, mobile submit bar): soft shadow/divider fades in only when
  content scrolls beneath (IntersectionObserver) — layering cue, not loud.
- Progress bars: `linear` fill (optional shimmer from B).

### 6.6 Reduced motion
One `@media (prefers-reduced-motion: reduce)` guard collapses durations/animations to ~0 and
disables FLIP transforms; transitions become instant cross-fades. Motion enhances, never gates.

## 7. Validation
Client-side, on staging, per `UPLOAD_CONFIG` (extension allow-list + max MB — configurable
placeholders per PRD). Instant, no network. Plain-language error taxonomy (mirror B). Server-side
failure surfaces only during `submitAll()` as `failed`. "Other" requires a note to be `ready`.

## 8. Accessibility (WCAG 2.2 AA)
- Landmarks (`<main>`/`<nav>`/`<footer>`); each card a `<section>` with its title as heading.
- **Live regions** (`aria-live="polite"`): staging results, validation errors, and the submit
  cascade ("… all 4 submitted") — **without moving focus** mid-flow; focus to success heading only
  at completion.
- Status by **icon + text, never color alone** (dashed circle / check / warning).
- Errors linked via `aria-describedby`; disabled Submit explains why.
- `role="progressbar"` + `aria-valuenow` on each submitting card and the session bar.
- Keyboard-operable drop zone; visible focus; reflow to 320px; 200% text; reduced-motion;
  forced-colors sanity.

## 9. Build phases
1. **Refactor to `shared/` + set up 3 entries.** Lift B's primitives into `src/shared/`; move B to
   `src/b/` + `b/index.html`; add `a/index.html` + `home/`; wire Vite multi-page; build `du-home`
   selector + nav `current`/BASE_URL links. Verify B unruffled at `/b/`, home at `/`.
2. **Store** — `store-a.ts`: batch machine, staging validation, staggered `submitAll()` sim (one
   demo failure), seed data.
3. **Composites** — generalize `du-file-row` (readonly + truncate); build `du-status-pill`,
   `du-session-progress`, `du-checklist-card` (all body states), `du-request-rail`, `du-submit-bar`.
   Verify each vs its Figma node.
4. **Screens/flow** — `du-a-app` + `views-a`: desktop 2-col (sticky rail) + mobile (compact top +
   sticky submit); wire store → render; banner Info↔Success.
5. **Motion** — tokens; FLIP reflow; per-state transitions; **the staggered submit cascade**;
   sticky shadows; reduced-motion. Its own phase — it's the experience.
6. **Interactions** — picker + drag-drop, stage/validate, note gating, replace/remove, submit
   cascade, retry, completion + exit.
7. **A11y pass.**
8. **Verify** — Playwright at 1440px & 390px: stage each doc (valid + validation + Other note),
   run **Submit** and watch the cascade, hit failed→retry, reach success; screenshot-compare the
   four desktop + three mobile screens to Figma; reduced-motion run.

## 10. Verification tooling
Reuse B's `scripts/shot.mjs` + `drive.mjs`. Add **`drive-submit.mjs`** to capture the cascade
frame-by-frame (screenshots at intervals during `submitAll`) to confirm the choreography is smooth
and **staggered**, not a hard flip.

## Figma source of truth
Section **"Option A — Single Page"** in file `PS96rH7QrUVTZinM1uTZbk`: desktop **A1** (default),
**A2** (mixed/edge coverage), **A3** (all staged/ready), **A4** (all submitted/success); mobile
**A-M1** (default), **A-M2** (staged), **A-M3** (submitted). Build each component against its node
and screenshot-diff before moving on.

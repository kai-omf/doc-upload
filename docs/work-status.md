# Document upload — work status & handoff

Last updated: 2026-07-14. Read this first if you're a new agent picking up the work.

## What this project is

A component-driven prototyping space for the OneApp **document-upload** feature.
Product boundary is [document-upload-prd.md](./document-upload-prd.md). Base-component
contracts live in [../components/](../components/), tokens in [../tokens/](../tokens/),
Merchant fonts in [../font-files/](../font-files/). Repo conventions are in
[../CLAUDE.md](../CLAUDE.md) / [../AGENTS.md](../AGENTS.md); the canonical skill is
`.agent-skills/prototype-oneapp-ui/SKILL.md`.

Spacing rules for all layout work: [spacing-conventions.md](./spacing-conventions.md).

## Timeline so far

1. **Prototyping scaffold — DONE.** Added the `prototype-oneapp-ui` skill,
   `AGENTS.md`/`CLAUDE.md`/`GEMINI.md`, and `.gitignore`.
2. **Pencil designs — COMPLETE** in `one-app-starter.pen`. Two directions, fully
   composed from reusable components (see IDs below).
3. **Pencil → Figma transfer — IN PROGRESS, paused mid-Phase 3.** Owner asked to
   push the Pencil designs into the Figma file so they could make edits before we
   move to code. Work stopped when the workspace hit its spend cap.

## Environment / Figma access

The Figma transfer was originally executed in a **different tool (Codex / GPT‑5.6)**.
As of 2026-07-14 the **claude.ai Figma MCP is connected to Claude Code here**
(config in `.vscode/mcp.json`; tools are `mcp__claude_ai_Figma__*`, e.g. `use_figma`,
`get_metadata`, `get_design_context`, `get_screenshot`). Authenticated as
`kai.jei@omf.com` on the One Main Financial org. Access to the transfer file was
verified and the Phase 3 nodes below persisted intact.

Note: `use_figma` requires the `/figma-use` skill first (fallback
`skill://figma/figma-use/SKILL.md`); design-to-Figma also has `/figma-generate-design`
and `/figma-generate-library`.

## Locked constraints for the Figma transfer

- **Do NOT use or modify any of the file's existing local components.** Build the
  upload-specific patterns as **new, isolated local components** made from **CX Design
  Library assets** only.
- Follow the [spacing hierarchy](./spacing-conventions.md).
- Use **Merchant** typography (not Pencil's temporary DM Sans), plus CX color, radius,
  padding, and elevation variables throughout.
- Leave existing Figma pages/designs and `one-app-starter.pen` untouched.

## Figma transfer — target & progress

- **File:** "Doc Center Doc Upload" — fileKey `PS96rH7QrUVTZinM1uTZbk`.
- **Pages:** `Doc Upload` (`0:1`), `Local Components` (`4:116`), `archive` (`13:1227`).
- **New transfer section node:** `103:964`, a section named `01 — New Local
  Components` on the **Local Components** page (`4:116`) — this is where the new
  isolated components are appended (it is NOT a separate page).
- **RUN_ID / plugin tagging:** `doc-upload-pencil-transfer-20260714`. Nodes are tagged
  via shared plugin data namespace `dsb` with keys `run_id`, `phase`, `key`
  (e.g. `key = "component/upload-drop-zone"`). Check for existing tagged nodes before
  creating, to stay idempotent.
- **Scope:** all 30 responsive/state screens from Pencil frames `C7ypH` (Direction A)
  and `hl9HZ` (Direction B).

### Phases

- **P0 discovery / migration map — DONE** (approved with the no-local-reuse constraint).
- **P1 import CX variables + styles — DONE.**
- **P2 new page + Direction A/B sections — DONE.**
- **P3 build isolated components + compose screens — PARTIAL.** Local components built
  (all in section `103:964`, "01 — New Local Components"):
  - `Doc Upload / Request Summary` — `105:965`
  - `Doc Upload / Upload Drop Zone` — `106:964` (hero icon = Decorative Icon)
  - `Doc Upload / Selected File Row` — `108:967` (leading icon = Decorative Icon; hugs height)
  - `Doc Upload / Document Status` (component set) — `110:1125`
    (variants: Outstanding `110:979`, Selected `110:986`, Uploading `110:991`,
    Uploaded `110:996`, Failed `110:1001`)
  - `Doc Upload / Decorative Icon` — `117:1153` — 56×56 blue/100 radius-full tile with a
    centered 32px glyph (`size-icon-large1`, blue/800 strokes). Swappable inner glyph via
    the `Icon` INSTANCE_SWAP property (`Icon#117:0`), default = CX upload icon (`5:2`).
    Per owner: used in **drop zones + file rows**.
  - `Doc Upload / Upload Progress` — `130:1163` — determinate bar (line-muted track +
    primary fill at 60%) with a `Percent` TEXT prop (`Percent#130:0`). **Replaced** the
    wrong CX "Linear Progress" (a credit-score meter) the prior agent put in the Uploading card.
  - `Doc Upload / Checklist Card` (**component set**) — `119:1163` — the 7 variants now
    combined and stacked in state order: Outstanding `112:1075`, Selected `112:1096`,
    Uploading `112:1121`, Uploaded `112:1160`, Failed `112:1171`, Validation Error `112:1226`,
    Note Required `112:1267`. All variants hug height.
- **Section layout:** re-laid out to remove all overlap — base components in a left column
  (x=80), the Checklist Card set in the right column (x=920); section resized to 1900×2760.
  Verified no top-level children intersect.
- **Direction B guided-flow components — DONE** (all in section `103:964`, left column
  below the Direction A base components; built from CX tokens + iconoir glyphs):
  - `Doc Upload / B / Request Summary` — `133:1157` (surface-info banner, iconoir folder)
  - `Doc Upload / B / Progress Header` — `134:1152` (step label + count + 4-segment bar)
  - `Doc Upload / B / Upload Zone` — `135:1153` (reuses the Decorative Icon hero + tap-to-choose)
  - `Doc Upload / B / File Row` — `136:1165` (40px file-icon circle + name/meta + Replace/trash;
    filename truncates single-line)
  - `Doc Upload / B / Document Item` — `137:1179` (file-icon circle + name/status + chevron)
- **Screen composition — IN PROGRESS (Direction B mobile).** The owner provided starter
  device frames in section `132:1386` ("Frames"): a **Native App - 390px** (`132:1321`) and a
  **Desktop Web - 1440px** (`132:5109`) with full chrome (status bar, menu bar, bottom nav) and
  an empty **`main`** content frame to fill — so no navigation needs building, only `main`.
  Workflow: clone the device frame per screen, fill its `main` from the B components.
  - 9 mobile frames cloned (B1–B9) below the Frames section: B1 `141:1395`, B2 `141:1456`,
    B3 `141:1511`, B4 `141:1566`, B5 `141:1621`, B6 `141:1676`, B7 `141:1731`, B8 `141:1786`,
    B9 `141:1841`.
  - **All 9 mobile screens DONE & validated:** B1 Document Center `141:1395`, B2 no-active-request
    `141:1456`, B3 Overview `141:1511`, B4 file-selected `141:1566`, B5 validation-error `141:1621`,
    B6 note-required `141:1676`, B7 uploading `141:1731`, B8 upload-failed `141:1786`,
    B9 all-uploaded `141:1841`. Each fills only the frame's `main`; chrome untouched.
  - CX components wired into screens: Alert (B5/B8/B9/B3 — error + informative), Text Input
    (B6 error, B8 filled), Button (primary/tertiary/disabled). B/Document Item gained a
    **`Status Icon#144:0` INSTANCE_SWAP**; B3/B9 vary status via that swap + nested fill/text
    overrides (check `144:968`, CX upload `5:2`, warning-circle `142:1676`).
  - Note: B3 (`898`) and B9 (`916`) grew taller than the 812 device frame (long lists) — they
    represent scrollable screens; content is complete and the bottom nav stays in place.
- **Direction B desktop (B10–B18) — DONE & validated.** Owner added a **2-column** starter
  (`175:3390`: Content Grid = Main 640 + Supporting 416 + Headline/Page) alongside the
  1-column Desktop Web (`132:5109`). Only `main`/supporting filled; chrome untouched.
  - **2-column, rail-LEFT** (owner's choice — grid children reordered so Supporting=rail is
    first): B10 `176:2254`, B13 `176:2606`, B14 `176:2724`, B15 `176:2842`, B16 `176:2960`,
    B17 `176:3078`. Rail = Request Summary + 4 Document Items; right panel = state content
    (drop zone / alert / text input / file row + progress / retry). Desktop drop screens reuse
    the Direction A `Upload Drop Zone` (`106:964`, drag-and-drop + Choose file).
  - **Persistent status banner (morphs Info → Success).** The full-width slot above the grid is a
    **CX Alert** that identifies the request and reflects overall status — replacing the old
    surface-info request-summary card on every two-column screen. Locked copy:
    - **Info** (entry + all steps): "Documents for your personal loan" / "Your loan team needs
      these by Jul 10 to keep your request on track. Upload each one below." (Note: "by Jul 10"
      assumes a real due-date field; our sample data only has "Requested Jul 10" — confirm before
      shipping.)
    - **Success** (final): "You're all set" / "We've sent your 4 documents to your loan team for
      review. There's nothing else you need to do right now." (Deliberately avoids "receipt"/"saved"
      language while satisfying PRD UX-24 by not implying a durable record.)
  - **No separate "All uploaded" success screen.** In Option B, **uploading each file = submission**
    (no separate submit step). Completion is an **in-flow terminal state**, not a destination:
    - **"Uploaded" panel state** confirms each file in context — file row with a **Preview** action
      + "Uploaded" caption (mid-flow form has no banner). Owner's reference: `225:3988`.
    - **Final upload** (last doc → 4/4): the same panel **plus a completion banner** (Type=Success
      alert: "All N documents submitted — loan team will review; not saved as a receipt", per
      PRD UX-24) **and a Done CTA**. Built on B18 `202:3920` ("All submitted (last upload)").
    - Rail all-green is the visual "complete"; the banner is the closure + expectations.
  - **Entry = jump straight into the two-column flow** (desktop entry `206:8718`: request banner
    + rail with first doc active + its drop zone). Encryption reassurance ("Files are encrypted…")
    sits **under the drop zone** on entry, B10, B14, and mobile B5.

### Flow decision — landings removed (PRD-backed)

The separate "Document Center" landing and the "no active request" screens were **deleted** on
both breakpoints: desktop B11/B12 and mobile B1/B2. Rationale from
[document-upload-prd.md](./document-upload-prd.md):
- **UX-02 / FR-09 / AC-01:** the upload flow is not exposed unless there's an active request, so a
  "no active request" upload screen can't exist — B12/B2 removed.
- **AC-02 / UX-03 / UX-06:** the entry only needs to identify the request and make the next action
  clear while keeping all documents reachable — the two-column entry already does this, so the
  extra landing (B11/B1) added nothing. Users now land directly in the flow.
- Desktop = fully two-column end-to-end (entry → steps → all-uploaded); mobile entry = the
  overview (B3, drill-in navigation).

**Mobile flow now mirrors the desktop decisions:**
- **B3 (overview / hub):** Info banner (same copy) replaces the request-summary card; the
  "receipt" session note is removed; the checklist keeps **status indicators** but **no active
  indicator** (mobile is drill-in, so "active" isn't meaningful).
- **B9 (completion):** the completed-overview state — **Success banner** + 4/4 progress +
  all-green checklist + **Done** (not a separate celebration screen; "Back to Document Center"
  retired since that screen no longer exists).
- **Info banner lives on the mobile hub screens only** (B3/B9), not repeated on every focused
  step — owner-approved (drill-in pattern).
- **Per-file "uploaded" step added** (`237:3531`, "B · Step · Uploaded"): Progress Header +
  title + uploaded file confirmation (file row with **Preview**, trash hidden, "Uploaded · just
  now") + "Next document" CTA + "Back to all documents" link. Mobile analog of the desktop
  per-file uploaded panel.
- **Mobile overview never shows "Uploading."** Mobile upload is a *foreground* task (you stay on
  the step while it uploads), so a doc can't be mid-upload while you're on the overview. Realistic
  mobile-overview states = **Not started · Uploaded · Failed**. (Desktop rail CAN show uploading,
  because the rail and the uploading panel are visible together — a genuine, intentional
  mobile/desktop divergence, not an inconsistency.) B3's item was corrected accordingly.
- Note: deleting these left gaps in the frame rows (cosmetic); B10 and the entry `206:8718`
  overlap somewhat (both "active doc + drop zone") — left as-is unless we consolidate.
  - **Two-column rail pattern finalized (owner-approved):** request summary is a **full-width
    banner** above both columns (in Content Area, above the Content Grid); the rail = a
    **"Your documents · N of 4 uploaded" Progress Header** + the Document List with **state
    indicators**. Applied to all six (B10, B13-B17).
    - **Status indicators** per item: Uploaded (check + surface-positive + body-positive),
      Uploading (upload icon + body-info), Failed (warning + surface-negative + body-negative),
      Not started (surface-layer-2 + body-moderate). Chevron kept on every item.
    - **Active/selected** item = `surface/surface-info-layer-1` fill + `line/line-selected`
      1px border; the status text stays the item's *real* status (two independent channels).
      B16 shows active+uploading, B17 active+failed — cues don't collide.
    - Each screen reflects its own active doc: B10/B14/B16 = Gov ID, B13 = Proof of income,
      B15/B17 = Other document.
    - **Mobile stays status-only, no active indicator** (owner + agent agreed): mobile is
      drill-in navigation, so there's no simultaneous rail+panel where "active" is meaningful.
    - Gotcha for future edits: overriding a Document Item **instance root fill** does NOT bake
      the token's resolved color — pass the correct literal fallback (white for surface-base)
      or leave non-active roots untouched. (Status *wraps* bind fine.)
  - Minor polish still open: on 1-column screens the starter's "Upload Documents" H1 plus a
    content title reads as a double heading (B11/B12); 2-col Headline/Page still shows default
    "Upload Documents". Quick title fixes if wanted.
- **Remaining P3 (later):** Direction A screens from Pencil `C7ypH` (mobile + desktop).

### Screen-composition token/style keys (CX Design Library)

Text styles: Headline/Page `069b1f7e…`, Headline/Section `2a4fdae6…`, Headline/Tile
`bf0a74e2…`, Body/Supporting/Regular `5600a3dd…`, Body/Default/Regular `74f4263a…`,
Body/Default/Medium `ef032958…`, Body/Caption/Regular `e5d56b9e…`, Label/Small 1/Medium
`e734d832…`, Label/Default/Medium `25866c19…`. Gaps: gap-content `6d180e88…`,
gap-section `8ea1f43f…`. Extra iconoir: lock `ee019381…`, check `9efd3fd2…`.
CX Alert set `b5a2890843…`, CX Text Input set `d61e13ad…` (needed for B5/B6/B8).
- **P4 validation — NOT STARTED** (structure, component linkage, tokens, typography,
  accessibility, visual fidelity).

### Standards for this work

Follow the [`figma-pro-design` skill](../.agent-skills/figma-pro-design/SKILL.md) and
[figma-conventions.md](./figma-conventions.md): no accidental overlap (check sibling boxes
before placing), industry-standard auto-layout, frames hug height (no clipping), semantic
tokens, named layers, and structure built for coding-agent handoff.

### Known Figma issues

- The CX `Status-Tag` component set (`c636fb0e47c184362a85971bdd3abfc12310f724`) reports an
  existing component-property error through Figma's API and can't be imported/configured
  directly. **Approved fallback (applied):** the local `Doc Upload / Document Status` set
  (`110:1125`).
- The CX `Linear Progress` set (`2fd384381dcdd5f680c8b247dcdbcaab63388462`) is a **credit-score
  gauge (400–850, score + "pts since last update")**, NOT a generic progress bar. Do not use it
  for upload progress — use `Doc Upload / Upload Progress` (`130:1163`) instead.
- **Hand-copied token keys from the old context are unreliable** — at least one (labeled
  "gap-row-small") is actually `radius-large-1` in the live library. Resolve every token via
  `search_design_system` or by reading it off an existing bound node, not the old notes.
- **Icons:** the owner added the **Iconoir v7.11.0 (Community)** library
  (`lk-48a3a5caba4eed760b9089c3bef82a9ac2f04d5974da3bdac34ea20f1e8dfcc5f407c7971ef980beaff2b1959e574cd222aef503232d217e1dc7d6694f6fa00f`).
  B components use iconoir `folder` `cf2e4d99…`, `nav-arrow-right` `d3fefc21…`,
  `empty-page` `ee96524f…`, `trash` `a82db60a…`, `warning-circle` `0ddefbd7…`
  (all component sets — pick the `Weight=Regular` variant, recolor vectors to the token color).

### Open decision — decorative icon sizing

`Doc Upload / Decorative Icon` (`117:1153`) is a fixed **56px** tile — right for Direction A
(desktop, 760px) and used as the hero in the B Upload Zone, but oversized for compact mobile
rows. The B File Row / Request Summary / Document Item therefore use native **40px** circular
decorative wraps (same treatment, mobile scale). If we want one reused component everywhere,
convert Decorative Icon into a Size-variant set (Small 40 / Medium 48 / Large 56). Deferred
pending owner input.

## Reference IDs

### Pencil reusable components (in `one-app-starter.pen`)

- Direction A: Drop Zone `kwrZm`, Upload Progress Bar `L4EBjh`, Rail Doc Item `nIrAd`,
  Selected File Row `p3DcE`, Document Checklist Card `Wwg0d`, Request Summary Rail `q50qn`.
- Direction B: B / Request Summary `zc9dZ`, B / Progress Header `TQeTt`,
  B / Upload Zone `LMMoY`, B / File Row `pnQBG`, B / Document Item `NmACi`.

### CX Design Library component-set keys used in the transfer

- Button: `93c929f1ab62af6beb62211797d1506066995587`
- Alert: `b5a2890843d77dd7e88c587d6fb55dbeaa7c45a6`
- Text Input: `d61e13ad0473c59d3ffc7f508fe2930b5594d8a2`
- Linear Progress: `2fd384381dcdd5f680c8b247dcdbcaab63388462`
- Status-Tag (broken — see above): `c636fb0e47c184362a85971bdd3abfc12310f724`
- Icons — upload `87442b1bbb38a45fa26942cf781c956cb011a58c`,
  file `b3827f91ecd110d9141c999f84897cc440a6bdc9`,
  check `661200252cd53a26fdf54016f9b53d53319e49f1`,
  warning `2a679758b0678360456c98d3b5e5fa03d255bfe0`.

## Full prior transcript

The complete previous session (Codex) is in [../previous-context.md](../previous-context.md)
(~9.7k lines) — search it for exact `figma.use_figma` calls and variable/style keys if
you need to reproduce an operation precisely.

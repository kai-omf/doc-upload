---
name: figma-pro-design
description: Design in Figma at a principal-designer level of craft when working through the Figma MCP (use_figma and friends). Use for any write to a Figma file in this project — building or editing components, variant sets, screens, tokens, or layouts. Enforces file hygiene, organization, industry-standard auto-layout, hug-to-content sizing, no-overlap placement, precise layer naming, and structure that a coding agent can implement without guesswork. Complements the Figma MCP's own figma-use / figma-generate-* skills (which cover API mechanics); this skill covers the craft and standards.
---

# Figma pro design

Design in Figma the way a principal product designer does: every frame is intentional,
every layer is named, nothing overlaps by accident, and the file is legible enough that a
coding agent can implement it straight from structure and tokens. **Load the Figma MCP's
`figma-use` skill for API mechanics — this skill governs craft and standards on top of it.**

Non-negotiables, in priority order: (1) don't break what exists, (2) hug-to-content so
nothing clips, (3) no accidental overlap, (4) semantic tokens over raw values, (5) named
layers and clean structure for handoff.

## Ground before you touch the file

1. Read the migration/status docs (`docs/work-status.md`, `docs/spacing-conventions.md`) and
   the PRD so you know the product boundary and the locked conventions.
2. **Inspect first, always.** Run a read-only `use_figma` (or `get_metadata` /
   `get_screenshot`) to learn the file's pages, sections, existing components, variable
   collections, and naming conventions. Match what's there; do not impose new conventions.
3. Confirm you're writing to the intended page/section. Never modify existing pages,
   components, or the source `.pen` designs unless explicitly asked.

## File hygiene & organization

- **One home for new work.** Put new components in the agreed section/page (here:
  `01 — New Local Components` on the Local Components page). Don't scatter nodes across the canvas.
- **Never leave nodes at (0,0) or stacked on each other.** Page-level nodes default to the
  origin — always position them into a clear grid slot (see No-overlap placement below).
- **Group by intent with Sections/frames**, laid out on a predictable grid (e.g. a column of
  component sets, a row of state variants). Leave consistent gutters between groups.
- **No orphans, no debris.** Remove scratch nodes, detached experiments, duplicate hidden
  layers, and leftover `placeholder` shimmers before finishing. Set `placeholder = true` while
  a section is in progress and `false` the moment it's done.
- **Components live as components.** If a pattern appears more than once, it is a component
  (or a variant set), instantiated — never copy-pasted. Give components a clear description.

## Layer naming (a must)

- Name **every** frame, group, and meaningful layer. No `Frame 47`, `Group 12`, `Rectangle 3`.
- Name by **role, not by looks**: `Title`, `Supporting text`, `Actions`, `File identity`,
  `Status`, `Icon` — not `Bold text` or `Blue pill`.
- Component names use the project's path convention: `Doc Upload / Selected File Row`.
  Variant sets use `Property=Value` variant names: `State=Uploading`.
- Keep names stable across variants so a coding agent can map them to props 1:1
  (`Title` is `Title` in every state).
- Match the casing and separators already used in the file.

## Auto-layout — industry-standard rules

- **Any container whose children have a structural relationship uses auto-layout**
  (`figma.createAutoLayout()`), never absolute x/y. Absolute coords position a container on the
  canvas; auto-layout governs how its children sit inside it.
- Choose direction by reading axis: stacked → vertical, side-by-side → horizontal.
- **Sizing intent, explicitly set:**
  - Container height: **hug contents** (`primaryAxisSizingMode = 'AUTO'` on a vertical frame)
    so it grows with content and never clips. Fixed heights are the exception, not the default.
  - Container width: usually fixed to the layout column, or `FILL` when it's itself a child.
  - Children that should stretch across the container → `layoutSizingHorizontal = 'FILL'`
    (set **after** appending to the auto-layout parent).
  - Text that wraps → `textAutoResize = 'HEIGHT'` + an explicit width (never `FILL` alone,
    which collapses it). Verify `width > 0`.
- **Spacing comes from tokens, via the gap hierarchy** (`gap-content` / `gap-section` /
  `gap-tile`·`gap-group` / `gap-row` — see `docs/spacing-conventions.md`). Bind `itemSpacing`
  and padding to variables; don't hardcode pixel gaps when a CX instance owns its own spacing.
- Set alignment deliberately (`primaryAxisAlignItems` / `counterAxisAlignItems`) — e.g.
  space-between for a title + trailing status, center for an icon tile.

## Hug to content — no clipping, ever

- Default vertical frames to **hug height**. A fixed height that's shorter than content clips —
  the most common broken-Figma smell. If a design needs a minimum height, use min-height
  behavior, not a hard fixed height that truncates.
- After any content or copy change, re-check that ancestors still hug. Text reflow is the usual
  culprit behind clipped cards.
- Validate with a screenshot: look specifically for cut-off text (line-height clipping) and
  content bleeding past a frame edge.

## No-overlap placement (a must)

Before placing or moving any node, guarantee it won't overlap a sibling:

1. Read the current siblings' bounding boxes (`x`, `y`, `width`, `height`) via `get_metadata`
   or a read-only script.
2. Compute a free slot — e.g. place the next item to the right of the rightmost node, or below
   the bottom-most, plus a consistent gutter. For variant grids, lay out on a fixed pitch
   (uniform column width + gap) computed from the widest/tallest variant.
3. Only then create/move the node. After the write, re-read boxes (or screenshot) and confirm
   no two siblings' rectangles intersect.
4. Prefer letting **auto-layout** own spacing for anything inside a container; reserve manual
   coordinates for top-level placement of independent groups.

## Tokens & type

- Bind color, radius, padding, gap, and size to **semantic** design-system variables, not raw
  hex or pixel values. Prefer semantic tokens (`surface/surface-info`) over core primitives
  (`core/blue/100`) unless faithfully matching a treatment the owner explicitly specified.
- Apply the project type styles (here: Merchant), never ad-hoc font settings.
- Don't communicate status by color alone — pair it with an icon and text (accessibility).

## Design for coding-agent handoff

The file is an implementation spec. Make it trivially readable:

- **Component contract = code contract.** Text/instance-swap/variant properties on a component
  are the props. Name and default them as you'd want the coded prop to read. Keep the same slots
  named identically across every variant/state.
- Structure mirrors the DOM you'd expect: a card is one auto-layout frame with named child
  regions (header, body, actions), not a pile of absolutely-positioned layers.
- Use instance-swap properties for interchangeable inner content (e.g. a decorative icon whose
  glyph varies) instead of forking near-identical components.
- Every state a component can be in is a real variant, discoverable in one set — so the coder
  enumerates props instead of guessing.
- Leave a short component `description` stating purpose + any behavior the visuals imply
  (e.g. "picker is the keyboard-equivalent path to drag-and-drop").

## Work incrementally & validate

- ≤ ~10 logical operations per `use_figma` call; build skeleton → fill → verify.
- Return every created/mutated node ID from each call.
- After each meaningful step: `get_metadata` for structure (counts, hierarchy, positions →
  overlap check) and `get_screenshot` for visuals (clipping, spacing, alignment). Fix before
  moving on — never build on a broken foundation.

## Report

State what was created/changed, which components and tokens were reused vs. newly made, the
overlap/hug/naming checks you ran, and any assumptions or open decisions left for the owner.

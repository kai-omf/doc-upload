# Figma design conventions

Working rules for all Figma design work on this project. The full, agent-facing
operational guide is the [`figma-pro-design` skill](../.agent-skills/figma-pro-design/SKILL.md);
this doc is the short, durable reference. Spacing lives in
[spacing-conventions.md](./spacing-conventions.md).

## Core rules

1. **No accidental overlap.** Before placing or moving any node, read the surrounding
   siblings' bounding boxes and drop the node into a free slot (right of the rightmost,
   below the bottom-most, or on a fixed variant-grid pitch) with a consistent gutter.
   After the write, re-check that no two siblings' rectangles intersect. Let auto-layout
   own spacing inside containers; use manual coordinates only for top-level groups.

2. **Industry-standard auto-layout.** Any container whose children have a structural
   relationship uses auto-layout, not absolute x/y. Set direction by axis, and set sizing
   intent explicitly (hug / fixed / fill). Bind spacing and padding to tokens.

3. **Hug to content — never clip.** Frame heights hug their contents by default
   (`primaryAxisSizingMode = 'AUTO'` on vertical frames) so content can never be truncated.
   Fixed heights are the exception. Re-verify hugging after any copy/content change, and
   confirm visually that no text is cut off.

## Also enforced (see the skill for detail)

- **File hygiene:** new work in the agreed section; no nodes at (0,0); no orphans, no leftover
  `placeholder` shimmers; reusable patterns are components, not copies.
- **Layer naming:** name every meaningful layer by role (`Title`, `Actions`, `Icon`), not by
  looks; stable names across variants; project path convention for component names.
- **Tokens & type:** bind to semantic design-system variables (not raw hex/px); use Merchant
  type; never signal status by color alone.
- **Handoff for coding agents:** component properties = code props; structure mirrors the
  expected DOM; instance-swap for interchangeable inner content; every state is a real variant;
  each component carries a short description.
- **Incremental + validated:** small steps, return node IDs, check `get_metadata` (structure /
  overlap) and `get_screenshot` (clipping / spacing) after each step.

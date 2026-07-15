---
name: prototype-oneapp-ui
description: Design, build, revise, review, or validate OneApp UI prototypes in this repository. Use for Pencil .pen work, coded screens and flows, reusable prototype components, design-to-code translation, tokens, typography, interaction states, responsive behavior, and accessibility. Keep work component-driven, grounded in the repository PRD and base-component specs, and suitable for rapid iteration without sacrificing WCAG 2.2 Level AA fundamentals or code quality.
---

# Prototype OneApp UI

Create fast, credible prototypes by reusing the repository's components, tokens, fonts, and product requirements. Prefer the smallest reversible solution that demonstrates the interaction clearly.

## Ground in the repository

Before non-trivial work:

1. Read `AGENTS.md` and inspect `git status` so unrelated work remains untouched.
2. Read the applicable product requirements, starting with `docs/document-upload-prd.md` for the current flow.
3. Read `components/README.md` and every component spec relevant to the proposed design.
4. Read `tokens/README.md`, then inspect only the needed values in `tokens/tokens.css` and typography utilities in `tokens/cx-fonts.css`.
5. Inspect `font-files/Merchant/` when typography is involved. Use the provided Merchant webfonts with a sensible sans-serif fallback.
6. Inspect the actual project configuration and commands before choosing a framework, dependency, or validation command. Do not assume a code stack exists.

Treat the PRD as the product boundary. Do not turn its open decisions into hidden implementation facts. For a visual-only prototype, label reversible assumptions and placeholders; stop for direction when an unknown changes security, data handling, accessibility, or the core interaction.

## Follow the component-first loop

Before creating any pattern that will appear more than once:

1. Search the relevant specs in `components/`, the current Pencil document's reusable nodes, and the codebase's component modules.
2. Reuse an existing component when its contract fits. Use variants, props, slots, composition, or Pencil instance overrides instead of copying and restyling it.
3. If no suitable component exists, build the reusable component first, then create every occurrence from it.
4. Keep screen-specific composition outside base components. Do not add product data access, analytics, routing, or upload logic to a reusable visual primitive.
5. When a new component becomes a durable repository primitive, add a concise kebab-case spec under `components/` covering purpose, anatomy, variants, states, semantics, keyboard/focus behavior, and tokens.

Do not duplicate a component merely to achieve a small visual difference. If an existing spec conflicts with the PRD or an accessibility requirement, flag the conflict rather than silently diverging.

## Route Pencil work

Treat `.pen` files as opaque and use Pencil MCP tools exclusively. Never read, search, parse, or modify a `.pen` file with filesystem tools.

1. Start with `get_editor_state({ include_schema: true })`.
2. Confirm the active file is `one-app-starter.pen`; pass its file path explicitly when needed.
3. Read variables and inspect relevant reusable components and target frames at low depth.
4. Load the single current Pencil guide that matches the task. Match the document's established visual direction unless the user requests a new one.
5. Reuse components with `type: "ref"`. If a pattern will appear more than once and no component fits, create a `reusable: true` component before placing instances.
6. Build in small batches. Mark incomplete top-level work `placeholder: true`, then remove the flag when complete.
7. Validate each meaningful section with `snapshot_layout` and a screenshot of the smallest relevant node. Repair clipping, overlap, collapsed layouts, token drift, illegible type, and stale placeholders before continuing.

If Pencil tools are unavailable, report that limitation and stop the Pencil portion. Continue independent documentation or code work only when it does not require guessing at unseen canvas details.

## Route prototype code

1. Use the repository's existing framework and conventions. Introduce the least tooling needed if no app exists, and keep the choice easy to replace.
2. Model reusable UI as focused components with typed inputs and explicit states. Keep page composition, mock data, and orchestration at the screen level.
3. Prefer native HTML semantics and browser behavior. Use links for navigation, buttons for actions, labels for controls, and native file inputs for upload selection.
4. Consume repository CSS custom properties instead of hard-coded visual values when a matching token exists. Use CSS logical properties and avoid brittle fixed-height layouts.
5. Load Merchant from the provided `.woff2` files with appropriate weights, `font-display: swap`, and a sans-serif fallback. Do not fetch fonts from external services.
6. Keep prototype data local and clearly fake. Do not send files, personal data, credentials, or analytics to real services unless the user explicitly scopes and authorizes that integration.
7. Implement the interaction states needed to test the flow, not only the happy-path screenshot. For document upload, include outstanding, selected, uploading, uploaded, validation-error, failed, retry, replace/remove, and `Other document` note behavior where applicable.

## Keep the accessibility floor

Target WCAG 2.2 Level AA in designs and code:

- Preserve keyboard access, logical focus order, visible focus, and predictable focus after errors and asynchronous updates.
- Give controls accessible names and persistent instructions; never use placeholder text as the only label.
- Do not communicate status by color alone. Pair color and icons with concise text.
- Expose errors, progress, and completion programmatically without unnecessary focus movement or repeated live-region announcements.
- Keep drag-and-drop optional; provide an equivalent native file-picker path.
- Support 200% text resize, narrow reflow down to 320 CSS pixels, long content, and touch targets of at least 24 by 24 CSS pixels.
- Respect reduced motion and preserve meaning in forced-colors or high-contrast modes.

Do not claim complete WCAG conformance from automated checks alone.

## Validate in proportion to the prototype

For Pencil work, inspect component reuse, variables, layout health, and the rendered result at relevant desktop and mobile sizes.

For code work, run the relevant repository commands for formatting, linting, type checking, tests, and build. Exercise the rendered flow when tooling permits, including keyboard operation, responsive layouts, error recovery, and the states changed by the work. Add focused tests for reusable logic and interactions; avoid snapshot-only evidence for behavior.

Before handoff, review the diff for unrelated files, secrets, generated output, hard-coded token substitutes, duplicated components, and accidental `.DS_Store` metadata.

## Report the result

State:

- What changed and which PRD requirements or assumptions it represents.
- Which existing components were reused and which reusable components were created.
- Which Pencil checks or code validations ran and their outcomes.
- Which accessibility behaviors were evaluated.
- Remaining assumptions, open product decisions, and unverified behavior.

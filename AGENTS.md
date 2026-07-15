# Repository agent instructions

## Orient before changing work

For non-trivial design or code work, read:

1. `docs/document-upload-prd.md`
2. `components/README.md` and the relevant component specs
3. `tokens/README.md`, plus the needed parts of `tokens/tokens.css` and `tokens/cx-fonts.css`
4. `font-files/Merchant/` when typography is involved
5. The current project configuration, validation commands, and `git status`

Activate the canonical `.agent-skills/prototype-oneapp-ui/SKILL.md` skill for every request to design, build, revise, review, or validate a UI prototype in this repository. This includes Pencil work, coded screens, reusable components, design-to-code translation, tokens, typography, responsive behavior, interaction states, and accessibility.

## Work component-first

Before building anything that will be used more than once, search `components/`, the current Pencil document's reusable nodes, and the codebase for an existing component. Reuse a fitting component. If none exists, build the reusable component first and create each occurrence from it.

Treat the PRD as the product boundary and the component specs as the base-component contracts. Use repository tokens and Merchant fonts instead of introducing parallel visual values or external fonts. Preserve unrelated work in the repository.

## Pencil files

Treat `one-app-starter.pen` and every `.pen` file as opaque. Use Pencil MCP tools exclusively; never read, search, parse, or edit `.pen` files with filesystem tools. Start Pencil work with `get_editor_state({ include_schema: true })`. If Pencil tooling is unavailable, report the missing capability instead of attempting direct access.

## Prototype quality bar

- Optimize for fast, reversible iteration without shipping careless code.
- Target WCAG 2.2 Level AA fundamentals in every user-facing design.
- Prefer native semantics and complete interaction states over screenshot-only fidelity.
- Keep prototype data local and fake unless a real integration is explicitly requested.
- Run the smallest relevant validation set and report both evidence and remaining assumptions.

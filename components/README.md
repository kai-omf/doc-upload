# Component contracts

This directory contains the implementation contracts for OneApp design-system components. Existing documents capture the current design anatomy, variants, tokens, and behavior; migrate them incrementally to the repository's complete component-contract format as they enter coded implementation.

For a new or substantially revised contract:

1. Activate the `develop-design-system` skill.
2. Copy `.agent-skills/develop-design-system/assets/component-spec-template.md`.
3. Give each testable requirement a stable identifier such as `AC-01`.
4. Map automated and manual evidence to those acceptance criteria.
5. Document applicable WCAG 2.2 Level A and AA criteria and manual test coverage.
6. Run `.agent-skills/develop-design-system/scripts/validate-component-spec.sh <path>`.

Use lowercase kebab-case filenames that match the public component name.

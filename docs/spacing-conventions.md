# Spacing / gap conventions

Authoritative gap-token hierarchy for the document-upload work. Given by the
product owner and locked as the spacing contract for both Pencil and the
Pencil → Figma transfer. Bind layouts to these CX `gap-*` token families rather
than the more ambiguous `gap-x-*` / `gap-y-*` tokens.

## The hierarchy

| Token                    | Use for                                                        | Axis                  |
| ------------------------ | -------------------------------------------------------------- | --------------------- |
| `gap-content`            | Gaps **between content sections**                              | Vertical *or* horizontal |
| `gap-section`            | Gaps **within a section**                                      | Vertical              |
| `gap-tile` / `gap-group` | Gaps **grouping content inside a card / tile**                 | Vertical              |
| `gap-row`                | Gaps **inside a card / tile**                                  | Horizontal            |

## Rules

- Vertical spacing between sibling **sections** → `gap-content`.
- Vertical spacing **within** a single section → `gap-section`.
- Vertical grouping of content **inside a card or tile** → `gap-tile` or `gap-group`.
- Horizontal spacing **inside a card or tile** → `gap-row`.
- `gap-content` is the only one that also covers horizontal separation between sections.
- **Exception:** when a CX component instance already owns its own internal
  spacing, use that instance's built-in spacing — do not override it with these tokens.

## History (for context)

The owner first gave a shorthand ("vertical gaps should use gap-group or gap-tile;
horizontal gaps should use gap-row") and then **superseded** it with the more
specific hierarchy above. The table above is the version that governs.

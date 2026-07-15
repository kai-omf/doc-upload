# Design-token assets

`tokens.css` contains the current POC semantic and primitive CSS custom properties and the self-hosted primary CX font faces used by component typography tokens. These assets are experimental and are not an approved production token package.

## Merchant fonts

The files under `fonts/merchant/` were copied from a locally available OneMain mobile application's Android public font assets on 2026-07-13 for POC evaluation and distribution. Filenames are normalized to lowercase kebab-case; binary contents are unchanged from the source files.

Available normal-style weights:

| Weight | CSS value | Formats |
| --- | --- | --- |
| Light | 300 | WOFF2, WOFF |
| Regular | 400 | WOFF2, WOFF |
| Medium | 500 | WOFF2, WOFF |
| Bold | 700 | WOFF2, WOFF |

The font faces use `font-display: swap` and retain `sans-serif` in the family tokens as the fallback. Preserve the relative path between `tokens.css` and `fonts/merchant/` when serving or packaging these files.

The POC owner confirmed that Merchant is already licensed for this use and public distribution. No separate license or notice accompanied the source directory; under accepted [ADR-0002](../docs/architecture/decisions/0002-self-host-merchant-webfonts.md), release artifacts must include any notice or attribution required by the applicable license when the licensing owner provides it.

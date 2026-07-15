# Footer

**Description:** A Footer provides persistent, supporting information at the bottom of pages throughout an experience.

---

## Variants

| Property | Type | Options | Default |
|----------|------|---------|---------|
| Viewport | Variant | `Mobile`, `Desktop` | `Mobile` |

---

## Component Properties

### Text Properties

| Property | Default Value |
|----------|--------------|
| Links Heading | "Heading" |
| Link 1 | "Link 1" |
| Link 2 | "Link 2" |
| Link 3 | "Link 3" |
| Link 4 | "Link 4" |
| Link 5 | "Link 5" |
| Link 6 | "Link 6" |
| Link 7 | "Link 7" |
| Link 8 | "Link 8" |
| Disclosure 1 | "Legal Disclosure 1" |
| Disclosure 2 | "Legal Disclosure 2" |
| Disclosure 3 | "Legal Disclosure 3" |
| Disclosure 4 | "Legal Disclosure 4" |
| Disclosure 5 | "Legal Disclosure 5" |
| Disclosure 6 | "Legal Disclosure 6" |
| Disclosure 7 | "Legal Disclosure 7" |
| Disclosure 8 | "Legal Disclosure 8" |

### Visibility (Boolean) Properties

| Property | Default | Controls |
|----------|---------|----------|
| Link 4 | `false` | Show/hide Link 4 |
| Link 5 | `false` | Show/hide Link 5 |
| Link 6 | `false` | Show/hide Link 6 |
| Link 7 | `false` | Show/hide Link 7 |
| Link 8 | `false` | Show/hide Link 8 |
| Disclosure 1 | `true` | Show/hide Disclosure 1 |
| Disclosure 2 | `true` | Show/hide Disclosure 2 |
| Disclosure 3 | `true` | Show/hide Disclosure 3 |
| Disclosure 4 | `true` | Show/hide Disclosure 4 |
| Disclosure 5 | `true` | Show/hide Disclosure 5 |
| Disclosure 6 | `true` | Show/hide Disclosure 6 |
| Disclosure 7 | `true` | Show/hide Disclosure 7 |
| Disclosure 8 | `true` | Show/hide Disclosure 8 |

---

## Layout & Spacing

### Container (Both Variants)

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Padding left/right | `Gap/gap_16` | 16px |
| Padding top/bottom | `Gap/gap_40` | 40px |
| Layout | Vertical (auto-layout) | — |

### Desktop

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Item spacing | `dimension-32` | 32px |
| Content alignment | Center (cross-axis) | — |
| Content padding (inner) | `padding/padding-content-area` | 32px |

### Mobile

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Item spacing | `dimension-24` | 24px |
| Content alignment | Min (left-aligned) | — |

---

## Background

| Property | Value | Token |
|----------|-------|-------|
| Fill | `#051958` (solid) | — (no variable bound to fill) |

---

## Sections

### Footer Navigation

| Property | Value / Token |
|----------|---------------|
| Layout | Vertical |
| Item spacing | `Gap/gap_16` (16px) |
| Bottom border | 1px inside, `line/line-inverse` |
| Padding bottom | 32px |
| Content padding (Desktop) | `padding/padding-content-area` (32px left/right) |

**Contains:**
- **Links Section** — vertical list of navigation links
- **Button** — instance of `Button` component (`Size=Large 1, Hierarchy=Primary, Layout=No Icon, State=Enabled, Polarity=Inverse`)

### Footer Info (Desktop) / Footer Info Container (Mobile)

| Property | Value |
|----------|-------|
| Layout | Horizontal (Desktop) / Vertical (Mobile) |
| Item spacing | 24px (Desktop) / 24px (Mobile) |
| Content padding (Desktop) | `padding/padding-content-area` (32px left/right) |

**Contains:**
- **Contact Info Container** — vertical, 16px spacing (screen reader text, company address, copyright)
- **Legal Disclosures Container** — vertical, 32px spacing (up to 8 disclosure items)

### Button Row (Desktop) / Button Container (Mobile)

| Property | Token | Value |
|----------|-------|-------|
| Padding top (Mobile) | `Padding/padding_8` | 8px |
| Layout | Vertical | — |

Contains a secondary "Screen Share" button.

---

## Typography

| Element | Text Style | Font | Size Token | Line Height Token | Color Token |
|---------|-----------|------|------------|-------------------|-------------|
| Links Heading | `Body/Default/Medium` | Merchant Var / Regular | `Body/Default/Size` (18px) | `Body/Default/Line Height` (24px) | `body/body-inverse-emphasis` |
| Navigation Links | `Link/Supporting` | Merchant Var / Regular | `Body/Supporting/Size` (16px) | `Body/Supporting/Line Height` (20px) | `body/body-inverse-emphasis` |
| App Button Label | `Label/Default/Medium` | Merchant Var / Regular | `Label/Default/Size` (17px) | `Label/Default/Line Height` (24px) | `secondary/on-secondary-inverse` |
| Screen Reader Text | — | Merchant Var / Regular | `Body/Supporting/Size` (16px) | `Body/Supporting/Line Height` (20px) | `body/body-inverse` |
| Company Address | — | Merchant Var / Regular | `Body/Supporting/Size` (16px) | `Body/Supporting/Line Height` (20px) | `body/body-inverse` |
| Copyright | `Body/Supporting/Regular` | Merchant Var / Regular | `Body/Supporting/Size` (16px) | `Body/Supporting/Line Height` (20px) | `body/body-inverse` |
| Legal Disclosures | `Body/Supporting/Regular` | Merchant Var / Regular | `Body/Supporting/Size` (16px) | `Body/Supporting/Line Height` (20px) | `body/body-inverse-moderate` |

**Font family token:** `font-family` (resolves to Merchant Var)

---

## Button Tokens (Navigation CTA)

| Property | Token |
|----------|-------|
| Height | `height/height-component-default` |
| Item spacing | `gap/gap-x-component-default` |
| Border radius | `radius-full` |
| Fill | `secondary/secondary-inverse` |
| Stroke | `secondary/line-secondary-inverse` |

# Email Input

**Description:** Email Input lets people enter an email address into a UI with format validation.

---

## Variants

| Property | Type | Options | Default |
|----------|------|---------|---------|
| State | Variant | `Hover`, `Focus`, `Disabled`, `Error`, `Validated` | `Hover` |

---

## Component Properties

### Text Properties

| Property | Default Value |
|----------|--------------|
| Label | "Email" |
| Input Text | "myemail-email.cob" |
| Placeholder Text | "name@email.com" |
| Typing Text | "myemail@" |
| Error Text | "Please enter a valid email" |
| Success Text | "Looks good" |
| Helper Text | "This is some helper text" |
| Tooltip Label | "What's this?" |
| Prefix Text | "$" |
| Suffix Text | "/mo" |

### Visibility (Boolean) Properties

| Property | Default | Controls |
|----------|---------|----------|
| Optional | `false` | Show/hide "(optional)" sub-label |
| Leading Icon | `false` | Show/hide leading icon |
| Prefix Text | `false` | Show/hide prefix text |
| Suffix Text | `false` | Show/hide suffix text |
| Clear Button | `false` | Show/hide clear button |
| Mask Toggle | `false` | Show/hide mask toggle |
| Tooltip Toggle | `false` | Show/hide tooltip toggle |
| Input Text | `false` | Show/hide input text (committed value) |
| Placeholder Text | `true` | Show/hide placeholder text |
| Typing Text | `false` | Show/hide typing text (in-progress value) |
| Helper Text | `false` | Show/hide helper text |

### Instance Swap Properties

| Property | Default | Description |
|----------|---------|-------------|
| Leading Icon | (default icon) | Swappable leading icon instance |

---

## Layout & Spacing

### Container

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Layout | Vertical (auto-layout) | — |
| Item spacing (label → input → message) | `gap/gap-y-pair` | 8px |
| Width | Fill parent (358px default) | — |

### Input Field

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Height | — | 48px |
| Padding left/right | — | 12px |
| Item spacing (inner elements) | — | 8px |
| Border radius | `radius-default` | 8px |
| Layout | Horizontal (auto-layout) | — |

---

## State-Specific Styling

### Input Field — Background & Border per State

| State | Fill Token | Stroke Token | Stroke Weight | Outer Ring |
|-------|-----------|--------------|---------------|------------|
| Hover | — (transparent field) | `line/line-emphasis` | 1px inside | `core/coolGrey/50` fill on outer wrapper |
| Focus | `surface/surface-base` | `primary/primary` | 2px inside | `core/blue/100` stroke (4px outside) on outer wrapper |
| Disabled | `surface/surface-base` | `line/line-moderate` | 1px inside | — |
| Error | `surface/surface-base` | `body/body-negative` | 1px inside | — |
| Validated | `surface/surface-base` | `body/body-positive` | 1px inside | — |

### Label Color per State

| State | Color Token |
|-------|-------------|
| Hover | `core/blue/800` |
| Focus | `body/body-emphasis` |
| Disabled | `body/body-emphasis` |
| Error | `body/body-emphasis` |
| Validated | `body/body-emphasis` |

---

## Typography

| Element | Text Style | Size Token | Line Height Token | Color Token |
|---------|-----------|------------|-------------------|-------------|
| Label | `Label/Default/Medium` | `Label/Default/Size` (17px) | `Label/Default/Line Height` (24px) | `body/body-emphasis` (see state overrides above) |
| Sub-label "(optional)" | `Label/Small 1/Regular` | `Label/Small 1/Size` (15px) | `Label/Small 1/Line Height` (24px) | `body/body-moderate` |
| Tooltip label | `Label/Small 2/Medium` | `Label/Small 2/Size` (13px) | `Label/Small 2/Line Height` (16px) | `body/body-info` |
| Input text (committed) | `Label/Large 1/Medium` | `Label/Large 1/Size` (19px) | `Label/Large 1/Line Height` (24px) | `body/body-emphasis` |
| Typing text | `Label/Large 1/Medium` | `Label/Large 1/Size` (19px) | `Label/Large 1/Line Height` (24px) | `body/body-emphasis` |
| Placeholder text | `Label/Large 1/Medium` | `Label/Large 1/Size` (19px) | `Label/Large 1/Line Height` (24px) | `body/body-subtle` |
| Prefix text | `Label/Large 1/Regular` | `Label/Large 1/Size` (19px) | `Label/Large 1/Line Height` (24px) | `body/body-moderate` |
| Suffix text | `Label/Large 1/Regular` | `Label/Large 1/Size` (19px) | `Label/Large 1/Line Height` (24px) | `body/body-moderate` |
| Text cursor | `Label/Large 1/Medium` | `Label/Large 1/Size` (19px) | `Label/Large 1/Line Height` (24px) | `body/body-default` |
| Helper text | `Label/Small 1/Regular` | `Label/Small 1/Size` (15px) | `Label/Small 1/Line Height` (24px) | `body/body-moderate` |
| Error message | `Label/Small 1/Regular` | `Label/Small 1/Size` (15px) | `Label/Small 1/Line Height` (24px) | `body/body-negative` |
| Success message | `Label/Small 1/Regular` | `Label/Small 1/Size` (15px) | `Label/Small 1/Line Height` (24px) | `body/body-positive` |

**Font family token:** `font-family` (resolves to Merchant Var)

---

## Color Tokens Summary

| Token | Role | Hex |
|-------|------|-----|
| `body/body-emphasis` | Primary text, label, input value | `#051958` |
| `body/body-moderate` | Secondary text (optional, prefix, suffix, helper) | `#62738C` |
| `body/body-subtle` | Placeholder text | `#CBD5E1` |
| `body/body-default` | Cursor | `#4B576C` |
| `body/body-info` | Tooltip link text | `#0E45E3` |
| `body/body-negative` | Error message & error border | `#D62940` |
| `body/body-positive` | Success message & validated border | `#008353` |
| `core/blue/800` | Hover-state label color | `#17398B` |
| `core/blue/100` | Focus ring stroke | `#E7F0FF` |
| `core/coolGrey/50` | Hover input background | `#FBFCFF` |
| `surface/surface-base` | Input field fill (focus/disabled/error/validated) | `#FFFFFF` |
| `primary/primary` | Focus border | `#0E45E3` |
| `line/line-emphasis` | Default/hover input border | — |
| `line/line-moderate` | Disabled input border | `#CBD5E1` |

---

## Structure


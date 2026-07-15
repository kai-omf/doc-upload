# List Item

**Description:** A configurable list item supporting multiple interaction types — navigation, toggle switches, detail display, checkboxes, and radio buttons.

---

## Variants

| Property | Type | Options | Default |
|----------|------|---------|---------|
| Type | Variant | `Navigation`, `Switch`, `Details`, `Details + Nav`, `Checkbox`, `Radio` | `Navigation` |
| Tile | Variant | `True`, `False` | `False` |

---

## Component Properties

### Text Properties

| Property | Default Value |
|----------|--------------|
| Label | "Label" |
| Sub-Label | "Sub-Label" |

### Boolean Properties

| Property | Default | Controls |
|----------|---------|----------|
| Sub-Label | `false` | Show/hide sub-label text |
| Icon | `false` | Show/hide leading icon container |

### Instance Swap Properties

| Property | Default | Description |
|----------|---------|-------------|
| Icon | `star` | Swappable leading icon |

---

## Layout & Spacing

### Container

| Property | Token | Tile=True | Tile=False |
|----------|-------|-----------|------------|
| Layout | Horizontal (auto-layout) | — | — |
| Item spacing | `gap/gap-row-default` | 16px | 16px |
| Padding (all sides) | `padding/padding-surface-base` | 16px | 16px top/bottom, 0 left/right |
| Corner radius | `radius-large-1` | 16px | 16px |
| Fill | `surface/surface-base` | `#FFFFFF` | None (transparent) |
| Width | — | 358px | 358px |
| Height | — | 56px (no sub-label) | 56px (no sub-label) |

---

## Tile vs Non-Tile

| Aspect | Tile=True | Tile=False |
|--------|-----------|------------|
| Background | `surface/surface-base` (white) | Transparent |
| Horizontal padding | `padding/padding-surface-base` (16px) | 0 |
| Vertical padding | `padding/padding-surface-base` (16px) | `padding/padding-surface-base` (16px) |

---

## Internal Spacing

| Element | Token | Resolved Value |
|---------|-------|----------------|
| Left content gap (icon → text) | `gap/gap-row-small` | 8px |
| Label → Sub-Label gap | `gap/gap-group-small` | 4px |

---

## Typography

| Element | Text Style | Size Token | Line Height Token | Color Token |
|---------|-----------|------------|-------------------|-------------|
| Label | `Body/Default/Regular` | `Body/Default/Size` (17px) | `Body/Default/Line Height` (24px) | `body/body-default` |
| Sub-Label | `Body/Supporting/Regular` | `Body/Supporting/Size` (15px) | `Body/Supporting/Line Height` (20px) | `body/body-moderate` |
| Details Label (right) | `Body/Default/Regular` | `Body/Default/Size` (17px) | `Body/Default/Line Height` (24px) | `body/body-default` |
| Details Sub-Label (right) | `Body/Supporting/Regular` | `Body/Supporting/Size` (15px) | `Body/Supporting/Line Height` (20px) | `body/body-moderate` |

**Font family token:** `font-family` (resolves to Merchant Var)

---

## Icon Container (Leading)

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Size | — | 40x40px |
| Corner radius | `radius-full` | 999px (circle) |
| Fill | `surface/surface-info-layer-1` | `#E7F0FF` |
| Icon size | — | 24x24px |
| Padding | — | 8px (all sides) |
| Visibility | Controlled by `Icon` boolean | Hidden by default |

---

## Right-Aligned Content by Type

### Navigation

| Element | Details |
|---------|---------|
| Icon | `nav-arrow-right` (24x24) |
| Chevron stroke | `body/body-emphasis` token, 1.5px weight |

### Switch

| Element | Details |
|---------|---------|
| Component | `Toggle` (`Value=Off, State=Enabled`) |
| Size | 52x32px |
| Corner radius | `radius-full` |
| Fill (off state) | `core/coolGrey/500` |
| Height token | `height/height-component-small3` |

### Details

| Element | Details |
|---------|---------|
| Right-aligned text | Label + Sub-Label (same styles as left text) |
| Navigation arrow | Hidden |

### Details + Nav

| Element | Details |
|---------|---------|
| Right-aligned text | Label + Sub-Label |
| Navigation arrow | Visible (`nav-arrow-right`, `body/body-emphasis`) |

### Checkbox

| Element | Details |
|---------|---------|
| Component | `Checkbox` (`Selected=False, State=Enabled`) |
| Position | Leading (left-aligned) |
| Container size | 40x40px |
| Container radius | `radius-full` |
| Checkbox radius | `radius-small-1` |
| Checkbox border | `line/line-default` |
| Height token | `height/height-component-small1` |

### Radio

| Element | Details |
|---------|---------|
| Component | `Radio Button` (`Selected=False, State=Enabled`) |
| Position | Leading (left-aligned) |
| Container size | 40x40px |
| Container radius | `radius-full` |
| Radio border | `line/line-default` |
| Height token | `height/height-component-small1` |

---

## Color Tokens

| Element | Token | Hex |
|---------|-------|-----|
| Label text | `body/body-default` | `#4B576C` |
| Sub-Label text | `body/body-moderate` | `#62738C` |
| Nav chevron | `body/body-emphasis` | `#051958` |
| Icon container fill | `surface/surface-info-layer-1` | `#E7F0FF` |
| Tile background | `surface/surface-base` | `#FFFFFF` |
| Toggle off fill | `core/coolGrey/500` | — |
| Checkbox/Radio border | `line/line-default` | — |

---

## Structure

    List Item
    ├── Left-Aligned Content (horizontal, gap: gap/gap-row-small)
    │   ├── Icon Container [toggleable] (40x40 circle, surface/surface-info-layer-1)
    │   │   └── Icon (24x24 instance swap)
    │   ├── Container [Checkbox/Radio types only]
    │   │   └── Checkbox or Radio Button instance
    │   └── Text (vertical, gap: gap/gap-group-small)
    │       ├── Label
    │       └── Sub-Label [toggleable]
    └── Right-Aligned Content
        ├── nav-arrow-right [Navigation, Details + Nav]
        ├── Toggle [Switch type]
        └── Text [Details, Details + Nav]
            ├── Label
            └── Sub-Label

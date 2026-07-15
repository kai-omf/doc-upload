# Text Link

**Description:** Text Link makes a string of text an interactive link.

---

## Variants

| Property | Type | Options | Default |
|----------|------|---------|---------|
| State | Variant | `Default`, `Hover`, `Focus`, `Pressed`, `Visited`, `Busy`, `Disabled` | `Default` |
| Polarity | Variant | `Default`, `Inverse` | `Default` |

---

## Component Properties

### Text Properties

The link label text is set via the nested "Text Label" node (not exposed as a top-level text property).

### Boolean Properties

| Property | Default | Controls |
|----------|---------|----------|
| Show Icon | `false` | Show/hide trailing icon |

### Instance Swap Properties

| Property | Default | Description |
|----------|---------|-------------|
| Icon | `nav-arrow-right` | Swappable trailing icon |

---

## Layout & Spacing

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Layout | Horizontal (auto-layout) | — |
| Item spacing (text → icon) | `gap/gap-x-component-small` | 4px |
| Cross-axis alignment | Center | — |
| Padding (Focus state only) | 4px left/right | — |

---

## Typography

| Property | Token / Style | Resolved Value |
|----------|---------------|----------------|
| Text style | `Link/Default` | — |
| Font family | `font-family` | Merchant Var |
| Font size | `Body/Default/Size` | 17px |
| Line height | `Body/Default/Line Height` | 24px |
| Text decoration | Underline | — |

---

## Icon

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Width | `size/size-icon-small2` | 16px |
| Height | `size/size-icon-small2` | 16px |
| Default icon | `nav-arrow-right` | — |
| Visibility | Controlled by `Show Icon` boolean | Hidden by default |

---

## Busy State — Inline Loader

| Property | Token | Resolved Value |
|----------|-------|----------------|
| Width | `dimension-16` | 16px |
| Height | `dimension-4` | 4px |
| Component | `Inline Loader` (`Size=Small`) | — |

In the Busy state, the trailing icon is replaced by an Inline Loader instance.

---

## Focus Ring

| Property | Default Polarity Token | Inverse Polarity Token |
|----------|----------------------|----------------------|
| Stroke color | `line/line-focus` | `line/line-inverse-focus` |
| Stroke weight | 2px (outside) | 2px (outside) |
| Corner radius | 4px | 4px |
| Padding | 4px left/right | 4px left/right |

---

## State Color Tokens — Default Polarity

| State | Color Token | Hex |
|-------|-------------|-----|
| Default | `primary/primary` | `#0E45E3` |
| Hover | `primary/primary-hover` | `#406DEF` |
| Focus | `primary/primary` | `#0E45E3` |
| Pressed | `primary/primary-active` | `#0733A6` |
| Visited | `primary/primary` | `#0E45E3` |
| Busy | `primary/primary-active` | `#0733A6` |
| Disabled | `primary/primary-disabled` | `#A0B8F2` |

## State Color Tokens — Inverse Polarity

| State | Color Token | Hex |
|-------|-------------|-----|
| Default | `primary/primary-inverse` | `#FFFFFF` |
| Hover | `primary/primary-inverse-hover` | `#E7F0FF` |
| Focus | `primary/primary-inverse` | `#FFFFFF` |
| Pressed | `primary/primary-inverse-active` | `#CCDFFF` |
| Visited | `primary/primary-inverse` | `#FFFFFF` |
| Busy | `primary/primary-inverse-active` | `#CCDFFF` |
| Disabled | `primary/primary-inverse-disabled` | `#7E93B4` |

---

## Focus Ring Color Tokens

| Polarity | Token | Hex |
|----------|-------|-----|
| Default | `line/line-focus` | `#AC75FF` |
| Inverse | `line/line-inverse-focus` | `#E3D1FF` |

---

## Structure


# Inline Text Link

**Description:** Text Link makes a string of text an interactive link.

---

## Variants

| Property | Type | Options | Default |
|----------|------|---------|---------|
| Size | Variant | `Default` | `Default` |
| Emphasis | Variant | `Primary`, `Secondary` | `Primary` |
| State | Variant | `Default`, `Hover`, `Focus`, `Pressed`, `Visited`, `Disabled` | `Default` |
| Polarity | Variant | `Default`, `Inverse` | `Default` |

---

## Layout

| Property | Value |
|----------|-------|
| Layout | Horizontal (auto-layout) |
| Alignment | Center / Center |
| Padding | 0 (2px left/right in Focus state) |
| Background | None (transparent) |

---

## Typography

### Primary Emphasis

| Property | Token / Style | Resolved Value |
|----------|---------------|----------------|
| Text style | `Link/Default` | — |
| Font family | `font-family` | Merchant Var |
| Font size | `Body/Default/Size` | 17px |
| Line height | `Body/Default/Line Height` | 24px |
| Text decoration | Underline | — |

### Secondary Emphasis — Default Polarity

| Property | Token / Style | Resolved Value |
|----------|---------------|----------------|
| Text style | `Link/Supporting` | — |
| Font family | `font-family` | Merchant Var |
| Font size | `Body/Supporting/Size` | 15px |
| Line height | `Body/Supporting/Line Height` | 20px |
| Text decoration | Underline | — |

### Secondary Emphasis — Inverse Polarity

| Property | Token / Style | Resolved Value |
|----------|---------------|----------------|
| Text style | `Link/Default` | — |
| Font family | `font-family` | Merchant Var |
| Font size | `Body/Default/Size` | 17px |
| Line height | `Body/Default/Line Height` | 24px |
| Text decoration | Underline | — |

---

## Focus Ring

| Polarity | Stroke Token | Corner Radius | Padding |
|----------|-------------|---------------|---------|
| Default | `line/line-focus` | 4px | 2px left/right |
| Inverse | `line/line-inverse-focus` | 4px | 2px left/right |

---

## State Color Tokens — Primary Emphasis, Default Polarity

| State | Color Token | Hex |
|-------|-------------|-----|
| Default | `primary/primary` | `#0E45E3` |
| Hover | `primary/primary-hover` | `#406DEF` |
| Focus | `primary/primary-hover` | `#406DEF` |
| Pressed | `primary/primary-active` | `#0733A6` |
| Visited | `primary/primary` | `#0E45E3` |
| Disabled | `primary/primary-disabled` | `#A0B8F2` |

## State Color Tokens — Primary Emphasis, Inverse Polarity

| State | Color Token | Hex |
|-------|-------------|-----|
| Default | `primary/primary-inverse` | `#FFFFFF` |
| Hover | `primary/primary-inverse-hover` | `#E7F0FF` |
| Focus | `primary/primary-inverse` | `#FFFFFF` |
| Pressed | `primary/primary-inverse-active` | `#CCDFFF` |
| Visited | `primary/primary-inverse` | `#FFFFFF` |
| Disabled | `primary/primary-inverse-disabled` | `#7E93B4` |

## State Color Tokens — Secondary Emphasis, Default Polarity

| State | Color Token | Hex |
|-------|-------------|-----|
| Default | `body/body-emphasis` | `#051958` |
| Hover | `body/body-moderate` | `#62738C` |
| Focus | `body/body-emphasis` | `#051958` |
| Pressed | `body/body-default` | `#4B576C` |
| Visited | `body/body-emphasis` | `#051958` |
| Disabled | `body/body-muted` | `#7E93B4` |

## State Color Tokens — Secondary Emphasis, Inverse Polarity

| State | Color Token | Hex |
|-------|-------------|-----|
| Default | `primary/primary-inverse` | `#FFFFFF` |
| Hover | `primary/primary-inverse-hover` | `#E7F0FF` |
| Focus | `primary/primary-inverse` | `#FFFFFF` |
| Pressed | `primary/primary-inverse-active` | `#CCDFFF` |
| Visited | `primary/primary-inverse-active` | `#CCDFFF` |
| Disabled | `primary/primary-inverse-disabled` | `#7E93B4` |

---

## Focus Ring Color Tokens

| Polarity | Token | Hex |
|----------|-------|-----|
| Default | `line/line-focus` | `#AC75FF` |
| Inverse | `line/line-inverse-focus` | `#E3D1FF` |

---

## Structure

    inline text link
    └── "inline text link" (TEXT node — the link label)

---

## Notes

- Unlike the standalone **Text Link** component, the inline text link has no icon slot, no busy/loader state, and no "Text Offset" wrapper frame.
- The **Secondary** emphasis uses a smaller type scale (`Link/Supporting` at 15px/20px) in Default polarity, and uses body-tone colors instead of primary-blue, making it suitable for inline use within body copy.
- The **Inverse** polarity of Secondary emphasis uses the same scale as Primary (`Link/Default` at 17px/24px).
- The component is purely a text node inside an auto-layout frame — no additional structural layers.

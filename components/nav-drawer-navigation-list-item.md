```markdown
# Navigation List Item

A navigation list item used in sidebar/drawer navigation. Displays an icon and text label with a state layer for interaction feedback.

## Component Properties

| Property | Type   | Options                                                    |
|----------|--------|------------------------------------------------------------|
| State    | Variant| Enabled, Disabled, Visited, Current, Pressed, Focus, Hover|

## Structure

    Navigation List Item (304×56, auto-layout: horizontal, center-aligned)
    ├── [Current only] Current Indicator (4×56, rectangle)
    └── State Layer (296×56, auto-layout: horizontal, center-aligned)
        ├── Icon (24×24, instance)
        └── Text Label (text)

## Layout Tokens

### Container (root)

| Property        | Token                  | Value   |
|-----------------|------------------------|---------|
| Fill            | `core/neutral/white`   | #FFFFFF |
| Border Radius   | `radius-default`       | 8px     |
| Padding Left    | —                      | 4px     |
| Padding Right   | —                      | 4px     |
| Padding Top     | —                      | 0px     |
| Padding Bottom  | —                      | 0px     |
| Item Spacing    | —                      | 12px    |
| Layout          | Horizontal, center-aligned |     |

Note: In **Current** state, padding-left is 0px and item-spacing is 0px (to accommodate the indicator).

### State Layer

| Property        | Token                  | Value   |
|-----------------|------------------------|---------|
| Border Radius   | `radius-default`       | 8px     |
| Padding Left    | —                      | 16px    |
| Padding Right   | —                      | 16px    |
| Padding Top     | —                      | 16px    |
| Padding Bottom  | —                      | 16px    |
| Item Spacing    | —                      | 12px    |
| Layout          | Horizontal, center-aligned |     |

## Current Indicator (Current state only)

| Property           | Token              | Value      |
|--------------------|--------------------|------------|
| Width              | —                  | 4px        |
| Height             | —                  | 56px (full)|
| Fill               | `body/body-selected` | #00216A  |
| Top Right Radius   | `radius-full`      | 9999px     |
| Bottom Right Radius| `radius-full`      | 9999px     |

## Typography

| Property     | Token / Style               | Value              |
|--------------|-----------------------------|--------------------|
| Text Style   | `Label/Large 1/Medium`      |                    |
| Font Family  | `font-family`               | Merchant Var       |
| Font Size    | `Label/Large 1/Size`        | 19px               |
| Line Height  | `Label/Large 1/Line Height` | 24px               |

## Icon

| Property      | Value             |
|---------------|-------------------|
| Size          | 24×24px           |
| Stroke Weight | `stroke/stroke-large-2` (2.2px) |

## State Variations

| State    | Container Fill       | State Layer Fill              | Icon Component   | Icon Color           | Text Color           | Border              |
|----------|---------------------|-------------------------------|------------------|----------------------|----------------------|---------------------|
| Enabled  | `core/neutral/white` | none (transparent)            | heart-outline    | `body/body-emphasis` | `body/body-emphasis` | none                |
| Disabled | `core/neutral/white` | none (transparent)            | heart-outline    | `body/body-muted`    | `body/body-muted`    | none                |
| Visited  | `core/neutral/white` | none (transparent)            | heart-outline    | `body/body-emphasis` | `body/body-emphasis` | none                |
| Current  | `core/neutral/white` | none (transparent)            | heart-filled     | `body/body-selected` | `body/body-emphasis` | none                |
| Pressed  | `core/neutral/white` | `surface/surface-info-active` | heart-filled     | `body/body-selected` | `body/body-emphasis` | none                |
| Focus    | `core/neutral/white` | none (transparent)            | heart-outline    | `body/body-emphasis` | `body/body-emphasis` | `line/line-focus` 2px |
| Hover    | `core/neutral/white` | `surface/surface-info-hover`  | heart-outline    | `body/body-emphasis` | `body/body-emphasis` | none                |

## Key Differences from Utility List Item

- Taller: 56px vs 48px
- No chevron/trailing icon
- Uses filled icon variant for Current/Pressed states (heart-filled vs heart-outline)
- Current indicator positioned at left edge with rounded right corners only
- Focus state uses border on State Layer (not container)
```

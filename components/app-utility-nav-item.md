# .Utility Nav Item

## Component Overview
A circular icon button used in utility navigation areas (e.g., user account, notifications). Features an icon with an optional notification badge and interactive state feedback via a circular state layer.
Component Set ID: 4300:4860

## Component Properties (Variants)

| Property | Values                                              |
|----------|-----------------------------------------------------|
| State    | Enabled, Hover, Focus, Pressed, Visited, Disabled   |
| Badge    | None, Small, Large                                  |

Total variants: 18

## Structure

    [.Utility Nav Item] (Auto-layout: Horizontal, center/center)
        └── [State Layer] (Frame, 40×40, circle)
                ├── [user-new] (Icon instance, 24×24)
                │       ├── [Vector] (body arc, 14×6)
                │       └── [Vector] (head circle, 8×8)
                └── [Badge] (Instance, conditional) — only when Badge ≠ None

    - Badge=None: no badge shown
    - Badge=Small: 6×6 dot indicator (no text)
    - Badge=Large: 16×16 circle with count text

## Layout — Root

| Property                   | Token / Value                   |
|----------------------------|---------------------------------|
| Layout mode                | Horizontal                      |
| Primary axis alignment     | Center                          |
| Counter axis alignment     | Center                          |
| Item spacing               | 8px                             |
| Padding (all sides)        | 8px                             |
| Height                     | height/height-component-default |
| Width                      | 48px (fixed)                    |
| Corner radius              | 0                               |
| Fill                       | none                            |

## State Layer (40×40)

| Property                   | Token / Value           |
|----------------------------|-------------------------|
| Size                       | 40×40                   |
| Corner radius              | radius-full (all)       |
| Layout mode                | Horizontal              |
| Primary axis alignment     | Center                  |
| Counter axis alignment     | Center                  |
| Item spacing               | 8px                     |
| Padding                    | 0                       |

## Icon — user-new

| Property      | Token / Value            |
|---------------|--------------------------|
| Size          | size/size-icon-default (24×24) |
| Stroke weight | stroke/stroke-default (1.4px)  |

## State Layer Tokens by State

| State    | State Layer Fill             | State Layer Stroke         |
|----------|------------------------------|----------------------------|
| Enabled  | — (none)                     | —                          |
| Hover    | surface/surface-info-hover   | —                          |
| Focus    | — (none)                     | line/line-focus (2px)      |
| Pressed  | surface/surface-info-active  | —                          |
| Visited  | — (none)                     | —                          |
| Disabled | — (none)                     | —                          |

## Icon Color Tokens by State

| State    | Icon Stroke Token    |
|----------|----------------------|
| Enabled  | body/body-default    |
| Hover    | body/body-emphasis   |
| Focus    | body/body-emphasis   |
| Pressed  | body/body-emphasis   |
| Visited  | body/body-emphasis   |
| Disabled | body/body-muted      |

## Badge — Small (Size=Small)

| Property      | Token / Value           |
|---------------|-------------------------|
| Size          | 6×6                     |
| Shape         | Circle                  |
| Corner radius | radius-full (all)       |
| Fill          | body/body-attention     |
| Content       | none (dot only)         |

## Badge — Large (Size=Large)

| Property      | Token / Value           |
|---------------|-------------------------|
| Size          | dimension-16 (16×16)    |
| Shape         | Circle                  |
| Corner radius | radius-full (all)       |
| Fill          | body/body-attention     |
| Layout mode   | Vertical                |
| Alignment     | Center / Center         |
| Padding       | 4px (all)               |

### Badge Large — Count Text

| Property    | Token                          |
|-------------|--------------------------------|
| Text style  | Label/Small 3/Bold             |
| Font family | font-family (Merchant Var)     |
| Font size   | Label/Small 3/Size (11px)      |
| Line height | Label/Small 3/Line Height      |
| Fill        | primary/on-primary (white)     |

## Resolved Dimensions (Reference)

| Element          | Size   |
|------------------|--------|
| Root component   | 48×48  |
| State Layer      | 40×40  |
| Icon             | 24×24  |
| Badge Small      | 6×6    |
| Badge Large      | 16×16  |

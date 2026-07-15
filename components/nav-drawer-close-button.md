# Close Button

## Component Overview
A circular icon button with an "×" (close) icon, used to dismiss modals, dialogs, sheets, and other overlay surfaces.
Component Set ID: 4047:4083

## Component Properties (Variants)

| Property | Values                                                |
|----------|-------------------------------------------------------|
| State    | Enabled, Hover, Focus, Pressed, Visited, Disabled     |

Total variants: 6

## Structure

    [Close Button] (Auto-layout: Horizontal, center/center, 48×48)
        └── [State Layer] (Frame, 40×40, circle)
                └── [close] (Icon instance, 32×32)
                        └── [Vector] (× shape, ~20×20)

## Layout — Root

| Property                   | Value           |
|----------------------------|-----------------|
| Layout mode                | Horizontal      |
| Primary axis alignment     | Center          |
| Counter axis alignment     | Center          |
| Item spacing               | 10px            |
| Padding (all sides)        | 6px             |
| Width                      | 48px            |
| Height                     | 48px            |
| Corner radius              | 0               |
| Fill                       | none            |

## State Layer (40×40)

| Property                   | Value           |
|----------------------------|-----------------|
| Size                       | 40×40           |
| Corner radius              | radius-full (all corners) |
| Layout mode                | Horizontal      |
| Primary axis alignment     | Center          |
| Counter axis alignment     | Center          |
| Padding                    | 0               |

## Icon — close

| Property      | Token / Value                        |
|---------------|--------------------------------------|
| Size          | 32×32                                |
| Vector size   | ~20×20                               |
| Stroke weight | stroke/stroke-large-1 (1.7px)        |

## State Layer Fill Tokens by State

| State    | State Layer Fill             | State Layer Stroke         |
|----------|------------------------------|----------------------------|
| Enabled  | surface/surface-layer-2      | —                          |
| Hover    | surface/surface-info-hover   | —                          |
| Focus    | surface/surface-layer-2      | line/line-focus (2px)      |
| Pressed  | surface/surface-info-active  | —                          |
| Visited  | surface/surface-layer-2      | —                          |
| Disabled | surface/surface-layer-2      | —                          |

## Icon Stroke Color Tokens by State

| State    | Icon Stroke Token     |
|----------|-----------------------|
| Enabled  | body/body-emphasis    |
| Hover    | body/body-emphasis    |
| Focus    | body/body-emphasis    |
| Pressed  | primary/primary       |
| Visited  | body/body-emphasis    |
| Disabled | body/body-moderate    |

## Interaction States Summary

| State    | State Layer Fill            | State Layer Stroke    | Icon Color          |
|----------|-----------------------------|-----------------------|---------------------|
| Enabled  | surface/surface-layer-2     | —                     | body/body-emphasis  |
| Hover    | surface/surface-info-hover  | —                     | body/body-emphasis  |
| Focus    | surface/surface-layer-2     | line/line-focus (2px) | body/body-emphasis  |
| Pressed  | surface/surface-info-active | —                     | primary/primary     |
| Visited  | surface/surface-layer-2     | —                     | body/body-emphasis  |
| Disabled | surface/surface-layer-2     | —                     | body/body-moderate  |

## Resolved Dimensions (Reference)

| Element      | Size    |
|--------------|---------|
| Root         | 48×48   |
| State Layer  | 40×40   |
| Icon         | 32×32   |
| Vector (×)   | ~20×20  |

# Utility List Item

## Component Overview
A navigation list item with an icon and label, used in utility menus/drawers. Features a "Current" state with an active indicator bar on the left edge, and swaps to a solid icon variant on active/pressed states.
Component Set ID: 4047:3968

## Component Properties (Variants)

| Property | Values                                                      |
|----------|-------------------------------------------------------------|
| State    | Enabled, Hover, Focus, Pressed, Visited, Current, Disabled  |

Total variants: 7

## Structure

    Standard states (Enabled, Hover, Focus, Pressed, Visited, Disabled):
    [Utility List Item] (Horizontal, 304×48)
        └── [State Layer] (Frame, rounded, fills width)
                ├── [Icon] (Instance, 20×20)
                └── [Text Label] (Text)

    Current state:
    [Utility List Item] (Horizontal, 304×48)
        ├── [Current Indicator] (Rectangle, 4×48, left edge bar)
        └── [State Layer] (Frame, rounded, fills remaining width)
                ├── [Icon] (Instance, 20×20, solid variant)
                └── [Text Label] (Text)

## Layout — Root Container

| Property                   | Token / Value                    |
|----------------------------|----------------------------------|
| Width                      | 304px (fixed)                    |
| Height                     | 48px (fixed)                     |
| Layout mode                | Horizontal                       |
| Primary axis alignment     | Min (start)                      |
| Counter axis alignment     | Center                           |
| Item spacing               | 12px (standard) / 0 (Current)   |
| Padding left / right       | 4px (standard) / 0 (Current)    |
| Padding top / bottom       | 16px                             |
| Corner radius              | radius-default (all corners)     |
| Fill                       | core/neutral/white               |

## State Layer

| Property                   | Token / Value                    |
|----------------------------|----------------------------------|
| Corner radius              | radius-default (all corners)     |
| Layout mode                | Horizontal                       |
| Primary axis alignment     | Min (start)                      |
| Counter axis alignment     | Center                           |
| Item spacing               | 12px                             |
| Padding left / right       | 16px                             |
| Padding top / bottom       | 12px                             |
| Width                      | Fill (296px standard / 300px Current) |
| Height                     | 48px                             |

## Current Indicator (Current State Only)

| Property         | Token / Value                              |
|------------------|--------------------------------------------|
| Width            | 4px                                        |
| Height           | 48px (full height)                         |
| Fill             | body/body-selected                         |
| Corner radius    | radius-full (top-right and bottom-right only) |

## Icon

| Property      | Token / Value                        |
|---------------|--------------------------------------|
| Size          | 20×20                                |
| Stroke weight | stroke/stroke-large-1 (1.7px)        |
| Default icon  | user (outline)                       |
| Active icon   | user-solid (filled) — Current & Pressed states |

## Typography — Text Label

| Property    | Token                              |
|-------------|------------------------------------|
| Text style  | Label/Default/Medium               |
| Font family | font-family (Merchant Var)         |
| Font size   | Label/Default/Size (17px)          |
| Line height | Label/Default/Line Height (24px)   |

## State Layer Fill Tokens by State

| State    | State Layer Fill            | State Layer Stroke         |
|----------|-----------------------------|----------------------------|
| Enabled  | — (none)                    | —                          |
| Hover    | surface/surface-info-hover  | —                          |
| Focus    | — (none)                    | line/line-focus (2px)      |
| Pressed  | surface/surface-info-active | —                          |
| Visited  | — (none)                    | —                          |
| Current  | — (none)                    | —                          |
| Disabled | — (none)                    | —                          |

## Icon & Text Color Tokens by State

| State    | Icon Stroke/Fill Token | Text Fill Token      | Icon Variant |
|----------|------------------------|----------------------|--------------|
| Enabled  | body/body-emphasis     | body/body-emphasis   | user         |
| Hover    | body/body-emphasis     | body/body-emphasis   | user         |
| Focus    | body/body-emphasis     | body/body-emphasis   | user         |
| Pressed  | body/body-emphasis     | body/body-emphasis   | user-solid   |
| Visited  | body/body-emphasis     | body/body-emphasis   | user         |
| Current  | body/body-emphasis     | body/body-emphasis   | user-solid   |
| Disabled | body/body-muted        | body/body-muted      | user         |

## Interaction States Summary

| State    | Root Fill           | State Layer Fill            | State Layer Stroke    | Icon         | Indicator |
|----------|---------------------|-----------------------------|-----------------------|--------------|-----------|
| Enabled  | core/neutral/white  | —                           | —                     | outline      | —         |
| Hover    | core/neutral/white  | surface/surface-info-hover  | —                     | outline      | —         |
| Focus    | core/neutral/white  | —                           | line/line-focus (2px) | outline      | —         |
| Pressed  | core/neutral/white  | surface/surface-info-active | —                     | solid        | —         |
| Visited  | core/neutral/white  | —                           | —                     | outline      | —         |
| Current  | core/neutral/white  | —                           | —                     | solid        | 4px bar   |
| Disabled | core/neutral/white  | —                           | —                     | outline      | —         |

## Resolved Dimensions (Reference)

| Element            | Size       |
|--------------------|------------|
| Root               | 304×48     |
| State Layer        | 296×48 (standard) / 300×48 (Current) |
| Icon               | 20×20      |
| Current Indicator  | 4×48       |

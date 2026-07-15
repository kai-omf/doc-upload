```markdown
# Circular-Data-Visualizer-Mobile

A circular progress/donut chart indicator used to display a score or percentage value. Renders as a ring with a filled arc representing the value, and a centered percentage label.

## Component Properties

| Property | Type    | Options / Default    |
|----------|---------|----------------------|
| Score    | Variant | Low, Mid, High       |

## Structure

    Circular-Data-Visualizer-Mobile (64×64, absolute positioning)
    ├── progress-bg (ellipse, full ring — background track)
    ├── progress-fill (ellipse, partial ring — filled arc)
    └── Label (text, centered percentage)

## Container

| Property        | Token                           | Value        |
|-----------------|---------------------------------|--------------|
| Width           | —                               | 64px         |
| Height          | `height/height-component-large2`| 64px         |
| Layout Mode     | —                               | None (absolute) |
| Sizing          | —                               | Fixed × Fixed|

## Progress Background (track ring)

| Property        | Token                | Value              |
|-----------------|----------------------|--------------------|
| Type            | —                    | Ellipse (ring)     |
| Size            | —                    | 64×64px            |
| Inner Radius    | —                    | 0.8 (80% — creates ring) |
| Arc             | —                    | Full circle (360°) |
| Corner Radius   | `radius-large-1`     | 16px               |
| Stroke Weight   | —                    | 1px                |

### Background Fill per Score

| Score | Fill Token          | Value (hex) |
|-------|---------------------|-------------|
| Low   | `core/green/100`    | #DCFAED     |
| Mid   | `core/green/light`  | #DCFAED     |
| High  | `core/green/light`  | #DCFAED     |

## Progress Fill (value arc)

| Property        | Token                | Value              |
|-----------------|----------------------|--------------------|
| Type            | —                    | Ellipse (arc)      |
| Size            | —                    | 64×64px            |
| Inner Radius    | —                    | 0.8 (80% — same ring width) |
| Fill            | `core/green/medium`  | #51DBA9            |
| Stroke          | `core/green/100` or `core/green/light` | #DCFAED |
| Stroke Weight   | —                    | 1px                |
| Corner Radius   | `radius-large-1`     | 16px               |

### Arc Angles per Score

| Score | Starting Angle (rad) | Ending Angle (rad) | Visual Fill |
|-------|---------------------|--------------------:|-------------|
| Low   | 0                   | −1.571 (−π/2)      | 25%         |
| Mid   | 4.747               | 7.889              | 50%         |
| High  | 3.089               | −1.623             | 100%        |

Note: Arc angles follow Figma's ellipse arc convention. The arc sweeps from startingAngle to endingAngle; the visual representation is a partial donut ring.

### Stroke Token per Score

| Score | Stroke Token        |
|-------|---------------------|
| Low   | `core/green/100`    |
| Mid   | `core/green/light`  |
| High  | `core/green/light`  |

## Label (centered percentage text)

| Property     | Token / Style                | Value          |
|--------------|------------------------------|----------------|
| Text Style   | `Label/Small 1/Regular`      |                |
| Font Family  | `font-family`                | Merchant Var   |
| Font Size    | `Label/Small 1/Size`         | 15px           |
| Line Height  | `Label/Small 1/Line Height`  | 24px           |
| Color        | `core/blue/900`              | #00216A        |
| Position     | —                            | Centered in ring |

### Label Content per Score

| Score | Label Text |
|-------|-----------|
| Low   | 25%       |
| Mid   | 50%       |
| High  | 100%      |

## Visual Summary

| Score | Track Color         | Fill Color          | Percentage |
|-------|---------------------|---------------------|-----------|
| Low   | `core/green/100`    | `core/green/medium` | 25%       |
| Mid   | `core/green/light`  | `core/green/medium` | 50%       |
| High  | `core/green/light`  | `core/green/medium` | 100%      |

## Implementation Notes

- The ring is constructed using two overlapping ellipses with `innerRadius: 0.8`, creating a donut shape with a track width of 20% of the diameter (≈6.4px)
- The progress-fill arc is drawn on top of progress-bg to show the filled portion
- The label text is absolutely positioned at the center of the component
- All three scores share the same fill color (`core/green/medium`) — only the arc sweep angle changes
- The component uses the same green color family throughout (no color changes by severity)
```

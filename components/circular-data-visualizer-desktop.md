```markdown
# Circular-Data-Visualizer-Desktop

A circular progress/donut chart indicator for desktop layouts. Larger than its mobile counterpart (80px vs 64px), displaying a score as a filled arc with a centered percentage label.

## Component Properties

| Property | Type    | Options / Default    |
|----------|---------|----------------------|
| Score    | Variant | Low, Mid, High       |

## Structure

    Circular-Data-Visualizer-Desktop (80×80, absolute positioning)
    ├── progress-bg (ellipse, full ring — background track)
    ├── progress-fill (ellipse, partial ring — filled arc)
    └── Label (text, centered percentage)

## Container

| Property        | Token                            | Value           |
|-----------------|----------------------------------|-----------------|
| Width           | —                                | 80px            |
| Height          | `height/height-component-large3` | 80px            |
| Layout Mode     | —                                | None (absolute) |
| Sizing          | —                                | Fixed × Fixed   |

## Progress Background (track ring)

| Property        | Token               | Value              |
|-----------------|---------------------|--------------------|
| Type            | —                   | Ellipse (ring)     |
| Size            | —                   | 80×80px            |
| Inner Radius    | —                   | 0.8 (80% — creates ring) |
| Arc             | —                   | Full circle (360°) |
| Fill            | `core/green/light`  | #DCFAED            |
| Corner Radius   | `radius-large-1`    | 16px               |
| Stroke Weight   | —                   | 1px                |

## Progress Fill (value arc)

| Property        | Token               | Value              |
|-----------------|---------------------|--------------------|
| Type            | —                   | Ellipse (arc)      |
| Size            | —                   | 80×80px            |
| Inner Radius    | —                   | 0.8 (80% — same ring width) |
| Fill            | `core/green/medium` | #51DBA9            |
| Stroke          | —                   | #D7F7E0 (1px)      |
| Corner Radius   | `radius-large-1`    | 16px               |
| Stroke Weight   | —                   | 1px                |

### Arc Angles per Score

| Score | Starting Angle (rad) | Ending Angle (rad) | Visual Fill |
|-------|---------------------|--------------------:|-------------|
| Low   | 0                   | −1.571 (−π/2)      | 25%         |
| Mid   | 4.747               | 7.889              | 50%         |
| High  | 3.089               | −1.623             | 75%         |

## Label (centered percentage text)

| Property     | Token / Style                  | Value          |
|--------------|--------------------------------|----------------|
| Text Style   | `Label/Large 1/Regular`        |                |
| Font Family  | `font-family`                  | Merchant Var   |
| Font Size    | `Label/Large 1/Size`           | 19px           |
| Line Height  | `Label/Large 1/Line Height`    | 24px           |
| Color        | `core/blue/900`                | #00216A        |
| Position     | —                              | Centered in ring |

### Label Content per Score

| Score | Label Text |
|-------|-----------|
| Low   | 25%       |
| Mid   | 50%       |
| High  | 75%       |

## Comparison with Mobile Variant

| Property        | Desktop                         | Mobile                          |
|-----------------|---------------------------------|---------------------------------|
| Size            | 80×80px                         | 64×64px                         |
| Height Token    | `height/height-component-large3`| `height/height-component-large2`|
| Label Style     | `Label/Large 1/Regular` (19px)  | `Label/Small 1/Regular` (15px)  |
| Track Fill      | `core/green/light`              | `core/green/100` (Low) / `core/green/light` (Mid, High) |
| High Score Value| 75%                             | 100%                            |
| Ring width      | ~8px (80 × 0.2)                | ~6.4px (64 × 0.2)              |

## Implementation Notes

- The ring is constructed using two overlapping ellipses with `innerRadius: 0.8`, creating a donut shape with a track width of 20% of the diameter (~8px)
- The progress-fill arc is drawn on top of progress-bg to show the filled portion
- The label text is absolutely positioned at the center of the component
- All three scores share the same fill color (`core/green/medium`) — only the arc sweep angle changes
- The stroke on progress-fill matches the track color to create a clean edge between the filled and unfilled portions
```

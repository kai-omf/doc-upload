# Web Nav Bar

## Component Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Breakpoint | Variant | 320 | 320, 375, 428, 720, 1024, 1440, 1920 |
| # of items | Variant | 3 | 3, 4, 5, 6 |
| Back Button | Variant | False | False, True |
| Authenticated | Variant | True | True, False |

## Responsive Behavior

| Breakpoint | Height | Layout |
|------------|--------|--------|
| 320 | 64px | Mobile: Logo + Nav Menu Toggle |
| 375 | 64px | Mobile: Logo + Nav Menu Toggle |
| 428 | 64px | Mobile: Logo + Nav Menu Toggle |
| 720 | 64px | Mobile: Logo + Nav Menu Toggle |
| 1024 | 80px | Desktop: Logo + Primary Nav + Utility Nav + Button |
| 1440 | 80px | Desktop: Logo + Primary Nav + Utility Nav + Button |
| 1920 | 80px | Desktop: Logo + Primary Nav + Utility Nav + Button |

## Structure

    === Mobile (320–720) ===

    Web Nav Bar (HORIZONTAL auto-layout)
    ├── logo-truncated (INSTANCE)
    └── .Nav Menu Toggle (INSTANCE)

    === Mobile with Back Button ===

    Web Nav Bar (HORIZONTAL auto-layout)
    ├── Back Button (FRAME)
    │   └── State Layer > arrow-left (INSTANCE)
    ├── .Nav Menu Toggle (INSTANCE)
    └── logo-truncated (INSTANCE)

    === Desktop (1024–1920) ===

    Web Nav Bar (HORIZONTAL auto-layout)
    └── Content Area (FRAME)
        ├── Primary Navigation (FRAME)
        │   ├── logo-horizontal (INSTANCE)
        │   └── Primary Navigation (FRAME)
        │       └── .Primary Nav Item (INSTANCE) × [# of items]
        └── Secondary Navigation (FRAME)
            ├── Utility Nav Items (FRAME)
            │   └── .Utility Nav Item (INSTANCE) × 2
            └── Button (INSTANCE — "Log Out")

## Layout & Sizing

### Container
| Property | Mobile (320–720) | Desktop (1024–1920) | Token |
|----------|-----------------|---------------------|-------|
| Width | Matches breakpoint | Matches breakpoint | `breakpoint-320` / `breakpoint-375` / etc. |
| Height | 64px | 80px | `height/height-component-large3` (desktop) |
| Layout | Horizontal auto-layout | Horizontal auto-layout | — |
| Padding top/bottom | 8px | 8px | — |
| Padding left/right | 4px | 0px | — |
| Fill | White | White | `core/neutral/white` |
| Border (bottom) | 1px | 1px | `line/line-moderate` |

### Content Area (Desktop only)
| Property | Value | Token |
|----------|-------|-------|
| Height | 80px | `height/height-component-large3` |
| Layout | Horizontal auto-layout | — |
| Padding left/right | 32px | — |

### Primary Navigation (Nav Items Frame)
| Property | Value | Token |
|----------|-------|-------|
| Layout | Horizontal auto-layout | — |
| Item spacing | 32px | — |

### Logo to Nav Items Spacing
| Property | Value |
|----------|-------|
| Gap between logo and nav items | 40px |

### Secondary Navigation
| Property | Value | Token |
|----------|-------|-------|
| Layout | Horizontal auto-layout | — |
| Item spacing | 16px | `gap/gap-row-default` |

### Utility Nav Items
| Property | Value |
|----------|-------|
| Layout | Horizontal auto-layout |
| Item spacing | 8px |

## Child Components

### Logo
| Breakpoint | Component | Size |
|------------|-----------|------|
| Mobile (320–720) | `logo-truncated` | ~102×48px |
| Desktop (1024–1920) | `logo-horizontal` | 145×40px |

Logo fill color: `primary/primary`

### Primary Nav Items (Desktop)
| Property | Value |
|----------|-------|
| Component | `.Primary Nav Item` |
| Count | Controlled by "# of items" variant (3–6) |
| First item default state | `State=Current` |
| Other items default state | `State=Enabled` |

### Utility Nav Items (Desktop, Authenticated)
| Property | Value |
|----------|-------|
| Component | `.Utility Nav Item` |
| Count | 2 |
| Item spacing | 8px |

### Button (Desktop, Authenticated)
| Property | Value | Token |
|----------|-------|-------|
| Component | `Button` (Secondary, Default size) | — |
| Label | "Log Out" | — |
| Height | 40px | `height/height-component-small1` |
| Padding left/right | 24px | `padding/padding-x-component-default` |
| Corner radius | 999px (pill) | `radius-full` |
| Fill | Transparent | `secondary/secondary` |
| Stroke | — | `secondary/line-secondary` |
| Item spacing | 8px | `gap/gap-x-component-default` |

### Nav Menu Toggle (Mobile)
| Property | Value |
|----------|-------|
| Component | `.Nav Menu Toggle` |
| Default state | `State=Enabled` |

### Back Button (Mobile, when enabled)
| Property | Value |
|----------|-------|
| Icon | `arrow-left` (32×32) |
| Container | 48×48px with 40×40 circular state layer |
| Corner radius | `radius-full` |

## Color Tokens

| Element | Token |
|---------|-------|
| Background fill | `core/neutral/white` |
| Bottom border stroke | `line/line-moderate` |
| Logo fill | `primary/primary` |

## Notes

- Mobile breakpoints (320–720) show a simplified layout: logo + hamburger menu toggle
- Desktop breakpoints (1024–1920) show the full navigation with primary nav items, utility nav items, and a secondary button
- The "# of items" property only applies to desktop breakpoints (controls the number of `.Primary Nav Item` instances)
- "Back Button=True" only applies to mobile breakpoints, replacing the logo on the left with a back arrow
- "Authenticated=False" removes the Utility Nav Items and Button from the secondary navigation on desktop
- On mobile with Back Button, the logo moves to the right end and the nav menu toggle stays in the middle

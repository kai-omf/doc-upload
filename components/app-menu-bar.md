# Menu Bar

## Component Overview
A top-of-page navigation bar used across primary (home/landing) and secondary (sub-pages) page levels. Displays the brand logo or a back button depending on context, with optional utility actions and a page title that appears on scroll.
Component Set ID: 4011:1436

## Component Properties (Variants)

| Property      | Values            |
|---------------|-------------------|
| Page Level    | Primary, Secondary|
| State         | Default, Scrolling|
| Show Actions  | True, False       |

Total variants: 8

## Structure by Page Level

### Primary (Logo-based)

    Default:
    [Menu Bar] (Horizontal, space-between)
        ├── [logo-truncated] (Instance)
        └── [.Utility Nav Group] (Instance) — when Show Actions=True

    Scrolling:
    [Menu Bar] (Vertical)
        └── [Navigation Row] (Horizontal, space-between)
                ├── [logo-truncated] (Instance)
                └── [.Utility Nav Group] (Instance) — when Show Actions=True
        └── [Title Row] (hidden — reserved for scroll reveal)
                └── [Page Title] (Text)

### Secondary (Back-button-based)

    Default:
    [Menu Bar] (Horizontal, space-between or start)
        ├── [.Back Button] (Instance)
        └── [Text Link] (Instance) — when Show Actions=True

    Scrolling:
    [Menu Bar] (Vertical)
        └── [Navigation Row] (Absolute positioned)
                ├── [.Back Button] (Instance)
                ├── [Page Title] (Text, centered)
                └── [Text Link] (Instance) — when Show Actions=True

## Layout — Root Container

| Property                   | Token / Value              |
|----------------------------|----------------------------|
| Width                      | breakpoint-375 (375px)     |
| Height                     | 64px                       |
| Padding left / right       | 4px (Default) / 0 (Scrolling) |
| Padding top / bottom       | 8px (Default) / 0 (Scrolling) |
| Fill                       | none (transparent)         |
| Stroke                     | none                       |
| Effects                    | none                       |

### Default State Layout

| Property                   | Value                      |
|----------------------------|----------------------------|
| Layout mode                | Horizontal                 |
| Primary axis alignment     | Space-between (with actions) / Min (without) |
| Counter axis alignment     | Center (Primary) / Min (Secondary) |

### Scrolling State Layout

| Property                   | Value                      |
|----------------------------|----------------------------|
| Layout mode                | Vertical                   |
| Inner Navigation Row       | Horizontal / Absolute, fill width, 64px height |
| Navigation Row padding     | 4px left/right, 8–12px top/bottom |

## Child Components

### logo-truncated (Primary Page Level)

| Property      | Value                    |
|---------------|--------------------------|
| Size          | ~102×48 (hug × fixed)   |
| Padding       | 12px left/right, 16px top/bottom |
| Logo fill     | primary/primary          |
| Logo size     | ~78×14 (vector)          |

### .Back Button (Secondary Page Level)

| Property          | Value                          |
|-------------------|--------------------------------|
| Component variant | State=Enabled                  |
| Size              | 48×48                          |
| Icon              | arrow-left                     |
| Icon size         | size/size-icon-large1 (32×32)  |
| State Layer       | radius-full, 40×40             |

### .Utility Nav Group (Primary, Show Actions=True)

| Property          | Value                          |
|-------------------|--------------------------------|
| Component variant | # of Actions=2                 |
| Size              | 96×48 (hug)                    |

### Text Link (Secondary, Show Actions=True)

| Property          | Value                                  |
|-------------------|----------------------------------------|
| Component variant | State=Default, Polarity=Default        |
| Size              | ~73×48 (hug × fixed)                  |
| Item spacing      | gap/gap-x-component-small              |
| Padding           | 12px left/right, 12px top/bottom       |

#### Text Link — Label Typography

| Property    | Token                           |
|-------------|---------------------------------|
| Text style  | Label/Default/Regular           |
| Font family | font-family (Merchant Var)      |
| Font size   | Label/Default/Size (17px)       |
| Line height | Label/Default/Line Height (24px)|
| Fill        | primary/primary                 |

### Page Title (Scrolling State)

#### Secondary — Scrolling Page Title

| Property    | Token                                |
|-------------|--------------------------------------|
| Text style  | Label/Large 1/Medium                 |
| Font family | font-family (Merchant Var)           |
| Font size   | Label/Large 1/Size (19px)            |
| Line height | Label/Large 1/Line Height (24px)     |
| Fill        | body/body-emphasis                   |

#### Primary — Title Row Page Title (hidden, reserved for scroll)

| Property    | Token                                |
|-------------|--------------------------------------|
| Text style  | Headline/Page                        |
| Font family | font-family (Merchant Var)           |
| Font size   | Headline/Page/Size (30px)            |
| Line height | Headline/Page/Line Height (36px)     |
| Fill        | body/body-emphasis                   |

## Variant Content Summary

| Variant                                            | Left Content     | Right Content        | Center Content |
|----------------------------------------------------|------------------|----------------------|----------------|
| Primary, Default, Actions=True                     | logo-truncated   | .Utility Nav Group   | —              |
| Primary, Default, Actions=False                    | logo-truncated   | —                    | —              |
| Primary, Scrolling, Actions=True                   | logo-truncated   | .Utility Nav Group   | —              |
| Primary, Scrolling, Actions=False                  | —                | —                    | logo-truncated |
| Secondary, Default, Actions=True                   | .Back Button     | Text Link            | —              |
| Secondary, Default, Actions=False                  | .Back Button     | —                    | —              |
| Secondary, Scrolling, Actions=True                 | .Back Button     | Text Link            | Page Title     |
| Secondary, Scrolling, Actions=False                | .Back Button     | —                    | Page Title     |

## Resolved Dimensions (Reference)

| All Variants | Width | Height |
|--------------|-------|--------|
| Root         | 375px | 64px   |

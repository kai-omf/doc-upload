# Button

- **Status:** Experimental
- **Scope:** Designer-led proof of concept; not an approved production component
- **Owners:** POC repository owner
- **Last reviewed:** 2026-07-13
- **Related decisions:** [`ADR-0001`](../architecture/decisions/0001-establish-web-component-core-foundation.md), [`ADR-0002`](../architecture/decisions/0002-self-host-merchant-webfonts.md), [`ADR-0003`](../architecture/decisions/0003-isolate-poc-namespace.md), [`ADR-0004`](../architecture/decisions/0004-qualify-supported-platform-matrix.md), [`ADR-0005`](../architecture/decisions/0005-preserve-native-form-button-semantics.md), [`ADR-0006`](../architecture/decisions/0006-authorize-public-poc-distribution.md)

## Overview

The Button initiates an immediate user action. The POC core is a framework-neutral custom element named `oneapp-poc-button` backed by a native `button` in open Shadow DOM. Under ADR-0005, form-capable plain HTML, Angular, and React integrations use a native light-DOM `button` so submit and reset retain browser-defined behavior.

### Use when

- A user can perform an action such as saving, continuing, dismissing, or deleting.
- An action needs primary, secondary, tertiary, or destructive visual hierarchy.
- An action may contain a leading icon, a trailing icon, or only an icon.

### Do not use when

- The destination has a URL; use a native link or link component instead.
- A control represents a persistent on/off or selected state; use the applicable toggle control.
- A form depends on native submitter or reset behavior and the action-only `oneapp-poc-button` is the only available surface. Use the native plain-HTML or framework integration defined by ADR-0005 instead.
- A menu or split-button interaction is required; use a separately contracted composite component.

## Acceptance criteria

| ID | Requirement | WCAG 2.2 criteria | Evidence |
| --- | --- | --- | --- |
| `AC-01` | The component exposes one native `button` with `type="button"`; its default slot supplies the visible and accessible label. | 1.3.1, 2.1.1, 4.1.2 | Rendered component and accessibility tests. |
| `AC-02` | Pointer, Enter, and Space activation produce the native composed `click` event once, on release, while the button is available. | 2.1.1, 2.5.2, 4.1.2 | Browser interaction tests and manual keyboard check. |
| `AC-03` | `disabled` uses the native disabled state, removes the button from sequential focus, and prevents activation. | 2.1.1, 4.1.2 | Rendered component and browser interaction tests. |
| `AC-04` | `busy` preserves the accessible name and focusability, exposes `aria-busy="true"` and `aria-disabled="true"`, shows a progress indicator, and prevents duplicate activation. | 2.1.1, 2.2.1, 4.1.2, 4.1.3 | Rendered component, accessibility, and browser interaction tests. |
| `AC-05` | An icon-only button requires `accessible-label`; decorative icon slots are excluded from the accessibility tree. | 1.1.1, 2.4.6, 4.1.2 | Accessibility tests and manual accessibility-tree inspection. |
| `AC-06` | The four sizes, four hierarchies, two polarities, icon positions, hover, active, focus-visible, disabled, and busy states use the documented semantic tokens. | 1.4.3, 1.4.11, 2.4.7, 2.4.11 | Style assertions, token review, and visual review. |
| `AC-07` | Focus is delegated to the native button and has a visible token-driven indicator that remains visible in forced-colors mode. | 2.1.1, 2.4.7, 2.4.11, 1.4.11 | Browser focus test and manual forced-colors review. |
| `AC-08` | Every size is at least 24 by 24 CSS pixels; the label is not truncated and remains usable at 200% text size and 320 CSS-pixel reflow. | 1.4.4, 1.4.10, 1.4.12, 2.5.8 | Size assertions plus manual zoom, text-spacing, and reflow review. |
| `AC-09` | Loader motion stops when reduced motion is requested, and state remains perceivable in forced-colors mode. | 1.4.11, 2.3.3 | CSS assertion and manual preference review. |
| `AC-10` | The package can be imported without a browser global and registers `oneapp-poc-button` only when a custom-element registry is available. | N/A: package robustness. | Type checking, build, and package import test. |
| `AC-11` | The Button label resolves to the self-hosted Merchant font through the primary font-family token, with matching Light, Regular, Medium, and Bold webfont faces and a sans-serif fallback while fonts load or are unavailable. | 1.4.4, 1.4.10, 1.4.12 | Browser font-loading assertion, rendered review, and manual zoom/reflow review. |
| `AC-12` | `oneapp-poc-button` remains action-only: it exposes no form attributes and does not submit or reset an ancestor form. | 1.3.1, 2.1.1, 4.1.2 | Browser form-boundary tests. |
| `AC-13` | Plain-HTML, Angular, and React form-capable integrations render a native light-DOM `button` and preserve `type`, `name`, `value`, `form`, form override attributes, constraint validation, `SubmitEvent.submitter`, native submit/reset events, and implicit submission. | 1.3.1, 2.1.1, 3.2.2, 3.3.1, 3.3.2, 3.3.3, 3.3.4, 4.1.2 | Native form contract tests in plain HTML, Angular, and React fixtures plus manual form evaluation. |
| `AC-14` | Every native integration consumes the shared Button presentation rules; native `disabled` behavior is preserved, while `busy` remains focusable, exposes its state, and prevents click, submit, or reset activation. | 1.4.3, 1.4.11, 2.1.1, 2.4.7, 2.4.11, 2.5.2, 4.1.2, 4.1.3 | Shared visual/state tests, native form tests, and manual keyboard and accessibility-tree review. |

## Anatomy

1. Host custom element: `oneapp-poc-button`.
2. Native action: one `button[type="button"]` in open Shadow DOM.
3. Optional `icon-start` slot.
4. Default label slot.
5. Optional `icon-end` slot.
6. Decorative busy indicator overlaid without removing the label from the accessibility tree.

The supported compositions are label only, start icon and label, label and end icon, or one icon without a visible label. Supplying both icon slots is unsupported in this experimental version.

Form-capable integrations use a native light-DOM `button` with equivalent label and icon anatomy. They share the same supported visual variants and state rules without wrapping or replacing the browser's form control.

## Public API

### Properties and attributes

| Name | Type | Default | Reflected | Description |
| --- | --- | --- | --- | --- |
| `hierarchy` | `"primary" \| "secondary" \| "tertiary" \| "destructive"` | `"primary"` | Yes | Visual importance and action intent. Unsupported attribute values fall back to `primary`. |
| `size` | `"small" \| "default" \| "large-1" \| "large-2"` | `"default"` | Yes | Component height, typography, icon size, gap, and padding. |
| `polarity` | `"default" \| "inverse"` | `"default"` | Yes | Selects tokens appropriate to the surrounding surface. |
| `disabled` | `boolean` | `false` | Yes | Applies native disabled behavior. Presence means true. |
| `busy` | `boolean` | `false` | Yes | Prevents activation while preserving focus and exposing busy state. Presence means true. |
| `accessibleLabel` / `accessible-label` | `string` | `""` | No | Required accessible name for an icon-only button. Ignored when visible label content exists. |

The component intentionally does not expose a `type` property in this version. The internal native button is always `type="button"`.

The native plain-HTML, Angular, and React integrations expose `type`, `name`, `value`, `form`, `formAction`, `formEncType`, `formMethod`, `formNoValidate`, and `formTarget` using the conventional casing for each surface. These attributes are not added to `oneapp-poc-button`.

### Native HTML styling and behavior API

Consumers import `@oneapp-poc/web-components/button.css` and apply `data-oneapp-poc-button` to a native `button`. The same stylesheet is the canonical presentation source used inside `oneapp-poc-button`.

| Attribute | Values | Default | Purpose |
| --- | --- | --- | --- |
| `data-oneapp-poc-button` | Empty attribute | Required | Selects the native Button presentation rules. |
| `data-hierarchy` | `primary`, `secondary`, `tertiary`, `destructive` | `primary` | Matches the Custom Element hierarchy. |
| `data-size` | `small`, `default`, `large-1`, `large-2` | `default` | Matches the Custom Element size. |
| `data-polarity` | `default`, `inverse` | `default` | Matches the Custom Element polarity. |
| `data-busy` | `true` or omitted | Omitted | Selects the focusable busy presentation and activation guard. |
| `data-icon-only` | `true` or `false` | `false` | Selects square icon-only layout. |
| `data-has-start` / `data-has-end` | `true` or `false` | `false` | Selects logical icon padding. |

Supported native anatomy uses `data-oneapp-poc-button-content`, `data-oneapp-poc-button-label`, optional `data-oneapp-poc-button-icon="start|end"`, and optional `data-oneapp-poc-button-loader` descendants. Icons and loaders remain decorative and require `aria-hidden="true"`.

`setOneAppPocNativeButtonBusy(button, busy)` synchronizes `data-busy`, `aria-busy`, and `aria-disabled`. `connectOneAppPocNativeButton(button)` installs the capture-phase activation guard and returns a cleanup function. Consumers must call the cleanup function when the button is removed. These helpers do not change `disabled`, `type`, form ownership, or native form attributes.

### Events

No custom events are emitted. Consumers use the native composed `click` event retargeted to `oneapp-poc-button`. Disabled and busy buttons do not emit an actionable click.

### Slots and composition

| Slot | Allowed content | Fallback | Notes |
| --- | --- | --- | --- |
| Default | Short phrasing content | None | Supplies the visible label and accessible name. Interactive descendants are not allowed. |
| `icon-start` | One decorative SVG or icon element | None | Hidden from assistive technology by the component. |
| `icon-end` | One decorative SVG or icon element | None | Hidden from assistive technology by the component. |

### Methods

There are no component-specific imperative methods. The inherited `focus()` method delegates focus to the native button.

## States and behavior

- **Enabled:** focusable and activatable through native button behavior.
- **Hover:** applies only on hover-capable input devices.
- **Active:** uses the pressed visual tokens while native activation is in progress.
- **Focus visible:** shows a four-CSS-pixel focus indicator without changing layout.
- **Disabled:** the internal button has `disabled`; no focus or activation is available.
- **Busy:** the internal button remains focusable, sets `aria-busy` and `aria-disabled`, blocks activation, and visually replaces content with a loader while leaving label content available to the accessibility tree.
- **Disabled and busy together:** disabled takes precedence. The component remains visually disabled and does not expose a separate busy state.
- **Icon only:** inferred when the default slot has no rendered text or element. `accessible-label` then supplies the accessible name.

Hover, active, and focus are user-agent interaction states, not author-settable properties.

## Accessibility contract

### Semantics

- A native `button[type="button"]` owns interaction, keyboard handling, accessible name, and disabled semantics.
- Form-capable integrations expose an actual native light-DOM `button`; native validation, submitter identity, implicit submission, reset behavior, and form events remain browser-owned.
- Visible label content supplies the accessible name. `accessible-label` is applied only for icon-only composition so it cannot replace a visible label.
- Icon containers use `aria-hidden="true"` and are decorative. A meaningful icon must also be described by the label.
- Busy state uses `aria-busy="true"` and `aria-disabled="true"`; it does not move focus or introduce an unsolicited live region.
- Consumers must provide persistent status outside the button when an operation needs progress details or can exceed an expected short wait.

### Keyboard interaction

| Key | Context | Result |
| --- | --- | --- |
| `Tab` / `Shift+Tab` | Enabled or busy | Moves focus to or from the native button in document order. |
| `Enter` | Focused and enabled | Activates once using native button behavior. |
| `Space` | Focused and enabled | Activates once on key release using native button behavior. |
| `Enter` or `Space` | Busy | Does not activate; focus remains on the button. |

Disabled buttons are omitted from sequential focus according to native behavior.

### Focus management

The Shadow Root delegates focus to the native control. The component never moves focus on activation or state change. Consumers own focus movement caused by the resulting workflow. If `disabled` is set while the button is focused, native browser behavior applies; use `busy` instead when focus should remain stable during an operation.

### WCAG 2.2 criteria

The component is designed to support 1.1.1 Non-text Content, 1.3.1 Info and Relationships, 1.4.3 Contrast (Minimum), 1.4.4 Resize Text, 1.4.10 Reflow, 1.4.11 Non-text Contrast, 1.4.12 Text Spacing, 2.1.1 Keyboard, 2.4.6 Headings and Labels, 2.4.7 Focus Visible, 2.4.11 Focus Not Obscured (Minimum), 2.5.2 Pointer Cancellation, 2.5.8 Target Size (Minimum), 4.1.2 Name, Role, Value, and 4.1.3 Status Messages where the surrounding workflow reports asynchronous outcomes.

Complete-page conformance depends on consumer content, placement, surrounding surfaces, focus behavior, and status messaging.

## Responsive and mobile behavior

- Width hugs content and may grow up to the available inline size.
- Labels wrap rather than truncate. Consumers should keep labels concise.
- CSS logical properties preserve right-to-left layout. Slot position is logical start or end, not physical left or right.
- Sizes are 32, 40, 48, and 64 CSS pixels high; every size exceeds the WCAG 2.2 minimum target size of 24 by 24 CSS pixels. Prefer `large-1` or `large-2` for primary mobile actions where a 44-pixel target is appropriate.
- No behavior depends on hover, orientation, gestures, safe areas, or virtual-keyboard state.
- Capacitor consumers receive the same browser-rendered semantics and interaction.

## Content and localization

- Use a concise verb-led label that names the action and remains correct out of context.
- Do not use icon-only composition when a short visible label is practical.
- Labels may wrap and expand for localization; no fixed width or truncation is applied.
- Avoid embedding direction-specific spacing or arrow meaning in label text. Icon slots follow logical inline direction.
- Destructive labels must name the destructive action rather than use vague wording such as “OK.”

## Tokens and styling

The component consumes the existing `--omf-cx-*` semantic color, typography, size, spacing, shape, and focus tokens from `tokens/tokens.css`. It does not embed resolved theme color values. `tokens/tokens.css` defines the self-hosted Merchant font faces under ADR-0002.

- **Shadow DOM:** open, with `delegatesFocus: true`, under ADR-0001.
- **CSS parts:** none in the experimental contract.
- **Custom properties:** no component-specific public properties. Global semantic token names are the supported theming surface during the token-pipeline spike.
- **Forced colors:** uses system colors for foreground, boundary, disabled state, and focus indication.
- **Reduced motion:** stops the busy indicator animation without removing its visible shape.

The destructive inverse treatment intentionally retains the negative text token rather than the white text shown in the design-only source because the current inverse negative surface token is light; accessibility takes precedence over that visual mismatch.

## Framework integration

### Angular

The Angular integration is the standalone `OneAppPocButtonDirective` with selector `button[oneappPocButton]`. Requiring a native `button` in the selector prevents the directive from creating wrapper markup or attaching Button semantics to the wrong host.

- Typed `hierarchy`, `size`, `polarity`, and `busy` inputs map to the shared `data-*` presentation state. Unsupported string values fall back to the documented defaults.
- Consumers use native `[disabled]`, `type`, `name`, `value`, `form`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, and `formtarget` bindings or attributes directly on the button.
- Visible content supplies the accessible name. Icon-only Angular buttons use the native `aria-label` attribute or binding; the directive does not replace a visible label.
- The directive emits no custom output. Consumers use native `(click)`, form `(submit)`, or Angular `(ngSubmit)` behavior.
- The directive does not implement `ControlValueAccessor`, because a button does not own a form value.
- Consumers import `@oneapp-poc/web-components/button.css` once; the directive adds `data-oneapp-poc-button` and consumes that same generated presentation source.
- The directive installs the shared capture-phase busy activation guard and removes it when destroyed.

### React

The React integration renders a native light-DOM `button` and exposes corresponding typed props, `children`, icons, native form attributes, `onClick`, and a ref to `HTMLButtonElement`. Direct custom-element usage remains available for action-only cases, and importing the core module is safe during server rendering because registration is guarded when `customElements` is unavailable.

The plain-HTML integration and Angular directive are implemented. The React integration remains follow-up work under ADR-0005 and AC-13 through AC-14.

## Test plan

### Automated

- `AC-01`, `AC-03`–`AC-05`, `AC-10`: rendered DOM, property, and accessibility tests.
- `AC-02`–`AC-04`, `AC-07`: real-browser click, disabled, busy, focus, Enter, and Space interaction tests.
- `AC-06`, `AC-08`, `AC-09`: computed style, target-size, token reference, and preference CSS tests.
- `AC-10`: strict TypeScript build and Node import smoke test.
- `AC-11`: real-browser `FontFaceSet` loading and computed font-family assertions.
- `AC-12`: real-browser tests proving the Custom Element does not submit or reset an ancestor form.
- `AC-13`, `AC-14`: plain-HTML browser tests cover validation, submitter identity, form data, overrides, implicit submission, reset, busy, and shared presentation rules. Packed Angular 20.3.26 and 22.0.6 consumer applications add strict-template build and Chromium runtime evidence for the directive. The packed React native-form fixture remains follow-up work.

### Manual

- `AC-01`, `AC-05`: inspect name, role, state, and icon hiding in a supported accessibility tree.
- `AC-02`, `AC-07`: keyboard-only activation and focus visibility.
- `AC-06`, `AC-08`: visual review in all themes, states, sizes, at 200% text size, 320 CSS-pixel reflow, and text-spacing overrides.
- `AC-07`, `AC-09`: forced-colors and reduced-motion review.
- `AC-08`: touch-target review on representative iOS and Android devices when integrated into the Capacitor application.
- `AC-11`: Merchant rendering, 200% text resize, text-spacing, fallback-font, and 320 CSS-pixel reflow review.
- `AC-13`, `AC-14`: keyboard-only form submission and reset, accessibility-tree inspection, form error recovery, and representative desktop and mobile screen-reader evaluation.

## Compatibility and release

The component and publicly distributable packages remain experimental under the isolated POC namespace approved in ADR-0003 and ADR-0006. Merchant distribution, the candidate support matrix, and the native form strategy are accepted for POC scope through ADR-0002, ADR-0004, and ADR-0005. The automated core suite passes in Playwright Chromium, Firefox, and WebKit, and the Angular integration passes packed consumer checks at the Angular 20 and 22 endpoints; this evidence is not real-browser or assistive-technology qualification. The React integration, real Chrome, Edge, Firefox, and Safari checks, visual regression baselines, assistive-technology evaluation, and Capacitor device coverage remain incomplete and are required before any production proposal.

This is a new API with no migration impact. Changing the custom-element name, reflected attributes, slots, or busy/disabled behavior after adoption will require migration guidance.

# DESIGN-643 — My outstanding tasks

Source: all comments on [DESIGN-643 "Document Upload to Doc Center"](https://onemainfinancial-training.atlassian.net/browse/DESIGN-643).
Owner: Kai. Compiled as of July 27, 2026.

## Design / build (prototype)

- [ ] **"One document requested" view.** Build the single-requested-document case. Blocked on: final direction locked. _(7/24 async w/ Michael)_
- [ ] **Empty / expired-request state.** Design the "No document is being requested, please contact your team member" state for when someone reaches the upload page with no active or an expired request. Michael confirmed it's still needed because the page has its own URL that can be bookmarked, refreshed, or hit after expiry. _(7/24 async)_
- [ ] **"Other" free-text label.** Likely removing the label/note. Blocked on: Michael's double-check with the Doc Center team before I change the design. _(7/24 async)_
- [ ] **Right-hand status module (per-document rail).** Michael questioned whether it's necessary; evaluate and decide. _(7/24 async)_

## Validation / coordination

- [ ] **Cards team.** Validate whether their upload scenarios are single-document. _(7/17 review)_
- [ ] **Cross-product UI alignment.** Connect with Bertha (with Nicole) to align the document-upload UI presentation for consistency across platforms. _(7/10 intake)_

## Waiting on others (may need my design follow-up)

- **Front and back of an ID in a single upload.** Michael to confirm backend capability. If unsupported, adjust the design. _(7/24 async)_
- **Direction decision.** Michael reviewing the emailed entry point and Option C, and whether C addresses the tagging concern. My next build steps depend on the outcome. _(7/24 async)_

## Recently completed (for reference)

- Doc Center entry-point widget: https://kai-omf.github.io/doc-upload/loans/document-center/
- Per-document single-page direction, "Instant Upload" (Option C): https://kai-omf.github.io/doc-upload/c/
- Re-pointed the A/B summary-page banners for entry-to-summary continuity; prototype live on desktop and mobile with a scenario explorer.
- TRIM upload process verified with Bertha. _(7/10 intake task)_

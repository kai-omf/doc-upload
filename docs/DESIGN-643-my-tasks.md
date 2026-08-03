# DESIGN-643 — My outstanding tasks

Source: all comments on [DESIGN-643 "Document Upload to Doc Center"](https://onemainfinancial-training.atlassian.net/browse/DESIGN-643).
Owner: Kai. Compiled July 27, 2026. Updated August 3, 2026 after Michael's direction confirmation.

## Design / build (prototype)

- [ ] **One-document-requested view.** Build the single-requested-document case. Now unblocked: direction is locked on Option C. _(7/24, confirmed 7/28)_
- [ ] **"No documents requested" empty state.** For the standalone page when someone lands with no active or an expired request. Michael confirmed it is still needed because the page has its own URL. _(7/24, confirmed 7/28)_
- [ ] **"Other" redesign.** Show the team-member-entered "Additional Description" as a read-only label; remove the customer note field and its note-gating. _(Resolved 7/28: the "Other" text is entered by the team member in the request tool and passed through, not user-generated.)_
- [ ] **Front and back on the photo ID.** Accept a front and a back image, uploaded together against that one document ID. _(Backend confirmed 7/28.)_

## Validation / coordination

- [ ] **Cards team.** Validate whether their upload scenarios are single-document. _(7/17 review)_
- [ ] **Cross-product UI alignment.** Connect with Bertha (with Nicole) to align the document-upload UI presentation for consistency across platforms. _(7/10 intake)_

## Waiting on others

- **Front/back scope.** Michael to confirm whether front/back is specific to the photo ID or applies to any document that can take more than one file. _(asked 7/28)_
- **Desktop status rail.** Michael to confirm whether to keep the right-side status rail in Option C or simplify it, per his earlier note. _(asked 7/28)_

## Resolved / completed

- Direction decided: **Option C** (per-document upload). _(7/28)_
- Tagging concern resolved by Option C. _(7/28)_
- "Other" model clarified: team-member-entered label, not user-generated. Feeds the "Other" redesign task above. _(7/28)_
- Front and back of an ID: backend confirmed. Feeds the photo ID build task above. _(7/28)_
- Doc Center entry-point widget: https://kai-omf.github.io/doc-upload/loans/document-center/
- Per-document single-page direction, "Instant Upload" (Option C): https://kai-omf.github.io/doc-upload/c/
- Re-pointed the A/B summary-page banners for entry-to-summary continuity; prototype live on desktop and mobile with a scenario explorer.
- TRIM upload process verified with Bertha. _(7/10 intake task)_

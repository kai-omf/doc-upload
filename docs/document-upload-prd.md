# Product Requirements Document: Document Upload via Document Center

## Document control

| Field | Value |
| --- | --- |
| Product area | OneMain Document Center |
| Initiative | Document Upload via Document Center |
| Source intake | [DESIGN-757](https://onemainfinancial-training.atlassian.net/browse/DESIGN-757) |
| Parent initiative | DESIGN-643 — Document Upload to Doc Center |
| Product / business owner | Michael Oliver |
| Requestor | Jeanette Krauss-Fehlhafer |
| Target channels | Mobile app and web |
| Status | Draft for product, operations, design, engineering, security, and compliance review |
| Last updated | 2026-07-14 |

## 1. Summary

Customers with an active document request need a secure, self-service way to submit one or more documents in the Document Center. Today, customers may need to use fax, physical drop-off, or personal email. Those paths add friction, delay servicing, create operational work, and increase security risk.

This initiative adds a Document Upload experience that presents the customer's active request, identifies the documents requested, lets the customer upload a file against a requested document or an `Other` catchall, and clearly communicates the outcome for each document in the current experience. The experience must support retrying a failed upload and replacing or re-uploading a file before submission.

The PRD deliberately excludes persistent confirmation across navigation and sessions. A completed upload may be shown in the active in-memory experience, but this initiative does not establish a durable upload-history or confirmation capability.

## 2. Problem statement

Customers lack a convenient, secure digital route for requested-document submission. Reliance on fax, branch/physical drop-off, or personal email can cause:

- Extra effort for customers and team members.
- Delayed completion of document requests.
- Manual handling and operational overhead.
- Security and privacy concerns from offline or informal delivery channels.

The product opportunity is to make the Document Center the trusted, self-service path for document submission when a customer has an active request.

## 3. Goals and intended outcomes

### Goals

1. Give customers a secure digital route to submit documents for an active request.
2. Reduce friction and servicing effort relative to fax, physical drop-off, and personal email.
3. Make the state of every requested document understandable: outstanding, in progress, uploaded for the current experience, or failed.
4. Support multi-document completion without making customers lose track of the request.
5. Give customers a clear recovery path when an upload fails.

### Intended outcomes

- Higher digital document-submission and request-completion rates.
- Faster customer completion and servicing turnaround.
- Lower manual-handling burden for operations and branch teams.
- Increased customer confidence that the submitted document is handled securely.

### Primary measure

| Measure | Definition | Source | Cadence |
| --- | --- | --- | --- |
| Digital document submission / completion rate | Percentage of eligible active document requests with successful digital document submission and/or completion, using the final measurement definition agreed by product and analytics. | Branch data, with supporting operational/call-center data as applicable | Ongoing |

The intake does not provide a baseline, target, or a final numerator/denominator definition. Analytics and product must define those before launch measurement is approved.

## 4. Users and stakeholders

### Primary user

Present OneMain customers with an active loan-related document request who need to submit one or more documents.

### Secondary users

- Branch and servicing team members who benefit from reduced manual document handling.
- Operations teams responsible for request completion and follow-up.
- Document Management Team, which has a cross-system dependency in this workflow.

### Key stakeholders

- Product / business owner: Michael Oliver.
- Requestor: Jeanette Krauss-Fehlhafer.
- Operations sponsors identified in the intake: Jason Lane and Dana W.
- Document Management Team.
- Security, legal, compliance, analytics, customer communications, and training partners.

## 5. Scope

### In scope

- Surface Document Center only when the customer has an active document request.
- Support multiple document uploads for one active request.
- Show the requested documents supplied by the backend, plus an `Other` catchall upload path.
- Allow a customer to upload a file against a specific requested document or `Other`.
- Show a clear per-document state: pending/outstanding, in progress, uploaded in the current experience, or failed.
- Validate basic file type and file-size requirements before submission.
- Allow a customer to replace or re-upload a selected document before submission.
- Show a recoverable failed-upload state and allow retry.
- Distinguish documents that are completed from those still outstanding in the active experience.
- Support drag-and-drop upload on web.
- Require a user-entered label/note for `Other` uploads so the document type is understandable.
- Provide analytics, customer-communication, and training change support as indicated by the intake.

### Explicitly out of scope

- Persistent success or confirmation across navigation or app/browser sessions.
- A persistent history of previously uploaded documents within an active request.
- Notifications or reminders for outstanding documents.
- New request creation or request-management capabilities.
- A replacement for upstream document-request creation, document-management processing, or downstream servicing workflows.

### Clarification: `Other` document uploads

`Other` does not mean an arbitrary optional attachment. It is the catchall category for a valid active upload request whose backend data does not name a specific document type. The customer must be able to add a label/note explaining the document type they are uploading, for example, `Employment verification letter`. The note is required before an `Other` upload can be submitted.

## 6. User experience requirements

### 6.1 Entry and availability

- **UX-01:** The Document Center must appear only to customers with an active document request.
- **UX-02:** If there is no active request, the product must not expose the upload flow as an available action.
- **UX-03:** The entry experience must identify the active request sufficiently for the customer to understand what it relates to, without exposing unnecessary sensitive information.

### 6.2 Request overview

- **UX-04:** The page title is `Document Upload`.
- **UX-05:** The experience must show an active-request summary and the count or otherwise clear representation of outstanding and completed documents in the current experience.
- **UX-06:** The visual hierarchy must make the next customer action clear while preserving access to every requested document.
- **UX-07:** The design must distinguish outstanding, in-progress, uploaded, and failed states with text and non-color cues.

### 6.3 Requested document uploads

- **UX-08:** The experience must list each backend-provided requested document as a separately actionable item.
- **UX-09:** A customer must be able to choose a file and associate it with the selected requested-document item.
- **UX-10:** A customer must be able to submit more than one document for the same active request.
- **UX-11:** Before final submission, a customer must be able to remove, replace, or re-upload a selected file.
- **UX-12:** On web, the selected-document upload control must support drag-and-drop in addition to a standard file-picker path. The file-picker path remains available for all supported channels.

### 6.4 Other uploads

- **UX-13:** The experience must provide an `Other document` item whenever the active request includes a document type that is not explicitly named by backend data.
- **UX-14:** The `Other document` item must clearly explain why the note is needed and provide a labeled input for the customer to identify the document type.
- **UX-15:** The product must prevent submission of an `Other` document without a non-empty, customer-provided document-type label/note.
- **UX-16:** The customer-entered `Other` note must travel with the upload to the downstream processing system, subject to security and compliance requirements.

### 6.5 Progress, outcome, and recovery

- **UX-17:** An upload in progress must display a perceivable progress indicator and status text. The customer must not need to infer that the action is still running.
- **UX-18:** A successful upload must update the associated document item to an uploaded/completed state within the current experience.
- **UX-19:** A failed upload must identify the affected document, explain the error in plain language when a safe explanation is available, and offer a retry action.
- **UX-20:** Retrying must retain the document association and, for `Other`, retain the entered document-type note for the current experience unless the customer deliberately changes it.
- **UX-21:** File-validation failures must explain the corrective action, such as choosing a supported file type or a smaller file.
- **UX-22:** Completed and outstanding items must remain visually distinct so a customer can understand what still needs attention.

### 6.6 Confirmation boundary

- **UX-23:** This release does not promise that an uploaded or completed state will persist after navigation away from the experience, application restart, browser refresh, or a new session.
- **UX-24:** The design and content must not imply durable history, cross-session confirmation, or a permanently stored customer-visible receipt unless a later initiative explicitly adds that capability.

## 7. Functional requirements

| ID | Requirement |
| --- | --- |
| FR-01 | The system receives the active document request and its requested-document metadata from an authoritative backend source. |
| FR-02 | The system supports multiple uploads associated with one active request. |
| FR-03 | The upload payload includes the active-request identifier, selected requested-document identifier or `Other` designation, file metadata, and the `Other` note when applicable. |
| FR-04 | The client validates configured file type and file-size constraints before upload. Server-side validation remains authoritative. |
| FR-05 | The system exposes upload lifecycle states sufficient to render pending, uploading, uploaded, and failed states per document. |
| FR-06 | The customer can replace a selected file before submission and retry after a failed attempt. |
| FR-07 | Web supports drag-and-drop; mobile app supports native or platform-appropriate file selection. |
| FR-08 | The system records analytics events needed to measure exposure, document selection, validation failure, upload start, upload success, upload failure, retry, and request completion. Event payloads must not include document contents or unnecessary sensitive personal information. |
| FR-09 | The feature is available only when backend eligibility indicates an active request. |
| FR-10 | Customer-facing status and error messages are available to the user programmatically and visually, following the accessibility requirements below. |

## 8. Content requirements

- Use `Document Upload` as the page title.
- Use clear, customer-centered document names and supporting descriptions provided by the request source where safe and available.
- Label the catchall path `Other document` and explain that the customer should describe the file they are uploading.
- The note label should be explicit, for example, `Document type` or `What document are you uploading?`; placeholder text is supplementary and cannot be the only label.
- Use plain-language validation and error content. Avoid exposing internal error codes, backend identifiers, or security-sensitive diagnostics.
- State what remains outstanding and what has been completed within the active experience.
- Do not state or imply that a confirmation is permanent in this release.

## 9. Accessibility requirements

The experience must target WCAG 2.2 Level AA. These requirements apply to both web and mobile-app implementations where applicable.

| ID | Requirement |
| --- | --- |
| A11Y-01 | Every file picker, drop zone, retry control, replace control, and note input has an accessible name and clear instructions. |
| A11Y-02 | Drag-and-drop is an enhancement only; the standard file-picker path supports the same task without drag-and-drop. |
| A11Y-03 | Upload state, progress, success, validation feedback, and failure feedback are exposed programmatically and announced appropriately without unnecessarily moving focus. |
| A11Y-04 | Status is not conveyed by color alone; visible labels, icons, and text distinguish state. |
| A11Y-05 | Errors identify the related document and, when possible, include a programmatic relationship to the corrective control or instruction. |
| A11Y-06 | Keyboard users can reach, operate, and retry every upload control on web in a logical order. Focus remains visible and predictable after validation errors, upload completion, and retry. |
| A11Y-07 | All text, icons, focus indicators, and controls meet applicable contrast and target-size requirements. |
| A11Y-08 | The interface supports text resizing, reflow, screen readers, and responsive layouts without hiding required status or recovery actions. |

## 10. Security, privacy, and compliance

- Uploaded files must use approved secure transport, storage, encryption, malware/security scanning, authorization, and retention controls. The precise controls are subject to security and compliance review.
- The upload service must enforce authorization so a customer can submit only against their eligible active request.
- Client-side validation improves feedback but does not replace server-side file-type, size, content, and authorization validation.
- Error content must avoid revealing sensitive implementation, customer, or document-processing details.
- The `Other` note may contain customer-entered information; data handling, logging, analytics, and retention must be reviewed accordingly.
- Legal and compliance review is required before release, consistent with the intake's identified need.

## 11. Analytics and measurement plan

Analytics changes are required by the intake. Instrumentation should enable the funnel below while minimizing sensitive data collection.

| Funnel point | Suggested event | Required properties |
| --- | --- | --- |
| Eligible experience viewed | `document_upload_viewed` | Request eligibility, channel, number of requested documents |
| Requested document selected | `document_upload_document_selected` | Document category (`predefined` or `other`), document identifier where permitted |
| File chosen | `document_upload_file_selected` | Document category, file type, file-size bucket; never file contents or filename unless approved |
| Validation failed | `document_upload_validation_failed` | Validation reason category, document category |
| Upload started | `document_upload_started` | Document category, channel |
| Upload succeeded | `document_upload_succeeded` | Document category, elapsed-time bucket |
| Upload failed | `document_upload_failed` | Safe error category, document category |
| Retry selected | `document_upload_retry_selected` | Safe error category, document category |
| Request completed in current experience | `document_upload_request_completed` | Number of documents completed, channel |

Product and analytics must finalize event names, taxonomy, data classification, identity handling, and the authoritative completion-rate calculation before implementation is considered measurement-ready.

## 12. Dependencies

| Dependency | Why it is needed | Owner / partner |
| --- | --- | --- |
| Active-request data | Determines eligibility and the document list. | Product and backend teams |
| Document Management integration | Receives/associates uploads and returns safe outcomes. | Document Management Team |
| Secure upload platform | Validates, transfers, scans, stores, and authorizes files. | Engineering, security, platform partners |
| Analytics implementation | Measures the funnel and primary outcome. | Analytics and engineering |
| Customer communications | Sets expectations and channels customers to the digital experience. | Customer communications |
| Training | Prepares branch, servicing, and operations partners for the changed workflow. | Operations and training |
| Legal / compliance review | Confirms file handling, disclosures, retention, and content requirements. | Legal, compliance, security |

## 13. Assumptions and constraints

### Assumptions from the intake

1. Customers will consider the Document Center a secure and trusted destination for document submission.
2. A digital upload path will reduce friction for customers and team members.
3. An active request can supply enough metadata to identify the requested documents or indicate that a catchall `Other` path is needed.

### Known constraints

- The feature has a cross-system dependency on the Document Management Team.
- The source intake lists basic validation but does not define accepted file types, file-size limits, virus-scanning behavior, or failure taxonomy.
- The source intake lists a high confidence level and operational-review validation method but does not provide an evidence link, baseline, or numeric target.
- Persistent confirmation, customer-visible upload history, and outstanding-document reminders are intentionally deferred.

## 14. Open decisions

These decisions are necessary to finalize delivery but are not supplied by the intake. They require product, operations, engineering, security, and compliance direction rather than design inference.

1. Which file types, maximum file sizes, and document-count limits are supported per request?
2. What downstream acknowledgment is required before a document is considered uploaded versus completed?
3. How should the experience behave if an upload completes after the user navigates away, refreshes, or loses connectivity, given the explicit non-persistence scope?
4. What copy, disclosure, and escalation path applies when a document cannot be uploaded digitally?
5. Are there document categories that require additional consent, warnings, or special handling?
6. What identity, authorization, and request-expiration behavior applies if the active request changes while the customer is in the flow?
7. What information from a failed upload may safely be shown to the customer?
8. What is the approved analytics taxonomy and primary-metric calculation?
9. What support, training, and customer-communication content must be ready at launch?

## 15. Acceptance criteria

### Eligibility and request visibility

- **AC-01:** A customer with no active document request cannot access a document-upload action from Document Center.
- **AC-02:** A customer with an active request sees the Document Upload experience and an identifier or summary for that request.
- **AC-03:** Every backend-provided requested document is represented as an actionable item.

### Upload and document association

- **AC-04:** A customer can select a valid file for a specific requested document.
- **AC-05:** A customer can upload more than one document for the same active request.
- **AC-06:** A customer can replace a selected file before submission.
- **AC-07:** On web, the customer can choose a file using either the file picker or drag-and-drop.
- **AC-08:** A selected file is associated with the intended active request and requested-document item or `Other` category.

### Other-document behavior

- **AC-09:** The experience provides an `Other document` path for unnamed/catchall request types.
- **AC-10:** An `Other document` upload cannot be submitted without a non-empty document-type note.
- **AC-11:** The submitted `Other` note is included with the upload association sent downstream.

### States and recovery

- **AC-12:** Each document item displays an understandable outstanding, uploading, uploaded, or failed state as applicable.
- **AC-13:** An in-progress upload displays status and progress without relying on color alone.
- **AC-14:** A successful upload updates only the associated document item to an uploaded/completed state in the current experience.
- **AC-15:** A failed upload identifies the affected document and offers a retry action.
- **AC-16:** Retrying an `Other` upload preserves the entered note for the current experience unless the customer changes it.
- **AC-17:** Invalid file type or file size prevents submission and explains how to correct the issue.

### Scope boundary and accessibility

- **AC-18:** The product does not claim persistent confirmation, cross-session status, or customer-visible document history in this release.
- **AC-19:** Every upload and recovery control is operable with keyboard on web and has an accessible name.
- **AC-20:** The standard file-picker route is available even when drag-and-drop is supported.
- **AC-21:** Status and errors are programmatically exposed to assistive technology and visually distinguishable without color alone.
- **AC-22:** No required status, note, file-selection, retry, or validation action is clipped or lost at supported responsive sizes and text scaling.

## 16. Release readiness

The initiative is ready to release only when:

- The acceptance criteria above have documented evidence.
- Security, legal, compliance, privacy, and accessibility reviews are complete or have formally accepted residual risk.
- File-validation constraints and downstream error taxonomy are agreed and implemented.
- Analytics instrumentation and the primary-metric definition are approved.
- Customer-facing content, operations procedures, customer communication, and training are ready.
- The Document Management integration has been tested for successful uploads, validation failures, recoverable failures, retry, and active-request eligibility.
- The release documentation explicitly describes the non-persistence boundary.

## 17. Design reference

The current Pencil explorations are working concepts, not a committed interaction specification. The selected design must satisfy this PRD, use the existing design system where applicable, and preserve the accessibility and scope requirements above.


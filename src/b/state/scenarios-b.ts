// Demo scenarios for Option B (Guided Flow) — jump the store straight to a state and focus the
// relevant document so the panel / drill-in shows it. Consumed by the scenario dock.
import { store, type DocState } from "./store";
import { sampleFile } from "../../shared/dev/sample-doc";

export interface Scenario {
  id: string;
  label: string;
  group?: string;
  apply: () => void;
}

const FILE: Record<string, DocState["file"]> = {
  "proof-of-income": sampleFile("paystub-june-2026.pdf", "PDF", "215 KB"),
  "photo-id": sampleFile("drivers-license-front.jpg", "JPG", "1.4 MB"),
  "proof-of-residence": sampleFile("utility-bill-june.pdf", "PDF", "412 KB"),
  other: sampleFile("bank-statement.pdf", "PDF", "2.4 MB"),
};
const uploadedAll: Record<string, Partial<DocState>> = {
  "proof-of-income": { status: "uploaded", file: FILE["proof-of-income"] },
  "photo-id": { status: "uploaded", file: FILE["photo-id"] },
  "proof-of-residence": { status: "uploaded", file: FILE["proof-of-residence"] },
  other: { status: "uploaded", file: FILE["other"], note: "Bank statement" },
};

export const SCENARIOS_B: Scenario[] = [
  { id: "default", label: "Empty — all not started", group: "States", apply: () => store.reset() },
  {
    id: "selected",
    label: "File selected — ready to upload",
    group: "States",
    apply: () =>
      store.loadScenario({ "proof-of-income": { status: "selected", file: FILE["proof-of-income"] } }, "proof-of-income"),
  },
  {
    id: "uploading",
    label: "Uploading (progress)",
    group: "States",
    apply: () =>
      store.loadScenario(
        { "proof-of-income": { status: "uploading", file: FILE["proof-of-income"], progress: 60 } },
        "proof-of-income",
      ),
  },
  {
    id: "validation-error",
    label: "Validation error (oversize)",
    group: "States",
    apply: () =>
      store.loadScenario(
        {
          "proof-of-income": {
            status: "validation-error",
            message:
              "That file is 12.4 MB — larger than the 10 MB limit. Choose a smaller PDF, JPG, or PNG file.",
          },
        },
        "proof-of-income",
      ),
  },
  {
    id: "note-required",
    label: "Other — note required",
    group: "States",
    apply: () => store.loadScenario({ other: { status: "selected", file: FILE["other"], note: "" } }, "other"),
  },
  {
    id: "failed",
    label: "Upload failed — retry",
    group: "States",
    apply: () =>
      store.loadScenario(
        {
          "photo-id": {
            status: "failed",
            file: FILE["photo-id"],
            message:
              "Something went wrong on our end — your file is still here. Try again, or come back later.",
          },
        },
        "photo-id",
      ),
  },
  {
    id: "one-uploaded",
    label: "One uploaded",
    group: "States",
    apply: () =>
      store.loadScenario({ "proof-of-income": { status: "uploaded", file: FILE["proof-of-income"] } }, "proof-of-income"),
  },
  { id: "all-uploaded", label: "Complete — all uploaded", group: "States", apply: () => store.loadScenario(uploadedAll) },
];

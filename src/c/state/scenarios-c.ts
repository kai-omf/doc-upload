// Demo scenarios for Option C (Instant Upload) — each jumps the store straight to an edge case /
// state so reviewers can explore without walking the whole flow. Consumed by the scenario dock.
import { storeC, type DocState } from "./store-c";
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

export const SCENARIOS_C: Scenario[] = [
  { id: "default", label: "Empty — all not started", group: "States", apply: () => storeC.reset() },
  {
    id: "mixed",
    label: "Mixed — ready + error + note + done",
    group: "States",
    apply: () =>
      storeC.loadScenario({
        "proof-of-income": { status: "selected", file: FILE["proof-of-income"] },
        "photo-id": {
          status: "validation-error",
          message:
            "That file is 12.4 MB — larger than the 10 MB limit. Choose a smaller PDF, JPG, or PNG file.",
        },
        "proof-of-residence": { status: "uploaded", file: FILE["proof-of-residence"] },
        other: { status: "note-required", file: FILE["other"], note: "" },
      }),
  },
  {
    id: "uploading",
    label: "One uploading",
    group: "States",
    apply: () =>
      storeC.loadScenario({
        "proof-of-income": { status: "uploading", file: FILE["proof-of-income"], progress: 55 },
      }),
  },
  {
    id: "one-failed",
    label: "One failed — retry",
    group: "States",
    apply: () =>
      storeC.loadScenario({
        ...uploadedAll,
        "photo-id": {
          status: "failed",
          file: FILE["photo-id"],
          message: "Something went wrong on our end — your file is still here. Try again.",
        },
      }),
  },
  { id: "all-uploaded", label: "Complete — all uploaded", group: "States", apply: () => storeC.loadScenario(uploadedAll) },
];

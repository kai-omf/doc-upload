// End-to-end flow driver for Option A (Checklist Hub). Stages a file into every card, sets the
// Other note, runs the batch Submit, and screenshots the staggered cascade frame-by-frame, the
// failed→retry recovery, and completion. Also captures a validation-error state.
// Usage: node scripts/drive-a.mjs <baseUrl> <outDir>
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = (process.argv[2] ?? "http://localhost:5174/").replace(/\/$/, "");
const out = process.argv[3] ?? "/tmp/drive-a";
mkdirSync(out, { recursive: true });

const pdf = (name) => ({ name, mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4 fake") });
const big = (name) => ({ name, mimeType: "application/pdf", buffer: Buffer.alloc(11 * 1024 * 1024, 1) });
const txt = (name) => ({ name, mimeType: "text/plain", buffer: Buffer.from("not a document") });

const files = {
  "proof-of-income": pdf("paystub-june-2026.pdf"),
  "photo-id": pdf("drivers-license-front.pdf"),
  "proof-of-residence": pdf("utility-bill-june.pdf"),
  other: pdf("bank-statement.pdf"),
};

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
async function shot(name, full = true) {
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: full });
  console.log("shot ->", name);
}
const stage = (id, file) =>
  page.setInputFiles(`du-checklist-card[doc-id="${id}"] du-drop-zone input[type=file]`, file);

await page.goto(`${base}/a/`, { waitUntil: "networkidle" });
await page.waitForTimeout(300);
await shot("a1-default");

// Validation errors: oversize + wrong type.
await stage("proof-of-income", big("huge-scan.pdf"));
await stage("proof-of-residence", txt("notes.txt"));
await page.waitForTimeout(400);
await shot("a2-validation");

// Recover + stage everything valid, set the Other note → all ready.
await stage("proof-of-income", files["proof-of-income"]);
await stage("photo-id", files["photo-id"]);
await stage("proof-of-residence", files["proof-of-residence"]);
await stage("other", files["other"]);
await page.locator('du-checklist-card[doc-id="other"] input[type=text]').fill("Bank statement");
await page.waitForTimeout(300);
await shot("a3-ready");

// Batch submit — capture the staggered cascade.
await page.locator('du-request-rail oneapp-poc-button[data-action="submit"] button').click();
for (let i = 0; i < 6; i++) {
  await page.waitForTimeout(170);
  await shot(`a4-cascade-${i}`, false);
}
await page.waitForTimeout(1800);
await shot("a5-failed"); // photo-id demo failure

// Retry the failed doc → completion + banner morph.
await page.locator('du-checklist-card[doc-id="photo-id"] oneapp-poc-button[data-action="retry"] button').click();
await page.waitForTimeout(2200);
await shot("a6-complete");

await browser.close();

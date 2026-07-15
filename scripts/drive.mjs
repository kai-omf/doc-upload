// End-to-end flow driver for the Document Upload prototype. Walks the per-document state machine
// and screenshots each state. Usage: node scripts/drive.mjs <baseUrl> <outDir>
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:5174/";
const out = process.argv[3] ?? "/tmp/drive";
mkdirSync(out, { recursive: true });

const pdf = (name) => ({ name, mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4 fake") });
const big = (name) => ({ name, mimeType: "application/pdf", buffer: Buffer.alloc(11 * 1024 * 1024, 1) });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
const shots = [];
async function shot(name) {
  await page.evaluate(() => document.fonts.ready);
  const p = `${out}/${name}.png`;
  await page.screenshot({ path: p });
  shots.push(name);
}
const primary = () => page.locator('oneapp-poc-button[data-action="upload"] button, oneapp-poc-button[data-action="retry"] button, oneapp-poc-button[data-action="next"] button, oneapp-poc-button[data-action="done"] button').first();

await page.goto(base, { waitUntil: "networkidle" });

// 1. Proof of income — select a valid file (drop-zone picker), then upload → uploaded.
await page.setInputFiles("du-drop-zone input[type=file]", pdf("paystub-june-2026.pdf"));
await page.waitForSelector('du-file-row');
await shot("01-selected");
await page.click('oneapp-poc-button[data-action="upload"] button');
await page.waitForSelector('du-upload-progress');
await shot("02-uploading");
await page.waitForSelector('text=Uploaded · just now', { timeout: 5000 });
await shot("03-uploaded");

// 2. Next document → Government-issued photo ID (demo fails first attempt).
await page.click('oneapp-poc-button[data-action="next"] button');
await page.waitForSelector("du-drop-zone");
await page.setInputFiles("du-drop-zone input[type=file]", pdf("drivers-license.pdf"));
await page.click('oneapp-poc-button[data-action="upload"] button');
await page.waitForSelector('text=Upload failed', { timeout: 5000 });
await shot("04-failed");
// Retry → succeeds.
await page.click('oneapp-poc-button[data-action="retry"] button');
await page.waitForSelector('text=Uploaded · just now', { timeout: 5000 });
await shot("05-retry-uploaded");

// 3. Next → Proof of residence → trigger validation error with oversize file.
await page.click('oneapp-poc-button[data-action="next"] button');
await page.waitForSelector("du-drop-zone");
await page.setInputFiles("du-drop-zone input[type=file]", big("huge-scan.pdf"));
await page.waitForSelector("oneapp-poc-alert[type=error]");
await shot("06-validation-error");
// Recover with a valid file → upload.
await page.setInputFiles("du-drop-zone input[type=file]", pdf("lease-agreement.pdf"));
await page.click('oneapp-poc-button[data-action="upload"] button');
await page.waitForSelector('text=Uploaded · just now', { timeout: 5000 });
await shot("07-residence-uploaded");

// 4. Next → Other document (starts not-started → drop zone). Select a file → note-required gating.
await page.click('oneapp-poc-button[data-action="next"] button');
await page.waitForSelector("du-drop-zone");
await page.setInputFiles("du-drop-zone input[type=file]", pdf("employment-letter.pdf"));
await page.waitForSelector("oneapp-poc-note-input");
await shot("08-other-note-required"); // Upload disabled until note
// Type the note → Upload enables.
await page.fill("oneapp-poc-note-input input", "Employment verification letter");
await shot("09-other-note-filled");
await page.click('oneapp-poc-button[data-action="upload"] button');
await page.waitForSelector('text=Uploaded · just now', { timeout: 5000 });
await shot("10-all-uploaded-desktop"); // banner should be Success, Done button

await browser.close();
console.log("SHOTS:", shots.join(", "));

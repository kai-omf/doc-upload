// Lightweight a11y sanity probe: landmarks, roles, keyboard operability, live region.
import { chromium } from "playwright";
const base = process.argv[2] ?? "http://localhost:5174/";
const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 1000 } }).then((c) => c.newPage());
const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
await page.goto(base, { waitUntil: "networkidle" });

const checks = await page.evaluate(() => {
  const q = (s) => document.querySelector(s);
  return {
    main: !!q("main[aria-label]"),
    nav: !!q('nav[aria-label="Primary"]'),
    liveRegion: !!q('[aria-live="polite"][role="status"]'),
    docItemsAreButtons: [...document.querySelectorAll("du-document-item")].every((i) => !!i.querySelector("button")),
    stepHeading: !!q("[data-step-heading]"),
    fileInputKeyboard: !!q('du-drop-zone oneapp-poc-button button'),
    footer: !!q("footer"),
  };
});

// Keyboard: focus first document item's button and activate with Enter -> should drill in (mobile) /
// set active (desktop). On desktop it sets active; verify focus lands on a real button.
await page.focus('du-document-item[data-doc-id="photo-id"] button');
await page.keyboard.press("Enter");
const activeAfter = await page.evaluate(() =>
  document.querySelector('du-document-item[data-doc-id="photo-id"][active]') ? "photo-id-active" : "none",
);

// During upload, a progressbar with aria-valuenow should exist.
await page.setInputFiles("du-drop-zone input[type=file]", { name: "x.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF") });
await page.click('oneapp-poc-button[data-action="upload"] button');
const progressbar = await page.waitForSelector('[role="progressbar"][aria-valuenow]', { timeout: 3000 }).then(() => true).catch(() => false);

console.log(JSON.stringify({ ...checks, activeAfter, progressbar, consoleErrors: errors }, null, 2));
await browser.close();

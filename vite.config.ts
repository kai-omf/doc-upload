import { defineConfig } from "vite";

// Root-level Vite app. The design system (tokens/tokens.css + tokens/cx-fonts.css)
// and self-hosted Merchant fonts (tokens/fonts/merchant/) are imported from src/main.ts;
// Vite rewrites the relative font url()s in tokens.css, so the fonts resolve without moving them.
export default defineConfig({
  server: { open: false },
  build: { outDir: "dist", target: "es2022" },
});

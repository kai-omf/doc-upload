// Design system: tokens (also declares @font-face for Merchant) + type-ramp utility classes.
// Vite rewrites the relative font url()s in tokens.css, so Merchant loads from tokens/fonts/merchant/.
import "../../tokens/tokens.css";
import "../../tokens/cx-fonts.css";
import "@shared/styles/app.css";
import "@shared/styles/motion.css";

// App shell (registers <du-app> and, transitively, the rest of the flow).
import "./app/du-app";

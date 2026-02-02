# Media Queries Review & Fixes

This document summarizes the responsive breakpoints used across the app and the fixes applied so the page loads without issues at all screen sizes.

---

## Breakpoint strategy (consistent across files)

| Breakpoint | Usage |
|------------|--------|
| **≤360px** | Extra-small phones – padding, overflow, and tap targets |
| **≤480px** | Small phones – flip-cards, modals, close buttons |
| **≤767px** | Mobile (portrait) – header/footer layout, font sizing |
| **≥768px** | Tablet and up – spacing, footer row layout |
| **≥1024px** | Desktop – spacing and typography |
| **≥1280px** | Large desktop – max-width, flip-card sizes |
| **≥1920px** | Full HD+ – max-width, larger flip-cards |

---

## Fixes applied

### 1. **styles.css**
- **Critical:** Replaced `font-size: 0.3rem` and `0.5rem` for `h1` and header/footer on mobile with `clamp(0.85rem, 3vw, 1rem)` and `clamp(1.1rem, 5vw, 1.5rem)` so text stays readable.
- **Removed:** Debug outlines (`outline: 3px solid red/blue`) on header/footer that would show in production.
- **Consolidated:** Multiple `@media (max-width: 767px)` blocks into one mobile block to avoid conflicting rules.
- **Overflow:** Added `overflow-x: hidden` on `html` and `body`, and `max-width: 100%` / `min-width: 0` on `main` to prevent horizontal scroll and grid blowout.
- **Extra-small:** New `@media (max-width: 360px)` for main padding and header/footer padding.
- **Layout:** Set `main` (and `main *` in app component) to `grid-template-columns: 1fr` so content is not squashed into 1/4 width on desktop.
- **Typo:** Corrected `! important` to `!important`.

### 2. **app.component.css**
- **Extra-small (≤360px):** Tighter padding, smaller flip-cards with `clamp()`, modal padding, and 44px min close button.
- **Small (≤480px):** Close buttons get `min-height: 44px` and `min-width: 44px` for touch.
- **Close buttons:** All modals use `min-height: 44px`, `min-width: 44px`, and `inline-flex` for alignment.
- **Flip-card button:** `min-height: 44px`, `-webkit-tap-highlight-color: transparent`, and `touch-action: manipulation` for better touch behavior.
- **Layout:** `main *` at 768px+ uses `grid-template-columns: 1fr` so content stays full width.

### 3. **header.component.css**
- **Extra-small (≤360px):** New breakpoint for smaller header padding, image (72px), and font sizes (1.1rem / 0.75rem) to avoid overflow.

### 4. **footer.component.css**
- **Enabled:** Previously commented `@media (min-width: 768px)` so footer links use `flex-direction: row` on tablet+.
- **Restored:** `.contact-btn` rules (were inside the commented block).
- **Mobile (≤767px):** Footer padding, link gap, and 44px tap targets for `.space` and `.contact-btn`.
- **Extra-small (≤360px):** Reduced footer padding and modal width/padding.
- **Close button:** 44px min size and flex alignment.
- **Modal h2:** `clamp(1.2rem, 5vw, 1.8rem)` for fluid heading on small screens.

### 5. **about-me.component.css**
- **Close button:** 44px min size and `inline-flex` for alignment.
- **Small (≤480px):** Modal padding 1.25rem, width 95%, max-height 90vh, smaller h2.
- **Extra-small (≤360px):** Modal padding 1rem and width 95%.

### 6. **index.html**
- **Viewport:** Added `viewport-fit=cover` so the page uses the full screen on notched devices (e.g. iPhone X+).

---

## Result

- **Extra-small (320–360px):** No horizontal overflow; readable text; 44px tap targets; modals fit and scroll.
- **Mobile (361–767px):** Readable fonts; single-column layout; touch-friendly buttons.
- **Tablet (768–1023px):** Footer links in a row; consistent spacing.
- **Desktop (1024px+):** Full-width content; consistent max-width (1400px / 1600px); no squashed layout.

All media queries now use consistent breakpoints (360, 480, 767/768, 1024, 1280, 1920) and the page is tuned for production across screen sizes.

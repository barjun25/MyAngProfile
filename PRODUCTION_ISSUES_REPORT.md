# Production Build Issues Report

This document lists bugs and issues identified in the codebase that may affect the production build or runtime behavior.

---

## Critical (will cause errors or broken behavior)

### 1. **AppComponent required `link` input with no provider**
- **Location:** `src/app/app.component.ts`
- **Issue:** The root component has `@Input({ required: true }) link!: string`. The app is bootstrapped with `bootstrapApplication(AppComponent)` in `main.ts`; there is no parent to pass `link`, so it will be **undefined** at runtime. In Angular, required inputs that are not provided can trigger runtime errors or strict template checks.
- **Fix:** Make the input optional (e.g. `@Input() link?: string`) or remove it if it is unused. The template does not reference `link` or `elementLink`.

### 2. **Duplicate footer rendering**
- **Location:** `src/index.html` and `src/app/app.component.html`
- **Issue:** `index.html` contains both `<app-root></app-root>` and `<app-footer></app-footer>`. The root component’s template also includes `<app-footer />`. The footer is therefore rendered **twice** on every page.
- **Fix:** Remove `<app-footer></app-footer>` from `src/index.html` and keep only the footer inside `AppComponent`.

### 3. **Duplicate HTML `id` values**
- **Location:** `src/app/app.component.html`
- **Issue:** Fourteen elements use `id="flip-card-back"`. HTML IDs must be unique. Duplicate IDs break accessibility, fragment links, and can cause incorrect behavior with CSS/JS that target by ID.
- **Fix:** Replace `id="flip-card-back"` with a class, e.g. `class="flip-card-back"`, and update `src/app/app.component.css` to use `.flip-card-back` if it currently uses `#flip-card-back`.

---

## High (bad practice / potential production issues)

### 4. **Side-effect getter and dead code in AppComponent**
- **Location:** `src/app/app.component.ts`
- **Issue:**
  - The getter `elementLink` mutates `this.link` every time it is called and is not used in the template. Getters should be pure.
  - `onBiPrClick()` is empty and appears unused.
  - `BirthdayProjectComponent` and `ElementRef` are imported but not used (component not in `imports` array or template).
- **Fix:** Remove the `elementLink` getter, remove or implement `onBiPrClick()`, and remove unused imports (`ElementRef`, `BirthdayProjectComponent`).

### 5. **Unused import in server bootstrap**
- **Location:** `src/main.server.ts`
- **Issue:** `FooterComponent` is imported but never used. Adds noise and can confuse tooling.
- **Fix:** Remove the `FooterComponent` import from `main.server.ts`.

### 6. **Inconsistent asset paths**
- **Location:** `src/app/app.component.html` vs `src/app/header/header.component.html`
- **Issue:** App component uses `./assets/images/...` while the header uses `assets/images/...`. With a non-root `base href` (e.g. GitHub Pages at `/MyAngProfile/`), `./assets` can resolve incorrectly. Angular serves `src/assets` at `/assets` relative to the app base.
- **Fix:** Use `assets/images/...` (no `./`) consistently so paths resolve correctly for all base hrefs.

---

## Security

### 7. **SSH keys in repository**
- **Location:** Repository root: `sshkey.txt`, `sshkey.txt.pub`
- **Issue:** These files are not listed in `.gitignore`. If they contain real SSH keys and are committed, private keys could be exposed. Anyone with repo access could use them.
- **Fix:** Add `sshkey.txt` and `sshkey.txt.pub` to `.gitignore`. If they were ever committed, rotate the keys and remove them from history (e.g. `git filter-branch` or BFG).

---

## Low / optional

### 8. **Server startup console.log**
- **Location:** `src/server.ts` (line 59)
- **Issue:** `console.log` is used for the “listening on port” message. Acceptable for many deployments; some teams prefer a logger or no log in production.
- **Fix:** Optional: replace with a proper logger or remove in production.

### 9. **Typo in alt text**
- **Location:** `src/app/app.component.html` (Prayagh image)
- **Issue:** Alt text says "Pryagh" instead of "Prayagh".
- **Fix:** Change to "Prayagh" for consistency and accessibility.

---

## Summary

| Severity | Count | Action |
|----------|--------|--------|
| Critical | 3     | Fix before production |
| High     | 3     | Fix for maintainability and correctness |
| Security | 1    | Fix immediately if keys are real |
| Low      | 2     | Optional cleanup |

Recommended order: fix **#7** (security) first if keys are real, then **#1**, **#2**, and **#3**, then **#4–#6** and optionally **#8–#9**.

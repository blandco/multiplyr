# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running locally

Open `index.html` directly in a browser — no build step, no package manager, no dev server needed.

## Deployment

Pushes to `master` auto-deploy to Firebase Hosting via GitHub Actions. The workflow authenticates using Workload Identity Federation (no stored secrets) and runs `npx firebase-tools@latest deploy --only hosting`.

The public root is `.` (the repo root). Files excluded from hosting are listed in `firebase.json`.

## Architecture

This is a zero-dependency, no-build vanilla web app:

- **`index.html`** — app shell with two number inputs (1–12) and `+`/`−` stepper buttons. Inputs bind to `#num1` (groups) and `#num2` (items per group). Firebase Analytics is initialized here via ESM CDN imports before `app.js` loads.
- **`app.js`** — all logic. `render()` reads the two inputs, clamps them to [1,12], updates the equation display, then rebuilds `#visualization` by creating `.group-card` elements (one per group), each containing an `.items-grid` of `.item` tiles. Group colors cycle through `GROUP_COLORS`. Steppers and `input` events both call `render()`.
- **`style.css`** — layout and theming. Group cards use a `--group-color` CSS custom property set per card by `app.js`.
- **`code.cpp`** — the original C++ proof-of-concept this app is based on; not deployed or compiled.

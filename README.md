# recipe-book-bd

**Recipe Book BD** — a fully offline, bilingual (EN/বাংলা) Bangladeshi recipe collection.
**235 real recipes** across 10 categories: fish curry, bhorta, pitha, biryani/tehari/khichuri/polao,
meat curry, dal, vegetable curries, sweets, snacks, and pickles. Every recipe ships with a bilingual
ingredient list (with quantities), numbered bilingual steps, time, servings, and difficulty.

## Problem

Bangladeshi home cooks looking for authentic local recipes usually land on ad-heavy blogs or
video-only content that needs constant internet. There is no clean, offline, bilingual reference
covering the breadth of everyday Bangladeshi cooking — from shorshe ilish to nakshi pitha to
kala bhuna — with searchable ingredients and saveable favorites.

## Features

- **235 real Bangladeshi recipes** across 10 categories (data in `data/*.json`, one file per category)
- **Bilingual EN/বাংলা** UI with one-tap toggle; Bengali digits for times, servings, and quantities
- **Search** by recipe name (Bangla-safe, case-insensitive) **and by ingredient** in either language
- **Filters**: category, difficulty (easy/medium/hard), max cooking time
- **Recipe view**: ingredients with quantities, numbered steps, servings, time, difficulty
- **Favorites**: heart/save with persistent list (localStorage), survives reload
- **JSON export/import** of the favorites list
- **100% offline**: zero network requests — all data bundled in `js/recipes-data.js`
- **Mobile responsive** (single-column layout ≤ 640px), keyboard accessible

## Stack

- Plain HTML + CSS + vanilla JavaScript (no frameworks, no build step for the app)
- Node.js (dev only) for data authoring/validation: `tools/src/*.mjs` → `tools/build.mjs`
- Data: hand-authored bilingual recipe sources compiled to JSON

## Prerequisites

- Any modern browser (Chrome, Firefox, Safari, Edge) — just open `index.html`
- Node.js ≥ 18 (only if you want to rebuild or re-validate the recipe data)

## Install

No install needed. This is a static site:

```sh
# option 1: open directly (works fully offline)
open index.html            # macOS
xdg-open index.html        # Linux

# option 2: serve locally
npx serve .
# or
python3 -m http.server 8080
```

## Dev commands

```sh
# rebuild data/*.json + js/recipes-data.js from tools/src/
node tools/build.mjs

# validate ALL recipes: schema, unique ids/names, non-empty fields,
# allowed categories/difficulties, no unsubstituted placeholders
node tools/validate.mjs

# syntax check the app JS
node --check js/app.js

# static audit: no external (http/https) resource references in app source
grep -rEn 'https?://' index.html css js --include='*.js' --include='*.html' --include='*.css' | grep -v recipes-data || echo "clean"
# (recipes-data.js is data-only; the only URL-like strings in it are none —
#  the check above excludes it from the resource scan)
```

## Env

No environment variables. No secrets. No API keys. Nothing to configure.

## Testing

Two suites, both run for real:

1. **Data validation** (`node tools/validate.mjs`) — schema over all 235 recipes:
   id present + unique; bilingual name present; category from the allowed set of 10;
   `ingredients[]` and `steps[]` non-empty with no empty fields; quantities present in both
   languages; no unsubstituted `{M}` placeholders; no Bengali characters leaking into English
   steps; positive time/servings; difficulty ∈ {easy, medium, hard}; no duplicate EN/BN names.
2. **Headless-Chrome UI tests** (via `file://`, since this environment's Chrome blocks
   `http://127.0.0.1` for CDP navigation): search finds recipes (including a Bangla query),
   ingredient search, category + difficulty + max-time filters, recipe detail renders ingredients
   and numbered steps, favorite toggle persists across page reload, EN/বাংলা toggle re-renders
   with Bengali digits, 390px mobile viewport shows no horizontal overflow, 10 random recipes
   render correctly, and the run completes with **0 console/page errors**.

## Deployment

Static hosting anywhere: GitHub Pages, Netlify, Vercel, or any file server. There is no backend.

```sh
# example: publish the folder as-is
npx serve .
```

## Limitations

- Recipe steps are written from ~50 shared per-style templates (e.g. all mustard fish curries
  share the shorshe method) customized per dish — methods are authentic, but phrasing repeats
  across similar dishes by design.
- Times are active cooking estimates, not lab-measured; pickle times exclude sun-curing days.
- No photos — text-only by design (keeps the app fully offline and tiny).
- Favorites live in the browser's localStorage; clearing site data erases them (export first).
- `tools/` sources are the source of truth; `data/*.json` and `js/recipes-data.js` are generated.

## Status

- [x] 235 recipes authored, built, and validated (0 validation errors)
- [x] App: search, filters, detail view, favorites, export/import, EN/বাংলা toggle
- [x] Headless-Chrome UI suite green, 0 console errors
- [x] Secrets scan clean
- [ ] Staged only — **not published** (no GitHub repo, no pushes)

### Third-party credit

None — no libraries, fonts, images, or network dependencies of any kind.

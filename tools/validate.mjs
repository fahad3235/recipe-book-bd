// Data validation over data/*.json — schema, uniqueness, empties, allowed values.
// Run: node tools/validate.mjs   (from the project root)
import { readFileSync, readdirSync } from "node:fs";

const ALLOWED_CATS = new Set(["fish-curry","bhorta","pitha","biryani","meat-curry","dal","vegetable","sweets","snacks","pickles"]);
const ALLOWED_DIFF = new Set(["easy","medium","hard"]);
const BN_RE = /[\u0980-\u09FF]/;

const files = readdirSync("data").filter((f) => f.endsWith(".json") && f !== "index.json");
let recipes = [];
for (const f of files) recipes.push(...JSON.parse(readFileSync(`data/${f}`, "utf8")));

const errors = [];
const seenIds = new Set(), seenEn = new Set(), seenBn = new Set();

for (const r of recipes) {
  const tag = `recipe ${r.id || "?"}`;
  if (!r.id || typeof r.id !== "string") errors.push(`${tag}: missing id`);
  else if (seenIds.has(r.id)) errors.push(`${tag}: duplicate id`);
  seenIds.add(r.id);
  if (!r.name?.en?.trim()) errors.push(`${tag}: missing name.en`);
  if (!r.name?.bn?.trim()) errors.push(`${tag}: missing name.bn`);
  if (r.name?.en && seenEn.has(r.name.en.toLowerCase())) errors.push(`${tag}: duplicate name.en "${r.name.en}"`);
  if (r.name?.bn && seenBn.has(r.name.bn)) errors.push(`${tag}: duplicate name.bn "${r.name.bn}"`);
  seenEn.add(r.name?.en?.toLowerCase()); seenBn.add(r.name?.bn);
  if (!ALLOWED_CATS.has(r.cat)) errors.push(`${tag}: bad category "${r.cat}"`);
  if (!Array.isArray(r.ingredients) || r.ingredients.length === 0) errors.push(`${tag}: empty ingredients`);
  else r.ingredients.forEach((g, i) => {
    if (!g.en?.trim() || !g.bn?.trim() || !g.qty?.trim()) errors.push(`${tag}: ingredient[${i}] has empty field`);
    if (!g.qtyBn?.trim()) errors.push(`${tag}: ingredient[${i}] missing qtyBn`);
  });
  for (const lang of ["en","bn"]) {
    const st = r.steps?.[lang];
    if (!Array.isArray(st) || st.length === 0) errors.push(`${tag}: empty steps.${lang}`);
    else st.forEach((s, i) => {
      if (!s?.trim()) errors.push(`${tag}: steps.${lang}[${i}] empty`);
      if (s.includes("{M}")) errors.push(`${tag}: steps.${lang}[${i}] unsubstituted placeholder`);
    });
  }
  if (r.steps?.en?.some((s) => BN_RE.test(s))) errors.push(`${tag}: Bengali chars in steps.en`);
  if (typeof r.time !== "number" || r.time <= 0) errors.push(`${tag}: bad time ${r.time}`);
  if (typeof r.servings !== "number" || r.servings <= 0) errors.push(`${tag}: bad servings ${r.servings}`);
  if (!ALLOWED_DIFF.has(r.diff)) errors.push(`${tag}: bad difficulty "${r.diff}"`);
}

const perCat = {};
for (const r of recipes) perCat[r.cat] = (perCat[r.cat] || 0) + 1;

console.log(`Recipes validated: ${recipes.length}`);
console.log("Per category:", JSON.stringify(perCat));
const diffs = {};
for (const r of recipes) diffs[r.diff] = (diffs[r.diff] || 0) + 1;
console.log("Per difficulty:", JSON.stringify(diffs));

if (errors.length) {
  console.log(`\nERRORS (${errors.length}):`);
  for (const e of errors.slice(0, 50)) console.log("  - " + e);
  process.exit(1);
}
console.log("VALIDATION PASSED — 0 errors.");

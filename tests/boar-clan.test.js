/**
 * DOM assertion tests for clans/boar.html structural correctness properties.
 * Uses Node's built-in test runner (node:test) and jsdom for HTML parsing.
 *
 * Run with: node --test tests/boar-clan.test.js
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { JSDOM } from 'jsdom';

const __dirname = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(__dirname, '../clans/boar.html'), 'utf8');
const { document } = new JSDOM(html).window;

// ── Property 1: Year section IDs are unique and complete ──────────────────────
// Validates: Requirements 10.1
test('Property 1 — year section IDs are unique and complete', () => {
  const yearIds = ['y800', 'y801', 'y802', 'y803', 'y804'];

  // Total count of elements whose id starts with "y80" must be exactly 5
  const allYearEls = document.querySelectorAll('[id^="y80"]');
  assert.equal(
    allYearEls.length,
    5,
    `Expected exactly 5 elements with id starting "y80", found ${allYearEls.length}`
  );

  // Each specific ID must exist exactly once
  for (const id of yearIds) {
    const matches = document.querySelectorAll(`#${id}`);
    assert.equal(
      matches.length,
      1,
      `Expected exactly one element with id="${id}", found ${matches.length}`
    );
  }
});

// ── Property 2: TOC links resolve to existing anchors ────────────────────────
// Validates: Requirements 10.6
test('Property 2 — TOC links resolve to existing anchors', () => {
  const tocLinks = document.querySelectorAll('aside.guide-toc a[href^="#"]');
  assert.ok(tocLinks.length > 0, 'Expected at least one TOC anchor link');

  for (const link of tocLinks) {
    const fragment = link.getAttribute('href').slice(1); // strip leading '#'
    const target = document.getElementById(fragment);
    assert.ok(
      target !== null,
      `TOC link href="#${fragment}" has no matching element in the document`
    );
  }
});

// ── Property 3: All images have non-empty alt text ───────────────────────────
// Validates: Requirements 9.4, 10.8
test('Property 3 — all images have non-empty alt text', () => {
  const images = document.querySelectorAll('img');
  assert.ok(images.length > 0, 'Expected at least one <img> element');

  for (const img of images) {
    const alt = img.getAttribute('alt');
    assert.ok(
      alt !== null && alt.trim().length > 0,
      `<img src="${img.getAttribute('src')}"> is missing non-empty alt text`
    );
  }
});

// ── Property 4: No Lynx Clan content contamination ───────────────────────────
// Validates: Requirements 8.1–8.6
test('Property 4 — no Lynx Clan content contamination', () => {
  const forbidden = [
    'Lynx',
    'Mielikki',
    'Brundr',
    'Kaelinn',
    'Hunting Trophies',
    'Lynx_round.webp',
  ];

  const fullText = document.documentElement.innerHTML;

  for (const term of forbidden) {
    assert.ok(
      !fullText.includes(term),
      `Forbidden Lynx Clan content found: "${term}"`
    );
  }

  // "Tracker" as a unit name — check text nodes only to avoid false positives
  // (e.g. CSS class names like "chip-tracker" would be a false positive)
  const bodyText = document.body.textContent;
  assert.ok(
    !bodyText.includes('Tracker'),
    'Forbidden Lynx Clan unit name "Tracker" found in page text'
  );
});

// ── Property 5: Step count ≥ 20 ──────────────────────────────────────────────
// Validates: Requirements 10.7
test('Property 5 — step count is at least 20', () => {
  const steps = document.querySelectorAll('.step');
  assert.ok(
    steps.length >= 20,
    `Expected at least 20 .step elements, found ${steps.length}`
  );
});

// ── Property 6: Required structural singletons ───────────────────────────────
// Validates: Requirements 10.2, 10.3
test('Property 6 — structural singletons (guide-toc and clan-hero)', () => {
  const tocs = document.querySelectorAll('aside.guide-toc');
  assert.equal(
    tocs.length,
    1,
    `Expected exactly one <aside class="guide-toc">, found ${tocs.length}`
  );

  const heroes = document.querySelectorAll('.clan-hero');
  assert.equal(
    heroes.length,
    1,
    `Expected exactly one .clan-hero element, found ${heroes.length}`
  );
});

// ── Property 7: Tip and warn callouts present ────────────────────────────────
// Validates: Requirements 10.4
test('Property 7 — tip and warn callouts are present', () => {
  const tips = document.querySelectorAll('.tip');
  assert.ok(
    tips.length >= 1,
    `Expected at least one .tip element, found ${tips.length}`
  );

  const warns = document.querySelectorAll('.warn');
  assert.ok(
    warns.length >= 1,
    `Expected at least one .warn element, found ${warns.length}`
  );
});

// ── Property 8: Lore list present ────────────────────────────────────────────
// Validates: Requirements 10.5
test('Property 8 — lore-list element is present', () => {
  const loreLists = document.querySelectorAll('.lore-list');
  assert.ok(
    loreLists.length >= 1,
    `Expected at least one .lore-list element, found ${loreLists.length}`
  );
});

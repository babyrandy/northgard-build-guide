# Design Document — Boar Clan Guide

## Overview

The Boar Clan guide is a static HTML page (`clans/boar.html`) within the Northgard Build Guide website. The current file is a stale copy of the Lynx Clan guide and must be fully replaced with accurate Boar Clan content.

The Boar Clan (Slidrugtanni — Clan of the Boar) is a lore-focused, peaceful-expansion clan. Their unique mechanics revolve around coexistence with wildlife, knowledge accumulation, and the Shaman unit. The guide covers Year 800–804 with a year-by-year build order, lore priority recommendations, and clan-specific tips.

**Clan identity at a glance:**
- Warchief: Svarn — heals friendly animals in his zone; can tame one bear or wolf and move it into enemy/neutral territory
- Unique unit: Shaman — generates lore and provides buffs
- Unique mechanic: Wolves and brown bears in colonized zones become friendly; wildlife tiles can be colonized for an extra food cost; each additional territory gives +2 max population; unlocking new knowledge gives +5 Fame
- Tags: Econ, Support
- Lore: "A reclusive clan once forgotten by their brethren but recently rediscovered, the Clan of the Boar is both mystical and untamed. Their understanding of the world is unmatched."
- Starting bonus: Free Knowledge +1 (does not count toward Lore Victory or Blessing unlock)
- 200 Fame unlock: Colonize neutral zones with wildlife for extra food cost; wolves/bears become friendly
- 500 Fame unlock: Altar of Kings / endgame ability
- Greater Blessings: Freya (winter penalty massively reduced), Baldr (+5 Happiness, +2 Lore production), Jörd (army + defense towers +10% attack)

---

## Architecture

The guide is a **single static HTML file** with no build step, no framework, and no server-side rendering. All styling is self-contained within a `<style>` block in `<head>`. Interactivity (TOC active-link highlighting on scroll) is handled by the shared `../js/interactions.js` script.

```
clans/boar.html
├── <head>
│   ├── <meta> tags (charset, viewport, description)
│   ├── <link> → ../css/main.css
│   ├── <script> → ../js/interactions.js (defer)
│   └── <style> (page-specific CSS, copied from lynx.html pattern)
└── <body>
    ├── <header class="main-header">   — site brand
    ├── <nav class="breadcrumb">       — Home › Clans › Boar Clan
    ├── <div class="clan-hero">        — image, heading, subtitle, tags
    └── <main>
        └── <div class="container">
            └── <div class="guide-layout">
                ├── <aside class="guide-toc">   — sticky sidebar TOC
                └── <div class="guide-content">
                    ├── <section id="y800">
                    ├── <section id="y801">
                    ├── <section id="y802">
                    ├── <section id="y803">
                    └── <section id="y804">
```

The file lives in `clans/` so all asset paths use `../` prefix (e.g., `../assets/images/Boar_round.webp`, `../css/main.css`).

---

## Components and Interfaces

### 1. Page Head

| Element | Value |
|---|---|
| `<title>` | `Boar Clan Guide — Northgard Build Guide` |
| `<meta name="description">` | Boar Clan-specific description |
| Stylesheet | `../css/main.css` |
| Script | `../js/interactions.js` (defer) |
| Page `<style>` | Full clan-page CSS block (identical structure to lynx.html) |

### 2. Header

`<header class="main-header">` containing the site brand "Northgard: Build Guide" and a `<nav class="main-nav">` with links to Clans and About pages.

### 3. Breadcrumb

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  Home › Clans › Boar Clan
</nav>
```
Links: `../index.html` (Home), `../index.html#clans` (Clans). Current page label: "Boar Clan".

### 4. Clan Hero Banner

```html
<div class="clan-hero">
  <img src="../assets/images/Boar_round.webp" alt="Boar Clan" class="clan-hero-img">
  <div class="clan-hero-text">
    <h1>Svarn — Boar Clan</h1>
    <p class="subtitle">Masters of Lore &amp; Peaceful Expansion</p>
    <div class="clan-tags">
      <span class="tag tag-econ">Econ</span>
      <span class="tag tag-support">Support</span>
    </div>
  </div>
</div>
```

The `::before` pseudo-element on `.clan-hero` displays the rune **ᛒ** (Berkanan/Beorc — associated with growth and nature, fitting for the Boar Clan) as a large decorative watermark.

Tag CSS classes needed: `tag-econ` and `tag-support` (defined in the page `<style>` block, following the same pattern as `tag-scout` / `tag-combat` in lynx.html).

### 5. Sidebar TOC

```html
<aside class="guide-toc" aria-label="Guide navigation">
  <p class="toc-label">Build Order</p>
  <ul>
    <li><a href="#y800">Year 800</a></li>
    <li><a href="#y801">Year 801</a></li>
    <li><a href="#y802">Year 802</a></li>
    <li><a href="#y803">Year 803</a></li>
    <li><a href="#y804">Year 804</a></li>
  </ul>
  <hr class="toc-divider">
  <a href="../index.html" class="toc-back">← All Clans</a>
</aside>
```

Sticky on desktop (`position: sticky; top: 80px`). Collapses to horizontal wrap at ≤860px.

### 6. Year Sections (×5)

Each section follows this structure:

```html
<section class="year-section" id="yXXX">
  <div class="year-header">
    <span class="year-badge">Year XXX</span>
    <h2>[Section Title]</h2>
  </div>
  <p class="year-goal">Goal: ...</p>
  <div class="build-steps">
    <!-- .step cards -->
  </div>
  <!-- .tip / .warn callouts -->
  <!-- .lore-list where applicable -->
</section>
```

**Step card structure:**
```html
<div class="step">
  <div class="step-num">N</div>
  <div class="step-body">
    <div class="step-title">...</div>
    <div class="step-desc">...</div>
    <div class="step-cost">
      <span class="chip chip-food">X Food</span>
      <span class="chip chip-wood">X Wood</span>
    </div>
  </div>
</div>
```

**Callout types:**
- `.tip` — blue border, informational/strategic advice
- `.warn` — red border, common mistakes or risks

**Lore list structure:**
```html
<div class="lore-list">
  <div class="lore-item">
    <span class="lore-rank">1st</span>
    <span class="lore-name">Simple Living</span> — description
  </div>
</div>
```

### 7. Responsive Breakpoint

At `max-width: 860px`:
- `.guide-layout` switches from `grid-template-columns: 220px 1fr` to `grid-template-columns: 1fr`
- `.guide-toc` becomes `position: static`, `display: flex`, `flex-wrap: wrap`
- TOC links switch from left-border active indicator to bottom-border
- `.clan-hero .container` stacks vertically
- `.clan-hero::before` rune watermark is hidden

---

## Data Models

The guide is static HTML — there is no runtime data model. The "data" is the build order content itself, structured as follows:

### Year Section Content Model

Each of the five year sections contains:

| Field | Type | Description |
|---|---|---|
| `id` | string | Anchor ID: `y800`–`y804` |
| `year-badge` | string | Display label: "Year 800"–"Year 804" |
| `h2` title | string | Section heading |
| `year-goal` | string | Italic goal statement |
| `build-steps` | Step[] | Ordered list of step cards |
| `callouts` | Callout[] | tip/warn boxes |
| `lore-list` | LoreItem[] | Optional ranked lore recommendations |

### Step Card Model

| Field | Type | Description |
|---|---|---|
| `step-num` | integer | Display number (1-based) |
| `step-title` | string | Action title |
| `step-desc` | string | Explanation |
| `step-cost` | Chip[] | Optional resource chips |

### Chip Classes

| Class | Color | Use |
|---|---|---|
| `chip-food` | green (#7dc77d) | Food costs |
| `chip-wood` | brown (#b8945a) | Wood costs |
| `chip-gold` | gold (var(--gold)) | Gold/krown costs |
| `chip-lore` | purple (#a07dc9) | Lore costs or lore actions |

### Build Order Content Summary

**Year 800 — Foundation & First Lore**
Steps: Scout Camp → Expand (Lore Stones / forest tiles) → Woodcutter's Lodge → First lore building → Simple Living lore → Summon Svarn
Tips: Wildlife coexistence (no need to fight wolves/bears); Svarn can tame an animal early for map control
Warn: Don't neglect food — Boar is less stone-dependent but food is still critical early

**Year 801 — Lore Engine & Peaceful Expansion**
Steps: Build Shamans → Take Colonization lore → Take Lay of the Land → Expand into forest/wildlife tiles → Build Trading Post or Docks → Feast in November
Lore list: Simple Living (1st), Colonization (2nd), Lay of the Land (3rd)
Tips: Wildlife tiles are free real estate — colonize them for +2 pop cap each; aim for 200 Fame

**Year 802 — Economy Scaling & Military Prep**
Steps: Take Bartering lore → Take Handiwork lore → Build Forge + upgrade tools → Build military (Swordsmen/Warriors) → Upgrade lore buildings → Build Altar of Kings
Tips: Boar is not a military clan but needs defense; lore bonuses compound here
Warn: Don't over-invest in stone — Boar benefits less from stone-heavy builds

**Year 803 — Lore Completion & Map Control**
Steps: Take Osmosis lore → Complete lore tree → Sustain military → Upgrade Town Hall → Use Svarn's tamed animal for scouting/harassment
Tips: Osmosis gives passive lore from territory/neighbors — maximize territory for best effect

**Year 804 — Win Condition Execution**
Steps: Altar of Kings / Wisdom victory path → Fame victory via territory + feasts → Svarn's 500 Fame ability for endgame push
Tips: Boar's win condition is lore/knowledge accumulation; every new knowledge unlock gives +5 Fame

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This feature produces a static HTML document. The correctness properties below are derived from the acceptance criteria and are suitable for automated HTML parsing tests (using a DOM parser such as jsdom, BeautifulSoup, or the browser's built-in DOM API). They are universally quantified over the structure of the document.

### Property 1: Year section IDs are unique and complete

*For any* valid parse of `clans/boar.html`, the document SHALL contain exactly one element with each of the IDs `y800`, `y801`, `y802`, `y803`, and `y804` — no more, no fewer.

**Validates: Requirements 10.1**

### Property 2: TOC links resolve to existing anchors

*For any* anchor element (`<a href="#...">`) inside `<aside class="guide-toc">`, the document SHALL contain exactly one element whose `id` attribute matches the fragment — no broken internal links.

**Validates: Requirements 10.6**

### Property 3: All images have non-empty alt text

*For any* `<img>` element in the document, the `alt` attribute SHALL be present and non-empty.

**Validates: Requirements 9.4, 10.8**

### Property 4: No Lynx Clan content contamination

*For any* text node or attribute value in the rendered document, the strings "Lynx", "Mielikki", "Brundr", "Kaelinn", "Tracker" (as a unit name), "Hunting Trophies", and `Lynx_round.webp` SHALL NOT appear.

**Validates: Requirements 8.1–8.6**

### Property 5: Sufficient build order depth

*For any* valid parse of the document, the total count of elements with class `step` across all year sections SHALL be at least 20.

**Validates: Requirements 10.7**

### Property 6: Required structural singletons

*For any* valid parse of the document, there SHALL be exactly one `<aside class="guide-toc">` element and exactly one `<div class="clan-hero">` element.

**Validates: Requirements 10.2, 10.3**

### Property 7: Tip and warn callouts present

*For any* valid parse of the document, there SHALL be at least one element with class `tip` and at least one element with class `warn`.

**Validates: Requirements 10.4**

### Property 8: Lore list present

*For any* valid parse of the document, there SHALL be at least one element with class `lore-list`.

**Validates: Requirements 10.5**

---

## Error Handling

This is a static HTML document — there is no runtime error handling. The following design decisions address potential failure modes:

| Failure Mode | Mitigation |
|---|---|
| Missing image (`Boar_round.webp`) | `alt="Boar Clan"` provides accessible fallback text (Req 9.6) |
| Broken TOC anchor links | All five `href="#yXXX"` links correspond to sections with matching `id` attributes in the same file |
| CSS variable not defined | Page-specific `<style>` block uses only CSS variables already defined in `../css/main.css` |
| JS not loading | `interactions.js` only handles TOC active-link highlighting; the page is fully readable without it |
| Viewport too narrow | Responsive breakpoint at 860px ensures layout reflows correctly on mobile |

---

## Testing Strategy

### Approach

This feature is a static HTML document. Property-based testing in the traditional sense (random input generation) is not applicable to the document's *content* — the content is fixed. However, the **structural and content correctness properties** defined above are all amenable to automated DOM-based testing using an HTML parser.

The recommended testing approach is **DOM assertion tests** using a lightweight HTML parser (e.g., jsdom in Node.js, or Python's html.parser / BeautifulSoup). These tests parse the final `clans/boar.html` file and assert the structural properties.

### Unit / DOM Tests

Each correctness property maps to one or more DOM assertions:

| Test | Assertion | Validates |
|---|---|---|
| Year section IDs | `document.querySelectorAll('[id^="y80"]').length === 5` and each ID is unique | Property 1 |
| TOC link integrity | For each `aside.guide-toc a[href^="#"]`, `document.getElementById(fragment)` is non-null | Property 2 |
| Image alt text | For each `img`, `img.alt.trim().length > 0` | Property 3 |
| No Lynx contamination | Full text content and all attribute values do not contain forbidden strings | Property 4 |
| Step count ≥ 20 | `document.querySelectorAll('.step').length >= 20` | Property 5 |
| Structural singletons | `querySelectorAll('aside.guide-toc').length === 1`, `querySelectorAll('.clan-hero').length === 1` | Property 6 |
| Tip + warn present | `querySelectorAll('.tip').length >= 1`, `querySelectorAll('.warn').length >= 1` | Property 7 |
| Lore list present | `querySelectorAll('.lore-list').length >= 1` | Property 8 |

### Additional Manual Checks

- Visual review in browser at 1280px and 375px widths
- Verify rune watermark (ᛒ) renders in clan hero
- Verify tag colors for Econ and Support are visually distinct
- Verify all five year sections scroll correctly from TOC links
- Verify no Lynx content appears in rendered page

### Property-Based Testing Applicability

PBT (randomized input generation) is **not applicable** to this feature. The document is static HTML with fixed content — there is no function that transforms variable inputs into outputs. The correctness properties are structural invariants of a single artifact, best verified by deterministic DOM assertions rather than randomized testing.

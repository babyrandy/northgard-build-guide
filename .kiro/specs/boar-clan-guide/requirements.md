# Requirements Document

## Introduction

The Boar Clan guide is a static HTML page (`clans/boar.html`) within the Northgard Build Guide website. The current file is a copy of the Lynx clan guide and contains entirely wrong content. This feature replaces it with accurate, complete, and well-structured content specific to the Boar Clan (Clan of the Boar / Hræsvelgr) — a lore-focused, peaceful-expansion clan that can coexist with wildlife and gains bonuses from knowledge accumulation.

The guide must follow the same HTML/CSS structure as `clans/lynx.html` (the established template), use only the existing external stylesheets and JS, and present a year-by-year build order from Year 800 through Year 804.

## Glossary

- **Boar Clan**: The Clan of the Boar (Hræsvelgr), a lore- and knowledge-focused clan in Northgard
- **Svarn**: The Boar Clan's Warchief — a spiritual leader and sage who heals friendly animals in his zone and can tame one animal (bear or wolf), allowing it to be controlled and moved into enemy/neutral territory
- **Shaman**: The Boar Clan's unique unit — a support unit that generates lore and provides buffs
- **Wildlife Coexistence**: The Boar Clan's unique mechanic — wolves and brown bears in colonized zones become friendly and won't attack Boar Clan units; wildlife tiles can be colonized for an extra food cost
- **Lore Priority Order**: Simple Living → Colonization → Lay of the Land → Bartering → Handiwork → Osmosis
- **Lore**: The in-game knowledge resource used to unlock upgrades on the lore tree
- **Build Order**: A year-by-year sequence of prioritized actions for optimal clan development
- **Year Section**: A discrete section of the guide covering one in-game year (800–804)
- **Step Card**: A numbered action item within a year section, containing a title, description, and optional resource chips
- **Tip Callout**: A blue-bordered informational box highlighting strategic advice
- **Warn Callout**: A red-bordered warning box highlighting common mistakes or risks
- **Lore List**: A ranked list of recommended lore tree upgrades for a given year
- **Resource Chip**: A small inline badge indicating a resource cost (food, wood, gold, lore)
- **TOC**: Table of Contents — the sidebar navigation linking to each year section
- **Breadcrumb**: The navigation trail at the top of the page (Home › Clans › Boar Clan)
- **Clan Hero Banner**: The page header section showing the clan image, name, subtitle, and role tags

---

## Requirements

### Requirement 1: Accurate Clan Identity

**User Story:** As a player reading the Boar Clan guide, I want to see correct clan identity information, so that I know I am reading the right guide and can trust its content.

#### Acceptance Criteria

1. THE Guide SHALL display the page title as "Boar Clan Guide — Northgard Build Guide" in the HTML `<title>` element
2. THE Guide SHALL display the breadcrumb trail as "Home › Clans › Boar Clan" with correct relative links to `../index.html`
3. THE Guide SHALL display the clan hero image using `../assets/images/Boar_round.webp` with alt text "Boar Clan"
4. THE Guide SHALL display the clan heading as "Svarn — Boar Clan"
5. THE Guide SHALL display a subtitle referencing the Boar Clan's lore-focused identity (e.g., "Masters of Lore & Peaceful Expansion")
6. THE Guide SHALL display role tags matching the index.html classification: Econ and Support
7. THE Guide SHALL NOT contain any Lynx Clan references (Brundr, Kaelinn, Mielikki, Trackers, Archery Range, Hunting Trophies, or "Path of the Hunter")

---

### Requirement 2: Structural Conformance to Site Template

**User Story:** As a developer maintaining the site, I want the Boar Clan guide to follow the same HTML structure as the Lynx guide, so that the site remains consistent and the shared CSS/JS works correctly.

#### Acceptance Criteria

1. THE Guide SHALL include the `<link rel="stylesheet" href="../css/main.css">` and `<script src="../js/interactions.js" defer>` references in the `<head>`
2. THE Guide SHALL include a page-specific `<style>` block in the `<head>` containing all clan-page layout styles (breadcrumb, clan-hero, guide-layout, guide-toc, year-section, build-steps, step, tip, warn, lore-list, chip variants, responsive breakpoints)
3. THE Guide SHALL include a `<header class="main-header">` with the site brand "Northgard: Build Guide"
4. THE Guide SHALL include a `<nav class="breadcrumb">` element with correct Boar Clan links
5. THE Guide SHALL include a `<div class="clan-hero">` section with the clan image, heading, subtitle, and tags
6. THE Guide SHALL include a `<main>` element containing a `<div class="guide-layout">` with two children: `<aside class="guide-toc">` and `<div class="guide-content">`
7. THE Guide SHALL include a sidebar TOC with anchor links to each year section (`#y800` through `#y804`) and a "← All Clans" back link
8. THE Guide SHALL include exactly five year sections with IDs `y800`, `y801`, `y802`, `y803`, and `y804`
9. WHEN the viewport width is 860px or less, THE Guide SHALL render the sidebar TOC in a horizontal/stacked layout via the responsive CSS breakpoint

---

### Requirement 3: Year 800 Build Order Content

**User Story:** As a Boar Clan player, I want accurate Year 800 build steps, so that I can start the game correctly with the right opening moves.

#### Acceptance Criteria

1. THE Year_800_Section SHALL display a year-goal statement describing the Year 800 objective (establishing food/wood income and beginning lore accumulation)
2. THE Year_800_Section SHALL include at least 4 numbered step cards covering the Boar Clan's opening build (Scout Camp, early expansion, first lore building, and wildlife coexistence setup)
3. THE Year_800_Section SHALL include at least one tip callout referencing the Boar Clan's wildlife coexistence mechanic
4. WHEN a step involves a resource cost, THE Year_800_Section SHALL display the cost using the appropriate chip class (`chip-food`, `chip-wood`, `chip-gold`, or `chip-lore`)
5. THE Year_800_Section SHALL NOT reference Lynx-specific units, buildings, or mechanics

---

### Requirement 4: Year 801 Build Order Content

**User Story:** As a Boar Clan player, I want accurate Year 801 build steps, so that I can develop my economy and lore engine through the first full year.

#### Acceptance Criteria

1. THE Year_801_Section SHALL display a year-goal statement describing the Year 801 objective (expanding lore income, growing population, and leveraging wildlife coexistence for peaceful tile colonization)
2. THE Year_801_Section SHALL include at least 4 numbered step cards covering mid-early development (lore building upgrades, Shaman recruitment, peaceful expansion into wildlife tiles, and economy buildings)
3. THE Year_801_Section SHALL include a lore-list callout ranking the top 3–5 recommended lore tree upgrades for Year 801
4. THE Year_801_Section SHALL include at least one tip or warn callout with Boar Clan-specific strategic advice
5. THE Year_801_Section SHALL reference the Shaman unit as the Boar Clan's unique unit

---

### Requirement 5: Year 802 Build Order Content

**User Story:** As a Boar Clan player, I want accurate Year 802 build steps, so that I can transition into mid-game strength using the clan's knowledge bonuses.

#### Acceptance Criteria

1. THE Year_802_Section SHALL display a year-goal statement describing the Year 802 objective (scaling lore output, building military presence, and leveraging knowledge bonuses)
2. THE Year_802_Section SHALL include at least 4 numbered step cards covering mid-game development (Forge upgrades, military build-up, continued lore investment, and expansion)
3. THE Year_802_Section SHALL include at least one tip callout describing the Boar Clan's decision point between peaceful scaling and military preparation
4. THE Year_802_Section SHALL reference lore-based bonuses or upgrades specific to the Boar Clan

---

### Requirement 6: Year 803 Build Order Content

**User Story:** As a Boar Clan player, I want accurate Year 803 build steps, so that I can sustain my economy and project power in the late-mid game.

#### Acceptance Criteria

1. THE Year_803_Section SHALL display a year-goal statement describing the Year 803 objective (sustaining lore advantage, maintaining military, and controlling key map areas)
2. THE Year_803_Section SHALL include at least 3 numbered step cards covering late-mid game actions (Town Hall upgrades, sustained military, and lore tree completion)
3. THE Year_803_Section SHALL include at least one tip or warn callout with Boar Clan-specific late-game advice

---

### Requirement 7: Year 804 Build Order Content

**User Story:** As a Boar Clan player, I want accurate Year 804 build steps, so that I understand the clan's late-game win conditions and how to close out a match.

#### Acceptance Criteria

1. THE Year_804_Section SHALL display a year-goal statement describing the Year 804 objective (executing the win condition using accumulated lore and knowledge bonuses)
2. THE Year_804_Section SHALL include at least 3 numbered step cards covering late-game actions
3. THE Year_804_Section SHALL include at least one tip callout summarizing the Boar Clan's overall win condition

---

### Requirement 8: No Lynx Clan Content Contamination

**User Story:** As a player reading the Boar Clan guide, I want the page to contain only Boar Clan content, so that I am not misled by incorrect information copied from another clan's guide.

#### Acceptance Criteria

1. THE Guide SHALL NOT contain the text "Lynx" anywhere in the rendered page content or HTML attributes
2. THE Guide SHALL NOT contain the text "Mielikki" anywhere in the page
3. THE Guide SHALL NOT contain the text "Brundr" or "Kaelinn" anywhere in the page
4. THE Guide SHALL NOT contain the text "Tracker" (as a unit name) anywhere in the page
5. THE Guide SHALL NOT contain the text "Hunting Trophies" anywhere in the page
6. THE Guide SHALL NOT reference `Lynx_round.webp` in any `src` attribute
7. THE Guide SHALL reference `Boar_round.webp` as the clan hero image source

---

### Requirement 9: HTML Validity and Asset Integrity

**User Story:** As a developer, I want the Boar Clan guide to be valid, well-formed HTML that correctly references all assets, so that the page renders without errors in any browser.

#### Acceptance Criteria

1. THE Guide SHALL be a valid HTML5 document with a `<!DOCTYPE html>` declaration and `<html lang="en">` root element
2. THE Guide SHALL include `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
3. THE Guide SHALL include a `<meta name="description">` tag with Boar Clan-specific content
4. ALL `<img>` elements in THE Guide SHALL include a non-empty `alt` attribute
5. THE Guide SHALL use relative paths (`../`) for all asset and stylesheet references, consistent with the `clans/` subdirectory location
6. IF a referenced image file does not exist at the specified path, THEN THE Guide SHALL use a fallback `alt` text that describes the missing image

---

### Requirement 10: Correctness Properties for Static HTML Validation

**User Story:** As a developer, I want automated checks to verify the guide's structural and content correctness, so that regressions (such as re-introduction of Lynx content) are caught early.

#### Acceptance Criteria

1. THE Guide SHALL contain exactly one element with `id="y800"`, one with `id="y801"`, one with `id="y802"`, one with `id="y803"`, and one with `id="y804"`
2. THE Guide SHALL contain exactly one `<aside class="guide-toc">` element
3. THE Guide SHALL contain exactly one `<div class="clan-hero">` element
4. THE Guide SHALL contain at least one element with class `tip` and at least one element with class `warn`
5. THE Guide SHALL contain at least one element with class `lore-list`
6. FOR ALL anchor elements in the sidebar TOC, THE Guide SHALL contain a corresponding element with the matching `id` attribute (no broken internal links)
7. THE Guide SHALL contain at least 20 elements with class `step` across all year sections (ensuring sufficient build order depth)
8. FOR ALL `<img>` elements, THE Guide SHALL have a non-empty `alt` attribute (round-trip: every image has accessible text)

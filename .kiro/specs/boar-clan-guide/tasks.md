# Implementation Plan: Boar Clan Guide

## Overview

Replace the stale `clans/boar.html` (currently a Lynx Clan copy) with a complete, accurate Boar Clan guide. The implementation is a single HTML file edit following the established `clans/lynx.html` template structure.

## Tasks

- [x] 1. Replace page head and meta content
  - Update `<title>` to `Boar Clan Guide — Northgard Build Guide`
  - Update `<meta name="description">` with Boar Clan-specific content
  - Retain `<link>` to `../css/main.css` and `<script>` to `../js/interactions.js` (defer)
  - Copy the full page-specific `<style>` block from `lynx.html`, then:
    - Replace `.clan-hero::before { content: "ᛚ" }` with `content: "ᛒ"`
    - Replace `color: var(--clan-scout)` on the rune with a neutral/lore color (e.g. `var(--text-muted)`)
    - Add `tag-econ` and `tag-support` CSS classes (matching the pattern of `tag-scout`/`tag-combat`)
  - _Requirements: 1.1, 2.1, 2.2, 9.1, 9.2, 9.3_

- [x] 2. Replace header, breadcrumb, and clan hero banner
  - [x] 2.1 Update breadcrumb `<span class="current">` from "Lynx Clan" to "Boar Clan"
    - _Requirements: 1.2, 8.1_
  - [x] 2.2 Replace clan hero `<img src>` with `../assets/images/Boar_round.webp` and `alt="Boar Clan"`
    - _Requirements: 1.3, 8.6, 8.7, 9.4_
  - [x] 2.3 Replace `<h1>` with `Svarn — Boar Clan`
    - _Requirements: 1.4_
  - [x] 2.4 Replace subtitle with `Masters of Lore &amp; Peaceful Expansion`
    - _Requirements: 1.5_
  - [x] 2.5 Replace clan tags with `<span class="tag tag-econ">Econ</span>` and `<span class="tag tag-support">Support</span>`
    - _Requirements: 1.6_

- [x] 3. Checkpoint — Verify no Lynx content remains in head, header, breadcrumb, and hero
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Implement Year 800 section content
  - Replace the existing `<section id="y800">` body entirely
  - Set `<h2>` to "Foundation &amp; First Lore"
  - Write `year-goal` describing: establish food/wood income and begin lore accumulation
  - Write at least 5 step cards covering: Scout Camp → Expand (lore stones/forest) → Woodcutter's Lodge → first lore building → Summon Svarn
  - Add a tip callout referencing wildlife coexistence (wolves/bears become friendly in colonized zones)
  - Add a warn callout about not neglecting food
  - Use `chip-food`, `chip-wood` chips where appropriate
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]* 4.1 Write DOM assertion test for Property 4 (no Lynx contamination) after Year 800 is written
    - **Property 4: No Lynx Clan content contamination**
    - **Validates: Requirements 8.1–8.6**

- [x] 5. Implement Year 801 section content
  - Replace the existing `<section id="y801">` body entirely
  - Set `<h2>` to "Lore Engine &amp; Peaceful Expansion"
  - Write `year-goal` describing: expand lore income, grow population, colonize wildlife tiles
  - Write at least 5 step cards covering: build Shamans → Colonization lore → Lay of the Land lore → expand into wildlife tiles → Trading Post or Docks → November feast
  - Add a `lore-list` ranking: 1st Simple Living, 2nd Colonization, 3rd Lay of the Land
  - Add at least one tip callout referencing wildlife tile colonization (+2 pop cap each) and 200 Fame target
  - Reference the Shaman as the Boar Clan's unique unit in at least one step
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ]* 5.1 Write DOM assertion test for Property 8 (lore-list present)
    - **Property 8: Lore list present**
    - **Validates: Requirements 10.5**

- [x] 6. Implement Year 802 section content
  - Replace the existing `<section id="y802">` body entirely
  - Set `<h2>` to "Economy Scaling &amp; Military Prep"
  - Write `year-goal` describing: scale lore output, build military presence, leverage knowledge bonuses
  - Write at least 4 step cards covering: Bartering lore → Handiwork lore → Forge + tool upgrades → military build-up (Swordsmen/Warriors) → Altar of Kings
  - Add a tip callout describing the peaceful-scaling vs. military-preparation decision point
  - Add a warn callout about not over-investing in stone
  - Reference lore-based bonuses specific to the Boar Clan
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 7. Implement Year 803 section content
  - Replace the existing `<section id="y803">` body entirely
  - Set `<h2>` to "Lore Completion &amp; Map Control"
  - Write `year-goal` describing: sustain lore advantage, maintain military, control key map areas
  - Write at least 3 step cards covering: Osmosis lore → complete lore tree → Town Hall upgrade → Svarn's tamed animal for scouting/harassment
  - Add at least one tip or warn callout with late-game Boar Clan advice (Osmosis passive lore from territory)
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 8. Implement Year 804 section content
  - Replace the existing `<section id="y804">` body entirely
  - Set `<h2>` to "Win Condition Execution"
  - Write `year-goal` describing: execute win condition using accumulated lore and knowledge bonuses
  - Write at least 3 step cards covering: Altar of Kings / Wisdom victory path → Fame victory via territory + feasts → Svarn's 500 Fame ability
  - Add a tip callout summarizing the Boar Clan's overall win condition (every new knowledge unlock gives +5 Fame)
  - _Requirements: 7.1, 7.2, 7.3_

- [x] 9. Checkpoint — Verify full content correctness and no Lynx contamination
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Write DOM assertion tests for structural correctness properties
  - [ ]* 10.1 Write DOM assertion test for Property 1 (year section IDs unique and complete)
    - **Property 1: Year section IDs are unique and complete**
    - Assert `document.querySelectorAll('[id^="y80"]').length === 5` and each of `y800`–`y804` exists exactly once
    - **Validates: Requirements 10.1**
  - [ ]* 10.2 Write DOM assertion test for Property 2 (TOC links resolve to existing anchors)
    - **Property 2: TOC links resolve to existing anchors**
    - For each `aside.guide-toc a[href^="#"]`, assert `document.getElementById(fragment)` is non-null
    - **Validates: Requirements 10.6**
  - [ ]* 10.3 Write DOM assertion test for Property 3 (all images have non-empty alt text)
    - **Property 3: All images have non-empty alt text**
    - For each `img`, assert `img.alt.trim().length > 0`
    - **Validates: Requirements 9.4, 10.8**
  - [ ]* 10.4 Write DOM assertion test for Property 5 (step count ≥ 20)
    - **Property 5: Sufficient build order depth**
    - Assert `document.querySelectorAll('.step').length >= 20`
    - **Validates: Requirements 10.7**
  - [ ]* 10.5 Write DOM assertion test for Property 6 (structural singletons)
    - **Property 6: Required structural singletons**
    - Assert `querySelectorAll('aside.guide-toc').length === 1` and `querySelectorAll('.clan-hero').length === 1`
    - **Validates: Requirements 10.2, 10.3**
  - [ ]* 10.6 Write DOM assertion test for Property 7 (tip and warn callouts present)
    - **Property 7: Tip and warn callouts present**
    - Assert `querySelectorAll('.tip').length >= 1` and `querySelectorAll('.warn').length >= 1`
    - **Validates: Requirements 10.4**

- [ ] 11. Final checkpoint — Full structural and content validation
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- All five year sections must be replaced — no Lynx content may remain anywhere in the file
- The sidebar TOC is already correct in the existing file (links `#y800`–`#y804`) and requires no changes
- The `<header>` and `<aside>` structure is already correct and requires no changes beyond breadcrumb/hero content
- Property tests validate DOM structure using a parser such as jsdom or BeautifulSoup against the final `clans/boar.html`

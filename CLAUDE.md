Site Structure

  ├── index.html                  # Overview page
  ├── css/
  │   └── styles.css              # Desktop-first styling
  ├── js/
  │   └── interactions.js         # Mobile touch handlers (lightweight)
  ├── clans/
  │   ├── overview/
  │   │   └── index.html          # Clan overview list (with logo links)
  │   ├── clan-{name}/            # Individual clan page
  │   │   ├── index.html
  │   │   ├── lore-tree.md        # Lore progression
  │   │   ├── build-order.md      # 801-802 order
  │   │   ├── tips.md             # Economy, combat, army comp
  │   │   └── image/
  │   │       └── logo.svg
  └── assets/
      ├── images/
      └── icons/

  ---
  Content Requirements Breakdown

  ┌───────────────────────┬──────────────────────────────┬───────────────────────────────────┐
  │      Requirement      │           Location           │               Notes               │
  ├───────────────────────┼──────────────────────────────┼───────────────────────────────────┤
  │ Clan overview + logos │ index.html → clans/overview/ │ Logos as anchor links             │
  ├───────────────────────┼──────────────────────────────┼───────────────────────────────────┤
  │ Playstyle summary     │ Each clan page               │ 1-2 sentence format               │
  ├───────────────────────┼──────────────────────────────┼───────────────────────────────────┤
  │ 801-802 build order   │ build-order.md               │ Include building progression      │
  ├───────────────────────┼──────────────────────────────┼───────────────────────────────────┤
  │ Lore tree             │ lore-tree.md                 │ Progression milestones            │
  ├───────────────────────┼──────────────────────────────┼───────────────────────────────────┤
  │ Economy tips          │ tips.md                      │ Resource management               │
  ├───────────────────────┼──────────────────────────────┼───────────────────────────────────┤
  │ Combat tips           │ tips.md                      │ Fighting style, army comp for 3v3 │
  ├───────────────────────┼──────────────────────────────┼───────────────────────────────────┤
  │ Clan images           │ assets/images/               │ No color palette constraints      │
  └───────────────────────┴──────────────────────────────┴───────────────────────────────────┘

  northgard-site/
  ├── index.html              # Landing page
  ├── pages/
  │   └── overview.html       # Main overview page
  └── assets/
      ├── css/
      │   └── main.css        # Norse-themed styling
      ├── images/
      │   └── placeholder.txt # Image guidelines
      └── fonts/              # For future rune fonts


---
publish: true
title: 🎩5e - Card Decks
created: 2026-08-27T14:32:28.252+02:00
modified: 2026-08-27T15:56:25.036+02:00
published: 2026-08-27T15:56:25.036+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Card Decks🎩

This chapter lists all weapons with the "Card Deck" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Card Decks
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Card Deck"
    order:
      - file.name
      - damage
      - damagetype
      - properties
      - a
      - weight
      - cost
    sort:
      - property: type
        direction: DESC
      - property: file.name
        direction: ASC
    columnSize:
      note.properties: 236

```

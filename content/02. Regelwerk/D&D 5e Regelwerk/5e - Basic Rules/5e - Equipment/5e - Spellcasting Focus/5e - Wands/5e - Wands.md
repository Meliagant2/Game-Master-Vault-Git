---
publish: true
title: 🎩5e - Wands
created: 2026-08-27T09:45:43.952+02:00
modified: 2026-08-27T15:59:02.884+02:00
published: 2026-08-27T15:59:02.884+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Wands🎩

This chapter lists all weapons with the "Wand" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Wands
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Wand"
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

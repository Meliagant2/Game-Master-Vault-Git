---
publish: true
title: 🎩5e - Rods
created: 2026-08-27T13:59:46.775+02:00
modified: 2026-08-27T15:58:44.770+02:00
published: 2026-08-27T15:58:44.770+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Rods🎩

This chapter lists all weapons with the "Rod" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Rods
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Rod"
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

---
publish: true
title: 🎩5e - Crystals
created: 2026-08-10T08:29:09.820+02:00
modified: 2026-08-31T16:29:26.244+02:00
published: 2026-08-31T16:29:26.244+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Crystals🎩

This chapter lists all weapons with the "Crystal" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Crystals
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category.contains("Crystal")
    order:
      - file.name
      - damage
      - damagetype
      - properties
      - mastery
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

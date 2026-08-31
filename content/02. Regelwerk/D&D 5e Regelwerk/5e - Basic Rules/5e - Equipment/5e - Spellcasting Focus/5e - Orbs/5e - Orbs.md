---
publish: true
title: 🎩5e - Orbs
created: 2026-08-10T08:29:09.820+02:00
modified: 2026-08-31T10:41:44.457+02:00
published: 2026-08-31T10:41:44.457+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Orbs🎩

This chapter lists all weapons with the "Orb" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Orbs
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Orb"
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

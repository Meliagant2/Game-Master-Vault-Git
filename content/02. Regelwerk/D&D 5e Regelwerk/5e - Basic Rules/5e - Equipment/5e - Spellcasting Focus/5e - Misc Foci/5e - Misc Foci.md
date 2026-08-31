---
publish: true
title: 🎩5e - Misc Foci
created: 2026-08-27T14:27:18.087+02:00
modified: 2026-08-31T10:41:42.123+02:00
published: 2026-08-31T10:41:42.123+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Misc Foci🎩

This chapter lists all weapons with the "Misc Focus" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Misc Focuss
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Misc Focus"
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

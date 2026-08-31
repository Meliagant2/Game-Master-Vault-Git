---
publish: true
title: 🎩5e - Musical Instruments
created: 2026-07-21T11:35:56.139+02:00
modified: 2026-08-31T16:30:21.613+02:00
published: 2026-08-31T16:30:21.613+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Musical Instruments🎩

Musical Instruments can be tools or spellcating Foci.

This chapter lists all weapons with the "Musical Instrument" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Magical Instruments
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category.contains("Instrument")
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

---
publish: true
title: 🎩5e - Ritual Bells
created: 2026-08-27T14:31:26.585+02:00
modified: 2026-08-27T15:58:33.634+02:00
published: 2026-08-27T15:58:33.634+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Ritual Bells🎩

This chapter lists all weapons with the "Ritual Bell" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Ritual Bells
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Ritual Bell"
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

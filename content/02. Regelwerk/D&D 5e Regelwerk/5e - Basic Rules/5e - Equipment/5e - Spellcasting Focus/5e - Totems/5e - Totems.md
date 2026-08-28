---
publish: true
title: 🎩5e - Totems
created: 2026-08-27T14:31:27.422+02:00
modified: 2026-08-27T15:58:55.643+02:00
published: 2026-08-27T15:58:55.643+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Totems🎩

This chapter lists all weapons with the "Totem" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Totems
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Totem"
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

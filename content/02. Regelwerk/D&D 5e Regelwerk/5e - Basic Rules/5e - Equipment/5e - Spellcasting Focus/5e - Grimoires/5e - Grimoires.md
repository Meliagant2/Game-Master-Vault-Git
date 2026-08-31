---
publish: true
title: 🎩5e - Grimoires
created: 2026-08-27T14:31:25.471+02:00
modified: 2026-08-31T10:41:34.737+02:00
published: 2026-08-31T10:41:34.737+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#Spellfocus"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|5e - Spellcasting Focus]].

# 🎩5e - Grimoires🎩

This chapter lists all weapons with the "Grimoire" category.

```base
views:
  - type: table
    name: 5e Spell Foci - Grimoires
    filters:
      and:
        - dateitags.containsAll("#5e", "#Spellfocus", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Grimoire"
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

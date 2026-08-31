---
publish: true
title: 🗡️5e - Crossbows
created: 2026-08-06T10:20:57.503+02:00
modified: 2026-08-31T16:28:27.761+02:00
published: 2026-08-31T16:28:27.761+02:00
tags:
  - "#Weapon"
  - "#5e"
dateitags:
  - "#Weapons"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapons|5e - Weapons]].

# 🗡️5e - Crossbows🗡️

This chapter lists all weapons with the "Crossbow" category.

```base
views:
  - type: table
    name: 5e Weapons - Crossbows
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category.contains("Crossbow")
    order:
      - file.name
      - type
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

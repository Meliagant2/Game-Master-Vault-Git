---
publish: true
title: 🗡️5e - Axes
created: 2026-08-18T09:43:09.451+02:00
modified: 2026-08-31T09:59:56.110+02:00
published: 2026-08-31T09:59:56.110+02:00
tags:
  - "#Weapon"
  - "#5e"
dateitags:
  - "#Weapons"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapons|5e - Weapons]].

# 🗡️5e - Axes🗡️

This chapter lists all weapons with the "Axe" category.

```base
views:
  - type: table
    name: 5e Weapons - Axes
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category == "Axe"
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

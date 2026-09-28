---
publish: true
title: 🗡️5e - Polearms
created: 2026-08-18T10:45:47.132+02:00
modified: 2026-09-28T11:29:27.439+02:00
published: 2026-09-28T11:29:27.439+02:00
tags:
  - "#Weapon"
  - "#5e"
dateitags:
  - "#Weapons"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapons|5e - Weapons]].

# 🗡️5e - Polearms🗡️

This chapter lists all weapons with the "Polearm" category.

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
formulas:
  Weapon: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e Weapons - Polearms
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - category.contains("Polearm")
    order:
      - formula.Weapon
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

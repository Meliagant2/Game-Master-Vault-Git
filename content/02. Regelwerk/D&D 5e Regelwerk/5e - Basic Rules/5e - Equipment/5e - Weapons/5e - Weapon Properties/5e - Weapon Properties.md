---
publish: true
title: 🗡️5e - Weapon Properties
created: 2026-08-06T10:19:51.158+02:00
modified: 2026-09-28T11:53:50.749+02:00
published: 2026-09-28T11:53:50.749+02:00
tags:
  - "#Grundregeln"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapons|5e - Weapons]].

# 🗡️5e - Weapon Properties🗡️

Here are definitions of the properties in the Properties column of the Weapons table.

### List of all Weapon Properties

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
formulas:
  Property: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Weapon Properties
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weaponproperty")
    order:
      - formula.Property
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      formula.titleasname: 206

```

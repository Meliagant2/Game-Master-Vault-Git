---
publish: true
title: 🗡️5e - Weapon Mastery Properties
created: 2026-08-06T08:53:16.853+02:00
modified: 2026-09-28T11:30:29.620+02:00
published: 2026-09-28T11:30:29.620+02:00
tags:
  - "#Grundregeln"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapons|5e - Weapons]].

# 🗡️5e - Weapon Mastery Properties🗡️

Each weapon has a **Mastery Property**, which is usable only by a character who has a feature, such as a martial class' Weapon Mastery, that unlocks the property for the character. The properties are defined below.

### All Weapon Mastery Properties

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
    name: 5e - Weapon Mastery Properties
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weaponmasteryproperty")
    order:
      - formula.Property
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      formula.titleasname: 206

```

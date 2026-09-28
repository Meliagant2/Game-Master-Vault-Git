---
publish: true
title: ⛑️5e - Armor Properties
created: 2026-09-28T11:53:03.556+02:00
modified: 2026-09-28T11:53:44.411+02:00
published: 2026-09-28T11:53:44.411+02:00
tags:
  - "#Grundregeln"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Armor/5e - Armor|5e - Armor]].

# ⛑️5e - Armor Properties⛑️

Here are definitions of the properties in the Properties column of the Armor table.

### List of all Armor Properties

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
    name: 5e - Armor Properties
    filters:
      and:
        - dateitags.containsAll("#5e", "#Armorproperty")
    order:
      - formula.Property
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      formula.titleasname: 206

```

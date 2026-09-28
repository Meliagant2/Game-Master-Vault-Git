---
publish: true
title: ⛑️5e - Heavy Armor
created: 2026-09-01T14:54:06.247+02:00
modified: 2026-09-28T12:12:00.833+02:00
published: 2026-09-28T12:12:00.833+02:00
tags:
  - "#Armor"
  - "#5e"
dateitags:
  - "#Armorcategory"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Armor/5e - Armor|5e - Armor]].

# ⛑️5e - Heavy Armor⛑️

This chapter lists all armor with the "Heavy" category.

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
    - '!file.name.contains("Template")'
    - dateitags.containsAll("#5e", "#Armor", "#Item")
formulas:
  Armor: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e Armor; Heavy
    filters:
      and:
        - category.contains("Heavy")
    order:
      - formula.Armor
      - type
      - ac
      - properties
      - a
      - weight
      - cost
    sort:
      - property: ac
        direction: ASC
      - property: costsorting
        direction: ASC
      - property: cost
        direction: ASC
    columnSize:
      note.properties: 236

```

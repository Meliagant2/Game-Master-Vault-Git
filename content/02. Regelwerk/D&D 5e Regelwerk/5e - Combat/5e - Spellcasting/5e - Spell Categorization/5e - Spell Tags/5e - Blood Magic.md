---
publish: true
title: ☄️5e - Blood Magic Spells
created: 2026-09-21T09:21:08.372+02:00
modified: 2026-09-21T09:24:04.043+02:00
published: 2026-09-21T09:24:04.043+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Spellcasting"
  - "#5e"
status: ✅
source: Self
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellcasting|5e - Spellcasting]].

# ☄️5e - Blood Magic Spells☄️

## List of all Blood Magic Spells

```base
filters:
  and:
    - effect.containsAny("Blood Magic")
    - dateitags.containsAll("#Spell", "#5e")
    - '!file.name.contains("(Legacy)")'
formulas:
  Spell: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Blood Magic; All Spells
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 1st-level
    filters:
      and:
        - level == 1
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 2nd-level
    filters:
      and:
        - level == 2
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 3rd-level
    filters:
      and:
        - level == 3
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 4th-level
    filters:
      and:
        - level == 4
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 5th-level
    filters:
      and:
        - level == 5
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 6th-level
    filters:
      and:
        - level == 6
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 7th-level
    filters:
      and:
        - level == 7
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 8th-level
    filters:
      and:
        - level == 8
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25
  - type: table
    name: 5e - Blood Magic; 9th-level
    filters:
      and:
        - level == 9
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.level: 25
      note.time: 25
      note.c: 25

```

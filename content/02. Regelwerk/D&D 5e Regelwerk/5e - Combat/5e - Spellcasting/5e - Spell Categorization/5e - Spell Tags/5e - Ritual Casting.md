---
publish: true
title: ☄️5e - Ritual Casting
created: 2026-08-11T12:15:07.759+02:00
modified: 2026-09-21T08:01:16.644+02:00
published: 2026-09-21T08:01:16.644+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Spellcasting"
  - "#5e"
status: ✅
source: Player's Handbook 2024
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellcasting|5e - Spellcasting]].

# ☄️5e - Ritual Casting☄️

Certain spells have the **Ritual** tag in the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Rules/5e - Casting Time/5e - Casting Time|☄️Casting Time]] entry. Such a spell can be cast following the normal rules for spellcasting, or it can be cast as a **Ritual**. The **Ritual** version of a spell takes <u>10 minutes</u> longer to cast than normal, but it doesn't expend a spell slot. To cast a spell as a Ritual, a spellcaster must have it prepared.

## List of all Rituals

```base
filters:
  and:
    - effect.containsAny("Ritual")
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
    name: 5e - Rituals; All Spells
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
    name: 5e - Rituals; 1st-level
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
    name: 5e - Rituals; 2nd-level
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
    name: 5e - Rituals; 3rd-level
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
    name: 5e - Rituals; 4th-level
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
    name: 5e - Rituals; 5th-level
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
    name: 5e - Rituals; 6th-level
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
    name: 5e - Rituals; 7th-level
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
    name: 5e - Rituals; 8th-level
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
    name: 5e - Rituals; 9th-level
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

## Quelle

> [!inspiration] Quelle/Inspiration
> Player's Handbook 2024

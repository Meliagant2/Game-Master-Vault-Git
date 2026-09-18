---
publish: true
title: ☄️5e - Arcane Spell Source
description: Arcane magic is the invisible energy that permeates through all of existence, surrounding and connecting every part of the universe.
created: 2026-07-20T12:11:02.704+02:00
modified: 2026-09-18T08:32:06.390+02:00
published: 2026-09-18T08:32:06.390+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#SpelllistArcane"
  - "#Spell"
  - "#5e"
status: ✅
source: DC20
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Categorization|5e - Spell Categorization]].

# ☄️5e - Arcane Spell Source☄️

Arcane magic is the invisible energy that permeates through all of existence, surrounding and connecting every part of the universe. It is a pure, formless energy that can be shaped through study, focus, and discipline. Many mortals learn to harness this power by mastering incantations, runes, and rituals that channel raw magic into structured, purposeful spells.

### List of all Arcane Spells:

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
formulas:
  Spell: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Arcane List; Choose Spell Level
    filters:
      and:
        - dateitags.contains("#5e")
        - dateitags.containsAny("#SpelllistArcane")
    order:
      - formula.titleasname
      - description
    columnSize:
      formula.titleasname: 206
  - type: table
    name: 5e - Arcane; All Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
        - level == 0
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
    name: 5e - Arcane; 1st-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; 2nd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; 3rd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; 4th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; 5th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; 6th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; 7th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; 8th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e - Arcane; 9th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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

<br>

## Quelle

> [!inspiration] Quelle/Inspiration
> DC20

---
publish: true
title: ☄️5e - Divine Spell Source
description: Divine magic draws power from divine beings, such as deities, their followers or the manifestations of abstract universal concepts.
created: 2026-07-20T12:11:02.751+02:00
modified: 2026-09-18T08:31:53.841+02:00
published: 2026-09-18T08:31:53.841+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#SpelllistDivine"
  - "#Spell"
  - "#5e"
status: ✅
source: DC20
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Categorization|5e - Spell Categorization]].

# ☄️5e - Divine Spell Source☄️

Divine magic draws power from divine beings (good, evil, and indifferent), such as deities (greater and lesser gods), their followers (angels, archons, devils etc.) or the manifestations of abstract universal concepts (order, love, peace, war, etc.). Divine magic is granted to mortals either through faith, duty, or desperation. Creatures that wield Divine magic are often servants of their deity, seeking to fulfill their agendas and grow their following.

### List of all Divine Spells:

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
    name: 5e - Divine List; Choose Spell Level
    filters:
      and:
        - dateitags.contains("#5e")
        - dateitags.containsAny("#SpelllistDivine")
    order:
      - formula.titleasname
      - description
    columnSize:
      formula.titleasname: 206
  - type: table
    name: 5e - Divine; All Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 1st-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 2nd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 3rd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 4th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 5th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 6th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 7th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 8th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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
    name: 5e - Divine; 9th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
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

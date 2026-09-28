---
publish: true
title: ☄️5e - School of Necromancy
description: Necromancy spells deal with the power of death.
created: 2026-07-23T12:21:28.513+02:00
modified: 2026-09-28T13:14:36.806+02:00
published: 2026-09-28T13:14:36.806+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#SchoolofMagic"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - Schools of Magic|5e - Schools of Magic]].

# ☄️5e - School of Necromancy☄️

Necromancy spells deal with the power of death.

## List of all Necromancy Spells:

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
    name: 5e - Necromancy; All Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 1st-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 2nd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 3rd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 4th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 5th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 6th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 7th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 8th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Necromancy; 9th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
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
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24

```

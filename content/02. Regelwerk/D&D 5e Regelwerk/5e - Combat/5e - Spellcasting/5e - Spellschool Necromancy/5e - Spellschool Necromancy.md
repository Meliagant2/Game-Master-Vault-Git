---
publish: true
title: ☄️5e - Necromancy Spellschool☄️
created: 2026-07-23T12:21:28.513+02:00
modified: 2026-07-30T09:56:43.841+02:00
published: 2026-07-30T09:56:43.841+02:00
tags:
  - "#Combatrules"
  - "#5e"
status: ✅
---

# ☄️5e - Necromancy Spellschool☄️

Necromancy spells deal with the power of death.

## List of all Necromancy Spells:

```base
views:
  - type: table
    name: 5e - Necromancy; All Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Necromancy")
    order:
      - file.name
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
        - magielevel == 0
    order:
      - file.name
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
        - magielevel == 1
    order:
      - file.name
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
        - magielevel == 2
    order:
      - file.name
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
        - magielevel == 3
    order:
      - file.name
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
        - magielevel == 4
    order:
      - file.name
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
        - magielevel == 5
    order:
      - file.name
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
        - magielevel == 6
    order:
      - file.name
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
        - magielevel == 7
    order:
      - file.name
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
        - magielevel == 8
    order:
      - file.name
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
        - magielevel == 9
    order:
      - file.name
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

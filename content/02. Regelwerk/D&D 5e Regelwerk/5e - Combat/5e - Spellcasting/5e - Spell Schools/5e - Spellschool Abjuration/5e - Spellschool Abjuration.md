---
publish: true
title: ☄️5e - Abjuration Spellschool☄️
created: 2026-07-23T12:21:19.955+02:00
modified: 2026-07-30T10:17:24.712+02:00
published: 2026-07-30T10:17:24.712+02:00
tags:
  - "#Combatrules"
  - "#5e"
status: ✅
---

# ☄️5e - Abjuration Spellschool☄️

Abjuration spells involve the forces of protection and warding.

## List of all Abjuration Spells:

```base
views:
  - type: table
    name: 5e - Abjuration; All Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
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
    name: 5e - Abjuration; Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 0
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
    name: 5e - Abjuration; 1st-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 1
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
    name: 5e - Abjuration; 2nd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 2
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
    name: 5e - Abjuration; 3rd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 3
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
    name: 5e - Abjuration; 4th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 4
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
    name: 5e - Abjuration; 5th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 5
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
    name: 5e - Abjuration; 6th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 6
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
    name: 5e - Abjuration; 7th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 7
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
    name: 5e - Abjuration; 8th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 8
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
    name: 5e - Abjuration; 9th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - school.contains("Abjuration")
        - level == 9
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

---
publish: true
title: ☄️5e - Primal Spell List☄️
created: 2026-07-20T12:11:02.819+02:00
modified: 2026-07-30T10:18:37.844+02:00
published: 2026-07-30T10:18:37.844+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Spelllistprimal"
  - "#5e"
status: ✅
---

# ☄️5e - Primal Spell List☄️

## List of all Primal Spells:

```base
views:
  - type: table
    name: 5e - Primal; All Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 1st-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 2nd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 3rd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 4th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 5th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 6th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 7th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 8th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 9th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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

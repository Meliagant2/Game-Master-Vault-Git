---
publish: true
title: ☄️5e - Primal Spell Source
created: 2026-07-20T12:11:02.819+02:00
modified: 2026-09-04T11:48:00.689+02:00
published: 2026-09-04T11:48:00.689+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Spelllistprimal"
  - "#5e"
status: ✅
source: DC20
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Categorization|5e - Spell Categorization]].

# ☄️5e - Primal Spell Source☄️

Primal magic draws power from the physical forces of the universe (land, air, water, fire, plants, animals, and even the planes themselves). This magic comes from a deep rooted connection to the living essence of the world and its elemental energies. Those who wield Primal magic channel the wild rhythms of existence itself; storms, beasts, natural disasters, and the oceans.

### List of all Primal Spells:

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
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
      note.time: 58
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

<br>

## Quelle

> [!inspiration] Quelle/Inspiration
> DC20

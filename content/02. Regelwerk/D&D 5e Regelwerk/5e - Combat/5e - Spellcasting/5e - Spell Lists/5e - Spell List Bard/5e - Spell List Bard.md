---
publish: true
title: ☄️5e - Bard Spell List☄️
created: 2026-07-30T08:37:02.056+02:00
modified: 2026-08-07T12:52:42.626+02:00
published: 2026-08-07T12:52:42.626+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#SpelllistBard"
  - "#5e"
status: ✅
---

# ☄️5e - Bard Spell List☄️

## List of all Bard Spells:

1. All Bard Spells
2. All Arcane Illusion Spells
3. All Arcane Enchantment Spells
4. All Arcane Divination Spells
5. All "Conjure" Spells

```base
views:
  - type: table
    name: 5e - Bard; Choose Spell Level
    filters:
      and:
        - dateitags.contains("#5e")
        - dateitags.containsAny("#SpelllistBard")
    sort:
      - property: file.name
        direction: ASC
  - type: table
    name: 5e - Bard; All Spells
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal")
            - school.containsAny("Illusion", "Enchantment", "Divination")
        - and:
            - zauberliste.contains("Bard")
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
      note.time: 51
      note.c: 24
  - type: table
    name: 5e - Bard; Cantrips
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal")
            - school.containsAny("Illusion", "Enchantment", "Divination")
            - level == 0
        - and:
            - zauberliste.contains("Bard")
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
      note.school: 107
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 1st-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal")
            - school.containsAny("Illusion", "Enchantment", "Divination")
            - level == 1
        - and:
            - zauberliste.contains("Bard")
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
    name: 5e - Bard; 2nd-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal")
            - school.containsAny("Illusion", "Enchantment", "Divination")
            - level == 2
        - and:
            - zauberliste.contains("Bard")
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
    name: 5e - Bard; 3rd-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal")
            - school.containsAny("Illusion", "Enchantment", "Divination")
            - level == 3
        - and:
            - zauberliste.contains("Bard")
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
    name: 5e - Bard; 4th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal")
            - school.containsAny("Illusion", "Enchantment", "Divination")
            - level == 4
        - and:
            - zauberliste.contains("Bard")
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
    name: 5e - Bard; 5th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Bard")
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
    name: 5e - Bard; 6th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Bard")
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
    name: 5e - Bard; 7th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Bard")
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
    name: 5e - Bard; 8th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Bard")
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
    name: 5e - Bard; 9th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Bard")
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

---
publish: true
title: ☄️5e - Bard Spell List☄️
created: 2026-07-30T08:37:02.056+02:00
modified: 2026-09-09T15:14:30.401+02:00
published: 2026-09-09T15:14:30.401+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Spelllist"
  - "#SpelllistBard"
  - "#5e"
status: ✅
---

# ☄️5e - Bard Spell List☄️

## List of all Bard Spells:

1. All Divination Spells
2. All Enchantment Spells
3. All Illusion Spells
4. All Divine Abjuration AND Necromancy Spells
5. All Occult Conjuration Spells
6. All Primal Evocation AND Transmutation Spells

```base
filters:
  and:
    - dateitags.containsAll("#5e", "#Spell")
    - '!file.name.containsAny("Template", "(Legacy)")'
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
        - school.containsAny("Divination", "Enchantment", "Illusion")
        - and:
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation", "Transmutation")
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
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 0
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 0
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation", "Transmutation")
            - level == 0
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
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
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 1
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 1
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation", "Transmutation")
            - level == 1
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
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
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 2
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 2
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation", "Transmutation")
            - level == 2
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
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
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 3
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 3
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation", "Transmutation")
            - level == 3
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
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
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 4
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 4
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation", "Transmutation")
            - level == 4
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
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
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult")
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
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult", "Bard")
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
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult", "Bard")
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
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult", "Bard")
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
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult", "Bard")
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

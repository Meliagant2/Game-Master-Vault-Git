---
publish: true
title: ☄️5e - Bard Spell List☄️
created: 2026-07-30T08:37:02.056+02:00
modified: 2026-07-31T08:33:01.552+02:00
published: 2026-07-31T08:33:01.552+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Spelllistbard"
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
        - dateitags.containsAny("#Spelllistbard")
    sort:
      - property: file.name
        direction: ASC
  - type: table
    name: 5e - Bard; All Spells
    filters:
      or:
        - zauberliste.contains("Bard")
        - and:
            - zauberliste.contains("Arcane")
            - school.containsAny("Illusion", "Enchantment", "Divination")
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

```

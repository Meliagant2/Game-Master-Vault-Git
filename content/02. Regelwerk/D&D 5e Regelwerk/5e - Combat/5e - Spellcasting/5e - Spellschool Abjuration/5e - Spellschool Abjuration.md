---
publish: true
title: ☄️5e - Abjuration Spell School☄️
created: 2026-07-23T12:21:19.955+02:00
modified: 2026-07-29T14:10:43.871+02:00
published: 2026-07-29T14:10:43.871+02:00
tags:
  - "#Combatrules"
  - "#5e"
status: ✅
---

# ☄️5e - Abjuration Spell School☄️

## List of all Divine Spells:

```base
properties:
  note.saveart:
    displayName: Attack/Save
  note.magieschule:
    displayName: School
  note.magielevel:
    displayName: Level
  note.wirkzeit:
    displayName: Time
  note.reichweite:
    displayName: Range/Area
  note.concentration:
    displayName: Conc.
  note.effekt:
    displayName: Damage/Effect
views:
  - type: table
    name: 5e all Arcane Spells
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - zauberliste.contains("Divine")
    order:
      - file.name
      - magielevel
      - magieschule
      - wirkzeit
      - concentration
      - reichweite
      - saveart
      - effekt
    sort:
      - property: magielevel
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.magielevel: 56
      note.magieschule: 76
      note.wirkzeit: 55
      note.concentration: 30
      note.reichweite: 132
      note.saveart: 50

```

---
publish: true
title: ☄️5e - Conjuration Spellschool☄️
created: 2026-07-23T12:21:21.089+02:00
modified: 2026-07-29T14:34:18.324+02:00
published: 2026-07-29T14:34:18.324+02:00
tags:
  - "#Combatrules"
  - "#5e"
status: ✅
---

# ☄️5e - Conjuration Spellschool☄️

Conjuration spells cause objects to be teleported or summoned.

## List of all Conjuration Spells:

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
    name: 5e all Conjuration Spells
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
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
  - type: table
    name: 5e Conjuration Cantrips
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 0
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
  - type: table
    name: 5e 1st level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 1
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
      - property: file.name
        direction: ASC
      - property: magielevel
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
  - type: table
    name: 5e 2nd level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 2
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
  - type: table
    name: 5e 3rd level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 3
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
  - type: table
    name: 5e 4th level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 4
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
  - type: table
    name: 5e 5th level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 5
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
  - type: table
    name: 5e 6th level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 6
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
  - type: table
    name: 5e 7th level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 7
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
  - type: table
    name: 5e 8th level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 8
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
  - type: table
    name: 5e 9th level Conjuration
    filters:
      and:
        - dateitags.contains("#Spell")
        - dateitags.contains("#5e")
        - magieschule.contains("Conjuration")
        - magielevel == 9
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

---
publish: true
title: ☄️5e - Primal Spell List☄️
created: 2026-07-20T12:11:02.819+02:00
modified: 2026-07-30T08:27:35.914+02:00
published: 2026-07-30T08:27:35.914+02:00
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
    name: 5e all Primal Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e Primal Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e 1st level Primal
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e 2nd level Primal
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e 3rd level Primal
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e 4th level Primal
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e 5th level Primal
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e 6th level Primal
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e 7th level Primal
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e 8th level Primal
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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
    name: 5e - Primal; 9th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Primal")
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

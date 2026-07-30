---
publish: true
title: ☄️5e - Arcane Spell List☄️
created: 2026-07-20T12:11:02.704+02:00
modified: 2026-07-30T08:25:36.804+02:00
published: 2026-07-30T08:25:36.804+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Spelllistarcane"
  - "#5e"
status: ✅
---

# ☄️5e - Arcane Spell List☄️

The Arcane Spell List includes spells that manipulate the weave. Artificers, Bards, Sorerers, Warlocks, and Wizards use the Arcane Spell list, as well as their own spell list.

## List of all Arcane Spells:

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
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e Arcane Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 1st level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 2nd level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 3rd level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 4th level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 5th level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 6th level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 7th level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 8th level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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
    name: 5e 9th level Arcane
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Arcane")
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

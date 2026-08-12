---
publish: true
title: 🤺5e - Spirited Steed
description: Mounted, Soldiering, Warfare
created: 2026-07-22T10:44:19.459+02:00
modified: 2026-08-12T11:52:32.142+02:00
published: 2026-08-12T11:52:32.142+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combatrules"
  - "#Combattradition"
  - "#Legacy"
  - "#5e"
status: ✅
classes:
  - Fighter
  - Hunter
  - Marshal
  - Paladin
---

# 🤺5e - Spirited Steed🤺

_Mounted, Soldiering, Warfare_

There are many warriors that fight on horseback — or an altogether different kind of creature — and master the tricks of battling in tandem with their mount to overwhelm slower, less mobile foes. The most common adherents to this tradition are soldiers typically born to noble castes with the resources to both keep steeds and pay for the tutelage of their use.

Spirited Steed Maneuvers are available to the following classes: _Fighter,Hunter,Marshal,Paladin_

```base
views:
  - type: table
    name: 5e - Spirited Steed; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Spirited Steed")
    order:
      - file.name
      - degree
      - tradition
      - time
      - range-Area
      - save-Att
      - effect
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 84
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Spirited Steed; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Spirited Steed")
        - degree == 1
    order:
      - file.name
      - degree
      - tradition
      - time
      - range-Area
      - save-Att
      - effect
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 84
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Spirited Steed; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Spirited Steed")
        - degree == 2
    order:
      - file.name
      - degree
      - tradition
      - time
      - range-Area
      - save-Att
      - effect
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 84
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Spirited Steed; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Spirited Steed")
        - degree == 3
    order:
      - file.name
      - degree
      - tradition
      - time
      - range-Area
      - save-Att
      - effect
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 84
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Spirited Steed; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Spirited Steed")
        - degree == 4
    order:
      - file.name
      - degree
      - tradition
      - time
      - range-Area
      - save-Att
      - effect
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 84
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Spirited Steed; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Spirited Steed")
        - degree == 5
    order:
      - file.name
      - degree
      - tradition
      - time
      - range-Area
      - save-Att
      - effect
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 84
      note.time: 42
      note.range-Area: 54

```

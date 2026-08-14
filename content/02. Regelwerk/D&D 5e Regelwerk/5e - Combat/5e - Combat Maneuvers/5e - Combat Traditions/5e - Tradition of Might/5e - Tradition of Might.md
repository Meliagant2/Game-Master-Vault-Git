---
publish: true
title: 🤺5e - Might
description: Power, Hardiness, Tough, Brutal
created: 2026-08-12T07:59:14.813+02:00
modified: 2026-08-14T13:34:52.402+02:00
published: 2026-08-14T13:34:52.402+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combatrules"
  - "#Combattradition"
  - "#5e"
classes:
  - Adept
  - Barbarian
  - Fighter
  - Paladin
status: ✅
---

# 🤺5e - Might🤺

_Power, Hardiness, Tough, Brutal_

Might Maneuvers are available to the following classes: _Adept,Barbarian,Fighter,Paladin_

```base
views:
  - type: table
    name: 5e - Might; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Might")
    order:
      - file.name
      - degree
      - exertioncost
      - time
      - weapon
      - range-Area
      - save-Att
      - effect
    sort:
      - property: degree
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 30
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Might; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Might")
        - degree == 1
    order:
      - file.name
      - degree
      - exertioncost
      - time
      - weapon
      - range-Area
      - save-Att
      - effect
    sort:
      - property: degree
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 30
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Might; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Might")
        - degree == 2
    order:
      - file.name
      - degree
      - exertioncost
      - time
      - weapon
      - range-Area
      - save-Att
      - effect
    sort:
      - property: degree
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 30
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Might; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Might")
        - degree == 3
    order:
      - file.name
      - degree
      - exertioncost
      - time
      - weapon
      - range-Area
      - save-Att
      - effect
    sort:
      - property: degree
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 30
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Might; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Might")
        - degree == 4
    order:
      - file.name
      - degree
      - exertioncost
      - time
      - weapon
      - range-Area
      - save-Att
      - effect
    sort:
      - property: degree
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 30
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Might; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Might")
        - degree == 5
    order:
      - file.name
      - degree
      - exertioncost
      - time
      - weapon
      - range-Area
      - save-Att
      - effect
    sort:
      - property: degree
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 30
      note.time: 42
      note.range-Area: 54

```

---
publish: true
title: 🤺5e - Prowess
description: Tactical, Skilled, Confidence, Conviction, Resist Magic
created: 2026-08-12T07:59:22.819+02:00
modified: 2026-08-14T13:34:43.664+02:00
published: 2026-08-14T13:34:43.664+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combatrules"
  - "#Combattradition"
  - "#5e"
classes:
  - Barbarian
  - Blood Hunter
  - Fighter
  - Hunter
  - Marshal
  - Paladin
status: ✅
---

# 🤺5e - Prowess🤺

_Tactical, Skilled, Confidence, Conviction, Resist Magic_

Prowess Maneuvers are available to the following classes: _Barbarian,Blood Hunter,Fighter,Hunter,Marshal,Paladin_

```base
views:
  - type: table
    name: 5e - Prowess; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Prowess")
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
    name: 5e - Prowess; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Prowess")
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
    name: 5e - Prowess; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Prowess")
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
    name: 5e - Prowess; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Prowess")
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
    name: 5e - Prowess; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Prowess")
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
    name: 5e - Prowess; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Prowess")
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

---
publish: true
title: 🤺5e - Comradery
description: Teamwork, Supportive, Social
created: 2026-08-12T07:58:51.533+02:00
modified: 2026-08-14T13:35:07.890+02:00
published: 2026-08-14T13:35:07.890+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combatrules"
  - "#Combattradition"
  - "#5e"
classes:
  - Barbarian
  - Fighter
  - Marshal
  - Paladin
  - Rogue
status: ✅
---

# 🤺5e - Comradery🤺

_Teamwork, Supportive, Social_

Comradery Maneuvers are available to the following classes: _Barbarian,Fighter,Marshal,Paladin,Rogue_

```base
views:
  - type: table
    name: 5e - Comradery; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Comradery")
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
    name: 5e - Comradery; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Comradery")
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
      - property: weapon
        direction: ASC
      - property: degree
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 30
      note.time: 141
      note.range-Area: 54
  - type: table
    name: 5e - Comradery; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Comradery")
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
    name: 5e - Comradery; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Comradery")
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
    name: 5e - Comradery; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Comradery")
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
      - property: file.name
        direction: DESC
      - property: degree
        direction: ASC
    columnSize:
      note.degree: 30
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Comradery; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Comradery")
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

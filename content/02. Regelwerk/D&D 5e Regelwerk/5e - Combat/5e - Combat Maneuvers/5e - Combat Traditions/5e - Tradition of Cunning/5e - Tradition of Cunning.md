---
publish: true
title: 🤺5e - Cunning
description: Diversion, Feinting, Mental, Stealth
created: 2026-08-12T07:59:03.991+02:00
modified: 2026-08-14T13:34:59.443+02:00
published: 2026-08-14T13:34:59.443+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combatrules"
  - "#Combattradition"
  - "#5e"
classes:
  - Adept
  - Blood Hunter
  - Fighter
  - Hunter
  - Marshal
  - Rogue
status: ✅
---

# 🤺5e - Cunning🤺

_Diversion, Feinting, Mental, Stealth_

Cunning Maneuvers are available to the following classes: _Adept,Blood Hunter,Fighter,Hunter,Marshal,Rogue_

```base
views:
  - type: table
    name: 5e - Cunning; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Cunning")
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
    name: 5e - Cunning; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Cunning")
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
    name: 5e - Cunning; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Cunning")
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
    name: 5e - Cunning; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Cunning")
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
    name: 5e - Cunning; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Cunning")
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
    name: 5e - Cunning; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Cunning")
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

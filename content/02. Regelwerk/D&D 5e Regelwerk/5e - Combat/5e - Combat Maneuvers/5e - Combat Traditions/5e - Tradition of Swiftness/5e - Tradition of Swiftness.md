---
publish: true
title: 🤺5e - Swiftness
description: Mobility, Speed, Fast Strikes, Ranged
created: 2026-08-12T07:59:31.100+02:00
modified: 2026-08-14T13:34:34.711+02:00
published: 2026-08-14T13:34:34.711+02:00
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
  - Blood Hunter
  - Fighter
  - Hunter
  - Rogue
status: ✅
---

# 🤺5e - Swiftness🤺

_Mobility, Speed, Fast Strikes, Ranged_

Swiftness Maneuvers are available to the following classes: _Adept,Barbarian,Blood Hunter,Fighter,Hunter,Rogue_

```base
views:
  - type: table
    name: 5e - Swiftness; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Swiftness")
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
    columnSize:
      note.degree: 30
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Swiftness; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Swiftness")
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
    name: 5e - Swiftness; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Swiftness")
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
    name: 5e - Swiftness; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Swiftness")
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
    name: 5e - Swiftness; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Swiftness")
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
    name: 5e - Swiftness; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Swiftness")
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

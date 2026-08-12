---
publish: true
title: 🤺5e - Mirror's Glint
description: Flowing, Insightful, Reactive
created: 2026-07-22T10:44:17.437+02:00
modified: 2026-08-12T11:52:19.237+02:00
published: 2026-08-12T11:52:19.237+02:00
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
  - Adept
  - Barbarian
  - Blood Hunter
  - Fighter
  - Hunter
  - Marshal
---

# 🤺5e - Mirror's Glint🤺

_Flowing, Insightful, Reactive_

At its heart combat is a dance between opponents and practicing the Mirror’s Glint tradition means reading, interpreting, and anticipating one’s foe. Using instinct and your insight from battles won and lost, you are excellent at reacting to an enemy in order to gain the upper hand.

Mirror's Glint Maneuvers are available to the following classes: _Adept,Barbarian,Blood Hunter,Fighter,Hunter,Marshal_

```base
views:
  - type: table
    name: 5e - Mirrors Glint; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mirrors Glint")
    order:
      - file.name
      - degree
      - tradition
      - time
      - range-Area
      - save-Att
      - effect
    sort:
      - property: degree
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 84
      note.time: 42
      note.range-Area: 54
  - type: table
    name: 5e - Mirrors Glint; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mirrors Glint")
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
    name: 5e - Mirrors Glint; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mirrors Glint")
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
    name: 5e - Mirrors Glint; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mirrors Glint")
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
    name: 5e - Mirrors Glint; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mirrors Glint")
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
    name: 5e - Mirrors Glint; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mirrors Glint")
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

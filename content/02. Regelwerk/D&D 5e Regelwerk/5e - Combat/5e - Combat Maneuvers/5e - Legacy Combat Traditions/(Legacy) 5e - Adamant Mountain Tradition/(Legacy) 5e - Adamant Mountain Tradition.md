---
publish: true
title: 🤺(Legacy) 5e - Adamant Mountain
description: Hardiness, Might, Power
created: 2026-07-22T10:44:13.099+02:00
modified: 2026-08-17T08:11:57.863+02:00
published: 2026-08-17T08:11:57.863+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combattradition"
  - "#Legacy"
  - "#5e"
status: ✅
classes:
  - Barbarian
  - Fighter
---

# 🤺(Legacy) 5e - Adamant Mountain🤺

_Hardiness, Might, Power_

Engaging in combat means enduring some amount of suffering and those who make use of Adamant Mountain maneuvers are well prepared to weather their opponents’ blows, relying not just on their might but the careful and expert application of force in all aspects of battle.

Adamant Mountain Maneuvers are available to the following classes: _Barbarian,Fighter_

```base
views:
  - type: table
    name: 5e - Adamant Mountain; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Adamant Mountain")
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
    name: 5e - Adamant Mountain; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Adamant Mountain")
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
    name: 5e - Adamant Mountain; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Adamant Mountain")
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
    name: 5e - Adamant Mountain; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Adamant Mountain")
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
    name: 5e - Adamant Mountain; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Adamant Mountain")
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
    name: 5e - Adamant Mountain; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Adamant Mountain")
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

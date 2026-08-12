---
publish: true
title: 🤺5e - Razor's Edge
description: Awareness, Concentration, Discipline
created: 2026-07-22T10:44:18.668+02:00
modified: 2026-08-12T11:52:27.361+02:00
published: 2026-08-12T11:52:27.361+02:00
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
  - Fighter
  - Hunter
  - Marshal
---

# 🤺5e - Razor's Edge🤺

_Awareness, Concentration, Discipline_

The most impressive strikes and superlative parries are not matters of luck or circumstance when made by a warrior utilizing the Razor’s Edge — they are the fruits of keen awareness, concentration, and iron-clad discipline.

Razor's Edge Maneuvers are available to the following classes: _Adept,Fighter,Hunter,Marshal_

```base
views:
  - type: table
    name: 5e - Razors Edge; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Razors Edge")
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
    name: 5e - Razors Edge; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Razors Edge")
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
    name: 5e - Razors Edge; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Razors Edge")
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
    name: 5e - Razors Edge; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Razors Edge")
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
    name: 5e - Razors Edge; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Razors Edge")
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
    name: 5e - Razors Edge; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Razors Edge")
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

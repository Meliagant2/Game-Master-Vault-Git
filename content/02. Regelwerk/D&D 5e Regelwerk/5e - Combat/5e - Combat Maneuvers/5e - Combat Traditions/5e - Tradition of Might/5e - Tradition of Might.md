---
publish: true
title: 🤺5e - Might
description: Power, Hardiness, Tough, Brutal
created: 2026-08-12T07:59:14.813+02:00
modified: 2026-09-22T11:50:41.170+02:00
published: 2026-09-22T11:50:41.170+02:00
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

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Maneuvers|5e - Combat Maneuvers]].

# 🤺5e - Might🤺

_Power, Hardiness, Tough, Brutal_

Might Maneuvers are available to the following classes: _Adept,Barbarian,Fighter,Paladin_

```base
filters:
  and:
    - dateitags.containsAll("#5e", "#Maneuver")
    - tradition.contains("Might")
formulas:
  Maneuver: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Might; All Maneuvers
    order:
      - formula.Maneuver
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
      formula.Maneuver: 225
      note.degree: 26
      note.exertioncost: 81
      note.time: 108
      note.range-Area: 119
  - type: table
    name: 5e - Might; 1st-Degree
    filters:
      and:
        - degree == 1
    order:
      - formula.Maneuver
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
      formula.Maneuver: 225
      note.degree: 26
      note.exertioncost: 81
      note.time: 108
      note.range-Area: 119
  - type: table
    name: 5e - Might; 2nd-Degree
    filters:
      and:
        - degree == 2
    order:
      - formula.Maneuver
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
      formula.Maneuver: 225
      note.degree: 26
      note.exertioncost: 81
      note.time: 108
      note.range-Area: 119
  - type: table
    name: 5e - Might; 3rd-Degree
    filters:
      and:
        - degree == 3
    order:
      - formula.Maneuver
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
      formula.Maneuver: 225
      note.degree: 26
      note.exertioncost: 81
      note.time: 108
      note.range-Area: 119
  - type: table
    name: 5e - Might; 4th-Degree
    filters:
      and:
        - degree == 4
    order:
      - formula.Maneuver
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
      formula.Maneuver: 225
      note.degree: 26
      note.exertioncost: 81
      note.time: 108
      note.range-Area: 119
  - type: table
    name: 5e - Might; 5th-Degree
    filters:
      and:
        - degree == 5
    order:
      - formula.Maneuver
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
      formula.Maneuver: 225
      note.degree: 26
      note.exertioncost: 81
      note.time: 108
      note.range-Area: 119

```

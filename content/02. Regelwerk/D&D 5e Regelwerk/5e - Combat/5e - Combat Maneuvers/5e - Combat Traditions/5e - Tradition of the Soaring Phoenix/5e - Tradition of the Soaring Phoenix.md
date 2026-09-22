---
publish: true
title: 🤺5e - Soaring Phoenix
description: Fire
created: 2026-08-17T11:33:52.341+02:00
modified: 2026-09-22T11:51:16.057+02:00
published: 2026-09-22T11:51:16.057+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combatrules"
  - "#Combattradition"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Maneuvers|5e - Combat Maneuvers]].

# 🤺5e - Soaring Phoenix🤺

_Fire_

This tradition is a special tradition only taught by a specific ancient order.

Soaring Phoenix Maneuvers are available to the following classes: \*\*

```base
filters:
  and:
    - dateitags.containsAll("#5e", "#Maneuver")
    - tradition.contains("Soaring Phoenix")
formulas:
  Maneuver: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Soaring Phoenix; All Maneuvers
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
    name: 5e - Soaring Phoenix; 1st-Degree
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
    name: 5e - Soaring Phoenix; 2nd-Degree
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
    name: 5e - Soaring Phoenix; 3rd-Degree
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
    name: 5e - Soaring Phoenix; 4th-Degree
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
    name: 5e - Soaring Phoenix; 5th-Degree
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

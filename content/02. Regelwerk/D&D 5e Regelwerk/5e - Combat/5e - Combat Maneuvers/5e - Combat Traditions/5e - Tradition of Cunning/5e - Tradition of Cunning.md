---
publish: true
title: 🤺5e - Cunning
description: Diversion, Feinting, Mental, Stealth
created: 2026-08-12T07:59:03.991+02:00
modified: 2026-09-22T11:50:39.776+02:00
published: 2026-09-22T11:50:39.776+02:00
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

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Maneuvers|5e - Combat Maneuvers]].

# 🤺5e - Cunning🤺

_Diversion, Feinting, Mental, Stealth_

Cunning Maneuvers are available to the following classes: _Adept,Blood Hunter,Fighter,Hunter,Marshal,Rogue_

```base
filters:
  and:
    - dateitags.containsAll("#5e", "#Maneuver")
    - tradition.contains("Cunning")
formulas:
  Maneuver: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Cunning; All Maneuvers
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
    name: 5e - Cunning; 1st-Degree
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
    name: 5e - Cunning; 2nd-Degree
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
    name: 5e - Cunning; 3rd-Degree
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
    name: 5e - Cunning; 4th-Degree
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
    name: 5e - Cunning; 5th-Degree
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

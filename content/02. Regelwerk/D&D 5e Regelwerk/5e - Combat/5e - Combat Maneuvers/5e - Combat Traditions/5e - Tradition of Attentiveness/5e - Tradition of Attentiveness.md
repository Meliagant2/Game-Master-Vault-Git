---
publish: true
title: 🤺5e - Attentiveness
description: Insightful, Reactive, Perceptive
created: 2026-08-12T07:53:25.700+02:00
modified: 2026-09-22T11:50:33.959+02:00
published: 2026-09-22T11:50:33.959+02:00
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
  - Paladin
  - Rogue
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Maneuvers|5e - Combat Maneuvers]].

# 🤺5e - Attentiveness🤺

_Insightful, Reactive, Perceptive_

Attentiveness Maneuvers are available to the following classes: _Adept,Blood Hunter,Fighter,Hunter,Marshal,Paladin,Rogue_

```base
filters:
  and:
    - dateitags.containsAll("#5e", "#Maneuver")
    - tradition.contains("Attentiveness")
formulas:
  Maneuver: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Attentiveness; All Maneuvers
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
    name: 5e - Attentiveness; 1st-Degree
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
    name: 5e - Attentiveness; 2nd-Degree
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
    name: 5e - Attentiveness; 3rd-Degree
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
    name: 5e - Attentiveness; 4th-Degree
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
    name: 5e - Attentiveness; 5th-Degree
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

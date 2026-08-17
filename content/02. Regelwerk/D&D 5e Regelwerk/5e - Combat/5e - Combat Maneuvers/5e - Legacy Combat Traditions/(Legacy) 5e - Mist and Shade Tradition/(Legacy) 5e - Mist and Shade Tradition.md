---
publish: true
title: 🤺(Legacy) 5e - Mist and Shade
description: Diversion, Feinting, Mental
created: 2026-07-22T10:44:17.812+02:00
modified: 2026-08-17T08:13:41.853+02:00
published: 2026-08-17T08:13:41.853+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combattradition"
  - "#Legacy"
  - "#5e"
status: ✅
classes:
  - Blood Hunter
  - Fighter
  - Marshal
  - Rogue
---

# 🤺(Legacy) 5e - Mist and Shade🤺

_Diversion, Feinting, Mental_

Making the wrong move in a fight can be fatal — particularly when an opponent causes such a misstep. Warriors that rely on Mist and Shade maneuvers are confounding foes that play mental games amidst battle, feinting and leading their enemies into crucial mistakes they are all too ready to exploit.

Mist and Shade Maneuvers are available to the following classes: _Blood Hunter,Fighter,Marshal,Rogue_

```base
views:
  - type: table
    name: 5e - Mist and Shade; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mist and Shade")
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
    name: 5e - Mist and Shade; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mist and Shade")
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
    name: 5e - Mist and Shade; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mist and Shade")
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
    name: 5e - Mist and Shade; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mist and Shade")
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
    name: 5e - Mist and Shade; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mist and Shade")
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
    name: 5e - Mist and Shade; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Mist and Shade")
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

---
publish: true
title: 🤺(Legacy) 5e - Biting Zephyr
description: Distance, Sharpshooting, Thrown Weapons
created: 2026-07-22T10:44:16.345+02:00
modified: 2026-08-17T08:13:31.899+02:00
published: 2026-08-17T08:13:31.899+02:00
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
  - Hunter
  - Marshal
  - Rogue
---

# 🤺(Legacy) 5e - Biting Zephyr🤺

_Distance, Sharpshooting, Thrown Weapons_

Not every battle requires making close contact with the enemy and there is an art to fighting from a distance, whether that be a few dozen feet or hundreds. Warriors that know Biting Zephyr techniques are superlative ranged combatants, not only for the deadly accuracy of their attacks but also the myriad tricks they’ve mastered to routinely make shots that should be impossible.

Biting Zephyr Maneuvers are available to the following classes: _Blood Hunter,Fighter,Hunter,Marshal,Rogue_

```base
views:
  - type: table
    name: 5e - Biting Zephyr; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Biting Zephyr")
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
    name: 5e - Biting Zephyr; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Biting Zephyr")
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
    name: 5e - Biting Zephyr; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Biting Zephyr")
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
    name: 5e - Biting Zephyr; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Biting Zephyr")
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
    name: 5e - Biting Zephyr; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Biting Zephyr")
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
    name: 5e - Biting Zephyr; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Biting Zephyr")
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

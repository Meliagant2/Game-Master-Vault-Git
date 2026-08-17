---
publish: true
title: 🤺(Legacy) 5e - Beast Unity
description: Animals, Companionship
created: 2026-07-22T10:44:15.898+02:00
modified: 2026-08-17T08:13:24.700+02:00
published: 2026-08-17T08:13:24.700+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combattradition"
  - "#Legacy"
  - "#5e"
status: ✅
classes:
  - Only Subclasses
---

# 🤺(Legacy) 5e - Beast Unity🤺

_Animals, Companionship_

Some people fight together with their animal companions. People who don't have any animal companion can't use these maneuvers.

Beast Unity Maneuvers are available to the following classes: _Only Subclasses_

```base
views:
  - type: table
    name: 5e - Beast Unity; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Beast Unity")
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
    name: 5e - Beast Unity; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Beast Unity")
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
    name: 5e - Beast Unity; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Beast Unity")
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
    name: 5e - Beast Unity; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Beast Unity")
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
    name: 5e - Beast Unity; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Beast Unity")
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
    name: 5e - Beast Unity; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Beast Unity")
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

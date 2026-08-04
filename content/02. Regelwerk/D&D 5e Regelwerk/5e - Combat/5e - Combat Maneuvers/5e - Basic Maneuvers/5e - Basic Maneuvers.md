---
publish: true
title: 🤺5e - Basic Maneuvers
description: Basic Melee Maneuvers
created: 2026-07-22T10:44:14.031+02:00
modified: 2026-08-04T08:23:47.386+02:00
published: 2026-08-04T08:23:47.386+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combatrules"
  - "#5e"
status: ✅
classes:
  - All
---

# 🤺5e - Basic Maneuvers🤺

_Basic Melee Maneuvers_

Melee combat is not always an exchange of weapon attacks — sometimes you are trying to subdue, not kill. Other times, you may want to do something else other than damage your target in order to gain an upper hand. Several other basic maneuvers are presented below. The Game Master can use these to help adjudicate other improvised actions, following a similar structure and using similarly weighted effects.

All creatures can use basic maneuvers, even if they do not have access to combat maneuvers. No exertion points are required to use a basic maneuver. Unless otherwise noted, using a basic maneuver replaces an attack made on your turn.

**<u>Basic Melee Damage:</u>** When you successfully use a <u>Basic Maneuver</u> you also deal <u>Basic Melee Damage</u>. This is equal to `1d2 + your STR`. Basic Melee Damage is <u>Bludgeoning</u> damage, but at the Game Master’s discretion may be <u>Piercing</u> or <u>Slashing</u> damage.

You cannot use a Basic Maneuver to activate any features that deal additional damage (such as **Sneak Attack** or **Paladin's Smite**) unless the feature specifically states otherwise.

Basic Maneuvers are available to the following classes: _All_

```base
views:
  - type: table
    name: 5e - Basic Maneuver; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Basic Maneuver")
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
    name: 5e - Basic Maneuver; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Basic Maneuver")
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
    name: 5e - Basic Maneuver; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Basic Maneuver")
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
    name: 5e - Basic Maneuver; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Basic Maneuver")
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
    name: 5e - Basic Maneuver; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Basic Maneuver")
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
    name: 5e - Basic Maneuver; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Basic Maneuver")
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

---
publish: true
title: 🤺5e - Basic Maneuvers
description: Basic Melee Maneuvers
created: 2026-07-22T10:44:14.031+02:00
modified: 2026-09-22T11:50:28.759+02:00
published: 2026-09-22T11:50:28.759+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Combatrules"
  - "#Combattradition"
  - "#5e"
status: ✅
classes:
  - All
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Maneuvers|5e - Combat Maneuvers]].

# 🤺5e - Basic Maneuvers🤺

_Basic Melee Maneuvers_

Melee combat is not always an exchange of weapon attacks — sometimes you are trying to subdue, not kill. Other times, you may want to do something else other than damage your target in order to gain an upper hand. Several other basic maneuvers are presented below. The Game Master can use these to help adjudicate other improvised actions, following a similar structure and using similarly weighted effects.

All creatures can use basic maneuvers, even if they do not have access to combat maneuvers. No exertion points are required to use a basic maneuver. Unless otherwise noted, using a basic maneuver replaces an attack made on your turn.

**<u>Basic Melee Damage:</u>** When you successfully use a <u>Basic Maneuver</u> you also deal [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Damage/5e - Basic Melee Damage|💔Basic Melee Damage]]. This is equal to `1d2 + your STR`. [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Damage/5e - Basic Melee Damage|💔Basic Melee Damage]] is <u>Bludgeoning</u> damage, but at the Game Master’s discretion may be <u>Piercing</u> or <u>Slashing</u> damage.

You cannot use a Basic Maneuver to activate any features that deal additional damage (such as **Sneak Attack** or **Paladin's Smite**) unless the feature specifically states otherwise.

**<u>Size Restriction:</u>** Basic Maneuvers can only be used against creatures of _your size or smaller_ unless stated otherwise.

Basic Maneuvers are available to the following classes: _All_

### List of all Basic Maneuvers

```base
formulas:
  Maneuver: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Basic Maneuver; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Basic")
    order:
      - formula.Maneuver
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
      note.degree: 32
      note.time: 83
      note.range-Area: 110
      note.save-Att: 96

```

---
publish: true
title: 🤺5e - Arcane Knight
description: Martial Magic, Arcana, Elemental
created: 2026-07-22T10:44:13.551+02:00
modified: 2026-08-12T11:52:09.621+02:00
published: 2026-08-12T11:52:09.621+02:00
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
  - Artificer
  - Blood Hunter
  - Fighter
---

# 🤺5e - Arcane Knight🤺

_Martial Magic, Arcana, Elemental_

Some Warriors want to combine martial mastery with careful study of magic. They use magical techniques similar to other spellcasters. These maneuvers can't be used while in an [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Abjuration/5e - Level 8 Abjuration/5e - Antimagic Field (Spell)|☄️Antimagic Field]] or similair effect.

Arcane Knight Maneuvers are available to the following classes: _Artificer,Blood Hunter,Fighter_

```base
views:
  - type: table
    name: 5e - Arcane Knight; All Maneuvers
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Arcane Knight")
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
    name: 5e - Arcane Knight; 1st-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Arcane Knight")
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
    name: 5e - Arcane Knight; 2nd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Arcane Knight")
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
    name: 5e - Arcane Knight; 3rd-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Arcane Knight")
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
    name: 5e - Arcane Knight; 4th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Arcane Knight")
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
    name: 5e - Arcane Knight; 5th-Degree
    filters:
      and:
        - dateitags.containsAll("#5e", "#Maneuver")
        - tradition.contains("Arcane Knight")
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

---
publish: true
title: 🥇5e - Skill Feats
description: Enhance a character's Skill and Tool proficiencies.
created: 2026-08-04T09:29:16.710+02:00
modified: 2026-08-20T08:48:18.372+02:00
published: 2026-08-20T08:48:18.372+02:00
tags:
  - "#Charaktererstellung"
  - "#5e"
dateitags:
  - "#Featcategory"
  - "#5e"
status: ✅
---

# 🥇5e - Skill Feats🥇

Skill Feats mostly don't increase a Character's combat prowess. Instead they focus on the Skills and Trades a character needs for adventuring or working in society.

Skill Feats grant you abilities, that might aid you and your party in social, or exploration encounters, or they might increase your crafting abilities during [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Adventuring/5e - Downtime/5e - Downtime|🧖‍♀️Downtime]].

You gain a Skill Feat every 2 levels.

### All Skill Feats

```base
views:
  - type: table
    name: 5e - Skill Feats
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Skill")
    order:
      - file.name
      - category
      - level
      - prerequisite
      - repeatable
      - ability
      - source
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 243
      note.level: 30
      note.prerequisite: 144
      note.repeatable: 34

```

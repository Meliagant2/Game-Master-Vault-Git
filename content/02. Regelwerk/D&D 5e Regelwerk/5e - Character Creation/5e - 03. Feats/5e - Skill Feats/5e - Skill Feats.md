---
publish: true
title: 🥇5e - Skill Feats
description: Enhance a character's Skill and Tool proficiencies.
created: 2026-08-04T09:29:16.710+02:00
modified: 2026-09-21T08:22:07.780+02:00
published: 2026-09-21T08:22:07.780+02:00
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
filters:
  and:
    - '!file.name.containsAny("(Legacy)", "Template")'
    - dateitags.containsAll("#5e", "#Feat")
    - category.containsAny("Skill")
formulas:
  Feat: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Skill Feats; All
    order:
      - formula.Feat
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
  - type: table
    name: 5e - Skill Feats; Level 0 and 2
    filters:
      and:
        - level <= 2
    order:
      - formula.Feat
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
  - type: table
    name: 5e - Skill Feats; Level 4
    filters:
      and:
        - level == 4
    order:
      - formula.Feat
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
  - type: table
    name: 5e - Skill Feats; Level 6
    filters:
      and:
        - level == 6
    order:
      - formula.Feat
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
  - type: table
    name: 5e - Skill Feats; Level 8
    filters:
      and:
        - level == 8
    order:
      - formula.Feat
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
  - type: table
    name: 5e - Skill Feats; Level 10
    filters:
      and:
        - level == 10
    order:
      - formula.Feat
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

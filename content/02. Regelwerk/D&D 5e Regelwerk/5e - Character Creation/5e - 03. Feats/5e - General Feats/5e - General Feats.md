---
publish: true
title: 🥇5e - General Feats
description: Grant new abilities to a character of any class.
created: 2026-08-04T09:29:16.329+02:00
modified: 2026-09-02T15:21:01.792+02:00
published: 2026-09-02T15:21:01.792+02:00
tags:
  - "#Charaktererstellung"
  - "#5e"
dateitags:
  - "#Featcategory"
  - "#5e"
status: ✅
---

# 🥇5e - General Feats🥇

General Feats offer a variety of abilities to characters and are generally less specific than [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feats]] and more powerful than [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feats]]. They are available to every class, as long as the character meets any prerequisite in its description unless a feature allows that character to take the feat without the prerequisite.

Whenever a Feature allows you to gain access to a General Feat, you can forgo that choice and choose one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] instead. But be warned, that this might hinder your mechanical character progression.

You gain a General Feat every 2 levels.

### All General Feats

```base
views:
  - type: table
    name: 5e - General Feats
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("General")
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
  - type: table
    name: 5e - General Feats Level 0 and 2
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("General")
        - level <= 2
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
  - type: table
    name: 5e - General Feats Level 4
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("General")
        - level == 4
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
  - type: table
    name: 5e - General Feats Level 6
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("General")
        - level == 6
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
  - type: table
    name: 5e - General Feats Level 8
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("General")
        - level == 8
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
  - type: table
    name: 5e - General Feats Level 10
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("General")
        - level == 10
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

---
publish: true
title: 🥇5e - Epic Boon Feats
description: The most powerful of Feats, only available at 20th level.
created: 2026-08-04T09:29:15.695+02:00
modified: 2026-08-06T08:25:19.766+02:00
published: 2026-08-06T08:25:19.766+02:00
tags:
  - "#Charaktererstellung"
  - "#5e"
dateitags:
  - "#Featcategory"
  - "#5e"
status: ✅
---

# 🥇5e - Epic Boon Feats🥇

An epic boon is a special power available only to <u>20th level</u> characters, at which point, you may choose one, if you are a character with 20 levels in a single class. Alternatively, at the Game Masters digression, a character might gain an epic boon after destroying an evil artifact, defeating an ancient dragon, or halting an incursion from the Outer Planes.

### All Epic Boon Feats

```base
views:
  - type: table
    name: 5e - Epic Boon Feats
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Epic Boon")
    order:
      - file.name
      - category
      - level
      - prerequisite
      - repeatable
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

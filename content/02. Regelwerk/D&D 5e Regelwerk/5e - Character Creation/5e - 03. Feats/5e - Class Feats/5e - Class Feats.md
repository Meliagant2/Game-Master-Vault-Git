---
publish: true
title: 🥇5e - Class Feats
description: Enhance the power of a single class in specific ways.
created: 2026-08-04T09:29:15.355+02:00
modified: 2026-08-06T08:25:17.122+02:00
published: 2026-08-06T08:25:17.122+02:00
tags:
  - "#Charaktererstellung"
  - "#5e"
dateitags:
  - "#Featcategory"
  - "#5e"
status: ✅
---

# 🥇5e - Class Feats🥇

Class Feats are class specific Feats that grant your Class extra power. They help to fulfil your Class fantasy further, without relying on only subclasses to do so. Some Class Feats aren't specific to one single Class, but generally to "Martial" or "Spellcaster" Classes. In those cases, you need to have access to either the "Martial Class" or the "Spellcaster Class" Class Trait to take that Feat.

If a Class Feat lists a level prerequisite, you  you must have at least that level in that class to take the feat. A multiclassed Character of 3 levels Fighter and 2 levels Rogue for example can't take a rogue Class Feat of 4th+ level, despite being a 5th level character overall.

You gain a Class Feat for a Class every 2 levels.

### All Class Feats

```base
views:
  - type: table
    name: 5e - Class Feats
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
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

---
publish: true
title: 🥇5e - Class Feats
description: Enhance the power of a single class in specific ways.
created: 2026-08-04T09:29:15.355+02:00
modified: 2026-08-07T11:16:20.270+02:00
published: 2026-08-07T11:16:20.270+02:00
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
    name: 5e - Class Feats; All
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
  - type: table
    name: 5e - Class Feats; All Martial
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Martial Class")
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
  - type: table
    name: 5e - Class Feats; All Spellcaster
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Adept
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Adept", "Martial Class")
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
  - type: table
    name: 5e - Class Feats; Artificer
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Artificer", "Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Barbarian
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Barbarian", "Martial Class")
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
  - type: table
    name: 5e - Class Feats; Bard
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Bard", "Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Blood Hunter
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Blood Hunter", "Martial Class", "Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Cleric
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Cleric", "Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Druid
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Druid", "Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Fighter
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Fighter", "Martial Class")
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
  - type: table
    name: 5e - Class Feats; Hunter
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Hunter", "Martial Class")
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
  - type: table
    name: 5e - Class Feats; Marshal
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Marshal", "Martial Class")
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
  - type: table
    name: 5e - Class Feats; Paladin
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Paladin", "Martial Class", "Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Rogue
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Rogue", "Martial Class")
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
  - type: table
    name: 5e - Class Feats; Sorcerer
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Sorcerer", "Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Warlock
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Warlock", "Spellcaster Class")
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
  - type: table
    name: 5e - Class Feats; Wizard
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Class")
        - prerequisite.containsAny("Wizard", "Spellcaster Class")
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

---
publish: true
title: 🥇5e - Origin Feats
description: Available to Characters through their Background.
created: 2026-08-04T10:02:13.169+02:00
modified: 2026-08-26T09:28:24.865+02:00
published: 2026-08-26T09:28:24.865+02:00
tags:
  - "#Charaktererstellung"
  - "#5e"
dateitags:
  - "#Featcategory"
  - "#5e"
status: ✅
---

# 🥇5e - Origin Feats🥇

Origin Feats are Feats your Character starts with. They earned them throughout their live. Your [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 05. Background/5e - 05. Background|⛏️Background]] grants you one Origin Feat. You often have the choice between multiple such Feats.

Origin Feats also belong to either the "General" or the "Skill" category of Feats, making them available at higher levels.

**<u>Special Origin Feats:</u>** Your Background gives you a choice between a handful of Origin Feats, but you can forgo the choice to take a special Origin Feat instead, if you and your Game Master think that this makes sense for your Character. Those special Origin Feats list the prerequisite "special". There are multiple types of special origin feats:

**Dark Gifts:** The Dark Powers of the world influence many who struggle within their clutches, tempting both the innocent and the ambitious with whispered promises. These sinister bargains come in dreams or mysterious visions. Their terms are always clear and their prices terrible. With the GM's permission, whenever you would gain a feat from the Origin category, you can instead gain a Dark Gift feat.

**Marks:** Spellmarks are mysterious and magical symbols that appear on the skin of some people across the world. Most spellmarks are small—no more than the size of the bearer's palm—and grant limited magical power. And even these minor marks are rather rare. But rarer and more powerful marks appear on some individuals. Greater spellmarks manifest only on people who already possess an ordinary mark. When a greater spellmark manifests, it grows from an ordinary mark and expands outward to two or three times the original mark's size.

**Touched:** Some feats are called "touched" (e.g. [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Origin Feats/5e - Fey Touched|🥇Fey Touched]]). Characters who start out with a feat like that have to think about, how they came into contact with the given source. Did they live in the realm of the Fey? Were they bitten by a Vampire, but not completely turned? Is there some sort of connection to the cosmic power of fate?

You gain one Origin Feat during character creation. You can later forgo to take a [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] to take another Origin Feat of your choice.

### All Origin Feats

```base
views:
  - type: table
    name: 5e - Origin Feats
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Origin")
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
    name: 5e - Special Origin Feats
    filters:
      and:
        - dateitags.containsAll("#5e", "#Feat")
        - '!file.name.contains("Template")'
        - category.contains("Origin")
        - prerequisite.contains("Special")
    order:
      - file.name
      - category
      - level
      - prerequisite
      - repeatable
      - source
    sort:
      - property: source
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 243
      note.level: 30
      note.prerequisite: 144
      note.repeatable: 34

```

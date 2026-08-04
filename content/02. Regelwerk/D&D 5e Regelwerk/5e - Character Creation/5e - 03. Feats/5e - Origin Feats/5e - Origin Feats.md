---
publish: true
title: 🥇5e - Origin Feats
description: Available to Characters through their Background.
created: 2026-08-04T10:02:13.169+02:00
modified: 2026-08-04T10:27:07.871+02:00
published: 2026-08-04T10:27:07.871+02:00
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

**<u>Taking a different Origin Feat:</u>** Your Background gives you a choice between a handful of Origin Feats, but you can forgo the choice to take a special Origin Feat instead, if you and your Game Master think that this makes sense for your Character. Those special Origin Feats are identified by their "sub-category", which is stated before their name (**example:** Dark Gift - Aberrant Anatomy).

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
      note.prerequisite: 347
      note.repeatable: 34

```

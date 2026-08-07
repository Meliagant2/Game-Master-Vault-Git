---
publish: true
title: 🥇5e - Lucky
created: 2026-08-04T11:19:11.614+02:00
modified: 2026-08-06T08:35:00.976+02:00
published: 2026-08-06T08:35:00.976+02:00
tags:
  - "#Feat"
  - "#5e"
dateitags:
  - "#Feat"
  - "#5e"
status: ✅
category: Origin
source: Player's Handbook 2024
level: 0
---

# 🥇5e - Lucky🥇

> [!wikibox]
> | | |
> |---|---|
> |**Category**|Origin |
> |**Level Requirement**|0 |
> |**Prerequisite**| |
> |**Repeatable**| |

You gain the following benefits:

**<u>Luck Points.</u>** You have a number of Luck Points equal to `your Proficiency Bonus` and can spend the points on the benefits below. You regain your expended Luck Points when you finish a [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Adventuring/5e - Resting/5e - Long Rest|😴Long Rest]]t.

**<u>Advantage.</u>** When you roll a `d20` for a <u>D20 Test</u>, you can spend `1` Luck Point to give yourself **ADV** on the roll.

**<u>Disadvantage.</u>** When a creature rolls a `d20` for an <u>attack roll</u> against you, you can spend `1` Luck Point to impose **DISADV** on that roll.

### Backgrounds that grant this Feat

```base
views:
  - type: table
    name: 5e - Origin Feats
    filters:
      and:
        - dateitags.containsAll("#5e", "#Background")
        - '!file.name.contains("Template")'
        - file.links.contains(this.file)
    order:
      - file.name
      - primeability
      - sprachen
      - proficiencies
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

## Quelle

> [!inspiration] Quelle/Inspiration
> Player's Handbook 2024

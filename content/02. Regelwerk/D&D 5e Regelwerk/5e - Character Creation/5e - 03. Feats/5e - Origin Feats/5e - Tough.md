---
publish: true
title: 🥇5e - Tough
created: 2026-08-04T11:27:16.685+02:00
modified: 2026-08-06T08:57:11.143+02:00
published: 2026-08-06T08:57:11.143+02:00
tags:
  - "#Feat"
  - "#5e"
dateitags:
  - "#Feat"
  - "#5e"
status: ✅
category: Origin
level: 0
source: Player's Handbook 2024
---

# 🥇5e - Tough🥇

> [!wikibox]
> | | |
> |---|---|
> |**Category**|Origin |
> |**Level Requirement**|0 |
> |**Prerequisite**| |
> |**Repeatable**| |

Your <u>Hit Point maximum</u> increases by an amount equal to `2 x your character level` when you gain this feat. Whenever you gain a character level thereafter, your <u>Hit Point maximum</u> increases by an additional `2` Hit Points.

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

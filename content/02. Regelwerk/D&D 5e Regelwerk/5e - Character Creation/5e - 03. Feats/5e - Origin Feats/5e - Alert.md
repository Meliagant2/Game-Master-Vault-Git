---
publish: true
title: 🥇5e - Alert
created: 2026-08-04T10:38:22.542+02:00
modified: 2026-08-04T11:19:43.805+02:00
published: 2026-08-04T11:19:43.805+02:00
tags:
  - "#Feat"
  - "#5e"
dateitags:
  - "#Feat"
  - "#5e"
status: ✅
category: Origin
source: Player's Handbook 2024
---

# 🥇5e - Alert🥇

> [!wikibox]
> | | |
> |---|---|
> |**Category**|Origin |
> |**Prerequisite**| |
> |**Repeatable**| |

You gain the following benefits:

**<u>Initiative Proficiency:</u>** You add your <u>Proficiency Bonus</u> to your [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Initiative|🎲Initiative]] rolls

**<u>Initiative Swap:</u>** Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can’t make this swap if you or the ally is [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Incapacitated|☠️Incapacitated]].

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

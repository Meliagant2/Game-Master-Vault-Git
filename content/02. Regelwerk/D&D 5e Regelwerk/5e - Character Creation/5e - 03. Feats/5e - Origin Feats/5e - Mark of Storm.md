---
publish: true
title: 🥇5e - Mark of Storm
created: 2026-08-18T14:43:44.413+02:00
modified: 2026-08-18T16:04:34.788+02:00
published: 2026-08-18T16:04:34.788+02:00
tags:
  - "#Feat"
  - "#5e"
dateitags:
  - "#Feat"
  - "#5e"
status: ✅
category: Origin
level: 0
prerequisite: Special, No other Dragonmark
source: "Eberron: Forge of the Artificer"
---

> [!metadata]- Metadata
>
> > [!metadataoption]- Status
> >
> > #### Status
> >
> > | | |
> > |---|---|
> > |**Status** | `INPUT[Status][:status]` |
> > |**Publish**|`INPUT[inlineSelect(option(true), option(false)):publish]`|
>
> > [!metadataoption]- Info
> >
> > #### Info
> >
> > | | |
> > |---|---|
> > |**Display Title** | `INPUT[textArea:title]`|
> > |**Category** | `INPUT[inlineSelect(option(Class), option(Epic Boon), option(General), option(Origin), option(Skill)):category]` |
> > |**Level Requirement** |`INPUT[number:level]`|
> > |**Prerequisite** | `INPUT[textArea:prerequisite]`|
> > |**Repeatable** | `INPUT[inlineSelect(option(null), option(x)):repeatable]` |
> > |**Source** | `INPUT[textArea:source]`|

# 🥇5e - Mark of Storm🥇

> [!wikibox]
> | | |
> |---|---|
> |**Category**|Origin |
> |**Level Requirement**|0 |
> |**Prerequisite**|Special, No other Dragonmark |
> |**Repeatable**| |

You gain the following benefits:

**<u>Windwright's Intuition:</u>** You gain an <u>expertise die</u> in <u>Acrobatics</u> and with <u>Navigator's Tools</u>.

**<u>Storm's Boon:</u>** You have <u>Resistance</u> to <u>Lightning</u> damage.

**<u>Storm Magic:</u>** You know the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Evocation/5e - Level 0 Evocation/5e - Thunderclap (Spell)|☄️Thunderclap]] cantrip. When you reach character level 3, you also always have the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Evocation/5e - Level 2 Evocation/5e - Gust of Wind (Spell)|☄️Gust of Wind]] spell prepared. You can cast it <u>once</u> without a spell slot, and you regain the ability to cast it in that way when you finish a **Long Rest**. You can also cast it using any spell slots you have of the appropriate level. <u>INT</u>, <u>WIS</u>, or <u>CHA</u> is your spellcasting ability for this feat's spells (whichever is highest).

**<u>Spells of the Mark:</u>** If you have a Spell List, the following spells are added to your Spell list:
**Spell level 1:** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Transmutation/5e - Level 1 Transmutation/5e - Feather Fall (Spell)|☄️Feather Fall]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Conjuration/5e - Level 1 Conjuration/5e - Fog Cloud (Spell)|☄️Fog Cloud]]
**Spell level 2:** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Transmutation/5e - Level 2 Transmutation/5e - Levitate (Spell)|☄️Levitate]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Evocation/5e - Level 2 Evocation/5e - Shatter (Spell)|☄️Shatter]]
**Spell level 3:** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Conjuration/5e - Level 3 Conjuration/5e - Sleet Storm (Spell)|☄️Sleet Storm]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Evocation/5e - Level 3 Evocation/5e - Wind Wall (Spell)|☄️Wind Wall]]
**Spell level 4:** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Conjuration/5e - Level 4 Conjuration/5e - Conjure Minor Elementals (Spell)|☄️Conjure Minor Elementals]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Transmutation/5e - Level 4 Transmutation/5e - Control Water (Spell)|☄️Control Water]]
**Spell level 5:** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spellschool Conjuration/5e - Level 5 Conjuration/5e - Conjure Elemental (Spell)|☄️Conjure Elemental]]

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
> Eberron: Forge of the Artificer

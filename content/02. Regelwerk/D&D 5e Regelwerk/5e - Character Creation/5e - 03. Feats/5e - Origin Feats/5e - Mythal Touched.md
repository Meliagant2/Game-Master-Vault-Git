---
publish: true
title: 🥇5e - Mythal Touched
created: 2026-08-19T10:19:37.446+02:00
modified: 2026-08-19T10:26:05.752+02:00
published: 2026-08-19T10:26:05.752+02:00
tags:
  - "#Feat"
  - "#5e"
dateitags:
  - "#Feat"
  - "#5e"
status: ✅
category: Origin
level: 0
prerequisite: Special
source: "Forgotten Realms: Heroes of Faerun"
---

# 🥇5e - Mythal Touched🥇

> [!wikibox]
> | | |
> |---|---|
> |**Category**|Origin |
> |**Level Requirement**|0 |
> |**Prerequisite**|Special |
> |**Repeatable**| |

You gain the following benefits:

**<u>Mythal Ward:</u>** If a <u>spell attack</u> hits you or you fail a <u>Save</u> against a _spell_, you can take a **Reaction** to roll on the <u>Mythal-Touched Magic table</u> to create a magical effect. If an effect requires a <u>Save</u>, the DC equals your [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Save DC|☄️Spell Save DC]].

**<u>Number of Uses:</u>** You can use this benefit a number of times equal to <u>your PB</u>, and you regain all expended uses when you finish a **Long Rest**.

##### Mythal-Touched Magic

| 1d20  | Effect                                                                                                                                                                                                                                  |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1-2   | You and each creature within <u>15 feet</u> of you make a **DEX Save**. _**Failure:**_ A creature takes <u>Force</u> damage equal to `1d8 × the level of the triggering spell`. _**Success:**_ A creature takes <u>half</u> the damage. |
| 3-7   | You and the triggering spell's caster form a telepathic link for <u>1 hour</u>.                                                                                                                                                         |
| 8-10  | Gravity is reversed in a 15-foot-radius, <u>60-foot-tall Cylinder</u> centered on you for <u>1 minute</u>, per the _☄️Reverse Gravity_ spell.                                                                                           |
| 11-13 | You and the triggering spell's caster each make a **CON Save**. _**Failure:**_ The creature has the <u>☠️Stunned</u> condition until the end of its next turn.                                                                          |
| 14-17 | You gain a <u>+2</u> bonus to _AC_ for <u>1 minute</u>, potentially turning the triggering spell into a miss if it was a spell attack.                                                                                                  |
| 18-19 | Any flammable, nonmagical object within <u>10 feet</u> of the triggering spell's caster that isn't being worn or carried by another creature bursts into flame, takes `1d4` <u>Fire</u> damage, and is <u>☠️Burning</u>.                |
| 20    | The triggering spell dissipates with no effect, and the **Action**, **Bonus Action**, or **Reaction** used to cast it is wasted. If that spell was cast with a spell slot, the slot isn't expended.                                     |

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
> Forgotten Realms: Heroes of Faerun

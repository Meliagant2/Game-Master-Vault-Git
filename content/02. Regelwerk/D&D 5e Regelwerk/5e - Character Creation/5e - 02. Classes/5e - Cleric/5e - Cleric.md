---
publish: true
title: 🦸‍♀️5e - Cleric
description: A holy guardian that channels divine energies to both heal and harm in service to their higher power.
created: 2026-07-20T12:11:02.541+02:00
modified: 2026-09-18T15:49:38.091+02:00
published: 2026-09-18T15:49:38.091+02:00
tags:
  - "#Classes"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klasse Cleric 5e.png]]"
dateitags:
  - "#Classes"
  - "#5e"
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klasse Cleric 5e.png]]"
status: ⏳
classtype: Full Caster
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
> > [!metadataoption]- Bild
> >
> > #### Bild
> >
> > | | |
> > |---|---|
> > |**Bild 1**|`INPUT[imageSuggester(optionQuery("")):image]`|
>
> > [!metadataoption]- Info
> >
> > #### Info
> >
> > | | |
> > |---|---|
> > |**Display Title** | `INPUT[textArea:title]`|
> > |**Kurzbeschreibung** | `INPUT[textArea:description]`|
> > |**Class Type**|`INPUT[inlineSelect(option(Full Caster), option(Half Caster), option(Martial)):classtype]`|

# 🦸‍♀️5e - Cleric🦸‍♀️

> [!bildrechts]
> ![[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klasse Cleric 5e.png|Regelwerk Klasse Cleric 5e.png]]

Clerics draw power from the realms of the gods and harness it to work miracles. Blessed by a deity, a pantheon, or another immortal entity, a Cleric can reach out to the divine magic of the Outer Planes—where gods dwell—and channel it to bolster people and battle foes.

Because their power is a divine gift, Clerics typically associate themselves with temples dedicated to the deity or other immortal force that unlocked their magic. Harnessing divine magic doesn't rely on specific training, yet Clerics might learn prayers and rites that help them draw on power from the Outer Planes.

Not every member of a temple or shrine is a Cleric. Some priests are called to a simple life of temple service, carrying out their devotion through prayer and rituals, not through magic. Many mortals claim to speak for the gods, but few can marshal the power of those gods the way a Cleric can.

## Class Table

| Level | PB  |    HP    | Hit Die | Ability Increase | Channel Divinity | Features                                                                     |
| :---: | :-: | :------: | :-----: | :--------------: | :--------------: | :--------------------------------------------------------------------------- |
|  1st  | +2  | 6 + CON  |  +1d6   |                  | 1                | Divine Omen, Channel Divinity, Cleric Order                                  |
|  2nd  | +2  | +4 + CON |  +1d6   |                  | 2                | Class Feat, General Feat, Skill Feat                                         |
|  3rd  | +2  | +4 + CON |  +1d6   |                  | 2                | Archetype                                                                    |
|  4th  | +2  | +4 + CON |  +1d6   |   +1 (max +4)    | 2                | Class Feat, General Feat, Skill Feat                                         |
|  5th  | +3  | +4 + CON |  +1d6   |                  | 3                | Blessed Strikes, Sear Undead                                                 |
|  6th  | +3  | +4 + CON |  +1d6   |                  | 3                | Class Feat, General Feat, Skill Feat                                         |
|  7th  | +3  | +4 + CON |  +1d6   |                  | 3                | Archetype Feature                                                            |
|  8th  | +3  | +4 + CON |  +1d6   |   +1 (max +5)    | 3                | Class Feat, General Feat, Skill Feat                                         |
|  9th  | +4  | +4 + CON |  +1d6   |                  | 4                | Divine Intervention                                                          |
| 10th  | +4  | +4 + CON |  +1d6   |                  | 4                | Class Feat, General Feat, Skill Feat                                         |
| 11th  | +4  | +4 + CON |  +1d6   |                  | 4                | Archetype Feature                                                            |
| 12th  | +4  | +4 + CON |  +1d6   |   +1 (max +5)    | 4                | Class Feat, General Feat, Skill Feat                                         |
| 13th  | +5  | +4 + CON |  +1d6   |                  | 4                | Improved Blessed Strikes                                                     |
| 14th  | +5  | +4 + CON |  +1d6   |                  | 4                | Class Feat, General Feat, Skill Feat                                         |
| 15th  | +5  | +4 + CON |  +1d6   |                  | 4                | Archetype Feature                                                            |
| 16th  | +5  | +4 + CON |  +1d6   |   +1 (max +5)    | 4                | Class Feat, General Feat, Skill Feat                                         |
| 17th  | +6  | +4 + CON |  +1d6   |                  | 5                | Divine Defense                                                               |
| 18th  | +6  | +4 + CON |  +1d6   |                  | 5                | Class Feat, General Feat, Skill Feat                                         |
| 19th  | +6  | +4 + CON |  +1d6   |                  | 5                | Archetype Feature                                                            |
| 20th  | +6  | +4 + CON |  +1d6   |   +1 (max +6)    | 5                | Greater Divine Intervention, Epic Boon, Class Feat, General Feat, Skill Feat |

## Core Class Traits

> [!charakterklasse]+ Starting Proficiencies
> |                                |                             |
> | ------------------------------ |------------------------------ |
> | **Armor Training**             |Light Armor, Light Shields                       |
> | **Weapon Proficiencies**       |Simple                       |
> | **Spellcasting Focus Proficiencies**|Holy Symbols and <u>one</u> Spellcasting Focus Category <u>of your choice</u>                   |
> | **Saving Throw Proficiencies** |<u>Choose one proficiency of each A and B:</u> **(A)** Constitution OR Wisdom; **(B)** Intelligence OR Charisma                     |
> | **Skill Proficiencies**        |<u>Choose 2:</u> Culture, Endurance, History, Insight, Medicine, Persuasion, Occultism, Religion                       |
> | **Tool Proficiencies**         |<u>Choose 1:</u> Herbalism Kit, an Artisan's Tool, a Musical Instrument                       |
> | **Starting Equipment**         | <u>Choose A or B</u>: **(A)** 1 Light Armor, 1 Light Shield, 1 Simple Weapon, Holy Symbol, Priest's Pack, 7 SP; **(B)** 150 SP                      |

### Spellcaster Class

#### Spellcasting

**<u>Spellcasting Ability:</u>** Wisdom
**<u>Spell Attack:</u>** `WIS + Proficiency Bonus`
**<u>Spell Save DC:</u>** `8 + WIS + Proficiency Bonus`
**<u>Spell List:</u>** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Divine Spell Source/5e - Divine Spell Source|☄️Divine Spell Source]]
**<u>Spell Slots:</u>** The Spellcaster Table shows how many Spell Slots you have to cast Spells. To cast one of these Spells, you must expend a Slot of the Spell’s level or higher. You regain all expended spell slots when you finish a **Long Rest**.
**<u>Cantrips:</u>** Whenever you gain a Level in this Class, you can replace one of your cantrips with another cantrip of your choice from your Spell List.
**<u>Spells:</u>** You prepare a number of spells from your Spell List as shown in your Class's the **Spellcaster Table**. Whenever you finish a **Long Rest**, you can change your list of prepared spells, replacing any of the spells there with other Divine spells for which you have spell slots.
**<u>Spellcasting Focus Masteries:</u>** You can use the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spell Focus Mastery Properties/5e - Spell Focus Mastery Properties|🎩Spell Focus Mastery Properties]] of all [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|🎩Spellcasting Foci]] you are proficient in.

#### Spellcaster Table

> [!charakterklasse]+ Spellcaster Table: Full Caster
> | Level | Cantrips | Spells | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th | 9th |
> | :---: | :------: | :----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
> |  1st  |    2     |   4    |  2  |  —  |  —  |  —  |  —  |  —  |  —  |  —  |  —  |
> |  2nd  |    2     |   5    |  3  |  —  |  —  |  —  |  —  |  —  |  —  |  —  |  —  |
> |  3rd  |    3     |   6    |  4  |  2  |  —  |  —  |  —  |  —  |  —  |  —  |  —  |
> |  4th  |    3     |   7    |  4  |  3  |  —  |  —  |  —  |  —  |  —  |  —  |  —  |
> |  5th  |    4     |   9    |  4  |  3  |  2  |  —  |  —  |  —  |  —  |  —  |  —  |
> |  6th  |    4     |   10   |  4  |  3  |  3  |  —  |  —  |  —  |  —  |  —  |  —  |
> |  7th  |    5     |   11   |  4  |  3  |  3  |  1  |  —  |  —  |  —  |  —  |  —  |
> |  8th  |    5     |   12   |  4  |  3  |  3  |  2  |  —  |  —  |  —  |  —  |  —  |
> |  9th  |    6     |   14   |  4  |  3  |  3  |  3  |  1  |  —  |  —  |  —  |  —  |
> | 10th  |    6     |   15   |  4  |  3  |  3  |  3  |  2  |  —  |  —  |  —  |  —  |
> | 11th  |    6     |   16   |  4  |  3  |  3  |  3  |  2  |  1  |  —  |  —  |  —  |
> | 12th  |    6     |   17   |  4  |  3  |  3  |  3  |  2  |  1  |  —  |  —  |  —  |
> | 13th  |    7     |   18   |  4  |  3  |  3  |  3  |  2  |  1  |  1  |  —  |  —  |
> | 14th  |    7     |   19   |  4  |  3  |  3  |  3  |  2  |  1  |  1  |  —  |  —  |
> | 15th  |    7     |   20   |  4  |  3  |  3  |  3  |  2  |  1  |  1  |  1  |  —  |
> | 16th  |    7     |   21   |  4  |  3  |  3  |  3  |  2  |  1  |  1  |  1  |  —  |
> | 17th  |    8     |   22   |  4  |  3  |  3  |  3  |  2  |  1  |  1  |  1  |  1  |
> | 18th  |    8     |   23   |  4  |  3  |  3  |  3  |  3  |  1  |  1  |  1  |  1  |
> | 19th  |    8     |   24   |  4  |  3  |  3  |  3  |  3  |  2  |  1  |  1  |  1  |
> | 20th  |    8     |   25   |  4  |  3  |  3  |  3  |  3  |  2  |  2  |  1  |  1  |

#### Spell List

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
formulas:
  Spell: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Divine List; Choose Spell Level
    filters:
      and:
        - dateitags.contains("#5e")
        - dateitags.containsAny("#SpelllistDivine")
    order:
      - formula.titleasname
      - description
    columnSize:
      formula.titleasname: 206
  - type: table
    name: 5e - Cleric; All Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 24
      note.c: 24
  - type: table
    name: 5e - Cleric; Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 0
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: school
        direction: ASC
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Cleric; 1st-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 1
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: school
        direction: ASC
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 54
      note.c: 24
  - type: table
    name: 5e - Cleric; 2nd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 2
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: school
        direction: ASC
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Cleric; 3rd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 3
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Cleric; 4th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 4
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Cleric; 5th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 5
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Cleric; 6th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 6
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Cleric; 7th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 7
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Cleric; 8th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 8
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Cleric; 9th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 9
    order:
      - formula.Spell
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24

```

<br>

## Class Features

### Level 1: Divine Omen (Flavor)

You can conduct a _Ritual_ over the course of <u>10 minutes</u> to commune with your deity, or one of their advisories. You can ask `1` question, which must be posed in a way that could be answered with a yes or no. The target of your communion responds to the best of their knowledge and intentions in one of the following responses: Yes, No, or Unclear.

A response of "Unclear" could come from the deity not knowing the answer, wanting to purposefully keep it a secret, the question being phrased in a confusing or complicated way, or there not being a simple answer to the question.

_**<u>Number of Uses:</u>**_ <u>Once</u> you've used this benefit, you can't use it again until you finish a **Long Rest**.

### Level 1: Channel Divinity

You can channel divine energy to fuel magical effects. You start with two such effects: **Divine Spark** and **Turn Undead**, each of which is described below. Each time you use this class's **Channel Divinity**, choose which **Channel Divinity** effect from this class to create.

If a Channel Divinity effect requires a [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Saving Throw/5e - Saving Throw|🎲Save]], the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Difficulty Class/5e - Difficulty Class|🎲DC]] equals the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Rules/5e - Spell Effects/5e - Spell Save|☄️Spell Save DC]] from this class's Spellcasting feature.

**<u>Divine Spark:</u>** As a [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Actions, Bonus Actions & Reactions/5e - Actions/5e - Magic Action|⚔️Magic]] action, you present your [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|🎩Spellcasting Focus]] and point at another creature you can see within <u>30 feet</u> of yourself and focus divine energy at it. Roll `1d8 + your WIS`. You either restore [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Hit Points/5e - Hit Points|💖Hit Points]] to the creature equal to that total or force the creature to make a **CON Save**. _**Failure:**_ The creature takes damage of one of your **Divine Damage types** (your choice; see **Cleric Order** feature) equal to that total. _**Success:**_ The creature takes half the damage only.

You roll an additional `d8` when you reach Cleric levels 5 (`2d8`), 9 (`3d8`), 13 (`4d8`), and 17 (`5d8`).

**<u>Turn Undead:</u>** As a [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Actions, Bonus Actions & Reactions/5e - Actions/5e - Magic Action|⚔️Magic]] action, you present your [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spellcasting Focus|🎩Spellcasting Focus]] and censure _Undead_ creatures. Each _Undead_ of your choice within <u>30 feet</u> of you makes a **WIS Save**. _**Failure:**_ The creature has the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Terrified|☠️Terrified]] and [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Incapacitated|☠️Incapacitated]] conditions for <u>1 minute</u>. This effect ends early on the creature if it takes any damage, if you have the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Incapacitated|☠️Incapacitated]] condition, or if you die.

_**<u>Number of Uses:</u>**_ You can use this feature a number of times as stated in the <u>Cleric Class Table</u>. You regain `1` expended use when you finish a **Short Rest**, and you regain `all` expended uses when you finish a **Long Rest**.

### Level 1: Cleric Order

Your connection to your deity grants you the following benefits:

#### Divine Damage

Choose <u>two</u> of the following damage types: <u>Acid</u>, <u>Cold</u>, <u>Fire</u>, <u>Lightning</u>, <u>Necrotic</u>, <u>Poison</u>, <u>Psychic</u>, <u>Radiant</u>, <u>Thunder</u>. Those damage types are your **Divine Damage type** which is used for some _Cleric_ features.

#### Divine Domains

Choose one of the following **Divine Domains**, you see yourself, your deity, or your pantheon most represented in (Alternatively, each domain lists one god of my world as a guideline. I might list more than one title, but they all reference one god. The titles are in english, just like this text, because german looks weird between all the english). Each Domain ensures you always have certain spells prepared. When you reach a _Cleric level_ specified in the <u>Domain Spells table</u>, you thereafter always have the listed spells prepared.

##### Domain of Lies

_**<u>God:</u>**_ _The lord of Lies, Lord of the Hells, Supreme master of the Hells, Fulfiller of Wishes_

**<u>1st level Cleric:</u>** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Enchantment/5e - Level 1 Enchantment/5e - Charm Person (Spell)|☄️Charm Person]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Illusion/5e - Level 1 Illusion/5e - Disguise Self (Spell)|☄️Disguise Self]]

**<u>3rd level Cleric:</u>** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Illusion/5e - Level 2 Illusion/5e - Invisibility (Spell)|☄️Invisibility]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Abjuration/5e - Level 2 Abjuration/5e - Pass without Trace (Spell)|☄️Pass without Trace]]

**<u>5th level Cleric:</u>** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Illusion/5e - Level 3 Illusion/5e - Hypnotic Pattern (Spell)|☄️Hypnotic Pattern]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Abjuration/5e - Level 3 Abjuration/5e - Nondetection (Spell)|☄️Nondetection]]

**<u>7th level Cleric:</u>** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Enchantment/5e - Level 4 Enchantment/5e - Confusion (Spell)|☄️Confusion]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Conjuration/5e - Level 4 Conjuration/5e - Dimension Door (Spell)|☄️Dimension Door]]

**<u>9th level Cleric:</u>** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Enchantment/5e - 000 Enchantment Control/5e - Dominate Person (Spell)|☄️Dominate Person]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Enchantment/5e - 000 Enchantment Control/5e - Modify Memory (Spell)|☄️Modify Memory]]

> [!warnung]- WIP
> Currently I only created the Domain of Lies, since that is the one we are playing with right now. There are more Domains to come in the future.
>
> ##### Domain of
>
> _**<u>God:</u>**_ _XXX_

### Level 2: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 3: Archetype (Subclass)

Choose one Archetype, which represents you best. Your Archetpye grants you new abilities at 3rd, 7th, 11th, 15th, and 19th level.

| Archetype                                      | Description                                                                                                                                                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[🦸‍♀️5e - Apostle\|🦸‍♀️5e - Apostle]]       | Apostles are devout Clerics who believe themselves to follow a divine purpose in the world. They follow their doctrine with zealous fervour.                                                                                                |
| [[🦸‍♀️5e - Dissembler\|🦸‍♀️5e - Dissembler]] | Dissemblers hide their true religious feelings or identity under a false appearance. This might be because they fear persecution, feel unsure about their belief, or are scared to be judged by allies and friends for their faith.         |
| [[🦸‍♀️5e - Priest\|🦸‍♀️5e - Priest]]         | Priests specialize in healing those in need and helping those weaker than themselves. Priests promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. |
| [[🦸‍♀️5e - Prophet\|🦸‍♀️5e - Prophet]]       | Prophets sometimes receive visions directly from their deity and receive fleeting omens of the future. They share impossible knowledge with their allies and prophesize their enemies' doom.                                                |
| [[🦸‍♀️5e - Undertaker\|🦸‍♀️5e - Undertaker]] | Death must be respected, for death comes to us all. Undertakers walk the veil between life and death on a daily basis, putting death at a hold, where life is needed and ending life, that should have ended long ago.                      |
| [[🦸‍♀️5e - Vicar\|🦸‍♀️5e - Vicar]]           | A Vicar's life is a life of strictness and devotion. They excel at reason and persuasion.                                                                                                                                                   |

<br>

### Level 4: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 5: Blessed Strikes

Divine power infuses you in battle. You gain one of the following options of your choice:

**<u>Divine Strike:</u>** <u>Once per turn</u>, when you _**hit**_ a creature with a [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Attack Roll/5e - Weapon Attack|🎲Weapon Attack]], you can cause the target to take an extra `1d8` damage of one of your **Divine Damage types** (your choice).

**<u>Potent Spellcasting:</u>** Add `your WIS` to the damage you deal with any [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Divine Spell Source/5e - Divine Spell Source|☄️Divine]] cantrip.

### Level 5: Sear Undead

Whenever you use **Turn Undead**, you can roll a number of `d8s` equal to `your WIS (minimum of 1d8)` and add the rolls together. Each _Undead_ that _**fails**_ its [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Saving Throw/5e - Saving Throw|🎲Save]] against that use of **Turn Undead** takes <u>Radiant</u> damage equal to `the roll's total`. This damage doesn't end the turn effect. Each _Undead_ that _**succeed**_ its [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Saving Throw/5e - Saving Throw|🎲Save]] against that use of **Turn Undead** takes half the <u>Radiant</u> damage.

### Level 6: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 7: Archetype Feature

You gain the 7th-level Archetype Feature of the Archetype you chose at 3rd level in this class.

### Level 8: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 9: Divine Intervention

You can call on your deity or pantheon to intervene on your behalf. As a [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Actions, Bonus Actions & Reactions/5e - Actions/5e - Magic Action|⚔️Magic]] action, choose any [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Divine Spell Source/5e - Divine Spell Source|☄️Divine]] spell of level 5 or lower that doesn't require a **Reaction** to cast. As part of the same **Action**, you cast that spell without expending a spell slot or needing [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Rules/5e - Spell Components/5e - Material Components|☄️Material]] components.

_**<u>Number of Uses:</u>**_ <u>Once</u> you've used this benefit, you can't use it again until you finish a **Long Rest**.

### Level 10: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 11: Archetype Feature

You gain the 11th-level Archetype Feature of the Archetype you chose at 3rd level in this class.

### Level 12: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 13: Improved Blessed Strikes

The option you chose for **Blessed Strikes** grows more powerful.

**<u>Divine Strike:</u>** The extra damage of your **Divine Strike** increases to `2d8`.

**<u>Potent Spellcasting:</u>** When you cast a [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Divine Spell Source/5e - Divine Spell Source|☄️Divine]] cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within <u>60 feet</u> of yourself, granting a number of [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Hit Points/5e - Temporary Hit Points|💖Temporary Hit Points]] equal to `2 x your WIS`.

### Level 14: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 15: Archetype Feature

You gain the 15th-level Archetype Feature of the Archetype you chose at 3rd level in this class.

### Level 16: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 17: Divine Defense

You gain the following benefits:

**<u>Reject the Dead:</u>** _Undead_ creatures have **DISADV** on [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Attack Roll/5e - Attack Roll|🎲Attack Rolls]] against you. You also can't be <u>possessed</u> by or gain the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Charmed|☠️Charmed]] or [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Frightened|☠️Frightened]] conditions from _Undead_.

**<u>Resist Divine Damage:</u>** You gain <u>Resistance</u> against the damage types chosen for your **Divine Damage**.

**<u>Ward against Corrption:</u>** You have **ADV** on [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Saving Throw/5e - Saving Throw|🎲Saves]] to avoid or end _diseases_ and against any effect that would change your form, such as the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Transmutation/5e - Level 4 Transmutation/5e - Polymorph (Spell)|☄️Polymorph]] spell.

### Level 18: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 19: Archetype Feature

You gain the 19th-level Archetype Feature of the Archetype you chose at 3rd level in this class.

### Level 20: Greater Divine Intervention

You can call on even more powerful divine intervention. When you use your **Divine Intervention** feature, you can choose any [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Divine Spell Source/5e - Divine Spell Source|☄️Divine]] spell of level 8 or lower when you select a spell.

### Level 20: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Epic Boon Feats/5e - Epic Boon Feats|🥇Epic Boon Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

## Inspiration/Quelle

> [!inspiration] Inspiration/Quelle
> **Class Artwork:** Michael Broussard; Player's Handbook 2024 Cleric Class artwork
> **Class Features:** Player's Handbook 2024; DC 20; Self

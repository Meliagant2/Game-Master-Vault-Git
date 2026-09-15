---
publish: true
title: 🦸‍♀️5e - Cleric
description: A holy guardian that channels divine energies to both heal and harm in service to their higher power.
created: 2026-07-20T12:11:02.541+02:00
modified: 2026-09-15T15:34:02.492+02:00
published: 2026-09-15T15:34:02.492+02:00
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

| Level | PB  |    HP    | Hit Die | Ability Increase | Features                                        |
| :---: | :-: | :------: | :-----: | :--------------: | :---------------------------------------------- |
|  1st  | +2  | 6 + CON  |  +1d6   |                  |                                                 |
|  2nd  | +2  | +4 + CON |  +1d6   |                  | Class Feat, General Feat, Skill Feat            |
|  3rd  | +2  | +4 + CON |  +1d6   |                  | Archetype                                       |
|  4th  | +2  | +4 + CON |  +1d6   |   +1 (max +4)    | Class Feat, General Feat, Skill Feat            |
|  5th  | +3  | +4 + CON |  +1d6   |                  |                                                 |
|  6th  | +3  | +4 + CON |  +1d6   |                  | Class Feat, General Feat, Skill Feat            |
|  7th  | +3  | +4 + CON |  +1d6   |                  | Archetype Feature                               |
|  8th  | +3  | +4 + CON |  +1d6   |   +1 (max +5)    | Class Feat, General Feat, Skill Feat            |
|  9th  | +4  | +4 + CON |  +1d6   |                  |                                                 |
| 10th  | +4  | +4 + CON |  +1d6   |                  | Class Feat, General Feat, Skill Feat            |
| 11th  | +4  | +4 + CON |  +1d6   |                  | Archetype Feature                               |
| 12th  | +4  | +4 + CON |  +1d6   |   +1 (max +5)    | Class Feat, General Feat, Skill Feat            |
| 13th  | +5  | +4 + CON |  +1d6   |                  |                                                 |
| 14th  | +5  | +4 + CON |  +1d6   |                  | Class Feat, General Feat, Skill Feat            |
| 15th  | +5  | +4 + CON |  +1d6   |                  | Archetype Feature                               |
| 16th  | +5  | +4 + CON |  +1d6   |   +1 (max +5)    | Class Feat, General Feat, Skill Feat            |
| 17th  | +6  | +4 + CON |  +1d6   |                  |                                                 |
| 18th  | +6  | +4 + CON |  +1d6   |                  | Class Feat, General Feat, Skill Feat            |
| 19th  | +6  | +4 + CON |  +1d6   |                  | Archetype Feature                               |
| 20th  | +6  | +4 + CON |  +1d6   |   +1 (max +6)    | Epic Boon, Class Feat, General Feat, Skill Feat |

## Core Class Traits

> [!charakterklasse]+ Starting Proficiencies
> |                                |                             |
> | ------------------------------ |------------------------------ |
> | **Armor Training**             |Light Armor, Light Shields                       |
> | **Weapon Proficiencies**       |Simple                       |
> | **Spellcasting Focus Proficiencies**|<u>Choose two</u> Spellcasting Focus Categories                  |
> | **Saving Throw Proficiencies** |<u>Choose one proficiency of each A and B:</u> **(A)** Constitution OR Wisdom; **(B)** Intelligence OR Charisma                     |
> | **Skill Proficiencies**        |<u>Choose 2:</u> History, Insight, Medicine, Persuasion, Occultism, Religion                       |
> | **Tool Proficiencies**         |<u>Choose 1:</u> Herbalism Kit, an Artisan's Tool, a Musical Instrument                       |
> | **Starting Equipment**         | <u>Choose A or B</u>: **(A)** ; **(B)** 150 SP                      |

### Spellcaster Class

#### Spellcasting

**<u>Spellcasting Ability:</u>** Wisdom
**<u>Spell Attack:</u>** `WIS + Proficiency Bonus`
**<u>Spell Save DC:</u>** `8 + WIS + Proficiency Bonus`
**<u>Spell List:</u>** [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Divine Spell Source/5e - Divine Spell Source|☄️Divine Spell Source]]
**<u>Spell Slots:</u>** The Spellcaster Table shows how many Spell Slots you have to cast Spells. To cast one of these Spells, you must expend a Slot of the Spell’s level or higher. You regain all expended spell slots when you finish a Long Rest.
**<u>Cantrips:</u>** Whenever you gain a Level in this Class, you can replace one of your cantrips with another cantrip of your choice from your Spell List.
**<u>Spells:</u>** You prepare a number of spells from your Spell List as shown in your Class's the **Spellcaster Table**. Whenever you gain a Level in your Class, you can replace one of your prepared spells with another spell of your choice from your _Spell List_ for which you have _Spell Slots_.
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
views:
  - type: table
    name: 5e - Cleric; Choose Spell Level
    filters:
      and:
        - dateitags.contains("#5e")
        - dateitags.containsAny("#SpelllistCleric")
    sort:
      - property: file.name
        direction: ASC
  - type: table
    name: 5e - Divine; All Spells
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
    order:
      - file.name
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
    name: 5e - Divine; Cantrips
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 0
    order:
      - file.name
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
    name: 5e - Divine; 1st-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 1
    order:
      - file.name
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
    name: 5e - Divine; 2nd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 2
    order:
      - file.name
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
    name: 5e - Divine; 3rd-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 3
    order:
      - file.name
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
    name: 5e - Divine; 4th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 4
    order:
      - file.name
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
    name: 5e - Divine; 5th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 5
    order:
      - file.name
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
    name: 5e - Divine; 6th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 6
    order:
      - file.name
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
    name: 5e - Divine; 7th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 7
    order:
      - file.name
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
    name: 5e - Divine; 8th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 8
    order:
      - file.name
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
    name: 5e - Divine; 9th-level
    filters:
      and:
        - dateitags.containsAll("#Spell", "#5e")
        - zauberliste.contains("Divine")
        - level == 9
    order:
      - file.name
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

## Class Features

### Level 1: XXX (Flavor)

### Level 1: XXX

### Level 1: XXX

### Level 2: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 3: Archetype (Subclass)

Choose one Archetype, which represents you best. Your Archetpye grants you new abilities at 3rd, 7th, 11th, 15th, and 19th level.

| Archetype | Description |
| --------- | ----------- |

### Level 4: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 5: XXX

### Level 5: XXX

### Level 6: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 7: Archetype Feature

You gain the 7th-level Archetype Feature of the Archetype you chose at 3rd level in this class.

### Level 8: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 9: XXX

### Level 10: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 11: Archetype Feature

You gain the 11th-level Archetype Feature of the Archetype you chose at 3rd level in this class.

### Level 12: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 13: XXX

### Level 14: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 15: Archetype Feature

You gain the 15th-level Archetype Feature of the Archetype you chose at 3rd level in this class.

### Level 16: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 17: XXX

### Level 18: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

### Level 19: Archetype Feature

You gain the 19th-level Archetype Feature of the Archetype you chose at 3rd level in this class.

### Level 20: XXX

### Level 20: Feats

You gain one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Epic Boon Feats/5e - Epic Boon Feats|🥇Epic Boon Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats|🥇Class Feat]], one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - General Feats/5e - General Feats|🥇General Feat]] and one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Skill Feats|🥇Skill Feat]] for which you qualify.

## Inspiration/Quelle

> [!inspiration] Inspiration/Quelle
> **Class Artwork:**

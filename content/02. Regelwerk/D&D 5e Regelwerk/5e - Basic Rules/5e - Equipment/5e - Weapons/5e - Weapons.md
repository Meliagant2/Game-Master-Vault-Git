---
publish: true
title: 🗡️5e - Weapons
created: 2026-08-06T08:53:20.580+02:00
modified: 2026-09-28T11:28:02.130+02:00
published: 2026-09-28T11:28:02.130+02:00
tags:
  - "#Grundregeln"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Basic Rules/Basic Rules Equipment Weapons.png]]"
dateitags:
  - "#Equipment"
  - "#5e"
status: ✅
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Basic Rules/Basic Rules Equipment Weapons.png]]"
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Equipment|🎒Equipment]].

# 🗡️5e - Weapons🗡️

The Weapons table in this section shows the game's main weapons. The table lists the cost and weight of each weapon, as well as the following details:

**<u>Type:</u>** Every weapon has a type: <u>Simple</u> or <u>Martial</u>. Weapon proficiencies are usually tied to one of these types. For example, you might have proficiency with Simple weapons.

**<u>Melee or Ranged:</u>** A weapon is classified as either <u>Melee</u> or <u>Ranged</u>. A Melee weapon is used to attack a target within <u>5 feet</u>, whereas a Ranged weapon is used to attack at a greater distance.

**<u>Category:</u>** Every weapon falls into a category, like "Polearm", or "Sword". Some features interact with a specific weapon category and some weapons might fall into more than one category.

**<u>Damage:</u>** The table lists the amount of damage a weapon deals when an attacker hits with it as well as the type of that damage.

**<u>Properties:</u>** Any properties a weapon has are listed in the Properties column. Each property is defined in the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapon Properties/5e - Weapon Properties|🗡️Weapon Properties]] section.

**<u>Mastery:</u>** Each weapon has a mastery property, which is defined in the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapon Mastery Properties/5e - Weapon Mastery Properties|🗡️Weapon Mastery Properties]] section later in this chapter. To use that property, you must be a _Martial Class_, or have a feature that lets you use it.

### Weapon Proficiency

Anyone can wield a weapon, but you must have proficiency with it to add your Proficiency Bonus to an attack roll you make with it. A player character's features can provide weapon proficiencies. A monster is proficient with any weapon in its stat block.

#### List of All Weapon Categories

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
formulas:
  Category: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Weapon Categories
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapons")
    order:
      - formula.Category
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      formula.titleasname: 206

```

#### List of all Weapons

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
formulas:
  Weapon: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e Weapons - All
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
    order:
      - formula.Weapon
      - type
      - category
      - damage
      - damagetype
      - properties
      - mastery
      - a
      - weight
      - cost
    sort:
      - property: type
        direction: DESC
      - property: file.name
        direction: ASC
    columnSize:
      note.properties: 236
  - type: table
    name: 5e Weapons - Simple Melee
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - type == "Simple Melee"
    order:
      - file.name
      - category
      - damage
      - damagetype
      - properties
      - mastery
      - a
      - weight
      - cost
    sort:
      - property: file.name
        direction: ASC
  - type: table
    name: 5e Weapons - Simple Ranged
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - type == "Simple Ranged"
    order:
      - file.name
      - category
      - damage
      - damagetype
      - properties
      - mastery
      - a
      - weight
      - cost
    sort:
      - property: file.name
        direction: ASC
  - type: table
    name: 5e Weapons - Martial Melee
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - type == "Martial Melee"
    order:
      - file.name
      - category
      - damage
      - damagetype
      - properties
      - mastery
      - a
      - weight
      - cost
    sort:
      - property: file.name
        direction: ASC
  - type: table
    name: 5e Weapons - Martial Ranged
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
        - type == "Martial Ranged"
    order:
      - file.name
      - category
      - damage
      - damagetype
      - properties
      - mastery
      - a
      - weight
      - cost
    sort:
      - property: file.name
        direction: ASC

```

## Quellen

> [!inspiration] Quellen
> **Art:** Created by kenzi mebius from Noun Project

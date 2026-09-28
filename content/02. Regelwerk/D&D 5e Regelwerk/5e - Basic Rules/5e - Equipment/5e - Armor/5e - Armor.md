---
publish: true
title: ⛑️5e - Armor
created: 2026-08-18T08:22:14.562+02:00
modified: 2026-09-28T12:32:05.855+02:00
published: 2026-09-28T12:32:05.855+02:00
tags:
  - "#Grundregeln"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Basic Rules/Basic Rules Equipment Armor.png]]"
dateitags:
  - "#Equipment"
  - "#5e"
status: ✅
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Basic Rules/Basic Rules Equipment Armor.png]]"
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Equipment|🎒Equipment]].

# ⛑️5e - Armor⛑️

The Armor table lists the game's main armor. The table includes the cost and weight of armor, as well as the following details:

**<u>Category:</u>** Every type of armor falls into a category: [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Armor/5e - Light Armor/5e - Light Armor|⛑️Light]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Armor/5e - Medium Armor/5e - Medium Armor|⛑️Medium]], or [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Armor/5e - Heavy Armor/5e - Heavy Armor|⛑️Heavy]] . The category determines how long it takes to don or doff the armor (as shown in the table).

**<u>Armor Class (AC):</u>** The table's Armor Class column tells you what your base [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Attack Roll/5e - Armor Class|🛡️AC]] is when you wear a type of armor. For example, if you wear Leather Armor, your base AC is 11 plus your Dexterity modifier, whereas your AC is 16 in Chain Mail.

**<u>Properties:</u>** Any properties an armor has are listed in the Properties column. Each property is defined in the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Armor/5e - Armor Properties/5e - Armor Properties|⛑️Armor Properties]] section.

### Armor Training

Anyone can don armor or hold a Shield, but only those with training can use them effectively, as explained below. A character's class and other features determine the character's armor training. A monster has training with any armor in its stat block.

#### Light, Medium, or Heavy Armor

If you wear Light, Medium, or Heavy armor and lack training with it, you have **DISADV** on any [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - D20 Tests|🎲D20 Test]] that involves <u>STR</u> or <u>DEX</u>, and you can't cast spells.

#### Shield

You gain the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Attack Roll/5e - Armor Class|🛡️AC]] benefit of a Shield only if you have training with it.

#### One at a Time

A creature can wear only one suit of armor at a time and wield only one Shield at a time.

### List of all Armor

```base
filters:
  and:
    - '!file.name.contains("(Legacy)")'
    - '!file.name.contains("Template")'
    - dateitags.containsAll("#5e", "#Armor", "#Item")
formulas:
  Armor: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e Armor; All
    order:
      - formula.Armor
      - type
      - category
      - ac
      - properties
      - a
      - weight
      - cost
    sort:
      - property: ac
        direction: ASC
      - property: costsorting
        direction: ASC
      - property: cost
        direction: ASC
    columnSize:
      note.properties: 236
  - type: table
    name: 5e Armor; Light
    filters:
      and:
        - category.contains("Light")
    order:
      - formula.Armor
      - type
      - ac
      - properties
      - a
      - weight
      - cost
    sort:
      - property: ac
        direction: ASC
      - property: costsorting
        direction: ASC
      - property: cost
        direction: ASC
    columnSize:
      note.properties: 236
  - type: table
    name: 5e Armor; Medium
    filters:
      and:
        - category.contains("Medium")
    order:
      - formula.Armor
      - type
      - ac
      - properties
      - a
      - weight
      - cost
    sort:
      - property: ac
        direction: ASC
      - property: costsorting
        direction: ASC
      - property: cost
        direction: ASC
    columnSize:
      note.properties: 236
  - type: table
    name: 5e Armor; Heavy
    filters:
      and:
        - category.contains("Heavy")
    order:
      - formula.Armor
      - type
      - ac
      - properties
      - a
      - weight
      - cost
    sort:
      - property: ac
        direction: ASC
      - property: costsorting
        direction: ASC
      - property: cost
        direction: ASC
    columnSize:
      note.properties: 236

```

## Quellen

> [!inspiration] Quellen
> **Art:** Created by Andre Buand from Noun Project

---
publish: true
title: 🗡️5e - Weapons
created: 2026-08-06T08:53:20.580+02:00
modified: 2026-08-18T12:06:36.128+02:00
published: 2026-08-18T12:06:36.128+02:00
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

## Armor, Shields, and Weaponry

An assassin’s lucky dagger, a knight’s heraldic shield, a tavern brawler’s favorite pair of brass knuckles — the tools of your character’s trade can come to define them almost as much as their physical abilities. For an adventurer, danger lurks around every corner. The quality, maintenance, and properties of your gear can be the difference between life and death.

Your character class grants proficiency with different types of weapons and armor, but your background determines what materials and styles of gear you’re most comfortable with.

When selecting your character’s gear, think about its origins. Did they purchase their equipment, or were parts of it a gift? Did they scrounge mismatched pieces off a battlefield, or commission a fine piece from their family artisan? What aesthetics and functionality did the original maker of a piece put into it, and why? You can also think about why your character uses a certain piece of gear and what it means to them. Do they see the sword as an extension of their arm, or is it a tool to pick up and discard as needed? The answers to these questions can help give a sense of who your character is on the battlefield, and how they came to be that way.

Your class grants proficiency with certain weapons, representing the weapons you have been trained to use. Different weapons deal different amounts of damage, have different properties, and can be used to attack from different ranges. Melee weapons are held or thrown, while ranged weapons propel ammunition great distances. When making an attack with a weapon, you add either your Strength or Dexterity modifier to the roll, depending on the weapon’s type, as well as your proficiency bonus, if applicable.

The Weapons table in this section shows the game's main weapons. The table lists the cost and weight of each weapon, as well as the following details:

**<u>Category:</u>** Every weapon falls into a category: <u>Simple</u> or <u>Martial</u>. Weapon proficiencies are usually tied to one of these categories. For example, you might have proficiency with Simple weapons.

**<u>Melee or Ranged:</u>** A weapon is classified as either <u>Melee</u> or <u>Ranged</u>. A Melee weapon is used to attack a target within <u>5 feet</u>, whereas a Ranged weapon is used to attack at a greater distance.

**<u>Damage:</u>** The table lists the amount of damage a weapon deals when an attacker hits with it as well as the type of that damage.

**<u>Properties:</u>** Any properties a weapon has are listed in the Properties column. Each property is defined in the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapon Properties/5e - Weapon Properties|🗡️Weapon Properties]] section.

**<u>Mastery:</u>** Each weapon has a mastery property, which is defined in the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapon Mastery Properties/5e - Weapon Mastery Properties|🗡️Weapon Mastery Properties]] section later in this chapter. To use that property, you must be a _Martial Class_, or have a feature that lets you use it.

### Weapon Proficiency

Anyone can wield a weapon, but you must have proficiency with it to add your Proficiency Bonus to an attack roll you make with it. A player character's features can provide weapon proficiencies. A monster is proficient with any weapon in its stat block.

##### List of all Weapons

```base
views:
  - type: table
    name: 5e Weapons - All
    filters:
      and:
        - dateitags.containsAll("#5e", "#Weapon", "#Item")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
    order:
      - file.name
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

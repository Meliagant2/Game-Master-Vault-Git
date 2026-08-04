---
publish: true
title: 🤺5e - Combat Maneuvers🤺
created: 2026-07-20T12:11:02.666+02:00
modified: 2026-08-04T09:19:55.944+02:00
published: 2026-08-04T09:19:55.944+02:00
tags:
  - "#Combatrules"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Maneuver.png]]"
dateitags:
  - "#Combatrules"
  - "#5e"
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Maneuver.png]]"
status: ✅
---

# 🤺5e - Combat Maneuvers🤺

Combat maneuvers encompass the techniques honed by warriors devoted to learning the nuances of battle, discovered and perfected through innumerable fights and countless hours of practice.

As adventurers become more skilled in the arts of combat, what they can accomplish with a seemingly simple strike grows in breadth and scope, making true masters as deadly in a duel as any archmage.

Even novices make use of combat maneuvers however, and with the right timing and a bit of luck they can change the course of critical battles.

## Combat Traditions

Combat traditions are the basic disciplines of fighting that a warrior relies upon. Each also represents an ethos to combat— the traditions a warrior knows are as defining as a mage’s preferred schools of magic.

Although regions and cultures may have different names for combat traditions or value some more than others, the tenets at the core of each are the same and practitioners of similar styles often forge alliances through fundamental beliefs that can bridge enormous divides.

These disciplines are much more than mere styles of fighting — they embody the focuses of your training and greatest strengths as a warrior.

Two warriors utilizing the same combat traditions might fight in entirely different ways with different weaponry. What they share in common are similar psychological states, approaching battle from the same mindset and concentrating on the same general objectives with their techniques.

```base
views:
  - type: table
    name: 5e - Combat Traditions
    filters:
      and:
        - dateitags.containsAll("#5e", "#Combattradition")
    order:
      - file.name
      - description
      - classes
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      note.degree: 84
      note.time: 42
      note.range-Area: 54

```

<br>

## Maneuvers in Combat

Adventurers can do much more than just hit an opponent or dodge a blow, instead delivering special attacks that debilitate or turn a foe’s missed assault into a painful mistake. Many of these techniques are combat maneuvers, sublime methods and tactics that make every combatant and their approach to fighting unique.

You know a number of <u>combat maneuvers</u> determined by your class and class level. Your known combat maneuvers are chosen from the combat traditions you are proficient with. Whenever you learn a new maneuver, you can choose one of the maneuvers you know and replace it with another maneuver of the same degree or lower.

Using a combat maneuver requires spending one or more [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Exertion|🤺Exertion]] points and either an **Action**, **Bonus Action**, or **Reaction**. Certain combat maneuvers require two or more attacks (from Extra Attacks or the use of other class features), and if you are unable to use the Attack action to make as many attacks on your turn as the combat maneuver requires, you cannot use that combat maneuver.

A maneuver sometimes forces a target to make a <u>Save</u> to resist its effects. The **saving throw DC** is calculated as follows:

**<u>Maneuver DC:</u>** `8 + STR/DEX + Proficiency Bonus`

Most Combat maneuvers are nonmagical.

### Prerequisites

In order to learn a combat maneuver, you must know its combat tradition and meet its prerequisites.

New combat maneuvers learned through a feat or by taking levels in an additional class may be up to the highest degree of combat maneuvers you are able to learn.

### Stances

The complexities of each combat stance require the right state of mind, making the reordering of one’s tactical view a necessary act of focus. Activating a combat stance requires a **Bonus Action**. Once activated, a combat stance remains active for <u>1 Minute</u>, or until you are knocked [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Unconscious|☠️Unconscious]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Stunned|☠️Stunned]], activate a different combat stance, begin a long rest, or choose to end it on your turn.

## Exertion Pool

A warrior requires willpower, whether born from discipline, survival instinct, or bloodlust, to control the ebb and flow of combat around them. Every call to act beyond a typical block or strike depletes this cool disposition.

To use a combat maneuver, you must expend <u>exertion points</u>. You have a maximum number of exertion points as specified by your class. You regain any spent exertion points at the end of a **short** or **long rest**.

Alternatively, you can meditate, refocus, and stretch to refill your exertion pool more quickly. You expend <u>Hit Dice</u> to do so, recovering `1d4` <u>exertion points</u> for each <u>Hit Die</u> expended. The process takes <u>1 minute</u> per expended Hit Die.

## Quellen

> [!inspiration] Quellen
> **Art:** Created by Kirby Wu from Noun Project

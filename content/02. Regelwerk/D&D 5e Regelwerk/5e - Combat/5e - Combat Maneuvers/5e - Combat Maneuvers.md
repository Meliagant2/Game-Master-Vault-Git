---
publish: true
title: 🤺5e - Combat Maneuvers
created: 2026-07-20T12:11:02.666+02:00
modified: 2026-08-17T08:17:21.743+02:00
published: 2026-08-17T08:17:21.743+02:00
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

Two warriors utilizing the same combat traditions might fight in entirely different ways with different weaponry. What they share in common are similar psychological states, approaching battle from the same mindset and concentrating on the same general objectives with their techniques.

```base
views:
  - type: table
    name: 5e - Combat Traditions
    filters:
      and:
        - dateitags.containsAll("#5e", "#Combattradition")
        - '!dateitags.contains("#Legacy")'
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

### Known Maneuvers

You know a number of <u>combat maneuvers</u> determined by your class and class level. Your known combat maneuvers are chosen from the combat traditions you are proficient with. Whenever you learn a new maneuver, you can choose one of the maneuvers you know and replace it with another maneuver of a degree you can learn.

#### Prerequisites

In order to learn a combat maneuver, you must know its combat tradition and meet its prerequisites.

New combat maneuvers learned through a feat or by taking levels in an additional class may be up to the highest degree of combat maneuvers you are able to learn.

### Using Maneuvers

Using a combat maneuver requires spending one or more [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Maneuver Rules/5e - Exertion|🤺Exertion]] points and either an **Action**, **Bonus Action**, or **Reaction**, as defined by the maneuver. If the use time for a Maneuver is "Attack" for example, you make a <u>weapon attack</u> or an [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Actions, Bonus Actions & Reactions/5e - Actions/5e - Unarmed Strike|⚔️Unarmed Strike]] and apply the effects of the maneuver. You can't use more than <u>one</u> maneuver per attack.

If a maneuver uses your action, you follow the instructions of the maneuver. If that maneuver lets you make any **Attacks**, you **<u>cannot</u>** use any additional maneuvers on those attacks.

A maneuver sometimes forces a target to make a <u>Save</u> to resist its effects. The **saving throw DC** is calculated as follows:

**<u>Maneuver DC:</u>** `8 + STR/DEX + Proficiency Bonus`

Combat maneuvers are **nonmagical**, unless stated otherwise.

### Stances

The complexities of each combat stance require the right state of mind, making the reordering of one’s tactical view a necessary act of focus. Activating a combat stance requires a **Bonus Action**. Once activated, a combat stance remains active until <u>the combat ends</u> (if activated in combat), until you are knocked [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Unconscious|☠️Unconscious]], are [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Stunned|☠️Stunned]], activate a different combat stance, begin a long rest, or choose to end it on your turn.

If you take damage, you must succeed on a **WIS Save** to maintain the **Stance**. The DC equals **10** or **half the damage taken (round down)**, whichever number is higher, up to a **maximum DC of 30**.

## Exertion Pool

A warrior requires willpower, whether born from discipline, survival instinct, or bloodlust, to control the ebb and flow of combat around them. Every call to act beyond a typical block or strike depletes this cool disposition.

To use a combat maneuver, you must expend [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Maneuver Rules/5e - Exertion|🤺Exertion]] points. You have a maximum number of exertion points as specified by your class. You regain any spent exertion points at the end of a **Short** or **Long Rest**.

Alternatively, you can meditate, refocus, and stretch to refill your exertion pool more quickly. As an **Action** you expend <u>Hit Dice</u> to do so, recovering `1d4` <u>exertion points</u> for each <u>Hit Die</u> expended. This action is the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Actions, Bonus Actions & Reactions/5e - Actions/5e - Regain Exertion|⚔️Regain Exertion]] action.

## Legacy Combat Traditions

These are the old A5e combat traditions.

```base
views:
  - type: table
    name: 5e - Legacy Combat Traditions
    filters:
      and:
        - dateitags.containsAll("#5e", "#Combattradition", "#Legacy")
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

## Quellen

> [!inspiration] Quellen
> **Art:** Created by Kirby Wu from Noun Project

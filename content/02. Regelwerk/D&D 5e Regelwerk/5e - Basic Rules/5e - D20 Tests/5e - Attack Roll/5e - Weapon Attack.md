---
publish: true
title: 🎲5e - Weapon Attacks
created: 2026-08-18T08:31:37.985+02:00
modified: 2026-08-27T11:12:42.076+02:00
published: 2026-08-27T11:12:42.076+02:00
tags:
  - "#Grundregeln"
  - "#5e"
dateitags:
  - "#AttacksandDefenses"
  - "#5e"
status: ⏳
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

# 🎲5e - Weapon Attacks🎲

A weapon attack is an attack roll made with a weapon. Roll `1d20` and add your <u>STR modifier</u> to the roll (for melee weapon attacks), or your <u>DEX modifier</u>, if you are using a <u>ranged</u>weapon or your melee weapon has the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Weapons/5e - Weapon Properties/5e - Finesse (Property)|🗡️Finesse]] property and your <u>DEX</u> is higher than your <u>STR</u>. If you are <u>proficient</u> with the kind of weapon you are using, you also add your <u>Proficiency Bonus</u> to the roll. The final formula looks like this: `1d20 + STR/DEX + PB`.

You then compare the total of your roll with the enemies [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Attack Roll/5e - Armor Class|♟️Armor Class]]. If your roll is _equal_ to or _higher_ than the target's _AC_, your attack roll _hits_ and you roll <u>damage</u>.

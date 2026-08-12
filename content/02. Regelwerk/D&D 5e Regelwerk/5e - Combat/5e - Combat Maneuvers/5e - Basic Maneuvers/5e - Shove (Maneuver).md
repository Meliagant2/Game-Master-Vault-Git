---
publish: true
title: 🤺5e - Shove
created: 2026-07-21T12:26:44.049+02:00
modified: 2026-08-12T11:06:58.191+02:00
published: 2026-08-12T11:06:58.191+02:00
tags:
  - "#Maneuver"
  - "#5e"
dateitags:
  - "#Maneuver"
  - "#5e"
saveart: ""
reactionbedingung: " "
status: ✅
tradition: Basic
degree: 0
exertioncost: "0"
time: Attack
weapon: Unarmed
range-Area: 5ft.
save-Att: Melee/STR
effect:
  - Pushing
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
> > |**Tradition (legacy)**|`INPUT[inlineSelect(option(Basic Maneuver), option(Adamant Mountain), option(Arcane Knight), option(Beast Unity), option(Biting Zephyr), option(Eldritch Blackguard), option(Mirrors Glint), option(Mist and Shade), option(Rapid Current), option(Razors Edge), option(Sanguine Knot), option(Spirited Steed), option(Tempered Iron), option(Tooth and Claw), option(Unending Wheel)):tradition]`   |
> > |**Tradition (new)**|`INPUT[inlineSelect(option(Attentiveness), option(Basic), option(Comradery), option(Cunning), option(Might), option(Prowess), option(Swiftness)):tradition]`   |
> > |**Degree**|`INPUT[number:degree]`|
> > |**Exertion Cost**|`INPUT[text:exertioncost]`|
> > |**Use Time**| `INPUT[inlineSelect(option(A), option(Attack), option(BA), option(BA - Stance), option(R), option(No Action)):time]` |
> > |**Reaction Bedingung**|`INPUT[text:reactionbedingung]`|
> > |**Weapon Type**|`INPUT[text:weapon]`|
> > |**Range/Area** |`INPUT[text:range-Area]`|
> > |**Attack/Save (Melee/Ranged/DEX...)**| `INPUT[text:save-Att]`|
> > |**Effekt**|`INPUT[SpellEffect5e][inlineListSuggester:effect]` |

# 🤺5e - Shove🤺

> [!wikibox]
> | | |
> |---|---|
> |**Tradition**|Basic |
> |**Degree**|0 |
> |**Exertion Cost**|0 |
> |**Use Time:**|Attack  |
> |**Weapon Type:**|Unarmed |
> |**Range/Area:**|5ft. |
> |**Attack/Save:**|Melee/STR|
> |**Effect:**|Pushing |

On a _**hit**_, if the Target is no more than _one size Larger_ than you, it makes a **STR Save**. _**Failure:**_ You deal [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Damage/5e - Basic Melee Damage|💔Basic Melee Damage]] and the Target is pushed a number of feet directly away from you equal to `5 + 5 for every 5 points it failed its Save by`.

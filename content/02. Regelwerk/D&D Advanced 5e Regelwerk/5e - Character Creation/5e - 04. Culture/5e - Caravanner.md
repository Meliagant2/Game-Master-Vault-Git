---
publish: true
title: 5e - Caravanner
created: 2026-07-20T17:36:20.031+02:00
modified: 2026-07-21T09:19:18.442+02:00
published: 2026-07-21T09:19:18.442+02:00
tags:
  - "#Culture"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Misc/PlaceholderImage.png]]"
dateitags:
  - "#Culture"
  - "#5e"
image: "[[98. Diverses/Bilder/Misc/PlaceholderImage.png]]"
status: ✅
sprachen:
  - Gemeinsprache
  - Spielerwahl
proficiencies:
  - Animal Handling
  - Survival
  - Land Vehicles
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
> > |**Languages**|`INPUT[Sprachen][inlineListSuggester:sprachen]`|
> > |**Skill/Tool Proficiencies**|`INPUT[SkillsTools5e][inlineListSuggester:proficiencies]` |
> > |**Armor/Weapon Proficiencies**|`INPUT[inlineListSuggester(option(Light Armor), option(Medium Armor), option(Heavy Armor), option(Light Shields), option(Medium Shields), option(Heavy Shields), option(Simple Weapons), option(Martial Weapons), option(Improvised Weapons)):weaponproficiencies]`|
> > |**Spells/Maneuvers**|`INPUT[inlineListSuggester(optionQuery(#Spell or #Maneuver AND !"98. Diverses"), useLinks(partial)):combatknown]` |

# 5e - Caravanner

Sometimes societies are overturned by war and conflict, and there isn’t always a homeland to return to once the war is over. Refugees with nowhere to go often go nowhere together, forming great roaming caravans. They travel along the migratory routes of wild animal herds, or from city to city as travelling merchants, or to cities unafraid of a few hundred or a few thousand travelers suddenly arriving on their doorsteps.

With no land to call their own the caravans make the roads their home. Wagons and carts are loaded up with everything that made their homeland theirs, songs herald their arrival, and colorful pennants wave behind them as they go. It can be an appealing lifestyle, and quite often runaways escape on caravans. Caravan life can be harsh, but it is still a life of adventure on the open road.

Characters raised in the caravanner culture share a variety of traits in common with one another:

**Skill and Tool Proficiencies:** You are proficient in <u>Animal Handling</u>, <u>Survival</u> and with <u>Land Vehicles</u>.
**Long Hauler:** Sometimes riding in a caravan means enduring long hours and harsh weather. You have **ADV** on checks made to avoid [[02. Regelwerk/D&D Advanced 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Fatigue|☠️Fatigue]] from a forced march.
**Mobile Living:** You can create a ramshackle version of a cart or wagon with 30 minutes of work if you have access to raw or reclaimed materials. Ramshackle vehicles created in this way function identically to their normal counterparts, except their value is always 0, they have half as many hit points as their normal counterparts, and they break and become useless if they are hit by any attack roll with a result of natural 20.
**Trampling Charge:** Caravanners have learned to bowl down obstacles in their way. When you or a mount you’re riding uses the [[02. Regelwerk/D&D Advanced 5e Regelwerk/5e - Basic Rules/5e - Combat/5e - Actions/5e - Dash|⚔️Dash]]-Action or a vehicle you’re driving uses the [[02. Regelwerk/D&D Advanced 5e Regelwerk/5e - Basic Rules/5e - Combat/5e - Actions/5e - Ahead Full|⚔️Ahead Full]]-Action, you can move through spaces occupied by creatures with a size category smaller than you, or your mount, or the vehicle. Creatures moved through in this way make a **DEX Save** (DC equal to **8 + PB + DEX**). On a failed save, creatures are knocked [[02. Regelwerk/D&D Advanced 5e Regelwerk/5e - Basic Rules/5e - Conditions/5e - Prone|☠️Prone]] and take an amount of bludgeoning damage equal to your level. Creatures cannot be damaged twice from the same trampling charge. Once you use this trait, you cannot do so again until you finish a short or long rest.
**Languages:** You can speak, read, write, and sign Common and one other language.

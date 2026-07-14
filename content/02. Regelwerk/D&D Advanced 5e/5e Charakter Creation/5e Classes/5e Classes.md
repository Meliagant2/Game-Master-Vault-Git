---
publish: true
created: 2026-07-13T15:14:52.126+02:00
modified: 2026-07-14T14:44:26.245+02:00
published: 2026-07-14T14:44:26.245+02:00
tags:
  - "#Charaktererstellung"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klassen.png]]"
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klassen.png]]"
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

DIES IST MIT BASES 16

# 5e Classes

Being an adventurer is more than just an occupation. Your character has a spark somewhere deep inside their soul that places their feet on the path too dangerous for others to tread. Perhaps it was simply survival at first, or a quest for gold or honor, or maybe they answered a higher calling from a being far more powerful than they. But whatever its origin, it is the crucial element that separates the rogue from the simple pickpocket and the warlord from the common soldier.

Classes define your adventurer’s core abilities. When your character starts out, they are beginners in their class, with only a few skills and specializations to their name. As they progress, however, they increase in power: spellcasters learn how to harness more spells, a barbarian channels their ever-increasing rage more effectively, and an adept obtains greater discipline over their mind and body. Each level you gain grants you more skills and talents, creating a more proficient and accomplished adventurer.

Distinctly different from your adventurer’s background, your class dictates the road your character decides to walk and the tools they have at their disposal in combat, at tense political negotiations, and while trekking through the harsh wilderness.

Individuals of the same class can have wildly different origins — whether your character comes from prosperity or poverty, a war-torn country or peace-filled utopia, a loving family or a solitary upbringing has no bearing on their ability to flourish in their chosen class.

Occasionally, those who have committed them-selves to a specific calling find themselves drawn to other avenues: a warlock may break with her patron and instead pursue life as a cleric in devotion to a god of healing, or a rogue may find their precision with blades will benefit from the martial training of the fighter. The decision to focus on a class is not always a permanent one, and a rule, called multiclassing, allows you to take levels in multiple classes.

The table below details the classes explored in this book. They can be found in most worlds of the multiverse.

```base
views:
  - type: cards
    name: 5e Klassen
    filters:
      and:
        - file.name.contains("5e Class")
        - file.name != "5e Classes"
        - '!file.name.contains("Template")'
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain

```

## General Character Table

This table shows the general progression of every character class. Every column, except for the "Features" Column is applicaple, even if your character is multiclassed

> [!charakterklasse]+ General Character Table
> |Level|Proficiency Bonus|Skill Specialty|Ability Score Increase|Features|
> |:-:|:-:|:-:|:-:|:-:|
> |1|+2|2|-|Class Features|
> |2|-|-|-|Class Features, Feat|
> |3|-|-|-|Subclass Features|
> |4|-|-|+1 in one ability score of your choice up to a maximum of +4|Feat|
> |5|+3|1|-|Class Features|
> |6|-|-|-|Subclass Features|
> |7|-|-|-|Feat|
> |8|-|-|+1 in one ability score of your choice up to a maximum of +5|Class Features|
> |9|+4|1|-|Subclass Features|
> |10|-|-|-|Feat|
> |11|-|-|-|Class Features|
> |12|-|-|+1 in one ability score of your choice up to a maximum of +5|Feat|
> |13|+5|1|-|Subclass Features|
> |14|-|-|-|Feat|
> |15|-|-|-|Class Features|
> |16|-|-|+1 in one ability score of your choice up to a maximum of +5|Feat|
> |17|+6|1|-|Subclass Features|
> |18|-|-|-|Feat|
> |19|-|-|-|Class Features|
> |20|-|-|+1 in one ability score of your choice up to a maximum of +6|Epic Boon, Feat|

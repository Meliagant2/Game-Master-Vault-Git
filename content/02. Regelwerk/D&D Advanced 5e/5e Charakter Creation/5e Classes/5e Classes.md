---
publish: true
tags:
  - "#Charaktererstellung"
  - "#5e"
socialImage: 98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klassen.png
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

# 5e Classes

Being an adventurer is more than just an occupation. Your character has a spark somewhere deep inside their soul that places their feet on the path too dangerous for others to tread. Perhaps it was simply survival at first, or a quest for gold or honor, or maybe they answered a higher calling from a being far more powerful than they. But whatever its origin, it is the crucial element that separates the rogue from the simple pickpocket and the warlord from the common soldier.

Classes define your adventurer’s core abilities. When your character starts out, they are beginners in their class, with only a few skills and specializations to their name. As they progress, however, they increase in power: spellcasters learn how to harness more spells, a barbarian channels their ever-increasing rage more effectively, and an adept obtains greater discipline over their mind and body. Each level you gain grants you more skills and talents, creating a more proficient and accomplished adventurer.

Distinctly different from your adventurer’s background, your class dictates the road your character decides to walk and the tools they have at their disposal in combat, at tense political negotiations, and while trekking through the harsh wilderness.

Individuals of the same class can have wildly different origins — whether your character comes from prosperity or poverty, a war-torn country or peace-filled utopia, a loving family or a solitary upbringing has no bearing on their ability to flourish in their chosen class.

Occasionally, those who have committed them-selves to a specific calling find themselves drawn to other avenues: a warlock may break with her patron and instead pursue life as a cleric in devotion to a god of healing, or a rogue may find their precision with blades will benefit from the martial training of the fighter. The decision to focus on a class is not always a permanent one, and a rule, called multiclassing, allows you to take levels in multiple classes.

The table below details the classes explored in this book. They can be found in most worlds of the multiverse.

### Serialized Query 1

<!-- QueryToSerialize: TABLE WITHOUT ID
embed(link(image)) AS Bild,
"<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Title) + "</span>" AS Title,
kurzbeschreibung AS K
FROM  "02. Regelwerk"
WHERE contains(tags, "#Classes") AND contains(tags, "#5e")
SORT file.name ASC
-->

<!-- SerializedQuery: TABLE WITHOUT ID embed(link(image)) AS Bild, "<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Title) + "</span>" AS Title, kurzbeschreibung AS K FROM "02. Regelwerk" WHERE contains(tags, "#Classes") AND contains(tags, "#5e") SORT file.name ASC -->

| Bild                                                                                                 | Title                                                                                                                                                                             | K                                                                                                                         |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klasse Monk 5e.png|Regelwerk Klasse Monk 5e.png]] | <span style='display: block; text-align: center; margin-bottom: 2px;'>[[5e Class Adept]]</span> | A living weapon that hones their control over body and mind, and channels their unwavering focus to achieve amazing feats |
| ![[98. Diverses/Bilder/Misc/PlaceholderImage.png|PlaceholderImage.png]]                             | <span style='display: block; text-align: center; margin-bottom: 2px;'>[[5e Class Bard]]</span>   | -                                                                                                                        |

<!-- SerializedQuery END -->

### Dataview Table without "<"

| Bild                                                                                                 | Title                                                                                                                                                                             | K                                                                                                                         |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klasse Monk 5e.png\|Regelwerk Klasse Monk 5e.png]] | <span style='display: block; text-align: center; margin-bottom: 2px;'>[[02. Regelwerk/D&D Advanced 5e/5e Charakter Creation/5e Classes/5e Class Adept.md\|5e Class Adept]]</span> | A living weapon that hones their control over body and mind, and channels their unwavering focus to achieve amazing feats |
| ![[98. Diverses/Bilder/Misc/PlaceholderImage.png\|PlaceholderImage.png]]                             | <span style='display: block; text-align: center; margin-bottom: 2px;'>[[02. Regelwerk/D&D Advanced 5e/5e Charakter Creation/5e Classes/5e Class Bard.md\|5e Class Bard]]</span>   | -                                                                                                                        |

### Dataview Table with info callout "<"

> [!info]
>
> ```dataview
> TABLE WITHOUT ID embed(link((image))) AS "B",  link(file.link, Title) AS "Class", kurzbeschreibung AS "A" FROM "02. Regelwerk" WHERE contains(tags, "#Classes") AND contains(tags, "#5e") SORT file.name ASC 
> ```

### Old Dataview

> [!cards|dataview 3]
> | Bild                                                                                                 | Title                                                                                                                                                                             | K                                                                                                                         |
> | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
> | ![[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Klasse Monk 5e.png|Regelwerk Klasse Monk 5e.png]] | <span style='display: block; text-align: center; margin-bottom: 2px;'>[[02. Regelwerk/D&D Advanced 5e/5e Charakter Creation/5e Classes/5e Class Adept.md|5e Class Adept]]</span> | A living weapon that hones their control over body and mind, and channels their unwavering focus to achieve amazing feats |
> | ![[98. Diverses/Bilder/Misc/PlaceholderImage.png|PlaceholderImage.png]]                             | <span style='display: block; text-align: center; margin-bottom: 2px;'>[[02. Regelwerk/D&D Advanced 5e/5e Charakter Creation/5e Classes/5e Class Bard.md|5e Class Bard]]</span>   | -                                                                                                                        |

### Bases

```base
properties:
  note.kurzbeschreibung:
    displayName: Kurzbeschreibung
views:
  - type: cards
    name: Klassen
    filters:
      and:
        - this.hasLink(file)
        - tags.contains("#Classes")
        - tags.contains("#5e")
    order:
      - file.name
      - kurzbeschreibung
    image: note.image
    cardSize: 250
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

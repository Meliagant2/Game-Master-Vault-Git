---
publish: true
title: 🗣️5e - Languages
created: 2026-07-21T10:45:53.970+02:00
modified: 2026-09-25T10:17:56.808+02:00
published: 2026-09-25T10:17:56.808+02:00
tags:
  - "#Grundregeln"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Languages.png]]"
dateitags:
  - "#Grundregeln"
  - "#5e"
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Languages.png]]"
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

# 🗣️5e - Languages🗣️

Languages represent how different creatures across the world speak and interact with each other. Different species and ancestries speak a wide range of languages. There is a typical dialect that certain ancestries know if they were taught it growing up, but this can expand across the world and change based on a character’s location and upbringing.

### Language Mastery

Language Mastery represents your fluency with a Language. There are `3` Language Mastery Levels: Speak, Read, Sign. Whenever you gain a Mastery Level in a language, you gain the next Stage of fluency in that language.

| Fluency Stage | Mastery Level | Language Fluency                                                                                                                                                                                                       |
| :------------ | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1             | Speak         | You are able to communicate verbally with others in this language. You might be able to decipher script of this language with a _successful_ **DC20 CHA Check** for every page of script you are trying to understand. |
| 2             | Read          | You can read, write and understand the script and words of this language and are able to understand the written text.                                                                                                         |
| 3             | Sign          | You are able to communicate using silent gestures with others in this language, who are also able to sign this language.                                                                                               |

#### Gaining Language Mastery

Every [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 04. Culture/5e - 04. Culture|🎎Culture]] grants you `3` Mastery levels (full fluency) in a language, most of the times this is [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Languages/5e - Mortal Languages/5e - Common|🗣️Common]]. Most [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 05. Background/5e - 05. Background|⛏️Backgrounds]] and [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 04. Culture/5e - 04. Culture|🎎Cultures]] also grant you Mastery Levels in one or more languages of your choice.

Whenever you gain a feature that grants you Language Mastery Levels, you can spend them to gain levels in a language of your choice. Languages are categorized into <u>three</u> categories: _Mortal, Exotic and Rare_. To gain a level in a _Mortal_ language, you have to spend <u>one</u> mastery level per level you want to gain in that language, for an _Exotic_ language, you have to spend <u>two</u> mastery levels per level you want to gain in that language, and for a _Rare_ language, you have to spend <u>three</u> mastery level per level you want to gain in that language.

#### Language Families

Languages, like in the real world, are part of a **Language Family**. Every language derives from an ancient, long dead language, which is that languages **Language Family**. A character that has any Language Mastery Level in that **Language Familie's** root language, reduces the mastery levels needed to learn a language of that family by <u>one</u> (to a minimum of `1`), if they try to gain the same language mastery level.

For example, a character who has `2` Mastery Levels in [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Languages/5e - Rare Languages/5e - Primordial|🗣️Primordial]] is able to _Speak, Read and Write_ in that language. If that character would try to learn [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Languages/5e - Exotic Languages/5e - Aquan|🗣️Aquan]], an _Exotic_ language, they only require `1` mastery level each to learn how to _Speak_ and _Read_ [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Languages/5e - Exotic Languages/5e - Aquan|🗣️Aquan]]. If they were to learn _Signing_ for that language, they require `2` mastery levels, since they do not know how to _Sign_ in [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Languages/5e - Rare Languages/5e - Primordial|🗣️Primordial]].

### Mortal Languages

The Mortal Languages table lists languages that are widespread in the world and their origin country, the most prominent [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 01. Heritage/5e - 01. Heritage|🧝Heritage]] of that country, as well as the **Language Family** of that language.

#### Mortal Languages Table

```base
filters:
  and:
    - '!file.name.containsAny("(Legacy)", "Template")'
    - dateitags.containsAll("#5e", "#Language")
    - category.containsAny("Mortal")
formulas:
  Language: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Mortal Languages
    order:
      - formula.Language
      - category
      - origin
      - family
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 243
      note.level: 30
      note.prerequisite: 144
      note.repeatable: 34

```

<br>

### Exotic Languages

The Exotic Languages table lists languages that are rarely spoken by mortals of the world. They might be languages of small tribes, secret languages, or very complex to learn. The table lists their origin, as well as the **Language Family** of that language.

#### Exotic Languages Table

```base
filters:
  and:
    - '!file.name.containsAny("(Legacy)", "Template")'
    - dateitags.containsAll("#5e", "#Language")
    - category.containsAny("Exotic")
formulas:
  Language: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Exotic Languages
    order:
      - formula.Language
      - category
      - origin
      - family
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 243
      note.level: 30
      note.prerequisite: 144
      note.repeatable: 34

```

<br>

### Rare Languages

The Rare Languages table lists languages that are almost never spoken by mortals of the world. These languages are either long dead languages, bare secret meaning in the words or are incredibly hard to learn. The table lists their origin, as well as the **Language Family** of that language.

#### Rare Languages Table

```base
filters:
  and:
    - '!file.name.containsAny("(Legacy)", "Template")'
    - dateitags.containsAll("#5e", "#Language")
    - category.containsAny("Rare")
formulas:
  Language: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Rare Languages
    order:
      - formula.Language
      - category
      - origin
      - family
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 243
      note.level: 30
      note.prerequisite: 144
      note.repeatable: 34

```

<br>

## Quellen

> [!inspiration] Quellen
> **Art:** Created by Hermanto from Noun Project

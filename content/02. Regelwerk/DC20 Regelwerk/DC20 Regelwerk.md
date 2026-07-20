---
publish: true
title: DC20 Regelwerk
created: 2026-07-20T12:11:03.066+02:00
modified: 2026-07-20T14:50:03.581+02:00
published: 2026-07-20T14:50:03.581+02:00
tags:
  - "#Regelwerk"
  - "#DC20"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/DC20 Regelwerk Cover.png]]"
dateitags:
  - "#Regelwerk"
  - "#DC20"
image: "[[98. Diverses/Bilder/Regelwerk Bilder/DC20 Regelwerk Cover.png]]"
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

# DC20 Regelwerk

> [!warnung] WIP
>
> <center>**DIESE SEITE IST NOCH NICHT BEARBEITET! HIER GIBT ES NICHTS INTERESSANTES ZU SEHEN!**</center>
> <center>**BITTE GEHE ZURÜCK ZUM HAUPTMENÜ**</center>
> <center>[[index]]</center>

## Basic Rules

```base
views:
  - type: cards
    name: DC20 Grundregeln
    filters:
      and:
        - file.name.contains("DC20 Grundregel")
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain

```

## Character Creation

```base
views:
  - type: cards
    name: DC20 Charaktererstellung
    filters:
      and:
        - file.name.contains("DC20 Charaktererstellung")
    order:
      - file.name
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain

```

## Quellen

> [!inspiration] Quellen
> **Cover Art:**

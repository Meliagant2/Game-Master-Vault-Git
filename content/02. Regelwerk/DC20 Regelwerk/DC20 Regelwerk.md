---
publish: true
title: DC20 Regelwerk
created: 2026-07-16T08:15:00.205+02:00
modified: 2026-07-16T08:36:31.545+02:00
published: 2026-07-16T08:36:31.545+02:00
tags:
  - "#Regelwerk"
  - "#DC20"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/DC20 Regelwerk Cover.png]]"
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
> **Cover Art:** Wylie Beckert, Tyler Jacobson; Cover Art vom D\&D5e 2024 Player's Handbook

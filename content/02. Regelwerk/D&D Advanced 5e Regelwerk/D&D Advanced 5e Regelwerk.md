---
publish: true
title: D&D 5e Regelwerk
created: 2026-07-16T07:51:39.789+02:00
modified: 2026-07-15T18:02:36.709+02:00
published: 2026-07-15T18:02:36.709+02:00
tags:
  - "#Regelwerk"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/D&D 5e Regelwerk Cover.png]]"
image: "[[98. Diverses/Bilder/Regelwerk Bilder/D&D 5e Regelwerk Cover.png]]"
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

# D\&D 5e Regelwerk

> [!info] Anmerkungen
> Der Großteil dieses Regelwerks ist von mir homebrewed. Ich habe hier die Systeme D\&D 5e 2014, D\&D 5e 2024 und A5e kombiniert. Ziel war größtmögliche Charaktervielfalt, es kann aber sein, dass bestimmte Features entsprechend unbalanced sind.
>
> In manchen Texten und Beschreibungen werden Orte, Personen, Götter und diverses Andere aus meiner Welt beschrieben, manchmal auch (da STRG + C -> STRG + V) aus anderen Werken. Das bitte ignorieren. Ich habe all das um Mitte/Ende 2023 verfasst, als ich noch keine richtige Struktur für Worldbuilding hatte. Manches davon könnte noch aktuell sein, aber bitte eher davon ausgehen, dass die einzig korrekten Informationen zu meiner Welt im Welt Almanach zu finden sind, nicht in diesem Regelwerk.

## Basic Rules

```base
views:
  - type: cards
    name: 5e Grundregeln
    filters:
      and:
        - file.name.contains("5e Grundregel")
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain

```

## Character Creation

```base
views:
  - type: cards
    name: 5e Charaktererstellung
    filters:
      and:
        - file.name.contains("5e Charaktererstellung")
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

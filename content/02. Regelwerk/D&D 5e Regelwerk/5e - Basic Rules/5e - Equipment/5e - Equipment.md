---
publish: true
title: 🎒5e - Equipment
created: 2026-07-20T12:11:02.653+02:00
modified: 2026-08-18T08:25:10.317+02:00
published: 2026-08-18T08:25:10.317+02:00
tags:
  - "#Grundregeln"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Equipment.png]]"
dateitags:
  - "#Grundregeln"
  - "#5e"
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Regelwerk Equipment.png]]"
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

# 🎒5e - Equipment🎒

The right equipment can make the difference between success and failure for adventurers. This chapter provides rules and prices for weapons, armor, and other kinds of equipment that characters might purchase or find. The GM lets you know if a shop has an item for sale and whether it's available at the listed price.

### Starting Equipment

Your character’s beginnings determine the supplies they have access to at the start of your adventure. Choices made during character creation provide a list of default gear, or the option to buy your own equipment using your starting wealth of 150 SP.

How your character came by your starting equipment is up to you. Perhaps they pickpocketed silver until they could afford the shiniest axe, or excelled in transmutation class and were given a beautiful crystal spell focus as a reward. An herbalism kit may be passed down through generations of village healers, or a holy text may be a treasured inheritance from a devout relative. These items are not simply useful implements for your adventuring — they are opportunities to flesh out your character.

### List of all kinds of Equipment

```base
views:
  - type: cards
    name: 5e Equipment
    filters:
      and:
        - dateitags.containsAll("#5e", "#Equipment")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain

```

## Quellen

> [!inspiration] Quellen
> **Art:** Created by Ngiconan from Noun Project

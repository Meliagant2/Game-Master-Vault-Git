---
publish: true
title: 🎩5e - Spellcasting Focus
created: 2026-08-10T08:28:38.340+02:00
modified: 2026-09-24T15:18:43.170+02:00
published: 2026-09-24T15:18:43.170+02:00
tags:
  - "#Grundregeln"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Basic Rules/Basic Rules Equipment Spellcasting Foci.png]]"
dateitags:
  - "#Equipment"
  - "#5e"
status: ✅
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Basic Rules/Basic Rules Equipment Spellcasting Foci.png]]"
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Equipment|🎒Equipment]].

# 🎩5e - Spellcasting Focus🎩

A **Spellcasting Focus** is an object that certain creatures can use in place of a spell's _Material_ components if those materials aren't consumed by the spell and don't have a cost specified. Some classes allow its members to use certain types of Spellcasting Focuses.

You must be holding a **Spellcasting Focus** in a hand to benefit from its [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Spellcasting Focus/5e - Spell Focus Mastery Properties/5e - Spell Focus Mastery Properties|🎩Properties]].

##### List of all Spellcasting Foci

```base
formulas:
  Spell Focus: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e Spellcasting Foci - All
    filters:
      and:
        - dateitags.containsAll("#5e", "#Item", "#Spellfocus")
        - '!dateitags.contains("#Legacy")'
        - '!file.name.contains("Template")'
    order:
      - formula.Spell Focus
      - category
      - damage
      - damagetype
      - properties
      - mastery
      - a
      - weight
      - cost
    sort:
      - property: category
        direction: ASC
      - property: type
        direction: DESC
      - property: file.name
        direction: ASC
    columnSize:
      note.properties: 236

```

## Quellen

> [!inspiration] Quellen
> **Art:** Created by SAM Designs from Noun Project

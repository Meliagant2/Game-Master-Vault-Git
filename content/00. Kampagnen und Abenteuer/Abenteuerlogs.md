---
publish: true
created: 2026-08-03T09:49:26.123+02:00
modified: 2026-08-03T10:12:47.222+02:00
published: 2026-08-03T10:12:47.222+02:00
tags:
  - "#Kampagnen"
socialImage: "[[98. Diverses/Bilder/Kampagnen und Abenteuer/Kampagnen und Abenteuer Thumbnail.png]]"
dateitags:
  - "#Kampagnen"
  - "#Spielerrelevant"
image: "[[98. Diverses/Bilder/Kampagnen und Abenteuer/Kampagnen und Abenteuer Thumbnail.png]]"
status: ⏳
---

# Abenteuerlogs

![[98. Diverses/Bilder/Kampagnen und Abenteuer/Kampagnen und Abenteuer Thumbnail.png]]

```base
views:
  - type: cards
    name: Alle Spielergruppen
    filters:
      and:
        - dateitags.contains("#Spielergruppe")
        - '!file.name.contains("Template")'
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
  - type: cards
    name: Aktive Spielergruppen
    filters:
      and:
        - dateitags.contains("#Spielergruppe")
        - '!file.name.contains("Template")'
        - status == "⏳"
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
  - type: cards
    name: Inaktive Spielergruppen (Abgeschlossen)
    filters:
      and:
        - dateitags.contains("#Spielergruppe")
        - '!file.name.contains("Template")'
        - status == "✅"
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain

```

> [!inspiration] Inspiration/Quelle
> **Artwork:** Antonio José Manzanedo; Artwork Chapter 1 D\&D5e 2024 Player's Handbook

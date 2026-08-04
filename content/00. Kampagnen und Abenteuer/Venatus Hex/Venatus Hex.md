---
publish: true
created: 2026-07-20T12:11:02.318+02:00
modified: 2026-08-03T10:49:13.140+02:00
published: 2026-08-03T10:49:13.140+02:00
tags:
  - "#Organisation"
  - "#Spielergruppe"
socialImage: "[[98. Diverses/Bilder/Kampagnen und Abenteuer/Abenteuerthumbnails/Kampagne Curse of Strahd.png]]"
dateitags:
  - "#Spielergruppe"
image: "[[98. Diverses/Bilder/Kampagnen und Abenteuer/Abenteuerthumbnails/Kampagne Curse of Strahd.png]]"
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
>
> > [!metadataoption]- Bild
> >
> > #### Bild
> >
> > | | |
> > |---|---|
> > |**Bild**|`INPUT[imageSuggester(optionQuery("")):image]`|

# Venatus Hex

```base
views:
  - type: cards
    name: Venatus Hex Gruppenmitglieder
    filters:
      and:
        - dateitags.contains("#SpielerPC")
        - '!file.name.contains("Template")'
        - organisation.contains(link("00. Kampagnen und Abenteuer/Venatus Hex/Venatus Hex"))
    order:
      - file.name
      - aliase
      - abstammung
      - klasse
      - passivewahrnehmung
    image: note.image
    cardSize: 200
    imageFit: contain
  - type: table
    name: Venatus Hex Session Logs 
    filters:
      and:
        - tags.contains("#SessionNote")
        - welchegruppe.contains(link("00. Kampagnen und Abenteuer/Venatus Hex/Venatus Hex"))
    order:
      - file.name
      - datum
      - ingamestart
      - ingameende
      - kurzbeschreibung

```

> [!quest]- Abenteuer
>
> > [!cards|dataview 5]
> > | Bild | Title | Status |
> > | ---- | ----- | ------ |

> [!quest]- Aktive Quests
> | Quest | Status | Level | EXP |
> | ----- | ------ | ----- | --- |

> [!quest]- Abgeschlossene Quests
> | Quest | Status | Level | EXP |
> | ----- | ------ | ----- | --- |

> [!sessionnote]- Session Logs
>
> > [!cards|dataview 3]
> > | Titel                                                                                                                                                                                                                                        | SessionDatum                                                                                                            | InGameStartDatum                                                                                                                  | InGameEndDatum                                                                                                                   | QuickNotes                                                                                                                                                                                                                                                                                                             |
> > | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> > | <span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>[[00. Kampagnen und Abenteuer/Venatus Hex/Session Notes/052 - Die Hexe von Ravenloft.md|052 - Die Hexe von Ravenloft]]</span> | <span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>-</span> | <span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>**Start:**-</span> | <span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>**Ende:**-</span> | Die Gruppe analysiert die Schatzkammer von Ravenloft, räumt sie aus und nimmt die expandierende Festung an sich. Danach suchen sie einen Weg aus dem Glockenturm heraus, finden ihren Weg in die Kapelle von Ravenloft und bekämpfen dort Ludmilla, nachdem diese ihnen das heilige Amulett der Raben gestohlen hatte. |

> [!inspiration] Inspiration/Quelle
> **Artwork:** Ben Oliver; Cover Artwork Curse of Strahd 2016

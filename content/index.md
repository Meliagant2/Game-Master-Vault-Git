---
publish: true
title: Home
created: 2026-07-13T15:14:52.230+02:00
modified: 2026-07-20T07:53:53.734+02:00
published: 2026-07-20T07:53:53.734+02:00
tags:
  - "#Home"
cssClasses: cards
---

# Home

> [!warnung] WICHTIG
> Im Augenblick funktioniert auf dieser Website nur der Light mode korrekt, da ich den dark mode noch nicht designed habe. Daher bitte oben links, neben der Suchleiste bitte darauf wechseln, falls der Dark mode aktiviert ist.

**Einleitende Worte. Erklärung der Vault und der Website Funktionen**

### Serializer

<!-- QueryToSerialize: TABLE WITHOUT ID 
embed(link(image)) AS "Bild",
"<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Title) + "</span>" AS Title
FROM "01. Welt Almanach"
WHERE !contains(status, "✅")
FLATTEN [ [(seed) => (seed * 1103515245 + 12345) % 2147483648]] AS random
FLATTEN [number(dateformat(date("now"), "x"))] AS seed
SORT random[0](seed + file.size)
LIMIT 10

-->

<!-- SerializedQuery: TABLE WITHOUT ID embed(link(image)) AS "Bild", "<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Title) + "</span>" AS Title FROM "01. Welt Almanach" WHERE !contains(status, "✅") FLATTEN [ [(seed) => (seed * 1103515245 + 12345) % 2147483648]] AS random FLATTEN [number(dateformat(date("now"), "x"))] AS seed SORT random[0](seed + file.size) LIMIT 10 -->

| Bild                                                                                            | Title                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| !\[Tungdil Kupferkelch 1.png]\(98. Diverses/Bilder/Spielercharaktere/Tungdil Kupferkelch 1.png) | <span style='display: block; text-align: center; margin-bottom: 2px;'>\[Tungdil Kupferkelch]\(01. Welt Almanach/01C. Charaktere/PCs/Krupsi/Tungdil Kupferkelch.md)</span> |
| !\[Ailas Dorric.png]\(98. Diverses/Bilder/Spielercharaktere/Ailas Dorric.png)                   | <span style='display: block; text-align: center; margin-bottom: 2px;'>\[Ailas Dorric]\(01. Welt Almanach/01C. Charaktere/PCs/Jonas/Ailas Dorric.md)</span>                |

<!-- SerializedQuery END -->

### Dataview CARDS

> [!cards|dataview 5]
> | Bild                                                                                            | Title                                                                                                                                                                     |
> | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | ![[98. Diverses/Bilder/Spielercharaktere/Tungdil Kupferkelch 1.png|Tungdil Kupferkelch 1.png]] | <span style='display: block; text-align: center; margin-bottom: 2px;'>[[01. Welt Almanach/01C. Charaktere/PCs/Krupsi/Tungdil Kupferkelch.md|Tungdil Kupferkelch]]</span> |
> | ![[98. Diverses/Bilder/Spielercharaktere/Ailas Dorric.png|Ailas Dorric.png]]                   | <span style='display: block; text-align: center; margin-bottom: 2px;'>[[01. Welt Almanach/01C. Charaktere/PCs/Jonas/Ailas Dorric.md|Ailas Dorric]]</span>                |

### Test Tabelle

| Bild                                                                                            | Title                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| !\[Tungdil Kupferkelch 1.png]\(98. Diverses/Bilder/Spielercharaktere/Tungdil Kupferkelch 1.png) | <span style='display: block; text-align: center; margin-bottom: 2px;'>\[Tungdil Kupferkelch]\(01. Welt Almanach/01C. Charaktere/PCs/Krupsi/Tungdil Kupferkelch.md)</span> |
| !\[Ailas Dorric.png]\(98. Diverses/Bilder/Spielercharaktere/Ailas Dorric.png)                   | <span style='display: block; text-align: center; margin-bottom: 2px;'>\[Ailas Dorric]\(01. Welt Almanach/01C. Charaktere/PCs/Jonas/Ailas Dorric.md)</span>                |

### Quellen

Sofern ich kann, werde ich die Quellen oder Inspirationen für Artworks, Ideen und Fähigkeiten immer in einer Box wie unten angeben. Wenn nichts dergleichen angegeben ist, habe ich das entweder vergessen oder es ist so lange her, dass ich das Bild oder den Text herausgesucht habe, dass ich schlicht nicht mehr weiß, wo ich es her habe. Leider habe ich erst sehr spät damit begonnen die Quellen zu notieren, da ich es für eine private Vault immer für unnötig hielt. Der Großteil des nicht Bild-bezogenen Contents (vor allem in den Regelwerken) wird allerdings aus D\&D5e oder Advanced 5e (kurz A5e) stammen.

> [!inspiration] Quellen/ Inspirationen
> Hier werden Quellen oder Inspirationen stehen.

## Übersicht der Welt/ Welt Almanach

Im Weltalmanach werden Systemunabhängige Komponenten, bzw **Setting-Spezifische** Dinge aufgelistet
\- Orte
\- Personen

**Ena Lucoria** bezeichnet den Kosmos und das Setting
\- Setting erklären
\- Campaign Settings: Füge Länder ein

Hier sollte ein Inhaltsverzeichnis hinkommen, wie bei einem digitalen Sourcebook.

### Orte

Beschreibung der physischen Beschaffenheit des Landes/der Städte

### Gruppen

#### Fraktionen

- Wachen
- Ritterorden
- Religionen (Religionen sind mehr wie Orden)
- (Verbrecher-)Organisationen
- Familien (Familiennotes sind eh nur notwendig, wenn die Familie groß und einflussreich ist)
- Klans
- (Druiden-/Hexen-)Zirkel

#### Kulturen

Effektiv Subspezies. Eng verbunden mit Sprache

#### Regierungen

Müssen leider von den physischen Orten abgetrennt sein, da sich Ländergrenzen verschieben können. Könnte eng verbunden sein mit Familien.

## Regelwerke

Regelwerke werden immer in der Sprache aufgeführt, in der sie mir am einfachsten zur Verfügung stehen (ergo meistens englisch). NPCs und deren Beschreibungen, Orte, Items und Monsterbeschreibungen habe ich allerdings ins deutsche übersetzt.

```base
views:
  - type: cards
    name: Regelwerke
    filters:
      and:
        - file.name.contains("Regelwerk")
        - '!file.name.contains("png")'
        - file.name != "02. Regelwerk"
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain

```

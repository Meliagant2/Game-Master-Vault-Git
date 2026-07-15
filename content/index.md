---
publish: true
title: Home
created: 2026-07-13T15:14:52.230+02:00
modified: 2026-07-15T08:33:40.047+02:00
published: 2026-07-15T08:33:40.047+02:00
tags:
  - "#Home"
---

# Home

TESTRUN 1

Einleitende Worte oder so. Erklärung der Vault

Aufteilung der Mechanics wie bei 5etools

> [!abstract] Abstract Callout
> Info

> [!info] Info Callout
> Info

> [!note] Note Callout
> Info

> [!summary] Summary (Abstract Alias) Callout
> Info

> [!tldr] Abstract (TLDR) Callout
> Info

> [!todo] Todo Callout
> Info

> [!tip] Tip Callout
> Info

> [!hint] Tip (Hint) Callout
> Info

> [!important] Tip (Important) Callout
> Info

> [!success] Success Callout
> Info

> [!check] Success (Check) Callout
> Info

> [!done] Success (Done) Callout
> Info

> [!question] Question Callout
> Info

> [!help] Help (Question Alias) Callout
> Info

> [!faq] FAQ (Question Alias) Callout
> Info

> [!warning] Warning Callout
> Info

> [!caution] Caution (Warning Alias) Callout
> Info

> [!attention] Attention (Warning Alias) Callout
> Info

> [!failure] Failure Callout
> Info

> [!fail] Fail (Failure Alias) Callout
> Info

> [!missing] Missing (Failure Alias) Callout
> Info

> [!danger] Danger Callout
> Info

> [!error] Error (Danger Alias) Callout
> Info

> [!bug] Bug Callout
> Info

> [!example] Example Callout
> Info

> [!quote] Quote Callout
> Info

> [!cite] Cite (Quote Alias) Callout
> Info

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

Homescreen für jedes Regelwerk.

Regelwerke werden immer in der Sprache aufgeführt, in der sie mir am einfachsten zur Verfügung stehen (ergo meistens englisch)

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

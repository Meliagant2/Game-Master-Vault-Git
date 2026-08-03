---
publish: true
created: 2026-07-20T12:11:02.318+02:00
modified: 2026-08-03T10:47:03.803+02:00
published: 2026-08-03T10:47:03.803+02:00
tags:
  - "#Story"
  - "#SessionNote"
dateitags:
  - "#SessionNote"
status: ⏳
kurzbeschreibung: Die Gruppe analysiert die Schatzkammer von Ravenloft, räumt sie aus und nimmt die expandierende Festung an sich. Danach suchen sie einen Weg aus dem Glockenturm heraus, finden ihren Weg in die Kapelle von Ravenloft und bekämpfen dort Ludmilla, nachdem diese ihnen das heilige Amulett der Raben gestohlen hatte.
datum: 2026-07-05
abwesend:
  - "[[00. Kampagnen und Abenteuer/Venatus Hex/Spielercharaktere/Ailas Dorric|Ailas Dorric]]"
  - "[[00. Kampagnen und Abenteuer/Venatus Hex/Spielercharaktere/Tungdil Kupferkelch|Tungdil Kupferkelch]]"
welchegruppe: "[[00. Kampagnen und Abenteuer/Venatus Hex/Venatus Hex|Venatus Hex]]"
verfolgtequest:
  - "[[00. A_Spielleiter/00A. Abenteuer/1. Kampagnen/Curse of Strahd/Akt 3 - Das gebrochene Land/Ark Q - Das strahlende Leuchtfeuer.md|Ark Q - Das strahlende Leuchtfeuer]]"
begleitnpcs:
  - "[[01. Welt Almanach/01C. Charaktere/NPCs/Ireena Kolyana|Ireena Kolyana]]"
  - "[[01. Welt Almanach/01C. Charaktere/NPCs/Ezmerelda d_Avenir|Ezmerelda d_Avenir]]"
ingamestart: 12.03.708 d.3.Ä
ingameende: 12.03.708 d.3.Ä
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
> > [!metadataoption]- Above Table
> >
> > #### Above Table
> >
> > | | |
> > |---|---|
> > |**Session Datum** | `INPUT[datePicker:datum]`|
> > |**Abwesende PCs** | `INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):abwesend]` |
>
> > [!metadataoption]- In Game
> >
> > #### In game
> >
> > | | |
> > |---|---|
> > |**Welche Gruppe** | `INPUT[suggester(optionQuery(#Spielergruppe AND !"98. Diverses"), useLinks(partial)):welchegruppe]` |
> > |**Kurzbeschreibung** |  `INPUT[textArea:kurzbeschreibung]`|
> > |**Verfolgte Quest** | `INPUT[inlineListSuggester(optionQuery(#Quest AND !"98. Diverses")):verfolgtequest]` |
> > |**Die Gruppe begleitende NPCs** | `INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):begleitnpcs]` |
> > |**Besuchte Orte** | `INPUT[inlineListSuggester(optionQuery(#Ort AND !"98. Diverses")):ort]` |
> > |**Getroffene NPCs** | `INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):charakter]` |
> > |**In-Game Startdatum**|`INPUT[textArea:ingamestart]`|
> > |**In-Game Enddatum**|`INPUT[textArea:ingameende]`|

# 052 - Die Hexe von Ravenloft - [[00. Kampagnen und Abenteuer/Venatus Hex/Venatus Hex.md|Venatus Hex]]

> [!lore] Kurze Zusammenfassung
> `VIEW[{kurzbeschreibung}][text]`

|Above Table||
|:-|:-|
|**Session Datum:**| `VIEW[{datum}][text]`|
|**Abwesende Spieler Charaktere:**| `VIEW[{abwesend}][link]`|

|In Game||
|:-|:-|
|**Verfolgte Quest(s):**| `VIEW[{verfolgtequest}][link]`|
|**Die Gruppe begleitende NPCs:**|`VIEW[{begleitnpcs}][link]`|
|**Besuchte Orte:**| `VIEW[{ort}][link]`|
|**Getroffene NPCs:** |`VIEW[{charakter}][link]`|
|**In-Game Startdatum:**| `VIEW[{ingamestart}][text]`|
|**In-Game Enddatum:**| `VIEW[{ingameende}][text]`|

## Während der Session

- Die Gruppe ruht sich in der Schatzkammer von Ravenloft aus und macht eine weitere Short Rest
  - Vi stellt fest, dass ihr Runenschwert, das sie seit ihrer Kindheit bei sich trägt, ebenfalls aus Adamantium gefertigt ist.
  - Während dieser Rast identifiziert Styx die gefundenen magischen Gegenstände und den Adamantium-Turm, der eine expandierende Festung ist.
  - Um die expandierende Festung mitnehmen zu können, leert Calla die Aufbewahrungskiste der Gruppe aus und schaufelt damit die Berge an Geld aus dem Turm nach draußen. Ireena und Ez helfen ihr, während Vi sich auf die Festung einstimmt.
- Nach der Rast verlässt die Gruppe den Turm, verkleinert ihn und nimmt ihn mit.
- Sie gehen zurück in den Glockenturm, wo sie eine weitere geheime Tür finden
  - Calla drückt alle Steine neben der Tür, um einen geheimen Schalter zu finden, während Orlac und Vi nach einem kurzen Blick feststellen, dass sich die Tür von dieser Seite einfach aufziehen lässt
- Die Gruppe kommt in einen Raum, in dem sich früher wohl einmal Möbel befunden haben, die jetzt aber zerstört und verschimmelt am Boden liegen
- Die Rückwand des Raums fehlt vollständig und gibt den Blick frei auf einen riesigen Schacht, in dem Ketten hängen. Dies ist der Aufzugsschacht.
  - Der Aufzug befindet sich etwa 30ft/ 9m über ihnen, der Boden des Schachts (wo die Gruppe die Falle ausgelöst hatte), befindet sich 130 ft./ 39m unter ihnen.
  - 40 ft./ 12m unter ihnen, auf der selben Seite im Schacht, befindet sich ein weiterer Raum.
  - Die Gruppe stellt fest, dass die Haltestellen des Aufzugs folgende sind: UG1, OG1, OG2, OG3.
  - Die Gruppe seilt sich dorthin ab, was wegen des feucht-schimmligen Schachts etwa 30 Minuten benötigt.
- In diesem Raum befinden sich Zahnräder, gut geölte Maschinerie, ein Hebel und eine steinerne Tür
  - Calla öffnet die Tür einfach und die Gruppe tritt in den Königssaal, die lange Halle, der die Kapelle mit dem königlichen Audienzsaal verbindet, in der sich der Wandteppich von König Barov befindet.
- Vi wollte kurz in den Audienzsaal schauen, doch als sie im Vorraum des Saals die an den Wänden hängenden Skelette sah, schloss sie leise die Tür und ging mit den anderen in die nebelverhangene Kapelle
- In der Kapelle überprüfte die Gruppe die Treppe des hohen Turms, dessen Treppe, wie van Richten ihnen mitteilte, in die Katakomben führte. Allerdings war die Treppe, wie Sasha ihnen angekündigt hatte, vollständig zugemauert.
  - In der Mauer fand Vi einen schmalen, absichtlich gelassenen Schlitz, durch den Vampire in Nebelgestalt wohl hinein und hinauskommen sollten.
  - Die Gruppe befand das Risiko für zu hoch, als dass sie versuchen könnten die Mauer irgendwie einzureißen und sie kehrten zur Kapelle zurück.
- Calla versuchte magisch Rahadin zu orten. Dies scheiterte aber, da er von irgendeiner abschirmenden Magie vor Aufklärungszaubern geschützt wird.
- Von der Kapelle aus durchquerten sie die Halle des Glaubens, durch die sie in die große Empfangshalle gingen, in deren Zentrum Ludmilla auf sie zu warten schien.
  - Ludmilla war enttäuscht von den Mauerwachen, die offensichtlich nicht in der Lage waren "Höhlenbewohner" wie die Gruppe aus der Festung fernzuhalten.
  - Sie richtete Volentas Grüße an Vi aus und der Kampf brach aus.
- Der Kampf gegen Ludmilla:
  - Nachdem Vi sie angegriffen hatte, teleportierte Ludmilla sofort mit Misty Step davon und versteckte sich.
  - Sie animierte drei Gargoyles in der Eingangshalle, die gegen die Gruppe kämpften.
  - Bei erster Gelegenheit wirkte sie magische Dunkelheit und stahl Orlac das heilige Amulett der Raben, mit dem sie in die Kapelle floh.
  - Die Gruppe entledigte sich der Gargoyles und verfolgte Ludmilla, die sich auf einer Schattenwolke in die Luft erhob und die Gruppe mit Blitzen und Eis attackierte.
  - Dabei floh sie oft, direkt nachdem sie Schaden genommen hatte, flog herum und bekämpfte die Gruppe auf Entfernung.
  - Nachdem sie allerdings mehrfach Schaden durch heilige Magie genommen hatte, löste sich ihre Schattenwolke auf und sie kämpfte am Boden weiter.
  - Dort schlug sie Orlac in die Bewustlosigkeit, der aber in sich den Raben erweckte und als Hybrid-Werrabe wieder aufstand und weiterkämpfte.
  - Ludmilla wurde in die Ecke gedrängt und in ihrer Verzweiflung nahm sie eine Nebelgestalt an, in der sie vor den physischen Angriffen durch Waffen immun war.
  - Sie griff aus dem Verborgenen an, versteckte sich im Nebel, den sie gleichzeitig erschuf und versuchte Styx zu ersticken.
  - Vi benutzte den Winterwolfszahn, durch den Ludmilla gezwungenermaßen physische Form annahm, ihre Flugfähigkeiten und ihre Immunitäten verlor.
  - Danach war es ein kurzer Prozess, bis Ez Ludmilla erledigte und diese sich als vampirischer Nebel in ihre Krypta zurückzog.
- Orlac fand sein Amulett an einem der zerbrochenen Buntglasfenster hängend wieder
- Ez warnte noch davor, dass wahrscheinlich genug Zeit vergangen ist, dass Anastrasya wieder auferstanden sein könnte.
  - Auf Nachfrage, ob sie geschwächt sein würde, meinte Ez, dass Vampire sehr schnell regenerieren würden.

## Aktueller Heist Log (Kontrolle)

> [!info]+ Heist Tracker
>
> ## Insgesamt vergangene Zeit
>
> - 5h seit Strahds Verschwinden
> - 3h seit Anastrasyas Besiegen
>
> ## Short Rests
>
> **1:** P5d. Dienerflügel (K66. Butler Quartiere) nach dem Kampf mit der Vampirbrut
> **2:** P6. Königsgemächer (K37. Studierzimmer) nach dem Kampf mit Anastrasya
> **3:** P7d. Schatzkammer (K41. Schatzkammer) nach dem Plündern der Schatzkammer und dem Besiegen des elementaren Wächters
>
> ## Heist Max HP Reduktion
>
> **Ailas:** 6 Gesamt (6 Vampir/Anastrasya)
> **Calla:** 14 Gesamt (7 Wicht, 7 Wicht)
> **Orlac:** 5 Gesamt (5 Wicht)
> **Tungdil:** 13 Gesamt (8 Vampir, 5 Wicht)
> **Vi:** 8 Gesamt (8 Vampir)
>
> ## Getötete Gegner/Beendete Encounter
>
> **P2d. Mauer:** Alle 6 Wichte
> **K5d. Dienerhalle:** 1/2 Vampiren tot, der andere im Fahrstuhl eingesperrt
> **P10a. Knochenhalle:** Alle Knochenhaufen zerstört
> **P6b. Wachungeziefer:** Alle Ratten- und Handschwärme besiegt
> **P6b. Anastrasya:** Alle Wichte besiegt. Anastrasya besiegt (Hat sich in Nebel verwandelt und ist in ihre Krypta geflohen)
> **P7c. Glockenstuhl:** Alle Riesenspinnen getötet
> **P7d. Schatzkammer:** Unsichtbarer Pirscher besiegt
> **P4a. Große Empfangshalle:** Alle Gargoyles besiegt
> **P4a. Kapelle:** Ludmilla besiegt (Hat sich in Nebel verwandelt und ist in ihre Krypta geflohen)
>
> ## Verbrauchte Ressourcen
>
> **Ailas:** Magical Cunning, Beide Spell Slots
> **Calla:** Tremorsense, 1 Bardic
> **Orlac:** XX Exertion, 1 Charge des Amuletts der Raben
> **Styx:** Spell Slots: 2 1st, 2 2nd, 1 3rd, 0 4th, Harness Divine Power x2
> **Kupfer:** Alle Spell Slots
> **Vi:**
> **Ez:** Eye of the Cat (selbst), 6x Weihwasser (alle)
> **Ireena:**
>
> ## Genutzte Hit Dice
>
> **Ailas (7d8):**
> **Calla (5d8, 2d10):** 0
> **Orlac (7d8):** 5d8
> **Styx (7d6):** 3d6
> **Kupfer (4d10):** 4d10
> **Vi (7d10):** 0
> **Ez (7d10):** 5d10

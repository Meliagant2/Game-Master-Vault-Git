---
tags:
  - "#Story"
  - "#SessionNote"
status: ✅
sessiondatum: 2026-07-05
welchegruppe: "[[Venatus Hex]]"
kurzbeschreibung: Die Gruppe analysiert die Schatzkammer von Ravenloft, räumt sie aus und nimmt die expandierende Festung an sich. Danach suchen sie einen Weg aus dem Glockenturm heraus, finden ihren Weg in die Kapelle von Ravenloft und bekämpfen dort Ludmilla, nachdem diese ihnen das heilige Amulett der Raben gestohlen hatte.
ingamestartdatum: 12.03.708 d.3.Ä
ingameenddatum: 12.03.708 d.3.Ä
acharakter:
  - "[[Ailas Dorric]]"
  - "[[Tungdil Kupferkelch]]"
---
>[!metadata]- Metadata 
>>[!metadataoption]- Status
>>#### Status
>>| | |
>>|---|---|
>>|**Status** | `INPUT[Status][:status]` |
>
>>[!metadataoption]- Above Table
>>#### Above Table
>>| | |
>>|---|---|
>>|**Session Datum** | `INPUT[datePicker:sessiondatum]`|
>>|**Abwesende PCs** | `INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):acharakter]` |
>
>>[!metadataoption]- In Game
>>#### In game
>>| | |
>>|---|---|
>>|**Welche Gruppe** | `INPUT[suggester(optionQuery(#Spielergruppe AND !"98. Diverses"), useLinks(partial)):welchegruppe]` |
>>|**Kurzbeschreibung** |  `INPUT[textArea:kurzbeschreibung]`|
>>|**Verfolgte Quest** | `INPUT[inlineListSuggester(optionQuery(#Quest AND !"98. Diverses")):verfolgtequest]` |
>>|**Die Gruppe begleitende NPCs** | `INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):begleitcharakter]` |
>>|**Besuchte Orte** | `INPUT[inlineListSuggester(optionQuery(#Ort AND !"98. Diverses")):ort]` |
>>|**Getroffene NPCs** | `INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):charakter]` |
>>|**In-Game Startdatum**|`INPUT[textArea:ingamestartdatum]`|
>>|**In-Game Enddatum**|`INPUT[textArea:ingameenddatum]`|

# `=this.file.name` - `=link(this.welchegruppe)`

>[!lore] Kurze Zusammenfassung
>`VIEW[{kurzbeschreibung}][text]`

|Above Table||
|:-|:-|
|**Session Datum:**| `VIEW[{sessiondatum}][text]`|
|**Abwesende Spieler Charaktere:**| `VIEW[{acharakter}][link]`|

|In Game||
|:-|:-|
|**Verfolgte Quest(s):**| `VIEW[{verfolgtequest}][link]`|
|**Die Gruppe begleitende NPCs:**|`VIEW[{begleitcharakter}][link]`|
|**Besuchte Orte:**| `VIEW[{ort}][link]`|
|**Getroffene NPCs:** |`VIEW[{charakter}][link]`|
|**In-Game Startdatum:**| `VIEW[{ingamestartdatum}][text]`|
|**In-Game Enddatum:**| `VIEW[{ingameenddatum}][text]`|

# Während der Session


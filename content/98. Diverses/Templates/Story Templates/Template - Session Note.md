---
tags:
  - "#Story"
  - "#SessionNote"
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


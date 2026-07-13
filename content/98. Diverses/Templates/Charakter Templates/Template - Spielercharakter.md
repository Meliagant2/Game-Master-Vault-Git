---
tags:
  - "#Charakter"
  - "#SpielerPC"
image: 98. Diverses/Bilder/Misc/PlaceholderImage.png
image2: 98. Diverses/Bilder/Misc/PlaceholderImage.png
image3: 98. Diverses/Bilder/Misc/PlaceholderImage.png
status:
---
>[!metadata]- Metadata 
>>[!metadataoption]- Status
>>#### Status
>>| | |
>>|---|---|
>>|**Status** | `INPUT[Status][:status]` |
>
>>[!metadataoption]- Bild
>>#### Bild
>>| | |
>>|---|---|
>>|**Bild 1**|`INPUT[imageSuggester(optionQuery("")):image]`|
>>|**Bild 2**|`INPUT[imageSuggester(optionQuery("")):image2]`|
>>|**Bild 3**|`INPUT[imageSuggester(optionQuery("")):image3]`|
>
>>[!metadataoption]- Allgemein
>>#### Allgemein
>>| | |
>>|---|---|
>>|**Aussprache**|  `INPUT[textArea:aussprache]` |
>>|**Spieler**|`INPUT[textArea:spieler]`|
>>|**Aliase**| `INPUT[textArea:aliase]` |
>>|**Passive Wahrnehmung**|`INPUT[number:passivewahrnehmung]` |
>
>>[!metadataoption]- Bio
>>#### Bio
>>| | |
>>|---|---|
>>|**Abstammung**|`INPUT[Abstammung][inlineListSuggester:abstammung]`|
>>|**Kreaturentyp**|`INPUT[KreaturenTyp][inlineListSuggester:kreaturentyp]`|
>>|**Kultur** | `INPUT[inlineListSuggester(optionQuery(#Kultur AND !"98. Diverses"), useLinks(partial)):kultur]` |
>>| `INPUT[Geschlecht][suggester:geschlecht]` |
>>|**Geburtsdatum**|`INPUT[textArea:geburtsjahr]`|
>>|**Todesdatum**|`INPUT[textArea:todesjahr]`|
>>|**Größenkategorie**|`INPUT[KreaturGroesse][:kreaturgroesse]` |
>
>>[!metadataoption]- Gesellschaft
>>#### Gesellschaft
>>| | |
>>|---|---|
>>|**Klasse**|`INPUT[Klasse][:klasse]`|
>>|**Beschäftigungen**| `INPUT[Beschaeftigung][inlineListSuggester:beschaeftigung]`|
>>|**Sprachen (fließend)**|`INPUT[inlineListSuggester(optionQuery(#Sprache AND !"98. Diverses"), useLinks(partial)):sprache]` |
>>|**Sprachen (teilweise)**|`INPUT[inlineListSuggester(optionQuery(#Sprache AND !"98. Diverses"), useLinks(partial)):spracheteil]` |
>>|**Wohnort** | `INPUT[inlineListSuggester(optionQuery(#POI OR #Siedlung AND !"98. Diverses"), useLinks(partial)):wohnort]` |
>>|**Organisationen** | `INPUT[inlineListSuggester(optionQuery(#Organisation AND !"98. Diverses"), useLinks(partial)):organisation]` |
>
>>[!metadataoption]- Familie
>>#### Familie
>>| | |
>>|---|---|
>>|**Eltern** |`INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):eltern]` |
>>|**Geschwister** |`INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):geschwister]` |
>>|**Partner** | `INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):partner]` |
>>|**Kinder** | `INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):kinder]` |
>>|**Freunde/Verbündete** |`INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):freunde]` |
>>|**Feinde/Rivalen**|`INPUT[inlineListSuggester(optionQuery(#Charakter AND !"98. Diverses"), useLinks(partial)):feinde]` |
>
>>[!metadataoption]- Ausrüstung
>>#### Ausrüstung
>>| | |
>>|---|---|
>>|**Waffen** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_waffen]` |
>>|**Kopf** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_kopf]` |
>>|**Hals** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_hals]` |
>>|**Mantel** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_mantel]` |
>>|**Körper** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_koerper]` |
>>|**Hüfte** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_huefte]` |
>>|**Hände** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_haende]` |
>>|**Rechter Ring** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_ringrechts]` |
>>|**Linker Ring** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_ringlinks]` |
>>|**Füße** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_fuß]` |
>>|**Konsumgüter** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_konsum]` |
>>|**Divers** | `INPUT[inlineListSuggester(optionQuery(#Item AND !"98. Diverses"), useLinks(partial)):ausruestung_divers]` |

# **`=this.file.name`** <span style="font-size: medium">`VIEW[{aussprache}]`</span>

> [!wikibox]+
>## `=this.file.name`
>| | |
>|---|---|
>|**Spieler** |`VIEW[{spieler}][text]`|
>|**Aliase** | `VIEW[{aliase}][text]` |
>
>`VIEW[!\[\[{image}\]\]][text(renderMarkdown)]`
>
>``` meta-bind
>INPUT[select(
>option(1, Bio),
>option(2, Info),
>option(3, Familie),
>option(4, Inventar),
>class(tabbed)
>)]
>```
>
>>[!tabbed-box]
>>
>>| | |
>>|---|---|
>>|**Abstammung** | `VIEW[{abstammung}][text]` |
>>|**Kreaturen Typ** |`VIEW[{kreaturentyp}][text]` |
>>|**Kultur** |`VIEW[{kultur}][link]` |
>>|**Geschlecht** | `VIEW[{geschlecht}][text]` |
>>|**Geburtsdatum** | `VIEW[{geburtsjahr}][text]`|
>>|**Todesdatum**|`VIEW[{todesjahr}][text]`|
>>|**Größe** |`VIEW[{kreaturgroesse}][text]`|
>> 
>>| | |
>>|---|---|
>>|**Klasse** | `VIEW[{klasse}][text]` |
>>|**Beschäftigungen** | `VIEW[{beschaeftigung}][text]` |
>>|**Sprachen** | `VIEW[{sprache}][link]` |
>>|**Sprachen (teilweise)** | `VIEW[{spracheteil}][link]` |
>>|**Wohnort** |`VIEW[{wohnort}][link]` |
>>|**Organisationen** | `VIEW[{organisation}][link]` |
>> 
>>| | |
>>|---|---|
>>|**Eltern** | `VIEW[{eltern}][link]` |
>>|**Geschwister** | `VIEW[{geschwister}][link]` |
>>|**Partner** |`VIEW[{partner}][link]` |
>>|**Kinder**|`VIEW[{kinder}][link]` |
>>|**Freunde/ Verbündete**|`VIEW[{freunde}][link]` |
>>|**Feinde/ Rivalen**|`VIEW[{feinde}][link]` |
>>
>>| | |
>>|---|---|
>>|**Waffe(n)** | `VIEW[{ausruestung_waffen}][link]` |
>>|**Kopf** | `VIEW[{ausruestung_kopf}][link]` |
>>|**Hals** | `VIEW[{ausruestung_hals}][link]` |
>>|**Mantel** | `VIEW[{ausruestung_mantel}][link]` |
>>|**Körper** | `VIEW[{ausruestung_koerper}][link]` |
>>|**Hüfte** | `VIEW[{ausruestung_huefte}][link]` |
>>|**Hände** | `VIEW[{ausruestung_haende}][link]` |
>>|**Rechter Ring** | `VIEW[{ausruestung_ringrechts}][link]` |
>>|**Linker Ring** | `VIEW[{ausruestung_ringlinks}][link]` |
>>|**Füße** | `VIEW[{ausruestung_fuß}][link]` |
>>|**Konsumgüter** | `VIEW[{ausruestung_konsum}][link]` |
>>|**Divers** | `VIEW[{ausruestung_divers}][link]` |


## Charaktererstellung
**Spieler Trigger:**

**Charakterinspiration:**

## Charakteristiken 
### Aussehen

### Verhalten

### Schwächen/Stärken

### Ängste

### Mag/Hasst

### Bindungen 



## Ziele


## Geschichte




## Spielleiter Notizen

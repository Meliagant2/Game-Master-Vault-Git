---
tags:
  - "#Story"
  - "#Abenteuerakt"
image: 98. Diverses/Bilder/Misc/PlaceholderImage.png
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
>>|**Bild**|`INPUT[imageSuggester(optionQuery("")):image]`|
>
>>[!metadataoption]- Info
>>#### Info
>>| | |
>>|---|---|
>>|**Abenteuer** | `INPUT[suggester(optionQuery(#Abenteuer AND !"98. Diverses"), useLinks(partial)):welchesabenteuer]` |
>>|**Spielergruppe** | `INPUT[suggester(optionQuery(#Spielergruppe AND !"98. Diverses"), useLinks(partial)):welchegruppe]` |

# **`=this.file.name`**

>[!wikibox]+
>`VIEW[!\[\[{image}\]\]][text(renderMarkdown)]`
> 
>| | |
>|---|---|
>|**Status** | `VIEW[{status}]` |
>|**Abenteuer** | `VIEW[{welchesabenteuer}][link]` |
>|**Gruppe** | `VIEW[{welchegruppe}][link]` |




## Zusammenfassung


## Timeline


## Quests und Meilensteine
>[!quest]+ Quests
>```dataview
>TABLE WITHOUT ID 
>link(file.name) AS Quest,
>join(status, ", ") AS Status,
>join(level, ", ") AS Level,
>join(erfahrungspunkte, ", ") AS EXP
>WHERE contains(welchesabenteuer, this.file.link)
>SORT file.name ASC
>```


## Inspiration/Quelle
>[!inspiration] Inspiration/Quelle
>
---
tags:
  - "#Story"
  - "#Quest"
status: ⏳
welchesabenteuer: "[[Akt 3 - Das gebrochene Land]]"
welchegruppe: "[[Venatus Hex]]"
level: "7"
---
>[!metadata]- Metadata 
>>[!metadataoption]- Status
>>#### Status
>>| | |
>>|---|---|
>>|**Status** | `INPUT[Status][:status]` |
>
>>[!metadataoption]- Info
>>#### Info
>>| | |
>>|---|---|
>>|**Abenteuer/Akt** | `INPUT[suggester(optionQuery(#Abenteuer OR #Akt AND !"98. Diverses"), useLinks(partial)):welchesabenteuer]` |
>>|**Spielergruppe** | `INPUT[suggester(optionQuery(#Spielergruppe AND !"98. Diverses"), useLinks(partial)):welchegruppe]` |
>>|**Level**|`INPUT[textArea:level]` |
>>|**EXP** |`INPUT[textArea:erfahrungspunkte]`|
>>|**Inspiration/Quelle**|`INPUT[textArea:inspiration]` |

# **`=this.file.name`**

>[!info]+ Generelle Informationen
>| | |
>|---|---|
>|**Status** | `VIEW[{status}]` |
>|**Abenteuer/Akt** | `VIEW[{welchesabenteuer}][link]` |
>|**Erwartetes Level**|`VIEW[{level}]`|
>|**Erfahrungspunkte**|`VIEW[{erfahrungspunkte}]` |

>[!info]+ In diesem Kapitel zu finden
>```base
>views:
>  - type: cards
>    name: Gegner in diesem Kapitel
>    filters:
>      and:
>        - this.hasLink(file)
>        - tags.contains("#Monster")
>    image: note.image
>    cardSize: 150
>    imageFit: contain
>    imageAspectRatio: 1
>  - type: cards
>    name: NPCs in diesem Kapitel
>    filters:
>      and:
>        - tags.contains("#NPC")
>        - this.hasLink(file)
>    cardSize: 100
>    image: note.image
>    imageFit: contain
>  - type: cards
>    name: Items in diesem Kapitel
>    filters:
>      and:
>        - tags.contains("#Item")
>        - this.hasLink(file)
>    cardSize: 100
>    image: note.image
>    imageFit: contain
>  - type: cards
>    name: Orte in diesem Kapitel
>    filters:
>      and:
>        - tags.contains("#Ort")
>        - this.hasLink(file)
>    cardSize: 100
>    image: note.image
>    imageFit: contain
>```

## Überblick
Zusammenfassung der Quest

## Ark1. Stuff
### Ark1a. Stuffstuff





## Inspiration/Quelle
>[!inspiration] Inspiration/Quelle
>**Quelle:** Curse of Strahd Reloaded (@DragnaCarta)
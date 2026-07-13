---
tags:
  - "#Home"
---
# Spielleiterschirm



Insert Kalender




## Gameplay-Relevanz

### Aktive Spielergruppen

>[!cards|dataview 5]
>```dataview
>TABLE WITHOUT ID
>embed(link(image)) AS "Bild", 
>"<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Title) + "</span>" AS Title
>FROM "00. Vault"
>WHERE contains(status, "✅") AND contains(tags, "#Spielergruppe")
> SORT file.name ASC
>```


### Wichtige Regeln









## Worldbuilding und Prep

<center>[Worldbuilding Playlist](ttrpg-playlist:content/98. Diverses/Audio/Ambience/Worldbuilding Playlist#1)</center>

### To Do
``` meta-bind
INPUT[select(
option(1, Mo),
option(2, Di),
option(3, Mi),
option(4, Do),
option(5, Fr),
option(6, Generell),
class(tabbed)
)]
```
> [!tabbed-box]
>>[!lore] Mo (Recap/Aktuelle Campaigns) 
>> - [ ] 
>
>>[!lore] Di (Aktuelle Campaigns)
>> - [ ]
>
>>[!lore] Mi (Maps, Diverses, etc.)
>> - [ ] 
>
>>[!lore] Do (Lore Allgemein)
>> - [ ]  
>
>>[!lore] Fr (Lore Allgemein)
>> - [ ] 
>
>>[!lore] Generell To Do
>> - [ ] bildrechts Callout: Entfernen aller Umrandungen des Bildes (Cards Callout kann das auch)
>> - [ ] 5e Regelwerk rewording:
>> 	- [ ] Saving Throw -> Save

### Zufällige, unfertige Dateien
#### Worldbuilding
>[!cards|dataview 5]
>```dataview
>TABLE WITHOUT ID
>embed(link(image)) AS "Bild", 
>"<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Title) + "</span>" AS Title
>FROM "01. Welt Almanach"
>WHERE !contains(status, "✅")
>FLATTEN [ [(seed) => (seed * 1103515245 + 12345) % 2147483648]] AS random
>FLATTEN [number(dateformat(date("now"), "x"))] AS seed
>SORT random[0](seed + file.size)
>LIMIT 10
>```

#### Regeln
>[!cards|dataview 5]
>```dataview
>TABLE WITHOUT ID
>embed(link(image)) AS "Bild", 
>"<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Title) + "</span>" AS Title
>FROM "02. Regelwerk"
>WHERE !contains(status, "✅")
>FLATTEN [ [(seed) => (seed * 1103515245 + 12345) % 2147483648]] AS random
>FLATTEN [number(dateformat(date("now"), "x"))] AS seed
>SORT random[0](seed + file.size)
>LIMIT 10
>```

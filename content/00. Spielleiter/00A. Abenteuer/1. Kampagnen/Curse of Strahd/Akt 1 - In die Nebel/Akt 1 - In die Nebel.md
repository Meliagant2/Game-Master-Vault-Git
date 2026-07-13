---
tags:
  - "#Story"
  - "#Abenteuerakt"
image: 98. Diverses/Bilder/Abenteuerthumbnails/CoS Akt 1 In die Nebel.png
status: ✅
welchesabenteuer: "[[Curse of Strahd]]"
welchegruppe: "[[Venatus Hex]]"
---
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
>**Quelle:** Curse of Strahd Reloaded (@DragnaCarta)
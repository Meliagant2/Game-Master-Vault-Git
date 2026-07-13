---
tags:
  - "#Organisation"
  - "#Spielergruppe"
image: 98. Diverses/Bilder/Misc/PlaceholderImage.png
status: ✅
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

# **`=this.file.name`**

>[!charakter]+ Mitglieder der Gruppe
>```dataview
>TABLE WITHOUT ID
>embed(link(image)) AS "Bild", 
>spieler AS Spieler, 
>aliase as Aliase, 
>abstammung AS Abstammung, 
>klasse AS Klasse, 
>passivewahrnehmung AS Perception 
>FROM "01. Welt Almanach"
>WHERE contains(tags, "Charakter") AND econtains(organisation, this.file.link)
>SORT file.name ASC
>```

>[!quest]- Abenteuer
>>[!cards|dataview 5]
>>```dataview
>>TABLE WITHOUT ID
>>embed(link(image)) AS "Bild", 
>>"<span style='display: block; text-align: center; margin-bottom: 2px;'>" + link(file.link, Title) + "</span>" AS Title,
>>"<span style='display: block; text-align: center; margin-bottom: 2px;'>" + status + "</span>" AS Status
>>FROM "00. Spielleiter"
>>WHERE contains(welchegruppe, this.file.link) AND contains(tags, "#Abenteuer")
>>SORT file.name ASC
>>```

>[!quest]- Aktive Quests
>```dataview
>TABLE WITHOUT ID 
>link(file.name) AS Quest,
>join(status, ", ") AS Status,
>join(level, ", ") AS Level,
>join(erfahrungspunkte, ", ") AS EXP
>FROM "00. Spielleiter"
>WHERE contains(welchegruppe, this.file.link) AND contains(status, "⏳") AND contains(tags, "#Quest")
>SORT file.name ASC
>```

>[!quest]- Abgeschlossene Quests
>```dataview
>TABLE WITHOUT ID 
>link(file.name) AS Quest,
>join(status, ", ") AS Status,
>join(level, ", ") AS Level,
>join(erfahrungspunkte, ", ") AS EXP
>FROM "00. Spielleiter"
>WHERE contains(welchegruppe, this.file.link) AND contains(status, "✅") AND contains(tags, "#Quest")
>SORT file.name ASC
>```

> [!sessionnote]- Session Logs
>>[!cards|dataview 3]
>>```dataview
>>TABLE WITHOUT ID
>>"<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + link(file.link, Title) + "</span>" AS Titel,
>>"<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + sessiondatum + "</span>" AS SessionDatum,
>>"<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + "**Start:**" + ingamestartdatum + "</span>" AS InGameStartDatum,
>>"<span style='display: block; border-bottom: 2px solid var(--accent); text-align: center; margin-bottom: 5px;'>" + "**Ende:**" + ingameenddatum + "</span>" AS InGameEndDatum,
>>kurzbeschreibung AS "K"
>>FROM "00. Spielleiter"
>>WHERE econtains(welchegruppe, this.file.link) AND contains(tags, "SessionNote")
>>SORT date(sessiondatum, "dd/MM/yyyy") ASC
>>```


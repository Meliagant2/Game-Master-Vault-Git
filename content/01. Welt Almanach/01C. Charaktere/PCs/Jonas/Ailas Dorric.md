---
tags:
  - "#Charakter"
  - "#SpielerPC"
image: 98. Diverses/Bilder/Spielercharaktere/Ailas Dorric.png
status: ⏳
aussprache: '"ey-läss dor-rikk"'
spieler: Jonas
passivewahrnehmung: 15
kreaturentyp:
  - Humanoid
abstammung:
  - Elf
  - Mensch
geschlecht: Männlich
kreaturgroesse: Medium
geburtsjahr: ""
klasse: Warlock
beschaeftigung:
  - Abenteurer/in
organisation:
  - "[[Venatus Hex]]"
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
Ailas liebt die und dient der Erzfey [[Meriel]] und er ist befreundet mit dem Druiden [[Borgenbrand]]. 

## Ziele
Das Herz von Ailas sehnt sich natürlich nach Meriel. Aber sein Geist Will Freiheit. Gerade im Angesicht der Befreiung von Vallaki nach der er und seine Freunde sich im nächsten Gefängnis sehen.




## Geschichte
Es war einmal ein junger Mann.
Tollkühn und Abenteurerlustig.

Er wanderte stehts auf schmalen Wegen durch immer tiefe Wälder.
Eines Tages auf einer besonders weiten Wanderung verirrte er sich. 

Er wanderte auf Wegen zwischen den Welten in die Wälder der Feenwesen.
Und fand sich nach langer Irrfahrt am Hof des Feenkönigs wieder.

Charmant, Witzig und Klug wie er war, wurde er freundlich empfangen und bald wohl geschätzt.
Doch es Begab sich das er Sich in die Tochter des Königs, Ja in die Feenprinzessin selbst verliebte.

Ein weiserer hätte aus den Märchen den als Kind am Feuer gelauscht wurde gelernt.
Aber nicht Er, oh nein!

Denn seine Gefühle fanden Erwiderung, und wie es nicht anders kommen konnte, war dies nicht lange Geheim zu halten.
Als also der Feenkönig von der Affäre zu seiner Tochter erfahren hatte, war er voll Zorn und Verachtung.

Doch anstatt seine Gast zu verbannen oder gar zu Töten, ersannt Er einen Plan, Sie zu trennen.
Denn Seine Tochter so fand Er müsse lernen, dass ein solch unwürdiger kein Umgang für sie sei.

So rief Er Ihn zu sich und verkündete er habe von der Verbindung zwischen den beiden gehört und wäre gar erfreut.
Doch habe Er sich zu beweisen. 

Ein Zweikampf mit dem besten Krieger des Königs.
Doch solle er zuerst sein Herz als Liebespfand übergeben.

Da war der Junge Mann voll Freude und übergab dem Feenkönig bereitwillig sein Herz.
So ging dann die grausame List des Königs auf. 

Denn als der junge Mann sich zum Kampf stellte fand er keinen Mut und keine Stärke. 
All seine Kraft sein Lebenswille war fort, hatte Er ja bereitwillig sein Herz verpfändet.

Die Prinzessin musste mit ansehen wie Sich ihr geliebter beherrscht von unbändiger Angst in den Wald flüchtete.
Der König aber war zufrieden. 
"Unwürdig ist Er!" waren seine Worte als er das Herz in den Fluss warf.

Die Prinzessin aber hatte ihren Vater durchschaut.
Sie schlich heimlich in den Wald um ihren  geliebten zu suchen.

Als sie ihn fand schenkte Sie Ihm ein Herz aus einer Rosenknospe.
"Die Dornen Schützen dich vor Furcht und Schmerz und die roten Blüten sind stark und schön wie Meine Liebe."

Auch wenn die Prinzessin nicht wieder zu Ihrem Vater zurück konnte war Sie glücklich.

Denn So merkt euch: 
    Ehre kann erkämpft werden und Respekt verdient. 
    Doch Würde und Liebe werden geschenkt. 


## Spielleiter Notizen
### Notes von Jonas Seite 
Ist “Ailas Dorric” sein richtiger Name, also konnte er sich an den erinnern? - Nein, aber ähnlich
Echter Name: Alexander Dominik/Dimitrovich Richard?
Der Siegelring, den er hat, soll etwas mit seiner Vergangenheit zu tun haben, richtig?
- Rabe als Signatur? Konkurrenz zu Strahd? Es muss immer einen Raben geben?
Wenn er stirbt, insta tot tot, oder noch nen Rundentimer bevor er sich in einen wood woad verwandelt? Wood Woad als Exosuit, um zurück aus der feywild gebracht zu werden.

Props:
- Meriel handelt aus Liebe (Transform to Archfey)
- Sohn einer antiken Adelsfamilie?
- Meriel und Ailas leben zusammen in einer “Sommerresidenz”
- Meriel ist freundlich und Liebenswert Ailas gegenüber
- Ailas ist mit Problemen in die mat. plane gekommen

### Meine Ideen/talk points  
- Ailas ist der Sohn von Lord Soth (Dragonlance, Ritter der Rose)
- Ailas ist ein Vistana, bzw Nachfahre des ersten Volks, hat daher Kräfte der Seherin. (Mit Madam Eva verwandt?) 
- **Blooming Heart:** Das Blooming heart stärkt Ailas, umso mehr er zu sich selbst findet, bzw. umso mehr er es füllt. Das mögen seine alten Erinnerungen sein, oder aber neue Entscheidungen 
	- Möglicherweise hat Ailas seine Erinnerungen freiwillig aufgegeben, weil sie zu schmerzhaft waren.
- Hunter's mark (was wollte ich mir damit sagen?)
- Ailas Erinnerung wird von der Erwähnung der Jägerin angestachelt. (Krasser flashy Traum?)
- Ailas... Sohn des 1. Volks? von Kyrios mit nach draußen genommen? Überlebender von Rahadins Massaker? Sohn von Strahd aus dem Süden? Ailas Sohn von Lord Soth und einer Dämmerelfe, ein befreundeter Werrabe hat die Mutter vor Rahadins Gemetzel gerettet und zum Bergvolk gebracht. Daher hat er den Ring. 


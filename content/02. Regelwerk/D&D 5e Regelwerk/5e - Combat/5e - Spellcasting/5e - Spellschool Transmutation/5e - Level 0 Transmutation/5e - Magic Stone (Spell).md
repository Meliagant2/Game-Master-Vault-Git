---
publish: true
title: ☄️5e - Magic Stone☄️
created: 2026-07-29T08:18:11.559+02:00
modified: 2026-07-29T08:26:51.618+02:00
published: 2026-07-29T08:26:51.618+02:00
tags:
  - "#Spell"
  - "#5e"
dateitags:
  - "#Spell"
  - "#5e"
saveart: Ranged
status: ✅
magieschule: Transmutation
magielevel: 0
wirkzeit: BA
reactionbedingung: " "
reichweite: Touch
komponenten: V, S
dauer: 1 Minute
concentration: n
effekt:
  - Bludgeoning
zauberliste:
  - Arcane
  - Primal
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
> > [!metadataoption]- Info
> >
> > #### Info
> >
> > | | |
> > |---|---|
> > |**Display Title** | `INPUT[textArea:title]`|
> > |**Schule**|`INPUT[inlineSelect(option(Abjuration), option(Conjuration), option(Divination), option(Enchantment), option(Evocation), option(Illusion), option(Necromancy), option(Transmutation)):magieschule]`   |
> > |**Level**|`INPUT[number:magielevel]`|
> > |**Wirkzeit**| `INPUT[inlineSelect(option(A), option(BA), option(R)):wirkzeit]`   |
> > |**Reaction Bedingung**|`INPUT[text:reactionbedingung]`|
> > |**Reichweite & Wirkareal** |`INPUT[text:reichweite]`|
> > |**Komponenten**| `INPUT[text:komponenten]`|
> > |**Dauer** |`INPUT[text:dauer]`|
> > |**Concentration** |`INPUT[inlineSelect(option(y), option(n)):concentration]`   |
> > |**Angriff/Save (Angriff: Melee/Ranged)**| `INPUT[text:saveart]`|
> > |**Effekt**|`INPUT[SpellEffect5e][inlineListSuggester:effekt]` |
> > |**Zauberliste** |`INPUT[inlineListSuggester(option(Arcane), option(Divine), option(Primal), option(Class only), option(Special)):zauberliste]`   |
> > |**Klassenlisten**|`INPUT[inlineListSuggester(option(Artificer), option(Bard), option(Blood Hunter), option(Cleric), option(Druid), option(Paladin), option(Ranger), option(Sorcerer), option(Warlock), option(Wizard)):klassenliste]`   |

# ☄️5e - Magic Stone☄️

> [!wikibox]
> |||
> |:-|:-|
> |**School:**|Transmutation |
> |**Level:**|0 |
> |**Casting Time:**|BA  |
> |**Range/Area:**|Touch |
> |**Components:**|V, S |
> |**Duration:**|1 Minute |
> |**Concentration:**|n |
> |**Attack/Save:**|Ranged|
> |**Spell List:**|Arcane,Primal |
> |**Class List:**| |

You touch <u>one to three</u> tiny objects (like pebbles, playing cards, or pencils) and imbue them with magic. You or someone else can make a <u>ranged spell attack</u> with one of the objects by throwing it or hurling it with a sling. If thrown, it has a range of <u>60 feet</u>. If someone else attacks with the object, that attacker adds <u>your spellcasting ability modifier</u>, not the attacker’s, to the attack roll. On a hit, the target takes `1d12` <u>Bludgeoning</u> damage. Hit or miss, the spell then ends on the object.

If you cast this spell again, the spell ends early on any objects still affected by it.

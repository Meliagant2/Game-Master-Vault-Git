---
publish: true
title: ☄️5e - Acid Splash☄️
created: 2026-07-22T13:59:34.672+02:00
modified: 2026-07-28T15:05:50.631+02:00
published: 2026-07-28T15:05:50.631+02:00
tags:
  - "#Spell"
  - "#5e"
dateitags:
  - "#Spell"
  - "#5e"
saveart: DEX
status: ✅
magieschule: Evocation
magielevel: 0
concentration: n
zauberliste:
  - Arcane
wirkzeit: A
reichweite: 60 ft. (5ft. radius Sphere)
komponenten: V, S
dauer: Instantaneous
effekt:
  - Acid
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
> > |**Wirkzeit**| `INPUT[text:wirkzeit]`|
> > |**Reichweite & Wirkareal** |`INPUT[text:reichweite]`|
> > |**Komponenten**| `INPUT[text:komponenten]`|
> > |**Dauer** |`INPUT[text:dauer]`|
> > |**Concentration** |`INPUT[inlineSelect(option(y), option(n)):concentration]`   |
> > |**Angriff/Save (Angriff: Melee/Ranged)**| `INPUT[text:saveart]`|
> > |**Effekt**|`INPUT[SpellEffect5e][inlineListSuggester:effekt]` |
> > |**Zauberliste** |`INPUT[inlineListSuggester(option(Arcane), option(Divine), option(Primal), option(Class only), option(Special)):zauberliste]`   |
> > |**Klassenlisten**|`INPUT[inlineListSuggester(option(Artificer), option(Bard), option(Blood Hunter), option(Cleric), option(Druid), option(Paladin), option(Ranger), option(Sorcerer), option(Warlock), option(Wizard)):klassenliste]`   |

# ☄️5e - Acid Splash☄️

> [!wikibox]
> |||
> |:-|:-|
> |**School:**|Evocation |
> |**Level:**|0 |
> |**Casting Time:**|A|
> |**Range/Area:**|60 ft. (5ft. radius Sphere) |
> |**Components:**|V, S |
> |**Duration:**|Instantaneous |
> |**Concentration:**|n |
> |**Attack/Save:**|DEX|
> |**Spell List:**|Arcane |
> |**Class List:**| |

You create an acidic bubble and hurl it at a point within range, where it explodes in a <u>5-foot-radius sphere</u>. Each creature in that sphere makes a **DEX Save**. _**Failure:**_ The Creature takes `1d6` <u>Acid</u> damage.

**<u>Cantrip Upgrade:</u>** This spell’s damage increases by `1d6` when you reach levels <u>5</u> (`2d6`), <u>11</u> (`3d6`), and <u>17</u> (`4d6`).

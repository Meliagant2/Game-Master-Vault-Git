---
publish: true
title: 🥇5e - Crafter
created: 2026-08-04T10:55:04.218+02:00
modified: 2026-08-04T11:19:48.551+02:00
published: 2026-08-04T11:19:48.551+02:00
tags:
  - "#Feat"
  - "#5e"
dateitags:
  - "#Feat"
  - "#5e"
status: ✅
category: Origin
source: Player's Handbook 2024
---

# 🥇5e - Crafter🥇

> [!wikibox]
> | | |
> |---|---|
> |**Category**|Origin |
> |**Prerequisite**| |
> |**Repeatable**| |

You gain the following benefits:

**<u>Tool Proficiency:</u>** You gain Tool Proficiency with three different [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Tools/5e - Artisan_s Tools/5e - Artisan_s Tools|🛠️Artisan_s Tools]] of your choice.

**<u>Discount:</u>** Whenever you buy a nonmagical item, you receive a <u>20 percent</u> discount on it.

**<u>Faster Crafting:</u>** When you finish a [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Adventuring/5e - Resting/5e - Long Rest|😴Long Rest]], you can craft one piece of gear from the Fast Crafting table, provided you have the <u>Artisan's Tools</u> associated with that item and have proficiency with those tools. The item lasts until you finish another **Long Rest**, at which point the item falls apart.

##### Fast Crafting

| Artisan's Tools       | Crafted Gear                                              |
| :-------------------- | :-------------------------------------------------------- |
| Carpenter's Tools     | Ladder, Torch                                             |
| Leatherworker's Tools | Crossbow Bolt Case, Map or Scroll Case, Pouch             |
| Mason's Tools         | Block and Tackle                                          |
| Potter's Tools        | Jug, Lamp                                                 |
| Smith's Tools         | Ball Bearings, Bucket, Caltrops, Grappling Hook, Iron Pot |
| Tinker's Tools        | Bell, Shovel, Tinderbox                                   |
| Weaver's Tools        | Basket, Rope, Net, Tent                                   |
| Woodcarver's Tools    | Club, Greatclub, Quarterstaff                             |

### Backgrounds that grant this Feat

```base
views:
  - type: table
    name: 5e - Origin Feats
    filters:
      and:
        - dateitags.containsAll("#5e", "#Background")
        - '!file.name.contains("Template")'
        - file.links.contains(this.file)
    order:
      - file.name
      - primeability
      - sprachen
      - proficiencies
    sort:
      - property: source
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 243
      note.prerequisite: 347
      note.repeatable: 34

```

## Quelle

> [!inspiration] Quelle/Inspiration
> Player's Handbook 2024

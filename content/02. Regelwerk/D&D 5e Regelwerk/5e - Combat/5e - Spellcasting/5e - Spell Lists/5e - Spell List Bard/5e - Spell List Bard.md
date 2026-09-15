---
publish: true
title: ☄️5e - Bard Spell List☄️
created: 2026-07-30T08:37:02.056+02:00
modified: 2026-09-15T15:13:47.873+02:00
published: 2026-09-15T15:13:47.873+02:00
tags:
  - "#Combatrules"
  - "#5e"
dateitags:
  - "#Spelllist"
  - "#SpelllistBard"
  - "#5e"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 02. Classes/5e - Bard/5e - Bard|5e - Bard]].

# ☄️5e - Bard Spell List☄️

The Bard [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Lists/5e - Spell List Bard/5e - Spell List Bard|☄️Spell List]] includes all [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Divination/5e - School of Divination|☄️Divination]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Enchantment/5e - School of Enchantment|☄️Enchantment]] and [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Illusion/5e - School of Illusion|☄️Illusion]] spells from every [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Spell Sources|☄️Spell Source]]. It also includes all [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Abjuration/5e - School of Abjuration|☄️School of Abjuration]] and [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Necromancy/5e - School of Necromancy|☄️School of Necromancy]] spells from the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Divine Spell Source/5e - Divine Spell Source|☄️Divine Spell Source]], all [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Conjuration/5e - School of Conjuration|☄️Conjuration]] spells from the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Occult Spell Source/5e - Occult Spell Source|☄️Occult Spell Source]], all [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Evocation/5e - School of Evocation|☄️Evocation]] spells from the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Primal Spell Source/5e - Primal Spell Source|☄️Primal Spell Source]], and all [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Schools of Magic/5e - School of Transmutation/5e - School of Transmutation|☄️Transmutation]] spells from the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Spellcasting/5e - Spell Categorization/5e - Spell Sources/5e - Arcane Spell Source/5e - Arcane Spell Source|☄️Arcane Spell Source]].

## List of all Bard Spells:

```base
filters:
  and:
    - dateitags.containsAll("#5e", "#Spell")
    - '!file.name.containsAny("Template", "(Legacy)")'
views:
  - type: table
    name: 5e - Bard; Choose Spell Level
    filters:
      and:
        - dateitags.contains("#5e")
        - dateitags.containsAny("#SpelllistBard")
    sort:
      - property: file.name
        direction: ASC
  - type: table
    name: 5e - Bard; All Spells
    filters:
      or:
        - school.containsAny("Divination", "Enchantment", "Illusion")
        - and:
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation")
        - and:
            - zauberliste.containsAny("Arcane")
            - school.containsAny("Transmutation")
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 51
      note.c: 24
  - type: table
    name: 5e - Bard; Cantrips
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane")
            - school.containsAny("Transmutation")
            - level == 0
        - and:
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 0
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 0
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation")
            - level == 0
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
            - level == 0
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.school: 107
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 1st-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane")
            - school.containsAny("Transmutation")
            - level == 1
        - and:
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 1
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 1
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation")
            - level == 1
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
            - level == 1
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 2nd-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane")
            - school.containsAny("Transmutation")
            - level == 2
        - and:
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 2
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 2
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation")
            - level == 2
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
            - level == 2
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 3rd-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane")
            - school.containsAny("Transmutation")
            - level == 3
        - and:
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 3
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 3
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation")
            - level == 3
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
            - level == 3
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 4th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane")
            - school.containsAny("Transmutation")
            - level == 4
        - and:
            - zauberliste.containsAny("Divine")
            - school.containsAny("Abjuration", "Necromancy")
            - level == 4
        - and:
            - zauberliste.containsAny("Occult")
            - school.containsAny("Conjuration")
            - level == 4
        - and:
            - zauberliste.containsAny("Primal")
            - school.containsAny("Evocation")
            - level == 4
        - and:
            - school.containsAny("Divination", "Enchantment", "Illusion")
            - level == 4
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 5th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult")
            - level == 5
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 6th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult", "Bard")
            - level == 6
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 7th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult", "Bard")
            - level == 7
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 8th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult", "Bard")
            - level == 8
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24
  - type: table
    name: 5e - Bard; 9th-level
    filters:
      or:
        - and:
            - zauberliste.containsAny("Arcane", "Divine", "Primal", "Occult", "Bard")
            - level == 9
    order:
      - file.name
      - level
      - school
      - time
      - c
      - range-Area
      - save-Att
      - effect
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    image: note.image
    cardSize: 150
    imageAspectRatio: 1
    imageFit: contain
    columnSize:
      file.name: 200
      note.level: 49
      note.time: 25
      note.c: 24

```

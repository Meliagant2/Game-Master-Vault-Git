---
publish: true
title: 🛠️5e - Tools
created: 2026-07-20T12:11:02.981+02:00
modified: 2026-09-25T09:11:14.712+02:00
published: 2026-09-25T09:11:14.712+02:00
tags:
  - "#Grundregeln"
  - "#5e"
socialImage: "[[98. Diverses/Bilder/Regelwerk Bilder/Basic Rules/Basic Rules Equipment Tools.png]]"
dateitags:
  - "#Equipment"
  - "#5e"
status: ✅
image: "[[98. Diverses/Bilder/Regelwerk Bilder/Basic Rules/Basic Rules Equipment Tools.png]]"
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Equipment/5e - Equipment|🎒Equipment]].

# 🛠️5e - Tools🛠️

Tool proficiencies are a useful way to highlight a character's background and talents. At the game table, though, the use of tools sometimes overlaps with the use of skills, and it can be unclear how to use them together in certain situations. This section offers various ways that tools can be used in the game.

A tool helps you make specialized [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Ability Check/5e - Ability Check|🎲Ability Checks]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Adventuring/5e - Downtime/5e - Crafting|🧖‍♀️Craft]] certain items, or both. A tool's description includes the tool's cost and weight, as well as the following entries:

**<u>Ability:</u>** This entry lists the [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 00. Ability Scores/5e - 00. Ability Scores|⚙️Ability]] to use when making an [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Ability Check/5e - Ability Check|🎲Ability Check]] with the tool. If more than one [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 00. Ability Scores/5e - 00. Ability Scores|⚙️Ability]] is listed, the GM decides which score is applicable in a certain situation.

**<u>Utilize:</u>** This entry lists things you can do with the tool when you take the [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Actions, Bonus Actions & Reactions/5e - Actions/5e - Utilize|⚔️Utilize]] action. You can do one of those things each time you take the **Action**. This entry also provides the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Difficulty Class/5e - Difficulty Class|🎲DC]] for the **Action**.

**<u>Craft:</u>** This entry lists what, if anything, you can [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Adventuring/5e - Downtime/5e - Crafting|🧖‍♀️Craft]] with the tool.

If you have [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Proficiency/5e - Proficiency|🎲Proficiency]] with a tool, add your [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Proficiency/5e - Proficiency Bonus|🎲Proficiency Bonus]] to any [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Ability Check/5e - Ability Check|🎲Ability Check]] you make that uses the tool. If you have [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Proficiency/5e - Proficiency|🎲Proficiency]] in a [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - Skills/5e - Skills|💃Skill]] that's used with that [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Ability Check/5e - Ability Check|🎲Check]], you have **ADV** on the [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Ability Check/5e - Ability Check|🎲Check]] too.

Your features might give you [[02. Regelwerk/D&D 5e Regelwerk/5e - Basic Rules/5e - D20 Tests/5e - Proficiency/5e - Proficiency|🎲Proficiency]] with a tool. A monster has proficiency with any tool in its stat block.

### All Tool Categories

```base
filters:
  and:
    - '!file.name.containsAny("(Legacy)", "Template")'
    - dateitags.containsAll("#5e", "#ToolCategory")
formulas:
  Tool Category: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Tool Categories
    order:
      - formula.Tool Category
      - description
    sort:
      - property: level
        direction: ASC
      - property: file.name
        direction: ASC
    columnSize:
      formula.Tool Category: 164
      note.level: 30
      note.prerequisite: 144
      note.repeatable: 34

```

## Quellen

> [!inspiration] Quellen
> **Art:** Created by Tithy from Noun Project
> **Rules:** Player's Handbook 2024; Xanathar's Guide to Everything

---
publish: true
created: 2026-08-17T10:35:26.769+02:00
modified: 2026-09-17T20:25:41.379+02:00
published: 2026-09-17T20:25:41.379+02:00
tags:
  - "#Changelog"
status: ⏳
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
> > |**System:**|`INPUT[inlineListSuggester(option(#5e), option(#DC20)):tags]`   |
> > |**Datum:** | `INPUT[datePicker:datum]`|
> > |**Änderungen:**|`INPUT[list:aenderungen]`|

# 5e - Changelog - V 1

### [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 02. Classes/5e - Fighter/5e - Fighter|Fighter]]

#### Fighter Core Traits

**Saving Throw Proficiencies:** Fighters can now choose their Save proficiencies out of the following: "<u>Choose one proficiency of each A and B</u>: **(A)** Dexterity OR Constitution, **(B)** Strength OR Intelligence"
**Combat Traditions:** Fighters now choose 2 of the following combat traditions to gain their combat maneuvers: Attentiveness, Comradery, Cunning, Might, Prowess, Swiftness. Formerly the options were 2 out of all 14 traditions (those traditions got axed and combined into the 6 above)
**Exertion:** Fighters now gain a fixed amount of exertion per level, instead of their former formula. <u>V</u> now has `11` (`+2` because of soldier = `13`) Exertion points instead of `11`.
**Maneuvers:** Fighters now gain access to maneuvers more frequently. At level 7 <u>V</u> knows `8` instead of `7` Maneuvers
**Fighting Style:** Formerly a Fighter only Class Feature. Now they are Martial Class Feats.

#### Fighter Class Features

**Know your Enemy:** New 1st level Fighter Flavor feature.
**Precise Strike:** New 1st level Fighter feature.
**Second Wind:** Increased number of uses. Now the fighter can move while using this feature. A Fighter can use second wind to boost their ability checks.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Prowess/5e - 2nd degree Prowess/5e - Action Surge (Maneuver)|Action Surge]]:** Now a Maneuver instead of a fighter class feature. Nerfed it to make it viable as a maneuver.
**Soldiering Knacks:** They are now Feats and no longer listed in the class.
**Class Feats, General Feats, Skill Feats:** New Features for levels 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. Player character has to choose one of each.
**Maneuver Specialization:** Now grants 2 specializations at 5th level and additional ones at 9th, 13th, 17th.
**Tactical Master:** New 5th level fighter Feature
**Fighting Expert:** New 9th level fighter feature, combining Inflexible (now Indomitable) and maneuver specialization upgrades
**Martial Lore:** They are now Feats and no longer listed in the class.
**Master of Combat:** New 13th level Fighter Feature, combining studied attacks (formerly 11th level) and maneuver specialization upgrades.
**Unrelenting:** Moved from 15th to 17th level. Buffed the feature.
**Warmaster:** Moved from 19th to 20th level. Buffed the feature

#### Fighter Subclasses

**[[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 02. Classes/5e - Fighter/5e - Soldier|Master at Arms]]:** Renamed to "Soldier"
\- **Fluid Traditions:** Now 3rd level Soldier Flavor feature.
\- **Advanced Technique:** No changes.
\- **Fighting Spirit:**  New Level 3 Subclass Feature.
\- **Consistent Skill:** Now regains 2 Exertion, instead of 1.
\- **Master of Forms:** Moved from 9th to 11th level.
\- **Masterful Surge:** Removed.
\- **Master of Maneuvers:** New 15th level Soldier Feature.
\- **Warrior of Legend:** Renamed to "Combat Superiority". Moved from 17th to 19th level.

### V's Choices - Specific Changes

#### Class Feats

**[[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats; Martial/5e - Fighting Style - Great Weapon Fighting|Fighting Style - Great Weapon Fighting]]:** Replaces "Heavy Weight Fighting". No longer grants a +2 damage bonus, instead 1s and 2s on the weapon's damage dice are treated as a 3 instead (This includes extra damage dice like crimson offering's extra d6 fire damage, the d4s from your destiny etc.). No longer grants ADV on Shove.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Class Feats/5e - Class Feats; Fighter/5e - Campaigner|Campaigner]]:** Now a class feat instead of soldiering knack. Now grants **ADV** on STR checks to shove, push, or drag (former heavyweight fighting).

#### Skill Feats

**[[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Skill Feats/5e - Level 2 Skill Feats/5e - Nightvision|Nightvision]]:** Replaces soldiering knack "clearsight sentinel".

#### General Feats

**Multiclassing Feat: Blood Hunter:** Updated Crimson Offering's Text:

> [!charakterklasse]- Crimson Offering
>
> ### Level 1: Crimson Offering
>
> You gain the following benefits:
>
> **<u>Rite Die:</u>** Some Blood Hunter features use your **Rite Die**, which starts as a `d4`. At certain Blood Hunter levels, this die grows, as indicated in the <u>Rite Die column</u> above.
>
> **<u>Vital Sacrifice:</u>** Some Blood Hunter features allow you to sacrifice your own life to fuel additional effects. When you make a **Vital Sacrifice**, you take <u>true damage</u> equal to one roll of your **Rite Die**.
>
> **<u>Infuse Weapon:</u>** As a **Bonus Action**, you can make a **Vital Sacrifice** to empower one _Weapon_ you are holding for <u>1 hour</u>. When you do so, choose either <u>Acid</u>, <u>Cold</u>, <u>Fire</u>, <u>Lightning</u>, or <u>Poison</u> damage. When you _hit_ a creature with an attack with the empowered weapon, the creature takes bonus damage of the type you selected equal to `one roll of your Rite Die`.

#### Maneuvers

**Maneuver Traditions:** Replaced all Maneuver traditions with 6 different ones. Your 4 new ones are: Attentiveness, Comradery, Cunning, Might/Prowess. (You can choose differently, but this keeps your current maneuvers mostly the same).
**Changing Maneuvers because of tradition restrictions:** As a 7th level Soldier-Fighter, you have access to 4 different combat traditions. Your current 7 maneuvers (excluding Blazewing butterfly stance) are part of 5 traditions. That means you have to change at least 1 of those. To keep your build mostly the same, you could do one of the following (or just rebuild from the ground up lol, I just try to keep it simple): **A:** Gain proficiency in the "Might" Tradition, keep <u>lean into it</u>, remove <u>cleaving swing</u> and take [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Might/5e - 1st degree Might/5e - Sweeping Attack (Maneuver)|Sweeping Attack]] instead. It isn't exactly the same, but close. **B:** Gain proficiency in the "Prowess" Tradition, keep <u>Cleaving Swing</u>, remove <u>Lean Into it</u> and take [[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Prowess/5e - 1st degree Prowess/5e - Trip Attack (Maneuver)|Trip Attack]] instead.

**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Attentiveness/5e - 1st degree Attentiveness/5e - Perceptive Stance (Maneuver)|Perceptive Stance]]:** Now an "Attentiveness-Tradition" maneuver. Now works not only for Perception checks, but all checks made with the Search-Action.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Comradery/5e - 1st degree Comradery/5e - Shoulder Check (Maneuver)|Shoulder Check]]:** Now a "Comradery-Tradition" maneuver.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Comradery/5e - 2nd degree Comradery/5e - Back to Back (Maneuver)|Back to Back]]:** Now a "Comradery-Tradition" maneuver.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Cunning/5e - 1st degree Cunning/5e - Iron Will (Maneuver)|Iron Will]]:** Now a "Cunning-Tradition" maneuver. Now grants **ADV** on an INT, WIS, or CHA Save instead of a specific condition.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Cunning/5e - 2nd degree Cunning/5e - Twist the Blade (Maneuver)|Twist the Blade]]:** Now a "Cunning-Tradition" maneuver.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Might/5e - 1st degree Might/5e - Lean into It (Maneuver)|Lean into It]]:** Now a "Might-Tradition" maneuver. Now the effect is active until the **END** of your next turn instead of the start.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of Prowess/5e - 1st degree Prowess/5e - Cleaving Swing (Maneuver)|Cleaving Swing]]:** Now a "Prowess-Tradition" maneuver.
**[[02. Regelwerk/D&D 5e Regelwerk/5e - Combat/5e - Combat Maneuvers/5e - Combat Traditions/5e - Tradition of the Soaring Phoenix/5e - 2nd degree Soaring Phoenix/5e - Blazewing Butterfly Stance (Maneuver)|Blazewing Butterfly Stance]]:** Reduced emanation range from 20 to 15ft. Clarified description and effect durations. Damage changed from 1d4 to PB. Increased Degree from 2 to 3.

### [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 05. Background/5e - Soldier (Background)|Soldier]] Background Changes

**Background Feature:** Replaced the Background Feature "Military Bearing" with an <u>Origin Feat</u>. Military Bearing moved up to the Flavor section of the Background. The choice of origin feats is: [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Origin Feats/5e - Origin Feats Generic/5e - Brawler|🥇Brawler]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Origin Feats/5e - Origin Feats Generic/5e - Savage Attacker|🥇Savage Attacker]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Origin Feats/5e - Origin Feats Generic/5e - Tough|🥇Tough]] or a **Special** Origin Feat.

### [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 04. Culture/5e - Caravanner|Caravanner]] Culture Changes

Removed Trampling Charge

### Current Level progression to match past choices

Wenn sich ein Feature geändert hat, ist es <u>unterstrichen</u>. "TBC" (to be chosen) musst du noch selbst wählen.

| Level | Class Features                                                         | Class Feat                                                                                                                                                                                                                                                                                                                                                                                                                                     | General Feat                                                 | Skill Feat         |
| :---- | :--------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------ |
| 0     |                                                                        | **<u>Soldier Background Origin Feat:</u>** [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Origin Feats/5e - Origin Feats Generic/5e - Alert\|🥇Alert]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Origin Feats/5e - Origin Feats Generic/5e - Savage Attacker\|🥇Savage Attacker]], [[02. Regelwerk/D&D 5e Regelwerk/5e - Character Creation/5e - 03. Feats/5e - Origin Feats/5e - Origin Feats Generic/5e - Tough\|🥇Tough]] or a **Special** Origin Feat. |                                                              |                    |
| 1     | <u>Know your Enemy</u><br><u>Precise Strike</u>,<br><u>Second Wind</u> | <u>Fighting Style: Great Weapon Fighting</u>                                                                                                                                                                                                                                                                                                                                                                                                   | -                                                            | -                  |
| 2     |                                                                        | <u>Campaigner</u>                                                                                                                                                                                                                                                                                                                                                                                                                              | Multiclassing Feat - Novice: Barbarian's Rage                | <u>Nightvision</u> |
| 3     | Fluid Traditions,<br>Advanced Technique,<br><u>Fighting Spirit</u>     |                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                              |                    |
| 4     |                                                                        | <u>TBC</u>                                                                                                                                                                                                                                                                                                                                                                                                                                     | Multiclassing Feat - Novice: Blood Hunter's Crimson Offering | <u>TBC</u>         |
| 5     | Maneuver Specialization,<br><u>Tactical Master</u>                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                              |                    |
| 6     |                                                                        | <u>TBC</u>                                                                                                                                                                                                                                                                                                                                                                                                                                     | Great Weapon Master                                          | <u>TBC</u>         |
| 7     | <u>Consistent Skill</u>                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                              |                    |

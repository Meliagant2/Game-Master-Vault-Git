---
publish: true
created: 2026-07-29T08:29:54.765+02:00
modified: 2026-09-28T11:10:59.774+02:00
published: 2026-09-28T11:10:59.774+02:00
tags:
  - "#Changelog"
  - "#5e"
  - "#Ignorieren"
status: ✅
---

Go back to [[02. Regelwerk/D&D 5e Regelwerk/D&D 5e Regelwerk|D&D 5e Regelwerk]].

#

### Alle 5e Changelogs

```base
filters:
  and:
    - dateitags.containsAll("#5e", "#Changelog")
formulas:
  Changelog: link(file, title)
  titleasname: link(file, title)
properties:
  formula.titleasname:
    displayName: Name
views:
  - type: table
    name: 5e - Changelogs
    order:
      - formula.Changelog
      - datum
      - aenderungen
    sort:
      - property: datum
        direction: ASC
    columnSize:
      formula.Changelog: 114

```

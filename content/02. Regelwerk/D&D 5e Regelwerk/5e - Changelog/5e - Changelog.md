---
publish: true
created: 2026-07-29T08:29:54.765+02:00
modified: 2026-09-23T08:57:34.825+02:00
published: 2026-09-23T08:57:34.825+02:00
tags:
  - "#Changelog"
  - "#5e"
  - "#Ignorieren"
status: ✅
---

# 5e - Changelog

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

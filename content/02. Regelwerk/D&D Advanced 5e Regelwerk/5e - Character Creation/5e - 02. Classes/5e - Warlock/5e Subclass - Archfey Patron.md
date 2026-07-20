---
publish: true
created: 2026-07-20T12:11:02.611+02:00
modified: 2026-07-16T08:22:54.218+02:00
published: 2026-07-16T08:22:54.218+02:00
tags:
  - "#SubClass"
  - "#5e"
socialImage: 98. Diverses/Bilder/Misc/PlaceholderImage.png
image: 98. Diverses/Bilder/Misc/PlaceholderImage.png
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
> > [!metadataoption]- Bild
> >
> > #### Bild
> >
> > | | |
> > |---|---|
> > |**Bild 1**|`INPUT[imageSuggester(optionQuery("")):image]`|
>
> > [!metadataoption]- Info
> >
> > #### Info
> >
> > | | |
> > |---|---|
> > |**Kurzbeschreibung** |  `INPUT[textArea:kurzbeschreibung]`|

# Name

> [!lore] Kurzbeschreibung
> `VIEW[{kurzbeschreibung}][text]`

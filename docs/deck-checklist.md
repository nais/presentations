# Deck checklist

Run through this before you push changes to a deck, and always after an edit that adds, moves or removes slides.

## Story

- [ ] The deck reads as one story. Each new slide belongs to an act, not just to the place where it was added.
- [ ] Every «Overgang» line in the speaker notes leads into the slide that actually comes next.
- [ ] Lists of the slide order (for example in the cover slide's notes) match the deck.
- [ ] Each message has one home. Status, ownership and similar points are not repeated on several slides.

## Facts

- [ ] Every claim marked as running, built or decided is checked against the team that owns the fact.
- [ ] Proposals and directions are labelled as such (chips such as «Forslag», «Visjon», «I dev»).
- [ ] No internal links, issue numbers, NAVidents or cost figures. The repo is public.

## Language

- [ ] One term per thing throughout the deck (for example «nødstopp», «datakategori»).
- [ ] Norwegian text uses «KI», not «AI», and «cluster», not «klynge».

## Render

- [ ] `pnpm check` passes.
- [ ] Changed slides and their neighbours render without overflow, and the footer is visible:

  ```sh
  pnpm shot 2026-11-ki-plattform 12 13 14
  ```

  The screenshots land in `.shots/`.

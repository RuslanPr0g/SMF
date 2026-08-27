---
description: Draft a new archive record with valid front matter and the standard section skeleton.
argument-hint: [specimen|fixture|incident] <one-line description>
---

Draft a new record for The Snowmen Files: $ARGUMENTS

Steps:

1. Determine the series. Specimen → `src/content/specimens/`, fixture →
   `src/content/fixtures/`, incident → `src/content/incidents/`.
2. Find the highest issued number in that directory and take the next one. Numbers are never
   reassigned. If the user named a specific number, verify it is unissued first.
3. Copy the front matter shape from an existing record in the same directory. Required fields
   are defined in `src/content.config.ts` — read it rather than guessing.
4. For a specimen, choose the object class against the criteria in
   `src/content/docs/classes.md`. Coachable is rare; do not reach for it.
5. Write the record. Specimens use: Containment Procedures, Description, and one or more
   Addenda. Incidents use: Summary, Observations, Findings. Fixtures use: Description.
   If observation is thin, file it as `status: pitch` with a short Preliminary Note instead of
   padding a full profile.
6. Run `npm run build` and fix any schema failure.

Hold to the writing standard in `CLAUDE.md` without exception — clinical register throughout,
specimen/subject/entity vocabulary, quantities over adjectives, at most one withheld figure,
and no detail identifying any individual.

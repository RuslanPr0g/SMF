---
title: Filing Procedure
summary: How records are numbered, drafted and submitted to the archive.
order: 2
---

## Numbering

Three series are in use. They do not overlap and numbers are never reassigned.

| Series    | Format     | Covers                                                   |
| --------- | ---------- | -------------------------------------------------------- |
| Specimens | `SMF-###`  | Entities that appear on the floor. Behavioural profiles. |
| Fixtures  | `SMF-F-##` | Standing features of the site.                           |
| Incidents | `INC-###`  | Single sessions in which recorded entities interacted.   |

A designation is issued at the point the record is created, not at the point it is completed.
A record with a designation and no profile is held as preliminary and is listed as such.

## Drafting

Records are held to the following standard. Deviation is grounds for return.

- The register is clinical throughout. No commentary, no emphasis, no aside to the reader.
- The vocabulary is **specimen**, **subject**, **entity**. Not _player_. Not _anomaly_ — the
  site is not the matter under study.
- Withholding is used sparingly. One withheld figure per record; two where the record is long.
- Quantities are preferred to adjectives. _27% slower_ is a finding. _Very slow_ is not.
- Observers observe, file, and hold rank. Observers do not intervene, and records that
  describe intervention are returned.
- Records describe categories of behaviour. They do not describe individuals. Identifying
  detail of any kind — names, handles, recordings from which an account could be identified —
  is removed before filing.

## Submission

1. Create a file in the appropriate directory under `src/content/`.
2. Supply the front matter required by that series. The archive validates it on build; a
   malformed record will not be published.
3. Open a pull request. Records are reviewed against the drafting standard above and against
   the classification criteria.

Contributors without repository access may submit a record through the archive's issue
template, which reproduces the required fields.

# The Snowmen Files

An archive of observation records held at Site-Office. Astro static site, published to GitHub
Pages on every push to `main`.

## Commands

| Command           | Effect                                                  |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Local server                                            |
| `npm run build`   | `astro check` then `astro build`. This is what CI runs. |
| `npm run preview` | Serve `dist/` under the configured base path            |
| `npm run format`  | Prettier write                                          |

## Structure

- `src/content.config.ts` — collection schemas. The spine of the project: id formats, object
  classes and required fields are enforced here and a malformed record fails the build.
- `src/content/{specimens,fixtures,incidents,docs}/` — all prose. Markdown only.
- `src/lib/archive.ts` — collection queries, base-path-aware `url()`, cross-reference
  resolution. Use `url()` for every internal href; never hardcode a path.
- `src/pages/` — routes are generated from the collections. Adding a record means adding one
  markdown file and nothing else.
- `src/styles/tokens.css` — every colour and font. The visual direction is undecided; retheming
  means editing this file alone.
- `astro.config.mjs` — `SITE` and `BASE` constants. Moving to a custom domain is a two-line
  change here.

## Series

Numbers are never reassigned. Check the highest issued number in the relevant directory before
creating a record.

| Series    | Format     | Directory                |
| --------- | ---------- | ------------------------ |
| Specimens | `SMF-###`  | `src/content/specimens/` |
| Fixtures  | `SMF-F-##` | `src/content/fixtures/`  |
| Incidents | `INC-###`  | `src/content/incidents/` |

Issued to date: SMF-001, 004, 007, 012–017; SMF-F-01; INC-001.

Full profiles: SMF-001, SMF-004, SMF-017. All other designations are held as preliminary.

Records with `status: pitch` are designations held without a full profile. They render as
preliminary. Promote one by writing the profile and setting `status: filed`.

## Object classes

Classification describes one thing only: whether behaviour changes under instruction. Not
severity, not frequency, not the observer's opinion.

- **Coachable** — behaviour changes under instruction and the change survives a lost round.
- **Euclid** — behaviour is understood; no reliable trigger has been isolated.
- **Uninstall** — behaviour is stable, understood, and does not change under instruction.

Fixtures are not classified. Full criteria live in `src/content/docs/classes.md`; keep that file
and this list in agreement.

## Writing standard

This is not negotiable and applies to every word of prose in `src/content/`.

- The register is clinical throughout. No exclamation marks, no commentary, no aside to the
  reader, nothing that acknowledges an audience. The subject may be undignified; the record
  may not be.
- Vocabulary is **specimen**, **subject**, **entity**. Never _player_, never _guy_, never
  _anomaly_ — the site is not the matter under study, the entities within it are.
- One withheld figure per record, two in a long one. `[REDACTED]`.
- Quantities over adjectives. False precision carries the register: "27% slower", not "very
  slow".
- Observers observe, file, and hold rank. They do not intervene, signal, or advise.
- Records describe categories of behaviour, never individuals. No names, no handles, no
  detail from which an account could be identified. This is a hard constraint.
- The archive never explains itself. Nothing in `src/content/` or in the site chrome may
  describe the project in outside terms.

## Adding a record

1. Pick the next unissued number in the series.
2. Create the markdown file; copy the front matter from an existing record in that directory.
3. `npm run build` — schema violations fail here rather than in production.

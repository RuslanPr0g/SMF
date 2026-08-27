# The Snowmen Files

Observation records held at Site-Office. Static site built with Astro, published to GitHub
Pages.

## Local

```sh
nvm use          # Node 24, see .nvmrc
npm ci
npm run dev
```

`npm run build` runs the type check and the build — the same command CI and the deploy workflow
run. A record with malformed front matter fails it.

## Deployment

Pushes to `main` build and publish automatically via `.github/workflows/deploy.yml`. Pull
requests run the same build in `.github/workflows/ci.yml`.

Repository settings must have **Pages → Source** set to _GitHub Actions_.

The deployment target lives in `astro.config.mjs` as the `SITE` and `BASE` constants. For a
custom domain: set `SITE` to the domain, `BASE` to `'/'`, and add a `public/CNAME` file.

## Contributing

See `src/content/docs/filing.md` for the filing procedure and drafting standard, and `CLAUDE.md`
for the working conventions of the repository.

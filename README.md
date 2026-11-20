# Applied AI Lab website (archived)

The public site of Weber State's Applied AI Lab as it stood in November 2026,
designed by Dante Smith and kept here as a case study. The Lab's address,
appliedlab.ai, has since moved to another site, so this copy is no longer the
live one.

The landing has a star hero, How it works and the Ask the Lab chat, with a
page for each part of the Lab. Projectum (the signed-in app) and the sign-in
screens are here too, but they and the chat need the Lab's Cloudflare Worker,
which is not part of this repo, so they do not work in this copy.

## Running it

```bash
npm install
npm run dev           # the site on :3000
```

## GitHub Pages

```bash
npm run build:pages   # writes out/
```

`.github/workflows/pages.yml` runs it and deploys on every push to main.
Pages serves a repo under `/<repo name>`, so the workflow sets
`NEXT_PUBLIC_BASE_PATH` to that; `src/lib/site.ts` (`BASE`) and
`next.config.ts` read it. The repo's Settings > Pages > Source must be
"GitHub Actions".

## Copy

Every public string lives in `src/content/copy.ts` and is PROVISIONAL until
Kylar's markup pass. The chat's facts live in `src/content/lab-knowledge.ts`.
Check voice compliance with:

```bash
node scripts/copy-lint.mjs
```

## Layout of things

- `src/content/copy.ts`: all public copy, one file.
- `src/lib/site.ts`: links and the Worker's address.
- `src/lib/account.ts`: the signed-in account, in the browser.
- `src/lib/projects.ts`: Projectum's project rules, pure and tested.
- `src/lib/ask.ts`: the Ask the Lab request, used by the Worker.
- `design/`: the style rules (`STYLE.md`) and reference tokens.
- `src/app/globals.css`: tokens, the `kicker` and `short` helpers, and
  Projectum's surface.

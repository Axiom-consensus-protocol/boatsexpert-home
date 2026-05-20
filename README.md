# Axiom Marine — Demo

Reference implementation by [Axiom Engineering Bureau](https://github.com/Axiom-consensus-protocol).

A dealer-grade marine site: catalog, in-stock boats, equipment shop, and workshop service — built on Next.js 15 App Router with a 1:1 port of a legacy static prototype. The brand is fictional; everything you see is content + structure work, not a live commercial operation.

## Why This Repo Exists

- It shows a controlled static-to-Next migration instead of a single pasted legacy blob.
- Legacy page sections are committed as auditable content units under `content/legacy/`.
- Typed loaders and metadata helpers keep generated content behind a clear boundary.
- Selected surfaces, like `/in-stock`, are native React with typed filters and accessible controls.
- CI and local verification make the repo safe to show as a public code sample.

## Stack

- **Next.js** `15.5` (App Router, Turbopack dev, RSC by default)
- **React** `19`
- **TypeScript** `5` (strict)
- **next/font/google** — Fraunces, Instrument Sans/Serif, Inter, JetBrains Mono, Newsreader
- **next-intl-style i18n runtime** loaded from `public/i18n.js` against a single `i18n.json` source
- **ESLint** + **Prettier** + **GitHub Actions** CI gate (`typecheck` → `lint` → `build`)
- **Public-readiness gate** for accidental secrets, generated-content drift and missing assets
- No external runtime services. All content ships statically from `content/legacy/` and `lib/`.

## Commands

```bash
pnpm install
pnpm dev            # next dev --turbopack
pnpm verify:public  # public code-sample readiness checks
pnpm verify         # verify:public -> typecheck -> lint -> build
pnpm typecheck      # tsc --noEmit
pnpm lint           # eslint .
pnpm format         # prettier --write .
pnpm build          # next build
pnpm start          # next start
```

The legacy content under `content/legacy/` is committed; no preparation step is required to run the site.

## Layout

```
app/                          App Router routes (25 pages)
  layout.tsx                  next/font registration, theme bootstrap, i18n payload
  page.tsx                    Home
  in-stock/                   Live stock listing with client-side filters
  catalog/, shop/, boat/, …   1:1 ports of legacy pages
  manifest.ts, robots.ts,     PWA + crawler + sitemap surface
  sitemap.ts, opengraph-image.tsx

components/
  legacy/ChromeGuard          Shared chrome CSS (extracted from component -> .css)
  legacy/ThemePolish          Theme-mode overrides (extracted -> .css)
  legacy/LegacyChrome         Shared <header>/<footer>
  original/OriginalInfoPage   Reusable page shell for original-source pages
  stock/InStockShop           Filterable client component for /in-stock

content/legacy/
  i18n.json                   String table (loaded at request time, injected as JSON)
  manifest.json               Page manifest
  chrome/                     Shared header + footer HTML snapshots
  pages/<page>/sections/      Per-page section HTML snapshots
  pages/<page>/styles.css     Per-page hand-written CSS
  pages/<page>/scripts.js     Per-page client runtime

lib/
  legacy-content.ts           Reads + caches legacy HTML/CSS/JSON at build time
  original-site-data.ts       Service-page metadata, original product taxonomy
  og.ts                       Default OG title/description/image

public/
  theme.css, chrome.css       Global hand-written CSS loaded via <link>
  i18n.js, legacy-runtime.js  Client-side i18n + legacy interactivity
  assets/                     Page imagery, logos
```

## Migration Model

Pages are imported as **legacy fragments** (HTML strings) wrapped in React components. This lets each page be replaced section-by-section with native React without ever breaking the route surface or visible output:

1. Section HTML lives in `content/legacy/pages/<page>/sections/NN-<name>.html`.
2. `<HtmlFragment>` renders it via `dangerouslySetInnerHTML`.
3. To go native: replace the fragment file's referent with a JSX component of equal markup, then delete the HTML file.

This is the same pattern an engineering bureau uses when bringing a static prototype onto a modern framework without losing pixel parity.

## Public Review Gate

Before showing the repository or deploying a preview, run:

```bash
pnpm verify
```

`verify:public` scans tracked files for private build artifacts, env files, token-like patterns, generated legacy manifest drift and broken `/assets/*` references. The rest of `verify` runs the same TypeScript, lint and production-build checks expected by CI.

## Architecture

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the content pipeline, route boundary and verification model.

## Deploy

Push to a branch with a Vercel project attached, or:

```bash
vercel        # preview
vercel --prod # production
```

`vercel.json` declares the framework; everything else is convention.

## License

This demo is published as a portfolio reference. Imagery and product labels are fictional pseudonyms; no real third-party brands or dealers are represented.

# Architecture Notes

Axiom Marine is a controlled migration of a static marine-dealer prototype into a Next.js App Router application. The important choice in this repository is that the legacy site is not pasted into one giant React component. It is split into auditable fragments, wrapped with shared chrome, and given a route surface that can be replaced gradually with native React.

## Application Shape

- `app/` owns the public route tree, metadata, crawler files and Next.js entrypoints.
- `components/legacy/` renders trusted legacy HTML fragments, shared header/footer chrome and theme polish.
- `components/original/` contains native React pages for original sitemap coverage that does not need a full visual port.
- `components/stock/` contains the native interactive in-stock catalogue surface.
- `lib/legacy-content.ts` is the typed loader for generated fragments.
- `lib/legacy-metadata.ts` maps generated legacy metadata into Next.js metadata.
- `lib/original-site-data.ts` keeps original-source sitemap data in one typed module.

## Legacy Content Pipeline

`scripts/prepare-legacy-content.mjs` is the source-of-truth bridge between static HTML source pages and the App Router application. The generated result is committed under `content/legacy/`, so a fresh clone can run without private folders or preparation steps.

The script:

- reads source pages from the local migration workspace when regeneration is needed;
- removes duplicated header/footer chrome from each body;
- rewrites old relative links into clean application routes;
- extracts page-specific inline scripts into `content/legacy/pages/<slug>/scripts.js`;
- writes top-level body sections into `content/legacy/pages/<slug>/sections/*.html`;
- writes page metadata for typed loading and SEO helpers.

That split keeps the first-pass visual migration faithful while making each page small enough to inspect, regenerate and replace.

## Runtime Boundary

Legacy HTML is rendered through `HtmlFragment` and `LegacyPage`. Shared scripts are loaded once from `app/layout.tsx`; page-specific scripts stay attached to the page they came from. This keeps the migration boundary visible: generated HTML is treated as content, while navigation, metadata, stock filters and route coverage live in typed application code.

## Route Surface

The high-fidelity migrated pages are:

- `/`
- `/boat`
- `/catalog`
- `/product`
- `/shop`
- `/cart`
- `/contact`
- `/services`

The broader sitemap is covered through App Router routes for blog posts, product categories, tags, listings, inventory, policy pages and service detail pages. Legacy `.html`, WordPress-style and Romanian-source paths are normalized in `next.config.ts` through permanent redirects.

## Quality Gates

Use the full verification command before presenting or deploying the repository:

```bash
pnpm verify
```

It runs:

- `verify:public` for tracked private files, accidental token patterns, generated legacy integrity and missing asset references;
- `typecheck` for the TypeScript boundary;
- `lint` for Next/React rules through ESLint flat config;
- `build` for the Next.js production compile.

## Public Code-Sample Boundary

This repository is a code sample for migration architecture and UI implementation quality. The public tree contains no runtime environment requirements, database dependency or private service credentials. The brand, product labels and dealer details are fictionalized so the implementation can be reviewed without exposing a real commercial operation.

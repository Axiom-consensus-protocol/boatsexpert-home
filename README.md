# BoatsExpert Next Port

Next.js 15 App Router port of the static BoatsExpert prototype.

## Stack

- Next.js `15.5.18`
- React `19`
- App Router
- Turbopack for local dev
- Vercel-ready `vercel.json`

## Commands

```bash
pnpm install
pnpm run prepare:legacy
pnpm run dev
pnpm run typecheck
pnpm run build
```

`pnpm run dev` starts `next dev --turbopack`.

## Structure

- `app/` — App Router routes: `/`, `/boat`, `/catalog`, `/product`, `/shop`, `/cart`, `/contact`, `/services`.
- `components/legacy/` — shared renderer for split legacy fragments plus shared header/footer.
- `content/legacy/chrome/` — generated shared header/footer HTML.
- `content/legacy/pages/<page>/sections/` — generated page sections, cut from the source HTML for controlled 1:1 migration.
- `content/legacy/pages/<page>/styles.css` — generated page-specific legacy styles.
- `content/legacy/pages/<page>/scripts.js` — generated trusted page runtime copied from legacy inline scripts.
- `legacy/` — source snapshots copied into this app for auditability.
- `public/assets/` — copied BoatsExpert assets.
- `scripts/prepare-legacy-content.mjs` — regeneration script from `../boatsexpert-home` and `../staging-pages`.

## Migration Rule

During the 1:1 phase, edit source HTML/CSS in `../boatsexpert-home` or `../staging-pages`, then run:

```bash
pnpm run prepare:legacy
pnpm run typecheck
pnpm run build
```

After the visual port is accepted, sections can be replaced one by one with native React components without changing the route surface.

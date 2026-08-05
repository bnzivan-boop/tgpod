# TG Pod — landing

Next.js landing for **TG Pod by True Gamers**, visual language based on the ZEUS-X reference (neon-green accent `#6FFF8B`, Michroma display type, Apple-style glass).

## Commands

```bash
npm install     # install deps
npm run dev     # dev server at http://localhost:3000
npm run build   # static export into out/
```

`/kitchen-sink` — internal gallery of UI primitives and the live type scale.

All copy lives in `lib/content.ts`. Media slots are documented in `public/media/README.md`, brand assets in `public/brand/README.md`.

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

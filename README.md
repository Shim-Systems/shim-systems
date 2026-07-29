# Design-led Astro Starter

[中文说明](README-zh.md) · [Live generic demo](https://design-led-astro-starter.vercel.app/)

A reusable Astro 7 starter for content-driven sites. It includes a documented visual system, switchable theme tokens, MDX blog posts, RSS, sitemap support, and an Elements reference page. The deployed demo is the same generic project in this repository; it contains no personal, company, or production-site data.

![Generic starter preview](public/assets/og-template.png)

## Stack

- Astro 7 and TypeScript
- Tailwind CSS v4 with `@tailwindcss/vite`
- Astro Content Layer, MDX, RSS, and sitemap
- Sharp for local image processing

## Quick start

```bash
pnpm install
pnpm dev
```

The local server runs at `http://localhost:5200`.

## Customize the template

Start with these files. The checked-in values are intentional generic examples, not a real site configuration.

| Location | Change here |
| --- | --- |
| `src/config/site.js` | Site title, canonical URL, SEO metadata, and source link |
| `src/config/themes.js` | Default theme, available theme packs, and semantic tokens |
| `src/styles/global.css` and `src/styles/themes.css` | Base typography and CSS token overrides |
| `src/content/post/` | Sample MDX posts and frontmatter |
| `docs/DESIGN.md` | Visual-system rules for people and coding agents |
| `src/pages/index.astro` | Starter home-page sections and copy |

To use a single fixed theme in a production project, set `showThemeSwitcher` and `persistUserSelection` to `false` in `src/config/themes.js` after choosing `defaultThemeId`.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Generic starter overview |
| `/blog` | Sample MDX article listing |
| `/blog/[slug]` | Individual article |
| `/design` | Browser view of the design documentation |
| `/elements` | Component and token reference |
| `/rss.xml` | RSS feed |

## Project structure

```text
docs/                 Design-system documentation
public/assets/        Replaceable generic images
src/components/       Reusable sections, cards, UI, and widgets
src/config/           Site and theme configuration
src/content/post/     MDX posts
src/layouts/          Shared page layouts and metadata
src/pages/            Astro routes
src/styles/           Global, theme, and article styles
```

## Build and deploy

```bash
pnpm build
pnpm preview
```

Set `PUBLIC_SITE_URL` to the final deployment URL before building. It controls canonical URLs, the sitemap, RSS, and Open Graph metadata. The official demo uses `https://design-led-astro-starter.vercel.app/`; deploy this repository unchanged there for theme-directory review, then create a separate deployment after customizing it for your own site.

## License

[MIT](LICENSE)

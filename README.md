# Lux Tiles & Stones — Website

Marketing site for **Lux Tiles & Stones**, a premium tile & natural stone supplier
serving Greater Los Angeles (residential + commercial). Goal: showcase past projects
and generate quote requests.

Static HTML/CSS/JS — no build step, no framework. Fast, portable, deploy-anywhere.

## Structure

```
index.html            Homepage (all sections; SEO head + LocalBusiness JSON-LD)
assets/
  site.css            Design system — dark luxury palette + gold, responsive, a11y
  site.js             Mobile nav, sticky header, quote-form validation + mailto
  logo.jpg            Brand logo (gold "L" monogram)
  favicon.png         32×32 favicon (generated from the logo)
  apple-touch-icon.png
robots.txt            Allows search + AI crawlers; points to the sitemap
sitemap.xml           URL list (add entries as new pages are built)
llms.txt              Plain-text business summary for AI search engines
netlify.toml          Deploy config (publish repo root, no build)
```

## Local preview

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Design

Faithful to the approved homepage handoff:

- **Palette:** page `#0d0c0a`, gold accent `#c9a55c`, gold gradient CTAs/bands.
- **Type:** Cormorant Garamond (display) + Archivo (body), via Google Fonts.
- **Sections:** sticky header + announcement bar · hero · applications · commercial
  (value band, market cards, trust pills) · projects mosaic · quote + contact · footer.
- Responsive down to mobile (grids collapse, hamburger nav); honors
  `prefers-reduced-motion`; keyboard-operable nav and form.

## SEO / GEO (applied)

Following the local-SEO playbook used across our sites:

- Unique `<title>` + meta description, self-referencing canonical.
- Open Graph + Twitter cards for link previews.
- Geo meta (region / placename / position / ICBM) for Los Angeles.
- `HomeAndConstructionBusiness` + `WebSite` JSON-LD graph, with `areaServed`,
  `hasOfferCatalog`, and Instagram `sameAs`.
- `robots.txt` (welcomes GPTBot / OAI-SearchBot / PerplexityBot / Google-Extended),
  `sitemap.xml`, and `llms.txt` for AI Overviews / ChatGPT / Perplexity.
- Images ship with `alt`, explicit `width`/`height` (no layout shift), and
  `loading="lazy"` once real photos replace the placeholders.

## Placeholders to replace

These are intentionally NOT fabricated — swap in real values before/after launch:

- **Domain** — every absolute URL uses `https://luxtilesandstones.com/`. If the real
  domain differs, update the canonical, OG/Twitter URLs, JSON-LD `url`/`@id`,
  `robots.txt`, and `sitemap.xml`.
- **Photography** — each `.img-slot` block marks where a real photo goes. Every slot
  has a commented `<!-- SWAP: <img …> -->` line showing the exact drop-in markup
  (path, alt text, dimensions). Hero, 4 application cards, and 5 project tiles.
- **Address / hours / license #s** — omitted from the JSON-LD until confirmed by the
  owner. Add `openingHoursSpecification` and a full `PostalAddress` when available.
- **Quote form** — currently opens the visitor's email app with the request
  pre-filled (`mailto:`). For production, wire a real form backend (form service or
  API endpoint + email notification).

## SEO plan

The full strategic SEO plan lives in **[`docs/seo/`](./docs/seo/)** — strategy, site
structure, competitor analysis, content calendar, and a 4-phase implementation roadmap
(produced with the `seo-plan` skill + our Local SEO Playbook). Start with
[`docs/seo/SEO-STRATEGY.md`](./docs/seo/SEO-STRATEGY.md).

## Next steps (SEO playbook)

Highest-leverage additions, in order:

1. Dedicated **service pages** (`/kitchens/`, `/bathrooms/`, `/pool-spa/`,
   `/commercial/`) — one page per intent, each with `Service` + `BreadcrumbList` +
   `FAQPage` schema. Service pages are the #1 local-organic ranking factor.
2. **Service-area pages** for the named cities (Calabasas, Encino, Burbank,
   Pasadena) — unique local content per city, `areaServed` schema.
3. Add each new URL to `sitemap.xml`; keep visible content and schema in sync.
4. Post-launch: Google Business Profile, Search Console + GA4, real reviews only.

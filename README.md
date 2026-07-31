# Lux Tiles & Stones — Website

Marketing site for **Lux Tiles & Stones**, a premium tile & natural stone supplier
serving Greater Los Angeles (residential + commercial). Goal: showcase past projects
and generate quote requests.

Static HTML/CSS/JS — no build step, no framework. Fast, portable, deploy-anywhere.

## Structure

```
index.html            Homepage (all sections; SEO head + LocalBusiness JSON-LD)
kitchens/             Kitchen tile & stone service page (Service + FAQ schema)
bathrooms/            Bathroom tile & stone service page (Service + FAQ schema)
pool-spa/             Pool & spa tile service page (Service + FAQ schema)
feature-walls/        Feature wall tile & stone service page (Service + FAQ schema)
materials/            Materials hub (ItemList) + glass-tile / natural-stone /
                      large-format-tile pages (Service + FAQ schema)
commercial/           Commercial division hub (Service + ItemList + FAQ schema)
service-areas/        Service-area hub (ItemList) + tile-store-los-angeles /
                      tile-store-calabasas city pages (LocalBusiness + FAQ schema)
contact/              Contact + quote form (ContactPage schema)
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

- **Palette (light theme — per the official light handoff):** warm ivory `#faf7f0`
  page background with cream `#f2ecdf` alt sections (Applications, Projects, footer);
  hero, Commercial, and Quote sit on ivory. Text `#2c2519` / headings `#241e13`; gold
  accent `#a8894e`, deepened to `#8a6d35` where it needs contrast on light. Cards
  (market, form, sticky quote, option, related, trust pills) are white with a subtle
  shadow. Gold gradient bands (announcement, commercial, CTA) and buttons are unchanged.
  All colors are CSS variables in `:root`, so the theme is one place to edit.
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

## Build progress (per the SEO plan)

**Phase 1 — done:** homepage + `/kitchens/`, `/bathrooms/` service pages,
`/commercial/` hub, and `/contact/`; each page carries the right schema
(`Service`/`ItemList`/`ContactPage` + `BreadcrumbList` + `FAQPage`), breadcrumbs, and a
conversion path.

**Phase 2 — done:** completed the Applications (`/pool-spa/`, `/feature-walls/`), added
the **Materials** pillar (`/materials/` hub + `glass-tile` / `natural-stone` /
`large-format-tile`), and started **Service Areas** (`/service-areas/` hub +
`/tile-store-los-angeles/` and `/tile-store-calabasas/` with `LocalBusiness` +
`areaServed` schema). Upgraded the nav to Applications + Materials dropdowns and a
Service Areas link, added a footer link nav. City pages are written to be genuinely
local (no doorway templating).

**Phase 3 (pages) — done:** all **Service-Area city pages** now live —
`/tile-store-encino/`, `/tile-store-burbank/`, `/tile-store-pasadena/` (each with its
own local content + `LocalBusiness`/`areaServed` schema) — and all four **commercial
market pages** — `/commercial/supermarkets/`, `/apartments/`, `/hotels/`,
`/shopping-centers/` (`Service` + `BreadcrumbList` + `FAQPage`). Linked from the
service-areas and commercial hubs; **all 21 URLs** are in `sitemap.xml`. The site is now
**21 pages**.

**Next, in order:**

1. Support pages: `/projects/` portfolio (best once real photos land), `/about/`,
   `/faq/`, and the first buyer/material guides (blog).
2. Keep adding each new URL to `sitemap.xml`; keep visible content and schema in sync.
3. **Owner-side / post-launch:** confirm the domain, wire a real form backend, add
   GA4 + Search Console, and set up Google Business Profile + real reviews.

See [`docs/seo/IMPLEMENTATION-ROADMAP.md`](./docs/seo/IMPLEMENTATION-ROADMAP.md) for the
full phased plan.

# Implementation Roadmap — Lux Tiles & Stones

Phased action plan. Each phase lists **owner-side inputs** (things only the client can
provide — photos, address, reviews) separately from **build tasks**, because the
owner-side inputs are the real bottleneck for a new local business.

Status key: ✅ done · ⏳ in progress · ☐ to do

---

## Phase 0 — Already shipped

- ✅ Homepage built to the approved design (dark luxury + gold), responsive, accessible.
- ✅ Technical SEO foundation: unique title/description, canonical, OG/Twitter, geo meta,
  `HomeAndConstructionBusiness` + `WebSite` JSON-LD.
- ✅ `robots.txt` (AI crawlers welcomed), `sitemap.xml`, `llms.txt`.
- ✅ Favicon/apple-touch-icon, `netlify.toml` (asset caching), README.
- ✅ Swap-ready image slots and a `mailto` quote form with validation.

---

## Phase 1 — Foundation (weeks 1–4)

**Build**
- ☐ Ship `/kitchens/`, `/bathrooms/` (Service + BreadcrumbList + FAQPage schema).
- ☐ Ship `/commercial/` hub (ItemList) and `/contact/` (ContactPage).
- ☐ Upgrade primary nav to real page links + Services dropdown (keep home anchors).
- ☐ **Wire a real form backend** (form service or API + email to luxsurfaces661@gmail.com);
  keep `tel:` prominent.
- ☐ Add GA4 + Google Search Console; fire events on form submit and `tel:` click.
- ☐ Resubmit `sitemap.xml`; request indexing for new URLs.

**Owner-side inputs (critical path)**
- ☐ Real photos: hero kitchen + 4 application cards (drop into the `.img-slot` SWAP lines).
- ☐ Confirm the canonical **domain**; then update all absolute URLs (canonical, OG, JSON-LD `@id`/`url`, robots, sitemap).
- ☐ Confirm what can be published: service-area cities, hours, Licensed & Insured wording.
- ☐ Create/claim **Google Business Profile** (video verification) with consistent NAP.

**Exit criteria:** home + 4 pages indexed, analytics live, leads tracked, GBP submitted.

---

## Phase 2 — Expansion (weeks 5–12)

**Build**
- ☐ `/pool-spa/`, `/feature-walls/` (Service + FAQ).
- ☐ `/materials/` hub + `/materials/glass-tile/`, `/natural-stone/`, `/large-format-tile/`.
- ☐ `/projects/` portfolio (ImageGallery) — needs real project photos.
- ☐ `/about/`, `/service-areas/` hub, `/tile-store-los-angeles/`, `/tile-store-calabasas/`, `/faq/`.
- ☐ First 2 guides (buyer + material comparison).
- ☐ Internal-linking pass: hubs ↔ spokes ↔ siblings ↔ city pages ↔ materials.

**Owner-side inputs**
- ☐ Project photos with **real locations** (DTLA, Calabasas, Encino, Burbank, Pasadena).
- ☐ Begin the **review flow**: request a Google review after each delivery (real only).
- ☐ Citations: Yelp, Apple Business Connect, Bing Places, tile/stone directories — consistent NAP.

**Exit criteria:** all core application + material pages live and indexed; first city
pages ranking; ≥5 real reviews; CWV all "Good".

---

## Phase 3 — Scale (weeks 13–24)

**Build**
- ☐ Remaining city pages (Encino, Burbank, Pasadena) — unique local content, no templating.
- ☐ Commercial market pages: supermarkets, apartments, hotels, shopping-centers.
- ☐ 1 guide/month; add `aggregateRating` schema **only once genuine reviews exist**.
- ☐ GEO pass: quotable answers, FAQ expansion, `llms.txt` refresh; monitor AI citations.
- ☐ Performance pass: image formats/sizes, lazy-loading audit, CWV field data in CrUX.

**Owner-side inputs**
- ☐ Sustain reviews + GBP posts; pursue "best of / curated list" placements (#1 AI-visibility factor).

**Exit criteria:** full pillar coverage, multiple city local-pack appearances, growing
organic leads, AI assistants beginning to cite the brand.

---

## Phase 4 — Authority (months 7–12)

- ☐ Thought-leadership + trend content; quarterly refresh of top pages with new
  projects/reviews.
- ☐ Advanced schema (richer collection/product markup).
- ☐ Link building: builder associations, suppliers/manufacturers, local press, community.
- ☐ Continuous optimization from Search Console query data — expand what's working,
  prune/merge what isn't.

**Exit criteria:** durable rankings across clusters, steady lead flow, defensible local
authority.

---

## Dependencies & sequencing

1. **Domain confirmation** unblocks correct canonical/schema URLs — do early.
2. **Form backend** unblocks reliable lead capture — Phase 1.
3. **Real photography** unblocks E-E-A-T, the portfolio, and image SEO — collect continuously.
4. **GBP + real reviews** unblock local-pack + AI visibility — start Phase 1, never fake.
5. Ship pages **only** when they clear the quality gate; add to `sitemap.xml` on publish.

## Resourcing (lightweight)

Static site, no framework — one developer can execute the build tasks; the owner's
inputs (photos, reviews, GBP, domain) are the pacing item. Budget the owner ~1–2 hrs/week
for photos + review requests + GBP posts.

# Content Calendar — Lux Tiles & Stones

Publishing roadmap aligned to `SITE-STRUCTURE.md` and the phased
`IMPLEMENTATION-ROADMAP.md`. Cadence is deliberately modest — **quality gates over
volume**. A page ships only when it clears its word-count/uniqueness gate, has schema
matching visible content, and (ideally) at least one real photo.

Legend: **Core** = money page · **Support** = hub/trust · **Guide** = blog/GEO content.

---

## Phase 1 — Foundation (weeks 1–4)

| Week | Page / asset | Type | Primary keyword | Gate |
|------|--------------|------|-----------------|------|
| 1 | Home (live) — upgrade nav to real links as pages ship | Core | tile & stone supplier Los Angeles | — |
| 1–2 | `/kitchens/` | Core | kitchen backsplash tile Los Angeles | 800w / 100% + Service+FAQ |
| 2–3 | `/bathrooms/` | Core | bathroom tile Los Angeles | 800w / 100% + Service+FAQ |
| 3 | `/commercial/` (hub) | Support | commercial tile supplier Los Angeles | ItemList |
| 3–4 | `/contact/` | Support | contact / quote | ContactPage; wire form backend |
| 4 | GA4 + Search Console + first sitemap resubmit | Tech | — | events on submit + tel click |

## Phase 2 — Expansion (weeks 5–12)

| Week | Page / asset | Type | Primary keyword | Gate |
|------|--------------|------|-----------------|------|
| 5 | `/pool-spa/` | Core | pool tile Los Angeles | 800w / 100% + Service+FAQ |
| 6 | `/feature-walls/` | Core | feature wall tile Los Angeles | 800w / 100% + Service+FAQ |
| 6 | `/materials/` (hub) | Support | tile materials | ItemList |
| 7 | `/materials/glass-tile/` | Core | glass tile Los Angeles | 800w / 100% |
| 8 | `/materials/natural-stone/` | Core | natural stone Los Angeles | 800w / 100% |
| 9 | `/materials/large-format-tile/` | Core | large format tile Los Angeles | 800w / 100% |
| 9 | `/projects/` (portfolio) | Support | tile projects Los Angeles | ImageGallery; **real photos** |
| 10 | `/about/` | Support | (brand / E-E-A-T) | credentials, contact, story |
| 10 | `/service-areas/` (hub) | Support | tile store near me / LA | ItemList |
| 11 | `/tile-store-los-angeles/` | Core | tile store Los Angeles | 600w / 60%+ LocalBusiness |
| 12 | `/tile-store-calabasas/` | Core | tile store Calabasas | 500w / 40%+ areaServed |
| 12 | `/faq/` | Support | (long-tail Q&A) | FAQPage |
| 5–12 | **Guides ×2:** "How to choose a kitchen backsplash", "Glass vs porcelain vs natural stone" | Guide | educational long-tail | feeds AI citations |

## Phase 3 — Scale (weeks 13–24)

| Weeks | Work | Type |
|-------|------|------|
| 13–16 | City pages: `/tile-store-encino/`, `/tile-store-burbank/`, `/tile-store-pasadena/` (unique local content each) | Core |
| 15–18 | Commercial market pages: supermarkets, apartments, hotels, shopping-centers | Core |
| 13–24 | **Guides ×1/month:** large-format handling, pool/waterline tile guide, caring for natural stone, commercial tile durability | Guide |
| ongoing | Add each new URL to `sitemap.xml`; internal-link new pages from hubs + siblings | Tech |
| ongoing | GBP posts, collect real reviews, refresh photos | Off-site |

## Phase 4 — Authority (months 7–12)

| Focus | Work |
|-------|------|
| Thought leadership | Trend/design guides ("2026 tile trends for LA kitchens"), material deep-dives |
| Refresh | Update top pages with new projects, reviews, and FAQ additions from real customer questions |
| Advanced schema | Add `aggregateRating` (once genuine reviews exist), richer `Product`/collection schema |
| Link building | Local directories, supplier/manufacturer partner links, builder associations, press |

---

## Standing cadence (once live)

- **New guide:** ~1–2 per month (never publish thin filler to hit a number).
- **GBP post:** weekly-ish (new project, material spotlight, delivery-area note).
- **Review requests:** after every completed delivery — real reviews only.
- **Content refresh:** revisit each Core page quarterly (new photos, updated FAQ).

## Per-page definition of done (every publish)

1. Unique title (~50–60 chars) + meta description (~150–160).
2. Self-referencing canonical; exactly one keyword-led H1; logical H2/H3.
3. Body clears the word-count + uniqueness gate for its type.
4. Breadcrumb (visible + `BreadcrumbList`); schema matches visible content.
5. Conversion path: visible `tel:` + quote form/anchor.
6. Images: real WebP/AVIF, `alt`, `width`/`height`, `loading="lazy"`.
7. Internal links in (hub/siblings/footer) and out; added to `sitemap.xml` with `lastmod`.
8. Passes mobile + Core Web Vitals spot check.

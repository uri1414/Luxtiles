# SEO Strategy — Lux Tiles & Stones

Strategic plan produced with the `seo-plan` skill (local-service template) and our
Local SEO Playbook. Companion docs: `SITE-STRUCTURE.md`, `COMPETITOR-ANALYSIS.md`,
`CONTENT-CALENDAR.md`, `IMPLEMENTATION-ROADMAP.md`.

> **Mode:** new site, no live analytics or DataForSEO at time of writing. Baselines are
> zero; targets are **planning projections, not guarantees**. Re-baseline once Search
> Console + GA4 have ~28 days of data.

---

## 1. Discovery

| | |
|---|---|
| **Business** | Lux Tiles & Stones — premium tile & natural stone **supplier** (glass tile blends, natural stone, large-format surfaces) |
| **Model** | Wholesale/builder pricing + **job-site delivery**; effectively a Service-Area Business across Greater LA |
| **Audiences** | (1) Homeowners & designers (residential: kitchens, baths, pool/spa, feature walls); (2) Builders/GCs & commercial buyers (supermarkets, apartments, hotels, shopping centers) |
| **Service area** | Greater Los Angeles — named cities: Los Angeles/DTLA, Calabasas, Encino, Burbank, Pasadena (expand deliberately) |
| **Primary goal** | Qualified leads: quote-form submissions + phone calls to Danny (818) 334-0960 |
| **Secondary** | Brand searches, Instagram follows (@luxtiles_sales), repeat builder relationships |
| **Differentiators** | Wholesale pricing, job-site delivery, 1,000+ projects supplied, one partner for residential **and** commercial, insured |
| **Constraints** | No confirmed street address / hours / license #s / reviews yet — must not be fabricated; photography pending; quote form is front-end `mailto` (no backend yet) |

**KPIs:** organic leads (form + call), local-pack visibility for "tile store {city}",
keyword rankings for the application/material/city clusters, indexed pages, Core Web
Vitals pass rate, and AI-answer citations (ChatGPT/Perplexity/AI Overviews).

---

## 2. Positioning for search

**"The LA tile & stone partner that delivers — wholesale pricing, residential to
commercial."** We do not try to out-authority national distributors on head terms.
We win **application + material + city long-tail**, **commercial-supplier intent**, and
**page quality** (speed, schema, genuinely-local content). See `COMPETITOR-ANALYSIS.md`.

---

## 3. Architecture (summary)

Full detail in `SITE-STRUCTURE.md`. Four pillars — **Applications**, **Materials**,
**Commercial**, **Service Areas** — each a hub linking to spokes, one page per intent,
clean folder URLs, breadcrumbs everywhere, quality gates enforced (service page 800w /
100% unique; city page 500–600w / 40–60%+ unique; ⚠️30 / 🛑50 city-page cap).

---

## 4. Content strategy

**Page types & counts (target end-of-year):**

| Type | Count | Notes |
|------|------:|-------|
| Home | 1 | Live |
| Application pages | 4 | kitchens, bathrooms, pool-spa, feature-walls |
| Material pages | 3 + hub | glass, natural stone, large-format |
| Commercial hub + market pages | 1 + 4 | supermarkets, apartments, hotels, shopping-centers |
| Service-area city pages | 4–6 | LA, Calabasas, Encino, Burbank, Pasadena (+ as earned) |
| Projects / About / FAQ / Contact | 4 | portfolio is the top E-E-A-T asset |
| Blog / guides | 6–10 | material education, buyer guides (feeds GEO) |

**E-E-A-T plan:** real project photos with real LA locations; "1,000+ projects"
context; named contact (Danny); Licensed & Insured; supplier-authored material guides;
consistent NAP; **real reviews only** via a post-delivery review flow. Never publish
invented ratings, testimonials, credentials, or an address.

**Blog/resource topics (GEO-friendly):** glass vs porcelain vs natural stone; how to
choose a kitchen backsplash; large-format tile pros/cons & handling; pool/waterline
tile guide; caring for natural stone; commercial tile durability & maintenance;
"tile buying for a remodel in {city}".

---

## 5. Technical foundation

- **Hosting:** static site (already), Netlify or similar CDN; immutable asset caching
  (configured in `netlify.toml`); HTTPS; clean folder URLs.
- **Performance / Core Web Vitals targets:** LCP < 2.5s, INP < 200ms, CLS < 0.1 on
  mobile. Levers: self-host or `font-display: swap` (done) for fonts; real images as
  **WebP/AVIF** with explicit `width`/`height` (no CLS) and `loading="lazy"` (markup
  already stubbed at each `.img-slot`); `fetchpriority="high"` on the hero image;
  minimal JS (already vanilla, deferred).
- **Schema per page type:**

  | Page | JSON-LD |
  |------|---------|
  | Home | `HomeAndConstructionBusiness` + `WebSite` (live) |
  | Application/Material/Commercial-market | `Service` + `BreadcrumbList` + `FAQPage` |
  | Hub | `ItemList` |
  | City page | `LocalBusiness`/`Service` w/ `areaServed` + `BreadcrumbList` |
  | Projects | `ImageGallery` / `CreativeWork` |
  | Contact | `ContactPage` |

  Visible content **must** match schema. Add `PostalAddress`, `openingHoursSpecification`,
  and (only when genuine) `aggregateRating` when the owner confirms them.
- **AI-search readiness:** `llms.txt` (live), crawler-friendly `robots.txt` (live),
  quotable service/pricing-range statements, FAQ blocks, factual material guides.
- **Mobile-first:** already responsive; keep tap targets ≥44px and forms thumb-friendly.

---

## 6. KPI targets

Baselines are **0** (new site). Ranges assume steady execution of the roadmap; treat as
directional planning goals, and re-set after 28 days of real data.

| Metric | Baseline | 3 Month | 6 Month | 12 Month |
|--------|:---:|---|---|---|
| Organic sessions / mo | 0 | 150–400 | 600–1,500 | 2,000–5,000 |
| Organic leads / mo (form + call) | 0 | 3–8 | 10–25 | 25–60 |
| Ranking keywords (top 20) | 0 | 25–60 | 100–200 | 300–600 |
| Local-pack presence ("tile store {city}") | none | 1–2 cities | 3–4 cities | 4–6 cities |
| Indexed pages | 1 | 10–14 | 18–24 | 25–35 |
| Core Web Vitals (mobile pass) | n/a | all "Good" | maintained | maintained |
| Real Google reviews | 0 | 5–15 | 20–40 | 50+ |

**Biggest external levers (not code):** collecting **real project photography** and
building a **Google Business Profile + real reviews**. These gate both rankings and
conversion more than any on-page change.

---

## 7. Risks & mitigation

| Risk | Mitigation |
|------|------------|
| Thin/duplicate city pages → doorway penalty | Enforce uniqueness gate; real local specifics; ship a city page only when it clears 40–60%+ unique |
| Fabricated reviews/credentials/address | Hard rule: placeholders until owner confirms; real reviews only |
| National-chain domain strength on head terms | Compete on long-tail + commercial + city intent, not head terms |
| No form backend (leads lost) | Wire a real backend early (Phase 1/2); keep `tel:` prominent meanwhile |
| Photography delay stalls E-E-A-T | Prioritize photo collection; placeholders are swap-ready so pages can ship and be upgraded |
| Single point of contact (one phone) | Add form backend + email routing; consider hours in schema |

---

## 8. Success criteria

- Each phase (see `IMPLEMENTATION-ROADMAP.md`) ships measurable, indexed pages that
  clear the quality gates.
- Every page passes the Playbook per-page checklist (unique title/description,
  canonical, one H1, matching schema, breadcrumb, conversion path, CWV).
- Leads are tracked (GA4 events on form submit + `tel:` click) so ROI is attributable.

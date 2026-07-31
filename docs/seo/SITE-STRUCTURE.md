# Site Structure — Lux Tiles & Stones

URL hierarchy, content pillars, and internal-linking plan. Built from the
`local-service` template and our Local SEO Playbook (one page per search intent;
visible content must match schema).

> **Business model note:** Lux Tiles & Stones is a **supplier + delivery** business
> serving Greater Los Angeles, not a walk-in-only store tied to one address. That
> makes it effectively a **Service-Area Business (SAB)**. Per Google's June 2025 SAB
> rule, we name **specific cities** (never "all of California" / "entire metro").

---

## 1. URL hierarchy

Clean, folder-style URLs (trailing slash, lowercase, hyphenated). `[P#]` = build phase.

```
/                                     Home — tile & stone supplier, Greater LA           [P1 ✓ live]
│
├── /kitchens/                        Kitchen backsplash & counters tile/stone           [P1]
├── /bathrooms/                       Bathroom wall, floor, shower tile & stone           [P1]
├── /pool-spa/                        Pool & spa waterline + feature tile                 [P2]
├── /feature-walls/                   Feature / accent wall tile & stone                  [P2]
│
├── /commercial/                      Commercial division hub (ItemList)                  [P1]
│   ├── /commercial/supermarkets/                                                         [P3]
│   ├── /commercial/apartments/                                                           [P3]
│   ├── /commercial/hotels/                                                               [P3]
│   └── /commercial/shopping-centers/                                                     [P3]
│
├── /materials/                       Product hub (ItemList)                              [P2]
│   ├── /materials/glass-tile/                                                            [P2]
│   ├── /materials/natural-stone/                                                         [P2]
│   └── /materials/large-format-tile/                                                     [P2]
│
├── /projects/                        Portfolio / gallery (ImageGallery)                  [P2]
│
├── /service-areas/                   Service-area hub (ItemList)                         [P2]
│   ├── /tile-store-los-angeles/                                                          [P2]
│   ├── /tile-store-calabasas/                                                            [P2]
│   ├── /tile-store-encino/                                                               [P3]
│   ├── /tile-store-burbank/                                                              [P3]
│   ├── /tile-store-pasadena/                                                             [P3]
│   └── … (add only as genuinely-unique content exists — see quality gates)
│
├── /about/                           Story, credentials, E-E-A-T signals                [P2]
├── /faq/                             Consolidated FAQ (FAQPage)                          [P2]
└── /contact/                         Contact + quote (ContactPage)                       [P1]
```

The homepage already exists and links to `#applications`, `#commercial`, `#projects`,
`#quote/#contact` as on-page anchors. As the standalone pages above ship, the primary
nav upgrades from anchors to real page links (with the anchors kept for the homepage
overview), and a **Services / Materials / Areas dropdown** is added.

---

## 2. Content pillars

Four pillars, each a hub that links down to spokes and across to siblings:

| Pillar | Hub | Spokes | Primary intent |
|--------|-----|--------|----------------|
| **Applications** | (home `#applications`) | kitchens, bathrooms, pool-spa, feature-walls | "tile for X" residential |
| **Materials** | `/materials/` | glass-tile, natural-stone, large-format-tile | "X tile Los Angeles" product |
| **Commercial** | `/commercial/` | supermarkets, apartments, hotels, shopping-centers | "commercial tile supplier" B2B |
| **Service areas** | `/service-areas/` | per-city pages | "tile store {city}" geo |

---

## 3. Keyword → page map

One page owns one intent cluster (no two pages target the same head term).

| Page | Primary keyword | Secondary / long-tail |
|------|-----------------|------------------------|
| `/` | tile and stone supplier Los Angeles | luxury tile Los Angeles, wholesale tile LA, tile delivery Los Angeles |
| `/kitchens/` | kitchen backsplash tile Los Angeles | glass tile backsplash, kitchen tile installer LA, quartzite kitchen |
| `/bathrooms/` | bathroom tile Los Angeles | shower tile LA, bathroom floor tile, natural stone bathroom |
| `/pool-spa/` | pool tile Los Angeles | waterline tile, glass pool tile, spa tile LA |
| `/feature-walls/` | feature wall tile Los Angeles | accent wall tile, fireplace stone wall, lobby feature wall |
| `/commercial/` | commercial tile supplier Los Angeles | large-format commercial tile, builder tile pricing LA |
| `/commercial/hotels/` | hotel tile supplier Los Angeles | hospitality tile, hotel lobby tile |
| `/commercial/apartments/` | apartment tile supplier Los Angeles | multifamily tile, property renovation tile |
| `/materials/glass-tile/` | glass tile Los Angeles | glass mosaic tile, glass tile blends |
| `/materials/natural-stone/` | natural stone Los Angeles | marble tile LA, travertine, limestone, quartzite slabs |
| `/materials/large-format-tile/` | large format tile Los Angeles | large format porcelain, slab tile, gauged porcelain panels |
| `/tile-store-calabasas/` | tile store Calabasas | Calabasas tile & stone, kitchen tile Calabasas |
| `/tile-store-encino/` | tile store Encino | Encino tile & stone |
| `/tile-store-burbank/` | tile store Burbank | Burbank tile supplier |
| `/tile-store-pasadena/` | tile store Pasadena | Pasadena tile & stone |
| `/projects/` | tile projects Los Angeles | (portfolio — ranks on image + brand queries) |

---

## 4. Internal linking rules

- **Global nav** (every page): Applications ▾, Materials ▾, Commercial, Projects, Service Areas ▾, Contact + a persistent "Request a Quote" CTA.
- **Breadcrumbs** on every non-home page, visible **and** as `BreadcrumbList` schema (Home › Section › Page).
- **Hub → spoke:** each hub lists and links every spoke; each spoke links back to its hub.
- **Sibling "Related" block:** each application/material page links to 2–3 siblings.
- **Cross-pillar:** application pages link to the relevant material page (e.g. `/kitchens/` → `/materials/glass-tile/`) and to the matching city pages.
- **Every page** carries a conversion path: a `tel:` link to (818) 334-0960 + the quote form/anchor.
- **Footer:** compact link list to all hubs + top city pages.

---

## 5. Quality gates (from the local-service template)

| Page type | Min words | Unique % | Required schema |
|-----------|-----------|----------|-----------------|
| Service / application / material page | 800 | 100% | `Service` + `BreadcrumbList` + `FAQPage` |
| Primary city page (Los Angeles) | 600 | 60%+ | `LocalBusiness` (geo) + `BreadcrumbList` |
| Service-area city page | 500 | 40%+ | `Service`/`LocalBusiness` w/ `areaServed` + `BreadcrumbList` |
| Hub page | — | — | `ItemList` |

**Location-page count gates:** ⚠️ warn at **30+** city pages · 🛑 hard stop at **50+**.
Current plan tops out at ~6 city pages — comfortably safe. **Never** ship a city page
that is another city's copy with the name swapped (doorway-page penalty). Each needs
real local specifics: neighborhoods, nearby projects (DTLA, Calabasas, Encino, Burbank,
Pasadena), delivery notes.

---

## 6. Sitemap growth

`sitemap.xml` currently lists `/` only. Add each URL **as it ships** (not before —
no 404s or thin stubs in the sitemap), with an accurate `<lastmod>`. Keep priorities:
home `1.0`, hubs `0.9`, service/material pages `0.8`, city pages `0.7`, projects `0.7`.

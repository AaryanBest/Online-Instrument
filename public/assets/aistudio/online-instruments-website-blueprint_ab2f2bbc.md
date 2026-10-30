# Online Instruments — Website Blueprint and AI Build Prompt

Prepared for: Syntrix (Aaryan)
Source: `OI_AV_Overview.pdf` (31 slides, client overview deck)
Type of site: B2B showcase. No e-commerce, no product catalogue, no checkout.

---

## How to use this file

1. **Part 1–3** are the thinking: what the site is, what goes on it, how it is built.
2. **Part 4** is the full design system (colour, type, layout, motion).
3. **Part 5** is the hero section, fully specified.
4. **Part 6 and 7** are the complete About page and Services page, with real copy.
5. **Part 8** is the **master prompt**. Paste it into your AI coding tool first. Then use the **phase prompts** in Part 9, one at a time.
6. **Part 10** is the checklist of things to confirm with the client before anything goes public.

Every number and name in this file comes from the PDF. Where something is missing from the PDF, it is marked `[CLIENT TO CONFIRM]`. Do not let the AI invent those.

---

# PART 1 — Strategy

## 1.1 What the company is

Online Instruments is an audio-visual system integrator (AVSI), established 2006, headquartered in Bengaluru. It has three businesses:

| Business | What it is |
|---|---|
| AV system integration | The core: consultancy, design, supply, implementation, support |
| LOGIC | The in-house brand |
| Manufacturing | Custom manufacturing (for example the custom patch panels and speaker brackets in the procurement report) |

## 1.2 What the website has to do

The client does not want to sell products. The site has one job: **make a facilities head, IT head or procurement lead at a large company believe this firm can deliver 1,000 rooms without drama, then get them to start a conversation.**

Primary goal: enquiries from enterprise buyers and project-management consultancies (CBRE, JLL, Cushman & Wakefield and similar are already in the client list).

Secondary goals:
- Give existing and prospective clients a reference they can forward internally.
- Support RFP responses (certifications, process, case studies in one place).
- Help with hiring and partner credibility.

## 1.3 Audience

| Who | What they look for |
|---|---|
| Corporate facilities and workplace-tech heads | Proof of scale, process, post-install support |
| IT heads | Standards, certifications, network and security credibility |
| Project management consultancies | Delivery process, documentation, handover quality |
| OEM and distributor partners | Partner standing, awards, certification depth |
| Candidates | Size, offices, Great Place to Work certification |

## 1.4 What makes this company different (this is the story to tell)

These are the real differentiators in the PDF. The site's copy should lean on them, not on generic "innovative solutions" language (which the PDF itself uses, and which we will rewrite).

1. **Scale with repeat clients.** Rooms deployed: Siemens 2,000, Amazon 1,500+, Micron 1,500+, Deloitte 1,000+, TCS 1,000+, Google 1,000+, Amdocs 1,000+.
2. **Rack staging.** They build and test the racks before they reach site. Claimed results: 50% fewer onsite man hours, 100% accuracy between simulation and implementation, 70% faster RMA turnaround, 20% better deployment quality, 30% shorter delivery and handover.
3. **Commissioning with real instruments.** AQ-AV CQT process using named tools (Fluke 62 MAX, NTi XL2 with M4260, Klein CL700, Murideo Fox & Hound, Fluke DSX-5000 cable certifier) and published video, audio and cable test reports.
4. **A written 12-step delivery process.** From site coordination to attic stock handover.
5. **Support that is structured.** Helpdesk, L1/L2 engineers, escalation to service manager, OEM RMA, monthly and quarterly reporting.
6. **Certified people.** AVIXA CTS, AQ-AV CQT, PSNI Global Deployment, PMP, Dante Level 3, Q-SYS, Crestron DMC, Cisco CCNA, Extron, Kramer, Shure and more.

---

# PART 2 — Information architecture

## 2.1 Sitemap

```
/                         Home
/about                    About
/services                 Services (all five, one long page)
/solutions                Solutions: the six kinds of space
/projects                 Project index
/projects/[slug]          One case study per client (10)
/how-we-work              Delivery process, quality, support
/contact                  Contact and offices
/legal/privacy            Privacy policy
```

Navigation (top bar, left to right): **About, Services, Solutions, Projects, How we work**, then a single button: **Contact us**.

Footer: office list grouped by region, certifications strip, privacy link.

Why `/how-we-work` is its own page: the SOP, rack staging, CQT reports and incident flow are the strongest proof in the deck and they do not belong inside the services copy. Procurement teams will screenshot this page.

## 2.2 Page-by-page content map (what goes where, from which slide)

| Page | Sections | PDF slides used |
|---|---|---|
| Home | Hero, what we do in one paragraph, solutions strip, three project highlights, how we work teaser, client wall, partner wall, awards, contact band | 1, 2, 5, 6, 7, 8–12, 17–20, 29 |
| About | Story, three businesses, 3Rs approach, people, offices, certifications, recognition | 2, 3, 4, 5, 29 |
| Services | Lifecycle (5 services), value-added services, support model | 5, 17–28 |
| Solutions | Six space types, industries, spaces deployed chart | 5, 6, 7 |
| Projects | 10 case studies | 8–12 |
| How we work | 12-step SOP, hardware tracking, site updates, change and risk, rack staging, CQT, incident and support flow | 13–28 |
| Contact | Form, regional offices | 4 |

---

# PART 3 — System design

## 3.1 Stack decision

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | SEO matters for a B2B site; static generation; image optimisation |
| Styling | **Tailwind CSS with a custom token layer (CSS variables)** | Fast, but the tokens in Part 4 override the defaults so it does not look like stock Tailwind |
| Content | **Typed content files in `/content` for v1** (TypeScript or JSON), moved to **Sanity** later if the client wants to edit | The site is mostly static. No CMS overhead until it is needed |
| Animation | **CSS and the Web Animations API first.** GSAP only for the hero line-draw if needed | Keep JS light |
| Forms | Route handler + **Resend** (email) + Cloudflare Turnstile | No database needed for v1 |
| Hosting | **Vercel** | Preview URLs for client review |
| Analytics | Plausible or GA4 (client's choice) | Lightweight |
| Fonts | `next/font` self-hosted | No layout shift |

Not used on purpose: a database, auth, a state library, a UI kit like shadcn defaults, any carousel library.

## 3.2 Architecture

```
Browser
  │
  ▼
Vercel Edge / CDN ── static HTML for all pages (SSG)
  │
  ├── /app (Next.js routes)
  │      reads typed content from /content at build time
  │
  ├── POST /api/contact
  │      validate (zod) → Turnstile verify → Resend → email to client inbox
  │
  └── /public (optimised images, hero media)
```

All pages are statically generated. The only server code is the contact endpoint.

## 3.3 Folder structure

```
/app
  layout.tsx
  page.tsx                      Home
  about/page.tsx
  services/page.tsx
  solutions/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  how-we-work/page.tsx
  contact/page.tsx
  api/contact/route.ts
  sitemap.ts
  robots.ts
/components
  layout/    Header, Footer, MobileNav
  hero/      Hero, FloorplanDraw
  sections/  ServiceRow, SolutionRow, ProjectRow, ProcessLine, OfficeList,
             CertStrip, ClientWall, PartnerWall, AwardList, ContactBand
  ui/        Button, TextLink, Field, Figure
/content
  company.ts          name, founded, HQ, headcount, offices
  services.ts         the five services
  solutions.ts        the six spaces
  projects.ts         ten case studies
  process.ts          SOP steps, incident steps, change and risk steps
  certifications.ts
  awards.ts
  partners.ts
  clients.ts
/lib
  seo.ts              metadata + JSON-LD helpers
  validators.ts       zod schemas
/styles
  tokens.css          all design tokens
/public
  /projects /hero /logos /awards
```

## 3.4 Data models

```ts
type Project = {
  slug: string;            // "micron"
  client: string;          // "Micron Technologies"
  sector: "Corporate" | "Banking" | "Healthcare" | "Manufacturing";
  countries: string[];     // ["India","Singapore","Malaysia","Taiwan"]
  rooms: string;           // "1,500+" (string on purpose)
  value?: string;          // "$9 million" — hidden unless client approves
  summary: string;         // two sentences
  scope: string[];         // ["Zoom Business Rooms","Training rooms",...]
  services: ("Consultancy"|"Design"|"Supply"|"Implementation"|"Support")[];
  image?: string;
  showLogo: boolean;       // client approval flag
};

type Service = {
  slug: string; name: string; oneLine: string;
  whatWeDo: string; youGet: string[]; proof?: string;
};

type Office = { city: string; region: "India"|"Middle East"|"Rest of Asia"|"USA"; hq?: boolean };
```

`value` and `showLogo` are flags because the client may not want dollar figures or big-brand logos public. The UI must work without them.

## 3.5 Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | LCP under 2.5s on mobile 4G. Hero media under 200 KB on first paint. No layout shift |
| Accessibility | WCAG 2.2 AA. Visible keyboard focus. All images with real alt text. `prefers-reduced-motion` respected |
| SEO | Per-page title and description, Organization JSON-LD, `sitemap.xml`, canonical URLs, clean slugs |
| Responsive | 360px to 1920px. Designed mobile-first for text, desktop-first for the hero composition |
| Security | Honeypot + Turnstile, rate-limited contact route, no secrets in client code |
| Analytics events | `contact_submit`, `cta_click_projects`, `case_study_view` |

---

# PART 4 — Design system

The client's deck already has a visual identity: a teal logo, flowing teal wave lines, teal section labels, and a three-colour pillar graphic (teal, blue, purple). We keep the teal and the wave idea, but we do not copy the deck's gradient-title style ("Service Proposal" in green-to-blue). That belongs in a slide, not a website.

## 4.1 Design concept in one line

**An engineer's site-file made readable.** It should feel like a well-kept project binder: floor plans, room numbers, tested results, a person's initials on a sign-off. Real artefacts over decoration.

The deck gives us the artefacts: a floor plan with room IDs (`CONF-LG-98 – 04.213`), a hardware tracking sheet, test reports with pass/fail, rack photographs, a 12-step process line. We use those.

## 4.2 Colour tokens

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#10201F` | Text, dark surfaces |
| `--paper` | `#F6F8F7` | Page background (cool off-white, not cream) |
| `--teal` | `#007A75` | Primary accent, links, key lines (passes AA on paper) |
| `--signal` | `#2CCFC0` | The wave lines, highlights on dark only |
| `--slate` | `#54625F` | Secondary text |
| `--rule` | `#D5DDDB` | Dividers, table lines |
| `--logic` | `#4F81BD` | Only for the LOGIC business |
| `--make` | `#7F52A0` | Only for Manufacturing |
| `--status-ok` / `--status-wait` | `#2E8B57` / `#E8A317` | Only in test-result and tracking visuals |

Rules:
- Teal is the only accent on regular pages. Blue and purple appear **only** where the three businesses are shown together, matching the deck.
- Dark sections use `--ink` (`#10201F`, which is green-tinted on purpose), not generic near-black.
- No gradient washes as decoration. The only gradient allowed is the wave-line fade, because it is the brand.

## 4.3 Typography

One family: **Instrument Sans** (variable, with width axis), self-hosted. Fallback: `system-ui, -apple-system, "Segoe UI", sans-serif`.

| Role | Size (desktop) | Weight | Notes |
|---|---|---|---|
| Hero headline | 72/76px | 600, slightly condensed width | Left aligned, max 14 words |
| H1 | 52/56px | 600 | |
| H2 | 36/42px | 600 | |
| H3 | 22/30px | 600 | |
| Body | 18/30px | 400 | Max line length 68 characters |
| Small | 14/22px | 500 | Captions, table cells |
| Figures | Same family, `font-variant-numeric: tabular-nums` | 600 | Room counts, values |

Rules (these are what stop it looking generated):
- **No all-caps labels above headings.** No eyebrow tags.
- **No single highlighted word in a headline.**
- **Sentence case everywhere**, including buttons.
- No arrows appended to links. Underline links; they are links.
- No monospace for "technical feel". Use tabular numerals instead.

## 4.4 Layout and shape

- 12-column grid, 1200px max content width, generous 96–128px vertical rhythm between sections.
- **Left-aligned text throughout.** Centre alignment only for the footer sign-off.
- **Rows and ledgers, not card grids.** Services, projects and offices are shown as ruled rows (a thin line, a name on the left, detail on the right), the way a spec sheet reads. Maximum one card-like component on the whole site: the contact form panel.
- Border radius is deliberate by role: `0` for photos and tables, `4px` for inputs and buttons, full pill only for status chips in test reports. No uniform rounded cards.
- Shadows: none on content. A single soft shadow only on the sticky header once scrolled.
- Photography is full-bleed or edge-aligned with the grid, never in floating rounded frames.

## 4.5 Imagery rules

| Use | Source |
|---|---|
| Room photos | The client's real rooms (meeting room, training room, command centre, customer experience centre, signage, auditorium from slide 5). Ask for originals; the PDF versions are low resolution |
| Rack and cable photos | Slides 19–22. These are the best images in the deck. Use them large |
| Floor plan | Slide 15 (deployment progress). Redraw it as clean SVG for the hero |
| Test reports | Slides 24–26. Reproduce as real HTML tables, not screenshots, so they are crisp and searchable |
| Client logos | Only where `showLogo` is approved. Render all in single-colour ink |
| Stock photos | Not allowed. If a real photo is missing, use a plain `--rule` block with the room name, not a fake image |

## 4.4 Motion

Motion is deliberate and rare.

1. **One orchestrated moment:** the hero (Part 5).
2. **Responsive-to-action motion only elsewhere:** accordion expand, form states, mobile nav.
3. **Not allowed:** fade-up on every section, hover-lift on every card, parallax, scroll-jacking, counters that count up.
4. Everything respects `prefers-reduced-motion` (static final state).

## 4.5 Voice and copy rules

- Write like a project engineer talking to a client: plain verbs, specific nouns, real numbers.
- Say "rooms", "racks", "handover", "commissioning". Do not say "cutting-edge", "seamless", "holistic", "empower", "next-generation", "unlock", "elevate", "synergy".
- Every claim is tied to something in the PDF (a number, a client, a process, a certificate).
- Headlines are statements, not slogans.
- Buttons say what happens: "See our projects", "Talk to our team", "Send enquiry".

---

# PART 5 — The hero section (spec)

## 5.1 Concept

Visitors see the most characteristic object in this business: **a floor plan with rooms marked for AV**, the thing the team actually works from (slide 15). On load, the plan draws itself once in `--teal` linework. As it finishes, the plan cross-fades into a real photo of a finished room, with the room ID label from the plan (`CONF-LG-98 · 04.213` style) staying as a small caption on the photo. Plan → finished room is the whole company story in two seconds.

This replaces the usual "gradient headline + stat counters" hero.

## 5.2 Copy

**Headline (H1):**
> We design, supply, install and support the AV in your workplaces.

**Supporting paragraph (max 2 lines):**
> Online Instruments has been building meeting rooms, training rooms, command centres and auditoriums since 2006, for Amazon, Google, Micron, Siemens and Deloitte among others.

**Primary button:** See our projects
**Secondary text link:** Talk to our team

**Under the buttons, one plain sentence in small text (not a stat strip):**
> Based in Bengaluru, with 18 offices across India, Asia, the Middle East and the USA.

(18 offices = 9 India + 2 Middle East + 4 Rest of Asia + 3 USA. Recount if the client changes the list.)

## 5.3 Layout (desktop, 1440 wide)

```
┌───────────────────────────────────────────────────────────────────────────┐
│ [logo]            About  Services  Solutions  Projects  How we work [Contact us]│
│                                                                           │
│  We design, supply, install               ┌───────────────────────────┐   │
│  and support the AV in your               │                           │   │
│  workplaces.                              │   floor plan draws in,    │   │
│                                           │   then becomes a photo    │   │
│  Online Instruments has been building     │   of the finished room    │   │
│  meeting rooms, training rooms, ...       │                           │   │
│                                           │                           │   │
│  [ See our projects ]  Talk to our team   │                           │   │
│                                           └───────────────────────────┘   │
│  Based in Bengaluru, with 18 offices...      caption: CONF-LG-98 · 04.213 │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

- Text column: 5 of 12 columns, vertically centred, left aligned.
- Media: starts at column 6 and **bleeds off the right edge** of the viewport. Full height of the hero minus header.
- A faint set of teal wave lines (the brand motif, 10–14 lines, 20% opacity) sits behind the text column only, never over the photo.

## 5.4 Behaviour

| Step | Time | What happens |
|---|---|---|
| 1 | 0ms | Text and header are visible immediately (no fade-in). Floor plan SVG begins stroke-draw |
| 2 | 0–1400ms | Walls draw first, then room outlines, then the AV zones fill with a light teal tint |
| 3 | 1400–1900ms | Cross-fade to the room photo; caption stays |
| 4 | after | Static. No loop |

- Implementation: SVG `stroke-dasharray` / `stroke-dashoffset` animation, CSS only.
- Reduced motion: show the final photo state immediately.
- If JS or the animation fails, the photo is the default state.
- Mobile: the media drops below the text, full width, 4:3. The draw animation still plays once.

## 5.5 Assets needed

1. One high-resolution photo of a finished room (meeting room or command centre) — from the client.
2. A clean floor plan of the same room or floor, redrawn as SVG. Slide 15 is the reference.
3. Fallback if neither arrives in time: draw the plan as SVG and use a flat `--rule` block with the room name as the "photo". Do not use stock.

---

# PART 6 — About page (complete)

Page title: **About Online Instruments**
Meta description: *Online Instruments is a Bengaluru-headquartered AV system integrator, established 2006, with 18 offices and 527 people across India, Asia, the Middle East and the USA.*

## 6.1 Section A: Opening

**H1:** Twenty years of building rooms that people use every day.

> Online Instruments was established in 2006 and is headquartered in Bengaluru. We are an audio-visual system integrator: we work out what a space needs, design it, supply the equipment, install it, test it, and look after it afterwards.
>
> Over the years we have worked with some of the largest companies in banking, technology, healthcare and manufacturing. In 2024–25 alone we deployed more than 2,500 spaces.

(2,518 total from slide 6. Keep "more than 2,500".)

**Layout:** H1 left (columns 1–7). Photo of the team or a finished room on the right, bleeding off the edge. No stats strip.

## 6.2 Section B: Three businesses

**H2:** One company, three businesses

> **AV system integration** is the core of what we do. It covers consultancy, design, supply, installation and ongoing support for meeting rooms, training rooms, command centres, customer experience centres, digital signage and auditoriums.
>
> **LOGIC** is our in-house brand. `[CLIENT TO CONFIRM: what LOGIC products are, one sentence]`
>
> **Manufacturing** lets us build what is not available off the shelf. Custom patch panels and speaker-mount brackets in our recent project tracking are examples. `[CLIENT TO CONFIRM: wider manufacturing scope]`

**Layout:** three tall vertical panels side by side, echoing the three-book graphic in the deck. Colours: teal (AV), blue (LOGIC), purple (Manufacturing). This is the one place all three accent colours appear together. Each panel has a name at the top and the paragraph below. On mobile they stack.

## 6.3 Section C: How we work

**H2:** How we approach every project

The deck uses "3Rs". We keep them, but say what they mean:

> **Relationships.** Most of our largest clients have come back for more rooms, more countries and more years. Amazon, Micron, Google, TCS, Deloitte, Siemens and Amdocs each have more than 1,000 rooms with us.
>
> **Relevance.** We design around the room, the building and the way the client's teams actually work, not around a product list.
>
> **Results.** We commission and test every room against a written checklist and hand over documentation. The reports are in the [How we work](/how-we-work) section.

**Layout:** three ruled rows (word on the left in H3, paragraph on the right). Not three icon cards.

## 6.4 Section D: People

**H2:** 527 people in four teams

| Team | People |
|---|---|
| Projects | 394 |
| Supply management | 80 |
| Technology and solutions engineering | 32 |
| Programming | 21 |

> We were certified as a Great Place to Work in India for 2024–25 and again for 2025–26.

(Great Place to Work badge on the deck reads "Jul 2025 – Jul 2026". Slide 29 says "back-to-back 2024-25 and 2025-26". Confirm exact wording before publishing.)

**Layout:** a single horizontal bar split into four proportional segments, labelled directly (no legend), drawn in teal tints. Beneath it, one paragraph. Do not use a donut chart.

**Certifications sub-block (H3: "What our engineers are certified in"):**

AVIXA CTS · AQ-AV CQT · PSNI Global Deployment · PMP · Dante Certified Level 3 · Crestron DMC-E 4K and DMC-D 4K · Q-SYS Certified · BSS (Harman) · Cisco CCNA · Microsoft Certified Technology Specialist · Kramer Certified AV Specialist · Extron Certified AV Associate · Shure Audio Institute

Display as a simple two-column list of names with the certifying body in slate. Use official logos only if the client has permission; otherwise text is fine and more honest.

## 6.5 Section E: Where we are

**H2:** Offices

| Region | Cities |
|---|---|
| India | Bengaluru (headquarters), Ahmedabad, Chennai, Hyderabad, New Delhi, Kochi, Kolkata, Mumbai, Pune |
| Middle East | Dubai, Riyadh |
| Rest of Asia | Kuala Lumpur, Manila, Singapore, Taipei |
| USA | San Francisco, New Jersey, Phoenix |

**Layout:** a ruled table. Optionally a simple dot map, but only if it is drawn cleanly. Skip the map rather than use a clip-art globe.

## 6.6 Section F: Standards and credentials

**H2:** Standards we hold

- ISO 9001:2015, certified by Bureau Veritas
- CRISIL rating `[CLIENT TO CONFIRM: rating and year]`
- Member of the PSNI Global Alliance
- D&B D-U-N-S number 65-008-6072
- ISO 27001 (information security), ISO 45001 (health and safety), ISO 14001 (environment): **certification in progress** per the deck. Show as "in progress" or leave out until awarded. Do not show as certified.

## 6.7 Section G: Recognition

**H2:** Awards and recognition

| Year | Award |
|---|---|
| 2026 | Project award, Connected Meeting Spaces, Inavation Awards |
| 2025 | Best Customer Experience Centre Project, Inavate APAC Awards |
| 2025 | Pioneering AV Manufacturer of the Year, AV ICN Expo |
| 2025 | Technology Excellence and Best Sales Performance, Wesco Anixter |
| 2025 | Wins at System Integration India Awards (also 2019 and 2023) |
| 2025 | APAC Top Video Competitive Award (2024), Jabra APAC Partner Conference |
| 2024 | Best Partner in Corporate Award, Harman International |
| 2023 | Best Partner Award, Micron |
| 2022 | Best Corporate Project Award, Inavate APAC Awards |

Layout: this table, with the trophy photos as a single horizontal strip of 5–6 images above it (square crops, no frames, no hover effects).

*Check the year on the Inavation, Jabra and Wesco items against the client. The deck is inconsistent in how it lists them.*

## 6.8 Section H: Partners

**H2:** Technology partners

> We work with the manufacturers our clients already trust: Crestron, Biamp, Samsung, Sony, Panasonic, LG, Extron, Epson, Cisco, Shure, Harman, Kramer, Zoom, Poly, Chief, Bose, Neat, QSC, Logitech, Sennheiser, Avocor, Belden, Jabra, Meyer Sound, Audio-Technica, Blackmagic Design, Panduit and more. Our distributor relationships include Wesco Anixter, Ingram Micro, Redington, Brightstar, CDW and others.

**Layout:** a single ink-coloured logo wall (all logos converted to one colour) in two groups, Manufacturers and Distributors. Logos on a plain `--paper` background with generous spacing. No marquee or auto-scroll.

## 6.9 Section I: Closing band

**H2:** Planning a project?
> Tell us about the spaces, the locations and the timeline. We will come back with questions and a proposed approach.

Button: **Talk to our team**

---

# PART 7 — Services page (complete)

Page title: **Services**
Meta description: *Consultancy, design, supply, implementation and support for audio-visual systems, from a single AV system integrator.*

## 7.1 Intro

**H1:** One team from first conversation to ongoing support

> We take responsibility for the whole life of an AV system. You can hire us for one stage, but most of our clients give us all five.

**Layout:** a thin horizontal line across the page with five labelled stops (Consultancy, Design, Supply, Implementation, Support and service). It is a sticky in-page navigation: clicking a stop scrolls to that section, and the current stop is highlighted. This is a real sequence, so a sequence graphic is justified here. No numbers needed; the order and the line carry it.

## 7.2 The five services

Each is a full-width ruled row: name on the left (columns 1–4), content on the right (columns 5–12). Same structure each time: a paragraph, a short "You get" list, and one real example from the case studies.

### Consultancy

> We start by understanding the real problem: how people use the space today, what is not working, and what a better version looks like. We look for opportunities clients have not spotted yet, then shape AV solutions that are built for the purpose, can scale, and fit the organisation's wider plans.

**You get**
- A clear brief for each space type
- Recommendations tied to how your teams work
- A plan that can be repeated across many sites

**Example:** Deloitte USI. We work with Deloitte to set AV standards across 1,000+ rooms in India.

### Design

> We design AV systems around the physical room, the technical requirements and the way the client's operations run. Before anything is bought or installed, the system is simulated and drawn, so the plan and the finished room match.

**You get**
- AV simulation and drawings
- Rack elevations and cable schedules
- Heat load (BTU) calculations based on actual equipment placement

**Example:** Siemens. Design consulting led into 2,000 rooms across India.

### Supply

> We supply tested, tailored products and deliver on time. Hardware is tracked line by line from order to site, so everyone can see what has arrived, what is pending, and when the rest is coming.

**You get**
- A live hardware procurement and tracking report (make, model, quantities, delivery status, ETA)
- Dead-on-arrival checks and RMA handling
- Custom-made items where needed, such as patch panels and mounting brackets

**Example:** the hardware tracking report from a current project (shown as a live table on the How we work page).

### Implementation

> We install, configure, program and test. We keep to the timeline, document everything, and stay within the agreed budget. Each project follows a written 12-step procedure that runs from site coordination to attic stock handover.

**You get**
- Site coordination and progress reporting room by room
- Installation, dressing and cabling to a consistent standard
- Programming and control interfaces
- Commissioning against the AQ-AV CQT checklist
- Demo, training and handover documentation

**Example:** Google. Lifecycle replacement of 1,000+ rooms across Bangalore, Hyderabad, Singapore and Kuala Lumpur, with limited working hours and careful decommissioning of old systems.

### Support and service

> Our work does not end at handover. We provide helpdesk support, maintenance, and remote or on-site service. Every incident gets a number, an engineer, a closure report, and a place in the monthly or quarterly report.

**You get**
- Helpdesk by phone, email or ticket
- L1 and L2 support engineers, with a service manager for escalation
- OEM and RMA handling for major faults
- Managed services, including remote programming and configuration
- Monthly or quarterly incident reports

**Example:** Micron. Our AQ-AV CQT certified engineers handle managed services for programming, configuration and quality checks in Singapore and Taiwan.

## 7.3 Value-added services

**H2:** What we do beyond the standard scope

Three ruled rows, each with one real photo.

**Rack staging.** We build, wire and test racks in our own facility before they go to site.
Measured against the traditional on-site process:
- 50% fewer onsite man hours
- 100% match between simulation and implementation
- 70% faster RMA turnaround
- 20% better deployment quality
- 30% shorter delivery and handover timelines

Show these as a simple paired bar chart (traditional vs rack staging) drawn in SVG, with direct labels. Use the rack photos from slides 19–21.

**Commissioning and testing (AQ-AV CQT).** Every room is tested with calibrated instruments, and the results are recorded in a report.
- Video: display focus and illumination, laptop resolution, viewing distance and image-height ratio
- Audio: ambient noise, codec volume, RT60 reverberation, noise criteria
- Cable: certified link tests with full margin results

Show an excerpt of each report as a real HTML table, with pass and fail marked by colour **and** text. Tools named underneath: Fluke 62 MAX, NTi XL2 with M4260, Klein Tools CL700, Murideo Fox & Hound, Fluke DSX-5000.

**Managed services.** Remote configuration and monitoring across multiple countries. Examples from the case studies: Amdocs (Israel, UK, USA, Philippines, Singapore), Persistent (USA, Malaysia), Micron (Singapore, Taiwan).

## 7.4 Support model

**H2:** How a support request is handled

A real sequence, so a numbered flow is correct here.

1. **Incident reported** by helpdesk, email or phone. An incident number is generated for tracking.
2. **Engineer assigned.** An L1 or L2 engineer is assigned and reaches the location within the agreed time.
3. **Service addressed.** The incident is serviced and the client acknowledges closure. For a major fault, an RMA is raised with the manufacturer, the part is replaced, and the ticket is concluded.
4. **Service report.** The engineer shares a summary of the incident and a service closure report.
5. **Monthly or quarterly reporting.** Reports for all incidents are generated and shared.

Beside it, a smaller escalation line (from the support flow chart): L1 engineer → L2 technical engineer → service manager → design team, programmers, or OEM/RMA process.

## 7.5 Solutions we offer

**H2:** Spaces we build

Six rows linking to `/solutions`: Meeting rooms, Training rooms, Command centres, Customer experience centres, Digital signage, Auditoriums. One real photo each, from slide 5.

## 7.6 Closing band

**H2:** Not sure which stage you need?
> Tell us where your project is. We can start at any point in the lifecycle.

Button: **Talk to our team**

---

# PART 8 — MASTER PROMPT (paste this first)

> Copy everything between the lines into your AI coding tool.

---

```
You are acting as a senior front-end developer and designer at a small
studio. You are building the marketing website for Online Instruments, a
B2B audio-visual system integrator headquartered in Bengaluru (est. 2006).

THE SITE IS A SHOWCASE. No products for sale, no cart, no checkout. Its job
is to make enterprise buyers trust the company and start a conversation.

THE ONE RULE ABOVE ALL OTHERS
The site must not look AI-generated. It should look like a human designer
and developer made deliberate, specific choices for this company. When in
doubt, choose the plainer, more specific option over the decorative one.

STACK
- Next.js (App Router) + TypeScript
- Tailwind CSS, but override the defaults with the design tokens below.
  Do not ship stock Tailwind-looking UI.
- Content lives in typed files in /content. Pages read from there at build
  time. No CMS and no database in v1.
- Contact form: POST /api/contact, validated with zod, Cloudflare
  Turnstile, sent by Resend.
- Fonts via next/font. Images via next/image.
- Static generation for every page.

PAGES
/  /about  /services  /solutions  /projects  /projects/[slug]
/how-we-work  /contact  /legal/privacy

DESIGN TOKENS
Colours:
  --ink #10201F, --paper #F6F8F7, --teal #007A75, --signal #2CCFC0,
  --slate #54625F, --rule #D5DDDB,
  --logic #4F81BD (LOGIC business only),
  --make #7F52A0 (Manufacturing business only),
  status: #2E8B57 (ok), #E8A317 (waiting) — test/tracking visuals only.
Type: ONE family, Instrument Sans (variable). Sentence case everywhere.
  Hero 72/76, H1 52/56, H2 36/42, H3 22/30, body 18/30, small 14/22.
  Max line length 68ch. Tabular numerals for figures.
Layout: 12-col grid, 1200px max, 96-128px vertical rhythm. Left-aligned.
  Use ruled rows and ledgers instead of card grids. Border radius by role:
  0 for photos and tables, 4px for inputs and buttons, pill only for
  status chips. No shadows on content.

THINGS YOU MUST NOT DO
- No eyebrow labels above headings. No ALL-CAPS labels.
- No single highlighted/italic/coloured word inside a headline.
- No "01 / 02 / 03" numbering unless the content is a real sequence
  (the 12-step process and the support flow are; services and values are
  not).
- No identical rounded cards in a grid. No gradient backgrounds. No glow.
- No fade-up-on-scroll on every section. No hover-lift cards. No count-up
  numbers. No parallax. No auto-scrolling logo marquee.
- No arrows appended to links or buttons. No middle-dot meta strings.
- No monospace "tech" labels.
- No stock photos. If a real image is missing, use a flat --rule block with
  a caption and flag it in a TODO list.
- Banned words in copy: seamless, cutting-edge, next-generation, holistic,
  empower, unlock, elevate, synergy, innovative solutions, world-class,
  state-of-the-art.

MOTION
Exactly one orchestrated moment: the hero (a floor plan draws itself in
teal SVG linework over ~1.4s, then cross-fades to a photo of a finished
room). Elsewhere, motion only responds to user action (accordion, form
states, mobile menu). Respect prefers-reduced-motion everywhere.

CONTENT RULES
- Use ONLY facts from the content files I provide. Never invent numbers,
  clients, awards, certifications, quotes or dates.
- Anything marked [CLIENT TO CONFIRM] stays as a visible TODO comment in
  the code and renders nothing public.
- Client contact persons from the source deck are NEVER shown on the site.
- Project dollar values and client logos render only if the project's
  `value` / `showLogo` fields are set.
- ISO 27001, 45001 and 14001 are "in progress" and must not be shown as
  achieved.
- Write like a project engineer: plain verbs, specific nouns, real numbers.

QUALITY FLOOR
Responsive 360-1920px, WCAG 2.2 AA, visible keyboard focus, semantic HTML,
alt text on every image, LCP under 2.5s on mobile, per-page metadata,
Organization JSON-LD, sitemap.xml and robots.txt.

HOW TO WORK
1. Before writing code, write a short design plan: colour, type, layout
   concept (with an ASCII wireframe of the hero), and principles. Then
   review it against the brief. If any part is a generic default you would
   use for any company site, change it and say what you changed.
2. Build in the phases I give you, one phase per message. Stop after each
   phase and wait for me.
3. Make precise, minimal edits when changing existing code. Do not rewrite
   whole files unless necessary; when you do rewrite one, give me the
   complete file for copy-paste.
4. Explain root causes when fixing bugs.
5. Never run deploy, publish or push commands. Ask me for explicit
   confirmation first, step by step.
6. Keep a /NOTES.md with decisions made and open TODOs.

Confirm you understand, summarise the plan in under 150 words, and wait for
Phase 1.
```

---

---

# PART 9 — Phase prompts (send one at a time)

### Phase 1: Foundation

```
Phase 1: foundation. Set up the Next.js project, Tailwind with the design
tokens as CSS variables in /styles/tokens.css, Instrument Sans via
next/font, the layout with Header (sticky, shadow only after scroll),
Footer (offices by region, privacy link), and MobileNav. Create empty
routes for every page. Create the /content files with the TypeScript types
from the blueprint (company, services, solutions, projects, process,
certifications, awards, partners, clients) and fill them ONLY from the
data I paste below. Do not build any page sections yet.

[paste Part 3.4 data models and the data tables from Parts 6 and 7]
```

### Phase 2: Hero

```
Phase 2: home page hero only. Implement exactly this spec:
[paste Part 5]
Build the floor plan as a clean inline SVG (walls, ~10 rooms, a few AV
zones marked), animated with stroke-dasharray CSS. Cross-fade to the room
photo at the end. Reduced-motion users see the final state immediately.
Text is visible from the first frame. Mobile stacks media below text.
Show me the ASCII wireframe first, then the code.
```

### Phase 3: Shared section components

```
Phase 3: build the reusable section components: ServiceRow, SolutionRow,
ProjectRow, ProcessLine (supports a true numbered sequence), OfficeList,
CertStrip, ClientWall, PartnerWall (single-colour logos, no marquee),
AwardList, ContactBand, Figure (image + caption). Ruled-row layouts, not
cards. Show a throwaway /dev page that renders each with real content so I
can review them.
```

### Phase 4: About

```
Phase 4: the About page. Implement every section in Part 6 exactly,
including the three-panel businesses graphic, the proportional workforce
bar (no donut), the office table and the awards table.
[paste Part 6]
Copy is final unless marked [CLIENT TO CONFIRM].
```

### Phase 5: Services

```
Phase 5: the Services page. Implement every section in Part 7, including
the sticky five-stop lifecycle line, the five ruled service rows, the
rack-staging paired bar chart (SVG, direct labels), the three test-report
excerpts as real HTML tables, and the numbered support flow.
[paste Part 7]
```

### Phase 6: Solutions, Projects, How we work

```
Phase 6: build /solutions, /projects, /projects/[slug] and /how-we-work.
Projects: ten case studies from /content/projects.ts. Each project page:
client, sector, countries, rooms, a two-sentence summary, scope list, which
of the five services were provided. Hide value and logo unless flagged.
How we work: the 12-step SOP as a real sequence, hardware tracking table,
site-status table, change management and risk management flows, rack
staging, CQT, incident flow.
```

### Phase 7: Home page sections

```
Phase 7: complete the home page below the hero: one-paragraph description,
solutions strip (six rows), three project highlights (Siemens, Micron,
Google), how-we-work teaser, client wall, partner wall, awards, contact
band. No stat counters. Keep it short: this page should point to the other
pages, not repeat them.
```

### Phase 8: Contact, SEO, QA

```
Phase 8: contact page and form with zod validation, honeypot, Turnstile,
Resend. Error messages must say what is wrong and how to fix it. Then
metadata for every page, Organization JSON-LD, sitemap, robots. Then run
this QA list and report any failure: keyboard-only navigation, 360px
layout, reduced motion, contrast, alt text, LCP, no banned words, no
client contact names anywhere in the codebase.
```

### Phase 9: Anti-AI review

```
Phase 9: critique the whole site as a design lead. Check each item and
fix failures with minimal edits:
- Any eyebrow label, all-caps label, or single highlighted word?
- Any grid of identical rounded cards?
- Any fade-up on scroll, hover-lift, count-up or parallax?
- Any arrow glyphs on links, middle-dot strings, or monospace labels?
- Any numbered markers on content that is not a sequence?
- Any banned word?
- Is there exactly ONE memorable moment (the hero), with everything else
  quiet?
Remove one decorative element before you finish.
```

---

# PART 10 — Confirm with the client before launch

| # | Item | Why |
|---|---|---|
| 1 | **Contact persons** listed in the case studies (e.g. Ms. Yaru Chen, Mr. Alvin How, Mr. Manish K and others) | Private people at client companies. They are not used anywhere in this blueprint, and should not be published |
| 2 | **Project values** ($1M to $9M) | Many clients forbid disclosure. Controlled by the `value` flag |
| 3 | **Client logos** (Amazon, Google, Microsoft, Citi, HSBC, etc.) | Brand permission. Controlled by `showLogo`. Fall back to text names |
| 4 | **Revenue chart** (US$40M, 60M, 87M, 117M; 2025–26 is marked as a projection) | Commercial information. Recommend leaving it off the public site |
| 5 | **ISO 27001, 45001, 14001** | Deck says "in progress" |
| 6 | **Great Place to Work wording** | Badge reads Jul 2025–Jul 2026; award slide says 2024-25 and 2025-26 |
| 7 | **"1,500+ rooms"** appears for both Amazon and Micron; **Siemens 2,000** | Confirm each figure and wording ("rooms", "spaces", "globally") |
| 8 | **Deck typos** | "Engeneer ni g", "Progarmming", "Ackwnodgement", "Incase", "Conguration" |
| 9 | **LOGIC and Manufacturing** | The deck names them but does not describe them. Need one paragraph each |
| 10 | **Photos and video** | The PDF images are low resolution. Request originals, plus the rack-staging video referenced on slide 18 |
| 11 | **CRISIL rating** | Deck shows the logo only. Need the rating and year |
| 12 | **Leadership, careers, news** | Not in the deck. Ask whether they want any of these. They are left out of the sitemap for now |
| 13 | **Contact details** | Email, phone and address per office are not in the deck |
| 14 | **Hardware report and site update screenshots** | These come from real client projects. Check that names and room data are safe to show, or anonymise |

---

*End of blueprint.*

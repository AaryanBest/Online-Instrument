# Online Instruments: Home Page Remake Prompt

Scope: **home page only** (new hero + every section below it). About, Services and the other pages stay as they are.

---

## Why the first version felt pale (so the AI doesn't repeat it)

The first blueprint was deliberately restrained: cool off-white paper, thin rules, no motion, ruled rows everywhere. That works for the About and Services pages (they are reading pages) but it is wrong for a home page. The home page has to *feel* like an AV company: light, sound, screens, signal. Problems to fix:

1. Nearly every section is white or pale grey. No colour confidence.
2. Zero motion and zero hover feedback, so the page feels dead and dated.
3. Repeating same-size boxes and rows. That is the "AI layout" look.
4. Company names are typed as text. Real brands show their logos.

New direction: **saturated colour, real motion, varied layouts, logos instead of names.** Still no stock-template look.

---

## The new point of view

The first version looked at the company as an *engineering file*. This version looks at it as **signal**.

Their whole brand is already a wave: the flowing teal lines on the deck cover. An AV integrator's job is moving signal (video, audio, data) from where it starts to where people experience it, reliably, in every room. The home page should feel like that signal travelling through it.

The business insight to build the story on: their biggest clients (Amazon, Google, Micron, Siemens, Deloitte, TCS) do not need one good room. They need **the same good room in every office, in every city, 1,000+ times**. Consistency at scale is the product. The first version buried this. The new home page leads with it.

---

## Colour system (home page theme)

Create these as home-scoped tokens (`.theme-home`) so other pages don't break. Keep the existing tokens for About and Services.

| Token | Hex | Role |
|---|---|---|
| `--abyss` | `#062B2B` | Deep teal-black. Hero and dark sections |
| `--teal` | `#00857E` | Saturated brand teal. Full-bleed sections (white text passes AA on this) |
| `--aqua` | `#2CE0C8` | Highlights, line glows, hover fills (on dark only) |
| `--electric` | `#2F7BFF` | Second brand colour, from the deck's green-to-blue gradient |
| `--signal-green` | `#00F07A` | Start of the wave gradient. Tiny accents only |
| `--violet` | `#7F52A0` | Manufacturing / LOGIC moments only |
| `--coral` | `#FF5A36` | Action colour: primary CTA and the cable-orange from the rack photos |
| `--sun` | `#FFC845` | Very small status highlights |
| `--mist` | `#E6F6F3` | Light section background (tinted, not grey) |
| `--white` | `#FFFFFF` | Text on dark, light sections |

**Wave gradient** (the one allowed gradient family): `#00F07A → #2CE0C8 → #00A8FF`, used on wave strokes only, never as a background wash.

Rules:
- **No more than one pale section in a row.** The page should read as a rhythm: dark → bright → colour → light → dark → coral.
- At least **four full-saturation sections** (abyss, teal, electric-blue or coral).
- Text contrast AA minimum. Do not put white text on `--aqua` or `--signal-green`.

## Typography (home page)

Two clearly different families:
- **Display: Anybody** (variable, use the wide axis, weight 700-800) for the hero, section statements and big figures. It is wide and broadcast-like, which fits AV.
- **Body and UI: Instrument Sans** (already installed).

Rules: sentence case, no all-caps labels, no eyebrow labels, no single coloured word in a headline. Figures use tabular numerals. Check Anybody for legibility at small sizes; use it only 28px and above.

---

## Logos instead of names (applies to the whole home page)

Wherever the page would name a client, partner, certification body or distributor, **show the logo, not the name.**

Implementation rules:

1. Create one `<Logo id="amazon" />` component and one `/content/logos.ts` registry (`id`, `file`, `label`, `group`, `optical scale`).
2. Logos live in `/public/logos/*.svg` (SVG preferred, transparent PNG at 2x as fallback). **Never hotlink at runtime.**
3. **Sourcing order:** (1) the client's brand folder, (2) each company's official press or brand page, (3) extract from the client's PDF slides 6 and 10 as a last resort. Do not use random web images.
4. Normalise every logo to the same optical height and weight (wide wordmarks smaller height than square marks). Provide an `optical scale` value per logo.
5. **Default state: single colour** (white on dark sections, ink on light sections) via CSS mask or filter. **Hover: the logo's true colours fade in** (200ms).
6. The company name appears only as `aria-label` / `alt`, not as visible text. If a logo file is missing, render a flagged placeholder in development and list it in `/NOTES.md`. Never silently fall back to visible text.
7. Logos link to the matching project page where one exists.

Logo sets to prepare:
- **Clients:** Amazon, Google, Microsoft, Deloitte, Siemens, Micron, Tata Consultancy Services, Cisco, Accenture, Cognizant, Capgemini, Oracle, IBM, Persistent, Amdocs, Carelon, Citi, HSBC, Barclays, Mizuho, UBS, AMD, Qualcomm, Honeywell, Schneider Electric, AstraZeneca.
- **Technology partners:** Crestron, Biamp, Samsung, Sony, Panasonic, LG, Extron, Epson, Cisco, Shure, Harman, Kramer, Zoom, Poly, Bose, QSC, Logitech, Sennheiser, Jabra, Neat, Avocor, Belden, Meyer Sound, Audio-Technica.
- **Distributors:** Wesco Anixter, Ingram Micro, Redington, Brightstar, CDW.
- **Certifications and standards:** ISO 9001, Great Place to Work, PSNI Global Alliance, AVIXA CTS, AQ-AV CQT, PMP, Dante, Q-SYS, Crestron DMC, Cisco CCNA, Extron, Kramer.

> Client approval is still pending for using client logos publicly. Keep the `showLogo` flag per client; a client with the flag off is simply not shown.

---

## Motion system

Motion is a feature of this page. It should feel alive without feeling like a template.

**Tools:** CSS first (transitions, `@keyframes`, scroll-driven animations where supported). **GSAP + ScrollTrigger** for the pinned lifecycle section and the hero timeline. Canvas 2D for the waves. No three.js, no Lottie, no smooth-scroll hijack library.

**Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for entrances, `cubic-bezier(0.65, 0, 0.35, 1)` for transitions. Durations 180-250ms for hover, 600-900ms for entrances.

**Reveal styles (use a mix, never the same one twice in a row):**
- Clip-path wipe (images and big statements)
- Line-draw (SVG paths, underlines)
- Mask slide-up per line of a headline
- Number roll (digits scroll like a counter)
- Scale-in from a wave edge

**Hover and interaction inventory (must all exist):**

| Element | Behaviour |
|---|---|
| Primary button (coral) | Fill sweeps in from the left in a darker coral, label shifts 2px, slight press-down on active |
| Secondary link | Underline draws left to right; reverses on leave |
| Logos | Single colour to true colour fade |
| Solution panels | Panel expands, photo zooms from 1.05 to 1.0, tint overlay lifts, title slides up |
| Project posters | Background colour deepens, logo scales 1.06, room-count figure rolls, a cursor-follow "View project" tag appears |
| Header | Hides on scroll down, returns on scroll up; active link has a drawn underline |
| Map offices | Pulse ring on hover, city label appears |
| Treemap tiles | Tile brightens, tooltip with rooms and sector |
| Cursor | Custom soft-ring cursor on desktop only over interactive areas; native cursor everywhere else |
| Focus | Strong visible focus ring (2px aqua outline + offset) |

**Rules:**
- Animate only `transform`, `opacity` and `clip-path`. No layout-property animation.
- Pause canvas and timelines when off-screen (IntersectionObserver).
- `prefers-reduced-motion`: waves static, reveals instant, hover colour changes stay, no parallax or movement.
- No auto-scroll that the visitor can't pause. No scroll-jacking beyond the one pinned section.

---

## Hero section (new)

### Concept: "The wave turns into the room"

A full-bleed `--abyss` hero. Across it flow ~28 fine wave lines in the brand gradient (green to aqua to blue), exactly the family of the deck cover, but alive: they drift continuously and **bend toward the cursor** (on touch devices they respond to scroll instead). On the right, a real photo of a finished room (looping muted video if the client provides one) sits **inside a mask shaped like the wave's upper curve**. The wave lines pass in front of and behind the image edge so the photo feels like it is emerging out of the signal.

### Copy

**Headline (Anybody, wide, ~84px desktop):**
> The same great room, in every office you have.

Alternates the AI may offer, to be chosen by me (do not pick silently):
- "One standard for every meeting room, in every country."
- "1,000 rooms. One standard."

**Supporting line (Instrument Sans, 20px, max 2 lines):**
> Online Instruments designs, builds and supports meeting rooms, training rooms, command centres and auditoriums for the world's biggest companies.

**Primary button (coral):** See our projects
**Secondary link:** Talk to our team

### Immediately under the hero (same dark background)

A single row of **white client logos only**: Amazon, Google, Microsoft, Deloitte, Siemens, Micron, TCS, Cisco. Slow horizontal drift (60s loop), pause on hover, true colour on hover. No caption text above it.

### Layout (desktop 1440)

```
┌──────────────────────────────────────────────────────────────────────┐
│ [logo]        About  Services  Solutions  Projects  How we work  [Contact] │
│  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ │  <- animated wave lines
│  The same great room,                    ╭──────────────────────────╮ │
│  in every office                         │  room photo / video      │ │
│  you have.                               │  masked by wave curve    │ │
│                                          │                          │ │
│  Online Instruments designs, builds ...  ╰──────────────────────────╯ │
│                                                                      │
│  [ See our projects ]  Talk to our team                              │
│  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ │
├──────────────────────────────────────────────────────────────────────┤
│   amazon   google   microsoft   deloitte   siemens   micron   tcs ... │  <- logos only
└──────────────────────────────────────────────────────────────────────┘
```

### Load sequence (the one choreographed moment, ~1.8s)

1. 0ms: background and header visible; wave lines begin drawing in from the left, staggered per line.
2. 200ms: headline reveals line by line (mask slide-up).
3. 700ms: photo wipes in along the wave mask.
4. 1100ms: supporting line and buttons rise in.
5. 1500ms: logo row fades in.
After this, only the ambient wave drift and cursor response continue.

### Wave implementation notes

- Canvas 2D, 28 lines, each a sum of 2-3 sine terms; per-line phase offset; opacity fades to 0 at both ends (as in the deck).
- Cursor influence: smooth falloff, easing toward the pointer position (lerp 0.08).
- DPR capped at 2. Pause when not visible. 60fps target, under 4ms per frame.
- Fallback: a static SVG of the same lines for reduced motion and no-JS.

---

## Page sections below the hero (in order)

Each section has a different layout on purpose. **No two consecutive sections use the same structure.**

### 1. One standard (statement, white section)
A huge Anybody statement spanning the full width, with small photos (rooms, racks) embedded **inline in the sentence** like an editorial spread:

> We build the same [photo: meeting room] standard into every [photo: training room] office, so a team in Pune and a team in Singapore sit down to [photo: command centre] the same room.

Words are on a bright background (`--mist`), the inline photos have wave-curved or pill-shaped masks, and each photo has a gentle scale hover. This replaces any intro paragraph.

### 2. Scale (full-bleed `--teal`, white text)
"2,518 spaces deployed in 2024-25" drawn as an **interactive treemap by sector** from slide 6: Corporate 1,600, Banking 250, Education 220, Healthcare 180, Retail 120, Government 85, Broadcasting 60, Airport 3. Each tile a different bright colour from the palette. On scroll-into-view tiles grow from zero (staggered). Hover: tile brightens, tooltip shows sector and count. The total number uses a number-roll. Not boxes in a grid: real data, proportional areas.

### 3. How a project runs (pinned scroll, background shifts colour)
A **pinned section**: as the visitor scrolls, a line draws across the screen through five stages (Consultancy, Design, Supply, Implementation, Support and service). Each stage changes the background colour (abyss, electric, violet-teal, teal, coral) and swaps the scene on the right (floor-plan line drawing, rack photo, hardware truck line art, finished room, helpdesk). Short text per stage, 25 words max, taken from the Services page. This is a true sequence, so a progress line is justified. Provide a mobile version that unpins and stacks.

### 4. Spaces we build (expanding strip, image-first)
Six full-height vertical strips side by side: Meeting rooms, Training rooms, Command centres, Customer experience centres, Digital signage, Auditoriums. At rest, each shows a tinted photo and a vertical title. On hover (tap on mobile) the strip expands to about 3x width, the tint lifts, the photo zooms out, and one line of copy appears with a link. Each strip has its own tint from the palette. On mobile: stacked accordion.

### 5. Projects (horizontal rail of posters, logos only)
A horizontally scrolling rail (drag, trackpad or arrow keys) of **posters in mixed widths**. Each poster is a full-colour panel: the **client logo** (large, white), the room count in huge Anybody figures (number-roll on entry), and the countries as small flags or country codes. No client name as text. Posters for: Siemens (2,000), Amazon (1,500+), Micron (1,500+), Deloitte (1,000+), TCS (1,000+), Google (1,000+), Amdocs (1,000+), Carelon (600+), Persistent (600+), Cognizant (400). Hover: panel colour deepens, logo scales, cursor tag "View project". Last panel: "All projects".

### 6. Built before it arrives (rack staging, dark)
The strongest proof, shown big. Left: rack photo with a clip-path wipe. Right: five comparison bars (traditional vs Online rack staging) that **animate when scrolled into view**: 50% fewer onsite man hours, 100% match between simulation and install, 70% faster RMA turnaround, 20% better quality, 30% shorter delivery. A real before/after drag slider between a messy rack and a staged rack **only if the client supplies both photos**.

### 7. Where we work (map)
A dot-matrix world map with the **18 offices** as pulsing points (Bengaluru HQ larger, in coral). Hover shows the city. A simple region list beside it. Drawn as SVG, not a map embed.

### 8. Works with the best (partners, logos only)
Two rows of manufacturer logos drifting in opposite directions (pause on hover), then a static row of distributor logos. White on dark by default, true colour on hover. No names, no caption beyond a one-line heading: "The brands we install."

### 9. Credentials and recognition (light `--mist` section)
Certification logos (ISO 9001, Great Place to Work, PSNI, AVIXA CTS, AQ-AV CQT, Dante, Q-SYS and so on) in a tidy row, then the **trophy photos in an overlapping fan** that straightens on hover, each with a one-line caption (award, year). Do not show ISO 27001, 45001 or 14001 as achieved.

### 10. Contact band (full-bleed `--coral`)
Large Anybody headline: "Planning a project?" Short line beneath, **one magnetic button** (white), and the wave lines running through the band in white at low opacity. Ends the page with energy.

### Footer
`--abyss`. Office list by region, certification logos in white, privacy link.

---

## Hard rules (to avoid the "AI boxes" look)

- No grids of identical cards. Every section above has its own structure and scale.
- No eyebrow labels, no ALL-CAPS labels, no single highlighted word in a headline.
- No numbered markers except in the real sequence (the pinned project stages).
- No generic icon-in-a-circle feature blocks.
- No soft grey drop shadows under everything. Depth comes from colour, overlap and scale.
- No fade-up on every section. Use the mix of reveal styles listed above.
- Banned words in copy: seamless, cutting-edge, next-generation, holistic, empower, unlock, elevate, synergy, innovative solutions, world-class, state-of-the-art.
- Only facts from the PDF. No invented numbers, quotes, awards, clients or dates. Client contact persons never appear.
- One memorable thing: the wave-to-room hero. Everything else supports it.

---

## Quality floor

- LCP under 2.5s on mobile 4G. Hero media under 200 KB at first paint. Waves must not block first paint.
- 360px to 1920px responsive. Pinned section degrades gracefully on mobile.
- WCAG 2.2 AA, keyboard reachable rails and strips, visible focus.
- Logos have accessible names. Decorative canvas is `aria-hidden`.
- Total added JS for home page animation under about 90 KB gzipped.

---

# THE PROMPT (copy everything inside the block)

```
You are a senior front-end developer and motion designer at a small studio.
We already have a working Next.js (App Router, TypeScript, Tailwind) site for
Online Instruments, a B2B audio-visual system integrator (est. 2006,
Bengaluru). The About, Services and other pages are fine and must NOT change.

TASK: remake the HOME PAGE ONLY: a new hero and every section below it.

WHY: the current home page looks pale, outdated and AI-generated. It has
almost no colour, no animation, no hover states, and repeating identical
boxes. It also names companies as text instead of showing their logos.

NEW POINT OF VIEW: the company's brand is a wave (the flowing teal lines on
their deck cover). An AV integrator moves signal, reliably, into every room.
The page should feel like signal travelling through it. The business story:
big clients need the SAME good room in every office, 1,000+ times.
Consistency at scale is the product.

I will paste the full design spec below. Follow it exactly. Key points:
- Home-scoped colour theme (.theme-home) so other pages do not break.
  Saturated: abyss, teal, aqua, electric blue, coral, violet. At least four
  full-saturation sections. No more than one pale section in a row.
- Display font Anybody (wide, 700-800) for large type, Instrument Sans for
  body. Sentence case. No eyebrow labels, no ALL-CAPS labels.
- Hero: abyss background, ~28 animated brand-gradient wave lines on canvas
  that bend toward the cursor, with a room photo masked by the wave curve.
  Choreographed ~1.8s load sequence. Client logo row under it.
- Ten sections with ten DIFFERENT layouts (editorial statement with inline
  photos, interactive sector treemap, pinned scroll lifecycle with colour
  shifts, expanding image strips, horizontal poster rail, rack-staging
  proof with animated bars, dot-matrix office map, partner logo rows,
  credentials plus trophy fan, coral contact band).
- LOGOS, NOT NAMES: every client, partner, distributor and certification is
  shown as a logo via a single <Logo id="..."/> component and a
  /content/logos.ts registry. SVG files in /public/logos, never hotlinked,
  optically normalised, single-colour by default, true colour on hover.
  Name only in aria-label/alt. Missing logo = flagged dev placeholder plus
  an entry in /NOTES.md, never visible text.
- Real motion and hover states everywhere listed in the spec (buttons,
  links, logos, strips, posters, map points, treemap, header, focus).
  Animate transform/opacity/clip-path only. Pause off-screen work.
  Respect prefers-reduced-motion.
- Tools: CSS first, GSAP + ScrollTrigger for the hero timeline and the one
  pinned section, canvas 2D for waves. No three.js, no Lottie, no
  smooth-scroll hijack library.
- Content: only facts from the data I give you. Never invent numbers,
  clients, awards or quotes. Client contact persons never appear. Respect
  the showLogo / value flags. ISO 27001, 45001, 14001 are in progress and
  must not appear as achieved.

HOW TO WORK:
1. Do not write code yet. First give me a short design plan: colour,
   type, layout concept for the hero with an ASCII wireframe, motion plan.
   Review it against the brief; if any part is a generic default you would
   use for any company site, change it and tell me what you changed.
2. Then build in phases, one per message, and wait for me after each:
   H1 tokens, fonts, Logo component and registry
   H2 hero (canvas waves, mask, load sequence, logo row)
   H3 sections 1 and 2 (statement, treemap)
   H4 section 3 (pinned lifecycle)
   H5 sections 4 and 5 (strips, poster rail)
   H6 sections 6 and 7 (rack staging, map)
   H7 sections 8, 9, 10 and footer
   H8 hover/focus/cursor polish, reduced motion, performance and
      accessibility pass, then an anti-AI design review
3. Make precise, minimal edits to existing files. When a file needs a full
   rewrite, give me the complete file for copy-paste. Explain the root cause
   whenever you fix a bug.
4. Never run deploy, publish or push commands. Ask me for explicit,
   step-by-step confirmation first.
5. Keep /NOTES.md updated with decisions, missing assets and TODOs.

Confirm you understand and give me the design plan.

[PASTE THE SPEC SECTIONS ABOVE FROM "Colour system" THROUGH "Quality floor"]
```

---

## Assets to request from the client before Phase H2

1. A high-resolution room photo (and ideally a 10-15 second muted loop video) for the hero.
2. Photos of a finished room for each of the six solution types.
3. Rack staging "before" and "after" photos, if both exist.
4. Brand folder with logos, or approval to use client logos from public sources.
5. Original trophy photos at high resolution.

# Online Instruments: Home Page v3 (quick remake)

**This replaces the earlier home page remake prompt. Do not use both.**
Scope: home page only. Other pages stay untouched.
Fonts: **Bebas Neue** (headlines) and **DM Sans** (everything else). I read "Babus New" as Bebas Neue.

---

## 1. What went wrong, and the new angle

**Diagnosis of the current home page**
- Too many colours and no clear lead colour, so it reads as pale and messy at the same time.
- No fixed grid or spacing scale, so things sit "here and there".
- Same-size rounded boxes repeated down the page: the classic AI layout.
- Timid type. Nothing on the page is big enough to be confident.

**The new angle: broadcast graphics.**
Last time the idea was "signal". This time look at what an AV company actually puts in a room: a screen, lit, with something bold on it. Think live-broadcast and event graphics: huge condensed type, flat saturated colour blocks, hard-cropped photos, one sharp accent, nothing soft. Bebas Neue is exactly that kind of type.

Result: **three flat colours, enormous type, strict grid.** The page gets its energy from scale and contrast, not from effects. That also makes it quick to build and hard to make messy.

---

## 2. Colour: a strict 60 / 30 / 10 system

Only these. No other colours anywhere.

| Token | Hex | Share | Use |
|---|---|---|---|
| `--ink` | `#071A1A` | 40% | Dark sections, all text on light and on teal |
| `--teal` | `#00A99D` | 30% | Vivid brand teal for full-bleed sections |
| `--white` | `#FFFFFF` | 20% | Light sections |
| `--coral` | `#FF5A36` | 10% | Buttons and one highlight per section, nothing else |
| `--ink-70` | `rgba(7,26,26,.7)` | | Secondary text on light and teal |
| `--white-70` | `rgba(255,255,255,.7)` | | Secondary text on dark |

Rules that stop the "bad colours" problem:
1. **Text on teal is always ink, never white** (ink on `#00A99D` is about 6:1; white on it fails).
2. **Text on coral is always ink.** Coral is for buttons and tiny highlights only, never a section background.
3. **No gradients, no glows, no shadows, no transparency tricks.** Flat colour only.
4. **Sections alternate hard:** ink, teal, white, ink, teal, white. Never two light sections in a row. No pale greys.
5. Maximum **two** colours visible in any single viewport, plus coral for one action.
6. Logos: white on ink and teal-with-ink sections use ink; true colour on hover.

## 3. Typography

```ts
// next/font/google
Bebas_Neue({ weight: '400', subsets: ['latin'] })      // --font-display
DM_Sans({ subsets: ['latin'], axes: ['opsz'] })        // --font-body (weights 400, 500, 700)
```

Bebas Neue has one weight and is all-caps by design. That is fine for headlines. Rules:
- **Bebas only for headlines and big figures, 40px and above.** Never for body, buttons, nav or labels.
- Bebas settings: `line-height: 0.92`, `letter-spacing: 0.01em`, `text-wrap: balance`.
- DM Sans for body, nav, buttons, captions. Sentence case. Weights 400, 500, 700 only.
- **No small all-caps labels, no eyebrow tags.**

| Role | Font | Size (desktop / mobile) |
|---|---|---|
| Hero headline | Bebas Neue | `clamp(88px, 13vw, 208px)` / 76px |
| Section headline | Bebas Neue | `clamp(56px, 7vw, 112px)` / 52px |
| Big figures | Bebas Neue | `clamp(96px, 14vw, 240px)` / 88px |
| Lead paragraph | DM Sans 500 | 22/32 / 19/28 |
| Body | DM Sans 400 | 18/28 / 17/26 |
| Button, nav | DM Sans 700 | 16 |
| Caption | DM Sans 500 | 14/20 |

Body line length max 62 characters.

## 4. Grid and spacing (this is what removes the mess)

- **One container:** max 1320px, 12 columns, 24px gutters, 40px side padding (20px on mobile).
- **Spacing scale only:** 8, 16, 24, 32, 48, 64, 96, 128, 160. No other values.
- **Section padding:** 128px top and bottom desktop, 80px mobile.
- Everything aligns to the column grid. Left edges of headline, paragraph and button in a section are the same line.
- Left-aligned text throughout. Centre alignment only in the final contact band headline.
- Photos are **full-bleed or grid-snapped, square corners, no frames**. Border radius is `0` everywhere except buttons (`999px`).
- **No more than three type sizes in any section.**

---

## 5. Hero (the part that has to be perfect)

### Concept
A full-bleed vivid teal field. A giant two-line Bebas headline in ink fills the left two-thirds. A tall, hard-cropped photo of a finished meeting room sits on the right, running off the top-right of the viewport. The brand wave lines (the deck cover motif) run behind everything as thin ink lines at low opacity, drawing in once on load. Below the fold line, an ink band carries the client logos.

### Copy

**Headline (Bebas, ink):**
```
ONE STANDARD.
EVERY ROOM.
```
(Alternate if I ask for it: "THE SAME ROOM IN EVERY OFFICE.")

**Lead paragraph (DM Sans 500, ink):**
> Online Instruments designs, builds and supports meeting rooms, training rooms, command centres and auditoriums for the world's biggest companies.

**Buttons:**
- Primary: **See our projects** (coral background, ink text, pill)
- Secondary: **Talk to our team** (text link, ink, 2px underline)

No stat strip, no small label above the headline, no scroll indicator.

### Layout (desktop 1440 x 900)

```
┌────────────────────────────────────────────────────────────────────────┐
│ [logo]        About  Services  Solutions  Projects  How we work [Contact]│  header: transparent on teal
│                                                                        │
│  ONE STANDARD.                                  ┌──────────────────┐   │
│  EVERY ROOM.                                    │                  │   │
│                                                 │   room photo     │   │
│  Online Instruments designs, builds and         │   tall crop,     │   │
│  supports meeting rooms, training rooms ...     │   bleeds off     │   │
│                                                 │   top and right  │   │
│  [ See our projects ]   Talk to our team        │                  │   │
│                                                 └──────────────────┘   │
├────────────────────────────────────────────────────────────────────────┤
│  [amazon] [google] [microsoft] [deloitte] [siemens] [micron] [tcs] ...  │  ink band, logos only
└────────────────────────────────────────────────────────────────────────┘
```

- Headline: columns 1-8. Photo: columns 9-12, bleeding to the right and top edges of the viewport, height = full hero.
- The headline is allowed to overlap the photo by up to 40px at the seam (ink on photo reads fine because the photo's left edge is darkened by a flat 25% ink overlay). If it hurts legibility, do not overlap.
- Wave lines: SVG, 20 lines, `stroke: ink`, `opacity: .16`, behind the text, clipped before the photo.
- Hero height: `min(100svh, 920px)`. Logo band: 96px tall.

### Load sequence (about 1.2s, simple and reliable)
1. 0ms: background and header visible immediately.
2. 0-900ms: wave lines draw in (`pathLength=1`, `stroke-dashoffset` 1 to 0, 20ms stagger per line).
3. 100ms: headline lines slide up out of a mask, 80ms apart.
4. 400ms: photo wipes in left to right (`clip-path`).
5. 700ms: lead paragraph and buttons rise 16px and fade in.
6. 1000ms: logo band fades in.
Then everything is still. No ambient loops in the hero.

### Hero logo band
Client logos only, ink band, white logos, single row, 8 logos: Amazon, Google, Microsoft, Deloitte, Siemens, Micron, TCS, Cisco. Hover: that logo goes to its true colour, the others dim to 50%. On mobile it scrolls horizontally with snap.

---

## 6. Page sections below the hero

Eight sections. Every section is a different structure, aligned to the same grid.

### 1. Scale (ink section)
- Giant Bebas figure in **teal**: `2,518`
- Headline beside it (Bebas, white): `SPACES DEPLOYED IN 2024-25`
- Below: a **single horizontal bar** split proportionally by sector, from the data: Corporate 1,600, Banking 250, Education 220, Healthcare 180, Retail 120, Government 85, Broadcasting 60, Airport 3. Segments alternate teal, white, coral only where needed (use teal and white; coral just for the Airport sliver). Labels sit directly under each segment (DM Sans 14), hidden for tiny segments, with a hover tooltip.
- Animation: bar segments grow left to right once when scrolled into view; digits roll on the figure.

### 2. What we do (white section)
Headline `FIVE SERVICES. ONE TEAM.`
Five **full-width rows**, each with a huge Bebas service name on the left (Consultancy, Design, Supply, Implementation, Support and service) and one DM Sans line on the right (max 20 words, from the Services page copy). Rows separated by a 2px ink line.
- **Hover:** the row fills with teal from the left (250ms), the name stays ink, a small photo for that stage appears at the right edge. No arrows, no icons.
- Mobile: rows stack, tap to expand.

### 3. Spaces we build (teal section, ink text)
Headline `SIX KINDS OF SPACE.`
An **asymmetric photo collage** on the grid (not equal boxes): Meeting rooms (cols 1-7, tall), Command centres (cols 8-12), Training rooms (cols 1-4), Auditoriums (cols 5-12 wide), Customer experience centres (cols 1-6), Digital signage (cols 7-12). Photos square-cornered with the space name in Bebas, white, bottom-left, over a flat 30% ink overlay.
- **Hover:** photo zooms 1.05 to 1.0 over 400ms, overlay lightens, a small "See solutions" DM Sans link appears.

### 4. Projects (ink section, logos only)
Headline `ROOMS WE HAVE BUILT.`
A bold ledger. Each row: **client logo (white)** on the left, **room count in huge Bebas** in the middle, country codes on the right. No client names as text.
Rows: Siemens 2,000, Amazon 1,500+, Micron 1,500+, Deloitte 1,000+, TCS 1,000+, Google 1,000+. Last row: `All projects`.
- **Hover:** the row fills teal, logo and text switch to ink (logo in true colour), the figure nudges right 12px. Cursor tag "View project" on desktop.
- Respect the `showLogo` and `value` flags. Never show contact persons.

### 5. Built before it arrives (white section)
Headline `RACKS BUILT AND TESTED BEFORE THEY REACH SITE.`
One giant Bebas figure in teal on white: `50%` with the line "fewer onsite man hours". Beside it, the rack photo (grid-snapped, square). Underneath, four smaller figures in a row with DM Sans lines: `100%` accuracy between simulation and installation, `70%` faster RMA turnaround, `20%` better deployment quality, `30%` shorter delivery and handover.
- Animation: figures roll up once on scroll into view. Nothing else moves.

### 6. Where we work (ink section)
Headline `18 OFFICES. 4 REGIONS.`
Left: office list by region (India, Middle East, Rest of Asia, USA), DM Sans. Right: a simple dot-matrix world map in SVG with office dots; Bengaluru HQ in coral, the rest white. Hover on a city name highlights its dot with a pulse ring.

### 7. Brands and credentials (white section, logos only)
Headline `THE BRANDS WE INSTALL.`
- Manufacturer logos in one tidy static grid, equal optical sizes, ink by default, true colour on hover.
- Distributor logos in a second row.
- Certification logos (ISO 9001, Great Place to Work, PSNI, AVIXA CTS, AQ-AV CQT, Dante, Q-SYS) in a third row.
- ISO 27001, 45001 and 14001 are "in progress" and must not appear as achieved.
- No marquee here. Static and calm.

### 8. Contact (coral is NOT a section colour: this band is teal) + footer (ink)
Teal band. Bebas headline centred in ink: `PLANNING A PROJECT?` One line beneath, one coral button **Talk to our team**.
Footer in ink: offices by region, certification logos, privacy link.

---

## 7. Motion and hover (small, consistent, nothing floaty)

| Element | Behaviour |
|---|---|
| Primary button | Coral to a darker coral fill sweeping from the left, 220ms; presses down 2px on active |
| Text links | Underline draws left to right on hover, reverses on leave |
| Logos | Dim to true colour fade, 200ms |
| Header | Hides on scroll down, returns on scroll up; solid ink background after 80px |
| Service rows, project rows | Teal fill sweep from the left (see sections 2 and 4) |
| Photos | Zoom 1.05 to 1.0 on hover, 400ms |
| Section entrances | Mix of clip-path wipe, mask slide-up and number roll. **Never the same fade-up on everything** |
| Focus | 3px coral outline, 3px offset |

Rules:
- Easing `cubic-bezier(0.22, 1, 0.36, 1)`, 180-250ms hover, 600-900ms entrance.
- Animate `transform`, `opacity`, `clip-path` only.
- Build with CSS plus a small `IntersectionObserver` hook. Add Framer Motion or GSAP only if something truly needs it.
- `prefers-reduced-motion`: no draw-in, no wipes, no rolls. Hover colour changes remain.

## 8. Logos, not names

Wherever a company would be named (clients, partners, distributors, certifications), show its **logo, not text**.
1. One `<Logo id="..." />` component and a `/content/logos.ts` registry (id, file, accessible label, optical scale).
2. SVGs in `/public/logos`, never hotlinked. Source order: client brand folder, official brand pages, then extraction from the client PDF.
3. Normalise optical size per logo. Default single colour (ink or white), true colour on hover.
4. Company name only in `aria-label`/`alt`. If a file is missing, show a flagged dev placeholder and add it to `/NOTES.md`. Never fall back to visible text.
5. Client logos still need client approval: keep the `showLogo` flag.

## 9. Anti-AI and anti-mess checklist (the AI must run this at the end)

- [ ] Only the five colours and two opacities from section 2. No stray greys or blues.
- [ ] No gradients, glows, blurs or drop shadows.
- [ ] No identical rounded cards. No border-radius except on buttons.
- [ ] No icon-in-a-circle blocks. No emoji.
- [ ] No eyebrow labels, no small all-caps text, no highlighted single word in a headline.
- [ ] Every left edge aligns to the 12-column grid. Spacing values come from the scale only.
- [ ] Bebas Neue used only at 40px and above. DM Sans for everything else.
- [ ] Max three type sizes per section.
- [ ] Alternating ink / teal / white rhythm with no two pale sections in a row.
- [ ] Text on teal and on coral is ink.
- [ ] Banned words: seamless, cutting-edge, next-generation, holistic, empower, unlock, elevate, synergy, innovative solutions, world-class, state-of-the-art.
- [ ] Screenshots at 1440px and 390px reviewed; any element that is off-grid or crowded is fixed.
- [ ] Only facts from the PDF. No invented numbers, quotes, awards or dates.

---

# THE PROMPT (copy everything in the block, then paste sections 2 to 9 after it)

```
You are a senior front-end developer and designer at a small studio. We have
a working Next.js (App Router, TypeScript, Tailwind) site for Online
Instruments, a B2B audio-visual system integrator (est. 2006, Bengaluru).
Every page except the home page is fine and must NOT change.

TASK: quick remake of the HOME PAGE ONLY (new hero + sections below it).

PROBLEM: the current home page looks AI-made, messy and pale. Too many
colours, no clear grid, repeated identical boxes, timid type.

DIRECTION: broadcast graphics. Flat saturated colour blocks, enormous
condensed type, hard-cropped photos, one sharp accent. Three flat colours
(ink #071A1A, teal #00A99D, white) plus coral #FF5A36 for buttons only. No
gradients, no shadows, no rounded cards. Strict 12-column grid, 8-based
spacing scale. Alternating ink / teal / white sections.

FONTS: Bebas Neue for headlines and big figures (40px and above only),
DM Sans for everything else, via next/font/google.

HERO: full-bleed teal, giant two-line Bebas headline "ONE STANDARD. EVERY
ROOM." in ink, tall hard-cropped room photo bleeding off the top-right, thin
ink wave lines drawing in behind, ink logo band underneath with client
logos only. Short load sequence (about 1.2s), then still.

LOGOS NOT NAMES: all clients, partners, distributors and certifications are
logos via a <Logo/> component and /content/logos.ts registry, SVGs in
/public/logos, single colour by default, true colour on hover, name only in
aria-label. Missing logo = flagged placeholder + /NOTES.md entry.

CONTENT: only facts from the data I give you. Never invent numbers, awards
or quotes. Client contact persons never appear. Respect showLogo and value
flags. ISO 27001, 45001, 14001 are in progress, not achieved.

HOW TO WORK:
1. Do not write code yet. Give me a short plan: how you will implement the
   grid, tokens and hero, with an ASCII wireframe of the hero. Review it
   against the brief and change anything that is a generic default.
2. Then build in four phases, one per message, and wait for me after each:
   P1 tokens, fonts, grid container, Logo component and registry
   P2 hero and logo band (perfect this before anything else)
   P3 sections 1 to 4
   P4 sections 5 to 8, footer, hover/motion polish, reduced motion, then
      run the anti-AI and anti-mess checklist and fix failures
3. Make precise, minimal edits to existing files. If a file needs a full
   rewrite, give me the complete file for copy-paste. When fixing a bug,
   explain the root cause.
4. Never run deploy, publish or push commands. Ask me for explicit,
   step-by-step confirmation first.
5. Keep /NOTES.md updated with decisions, missing assets and TODOs.

Confirm you understand and give me the plan.

[PASTE SECTIONS 2 TO 9 OF THE SPEC HERE]
```

---

## Assets to get from the client for the hero to look right

1. One high-resolution, well-lit photo of a finished meeting room, portrait-croppable (the hero crop is tall).
2. Room photos for the six space types (collage).
3. A clean rack photo from the staging process.
4. Logo files or approval to use client logos publicly.

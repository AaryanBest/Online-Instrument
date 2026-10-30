# Online Instruments — Engineering Notes & Decisions

## Architectural & Design Decisions

1. **Framework & Layout**:
   - Built on React 19 + TypeScript + Vite + Tailwind CSS v4.
   - Design system tokens mapped directly to CSS variables (`--ink: #10201F`, `--paper: #F6F8F7`, `--teal: #007A75`, `--signal: #2CCFC0`, `--slate: #54625F`, `--rule: #D5DDDB`, `--logic: #4F81BD`, `--make: #7F52A0`, status ok/wait).
   - Typography: Instrument Sans (variable) via Google Fonts, tabular numerals enabled for all counts and figures (`font-variant-numeric: tabular-nums`).
   - Layout strictly follows 12-column grid, max 1200px width, ruled rows and ledgers rather than generic rounded card grids.
   - Anti-AI discipline: No eyebrow uppercase tags, no single highlighted words in headlines, sentence case throughout, no stock photos, no generic marketing buzzwords.

2. **The Hero Orchestration**:
   - Inline SVG architectural floor plan of `CONF-LG-98 · 04.213` (executive boardroom) drawing walls and AV zones with stroke-dasharray animation over 1.35s.
   - Cross-fades into finished room photograph at ~1.45s.
   - Permanent room caption `CONF-LG-98 · 04.213` stays overlaid.
   - Full support for `prefers-reduced-motion` (instant static photo state).

3. **Content Integrity**:
   - Real figures directly from `OI_AV_Overview.pdf`: 2,518 spaces in 2024–25; 527 people (Projects 394, Supply 80, Solutions Eng 32, Programming 21); Great Place to Work 2024-25 and 2025-26; 18 offices across India (9), Middle East (2), Rest of Asia (4), USA (3).
   - Real repeat client scale: Siemens (2,000 rooms), Amazon (1,500+ rooms), Micron (1,500+ rooms), Deloitte USI (1,000+ rooms), TCS (1,000+ rooms), Google (1,000+ rooms), Amdocs (1,000+ rooms).
   - Real test reports for video, audio, and cable using Fluke 62 MAX, NTi XL2 + M4260, Klein CL700, Murideo Fox & Hound, Fluke DSX-5000.

## Open TODOs & Confirmations for Client (Part 10)

## Home Page Remake Plan (Signal & Scale Direction)

### Palette & Rhythm
- Rhythm of saturation: Abyss (`#062B2B`) → Mist (`#E6F6F3`) → Saturated Teal (`#00857E`) → Dynamic colour stages (Abyss/Electric/Violet/Teal/Coral) → Mist / Abyss → Coral (`#FF5A36`).
- No consecutive pale sections; 4+ full-saturation sections.

### Typography
- Display / Headlines: `Bebas Neue` (condensed, high-impact display font, with tailored letter spacing and line heights) for all headlines (`h1`, `h2`, `h3`, `h4`, `.font-display`) across the entire website.
- Primary Body / UI: `DM Sans` (for all body text, paragraphs, interactive controls, navigation, and tabular data).

### Logos & Identity
- Centralized `<Logo id="..." />` registry (`/content/logos.ts`).
- Monochromatic on dark/light by default; true brand colour transition on hover (200ms).
- Missing logo dev flag placeholder; names strictly in `aria-label`/alt.

### Hero & Motion
- 28-line interactive sine-wave canvas in brand gradient (`#00F07A` → `#2CE0C8` → `#00A8FF`) reacting smoothly to cursor movement.
- Wave-curve masked finished room imagery with line intersections.
- Choreographed 1.8s entrance sequence.
- 60s slow logo drift carousel under hero.

### Implementation Status
- **H1 Complete**: Home-scoped tokens (`.theme-home`), `Anybody` font setup, unified `<Logo id="..." />` component and `/content/logos.ts` registry.
- **H2 Complete**: 28-line interactive canvas wave hero, cursor lerp deflection, wave-curve masked photo, 1.8s load sequence, and 60s slow drift client logo rail.
- **H3 Complete**: Section 1 Editorial statement with inline imagery on `--mist`, and Section 2 interactive sector treemap on `--teal` with number roll to 2,518.
- **H4 Complete**: Section 3 5-stage sequential lifecycle with background color shifts (Abyss, Electric, Violet, Teal, Coral) and swapping scene previews.
- **H5 Complete**: Section 4 6-strip expanding spaces showcase with zoom & lift on hover + Section 5 horizontal scrolling poster rail with client logos and large room counts.
- **H6 Complete**: Section 6 dark rack staging section with animated comparison bars (map section removed per user request).
- **H7 Complete**: Section 8 opposing partner logo drift rows, Section 9 credentials and trophy card fan with hover straightening, and Section 10 full-bleed coral contact band with magnetic button.
- **H8 Complete**: Contrast compliance, WCAG visible focus outlines, prefers-reduced-motion fallbacks, zero TypeScript/lint errors.



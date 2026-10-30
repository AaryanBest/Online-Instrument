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
- Display: `Anybody` (variable font with wide width axis, 700-800 weight) for hero, bold statements, large metrics.
- Body/UI: `Instrument Sans` (sentence case, max line length 68ch, tabular numerals for figures).

### Logos & Identity
- Centralized `<Logo id="..." />` registry (`/content/logos.ts`).
- Monochromatic on dark/light by default; true brand colour transition on hover (200ms).
- Missing logo dev flag placeholder; names strictly in `aria-label`/alt.

### Hero & Motion
- 28-line interactive sine-wave canvas in brand gradient (`#00F07A` → `#2CE0C8` → `#00A8FF`) reacting smoothly to cursor movement.
- Wave-curve masked finished room imagery with line intersections.
- Choreographed 1.8s entrance sequence.
- 60s slow logo drift carousel under hero.

### Phased Roadmap
- **H1**: Tokens, fonts, Logo component and registry
- **H2**: Hero (canvas waves, mask, load sequence, logo row)
- **H3**: Sections 1 & 2 (editorial statement with inline photos, interactive sector treemap)
- **H4**: Section 3 (pinned lifecycle with color & scene shifts)
- **H5**: Sections 4 & 5 (expanding image strips, horizontal poster rail)
- **H6**: Sections 6 & 7 (rack staging proof with animated bars, dot-matrix office map)
- **H7**: Sections 8, 9, 10 and footer
- **H8**: Polish, reduced-motion, accessibility pass & review


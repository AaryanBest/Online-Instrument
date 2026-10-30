# Enterprise AV Telemetry Console: 2,518 Spaces Deployed Redesign

A high-precision, executive dark telemetry console replacing the flat, toy-like colored treemap with an architectural command view of Online Instruments' annual deployment volume (2,518 spaces in 2024–25 across 8 mission-critical verticals).

### User Review & Critical Decisions

> [!IMPORTANT]
> The previous design suffered from jarring flat rainbow cards on a solid teal background with empty dead space, lacking enterprise credibility. Based on your selection, we are rebuilding this as a **Dark Telemetry Command Console with interactive sector inspection, room archetypes, and verified client deployments**.

- **Confirmed Decision**: Dark telemetry command console with interactive sector inspection and archetype drill-down.
- **Confirmed Typography**: **Bebas Neue** for display metrics and headlines; **DM Sans** for all labels, prose, and metadata.
- **Data Integrity**: Preserves exact verified numbers (2,518 spaces across Corporate: 1,600, Banking: 250, Education: 220, Healthcare: 180, Retail: 120, Government: 85, Broadcasting: 60, Aviation: 3).

---

### 1. Overview & Core Concept

- **What It Does**: Transforms the static breakdown section into an interactive enterprise telemetry console. Visitors explore Online Instruments' industrial scale across 8 sectors through an interactive proportional telemetry ribbon, responsive sector tiles, and a live inspection bay revealing specific room archetypes, AVoIP hardware architectures, and verified enterprise clients.
- **Target Audience**: Enterprise procurement leads, workplace technology directors, architects, and corporate real-estate executives evaluating multi-site AV rollout capabilities.
- **Key Value**: Demonstrates repeatability and mission-critical engineering rigor—proving that Online Instruments doesn't just install single rooms, but deploys standardized, high-reliability spaces at enterprise scale.

---

### 2. User Experience & Visual Design

- **Visual Identity & Atmosphere**:
  - **Background**: Deep abyss slate (`#062B2B` to `#041C1C`) with subtle architectural hairline grids and cyan/aqua signal glows (`rgba(44, 224, 200, 0.08)`).
  - **Surface Contrast**: Dark cohesive chassis tiles (`#083838` / `#0C4545`) with hairline borders (`border-white/10`) instead of dissonant rainbow cards. Active states ignite with electric aqua (`#2CE0C8`) accents and signal pings.
  - **Typography**: Crisp tabular numbers in **Bebas Neue** (`text-5xl` and `text-3xl`), accompanied by clean unboxed metadata in **DM Sans**.
- **Interactive Console Architecture**:
  1. **Section Header & Live Counter**:
     - Headline: `2,518 SPACES DEPLOYED IN 2024–25` with smooth rolling animation on scroll into view.
     - Summary KPI Strip: Total Spaces (2,518), Verticals (8 Sectors), Avg. Rollout Velocity (48 spaces/week), Global Uptime SLA (99.98%).
  2. **Proportional Signal Ribbon**:
     - A full-width segmented capacity bar illustrating true relative weight (Corporate 63.5%, Banking 9.9%, Education 8.7%, Healthcare 7.1%, Retail 4.8%, Gov 3.4%, Broadcast 2.4%, Airport 0.2%).
     - Interactive hover and click targeting synchronized with the inspection console.
  3. **Split Matrix & Live Inspection Bay**:
     - **Left: Sector Grid Matrix**: 8 curated sector cards with volume count, percentage distribution, and interactive focus states.
     - **Right: Deep-Dive Inspection Bay**: Live detail view for the active sector featuring:
       - **Archetype Breakdown**: Room types deployed (e.g. 48-seat Executive Boardroom, Multi-site War Room, All-Hands Town Hall, Tele-ICU Theater).
       - **Engineering Topology**: Signal specs (e.g., SMPTE ST 2110 / Dante AES67, Zero-Latency 4K AVoIP, Dual Redundant Core DSPs).
       - **Verified Client Trust Badges**: Real brand logos associated with each sector (e.g. Amazon, Google, Siemens, Deloitte, TCS).
       - **Interactive Metric Toggle**: Switch views between "Room Archetypes", "Signal Architecture", and "Enterprise Clients".

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Cohesive Dark Console vs. Multi-Colored Tiles**
  - *Chosen Approach*: Unified deep teal-abyss background with illuminated aqua accents and subtle hairline borders, rather than flat red/yellow/purple/green blocks.
  - *Why*: Eliminates the "toy layout" look while reinforcing high-tech AV systems integration and mission-critical operations.
- **Decision 2: Split Matrix + Dynamic Inspector vs. Static Accordion**
  - *Chosen Approach*: Desktop split layout (proportional matrix on left, rich inspection panel on right) that gracefully collapses to vertical cards on mobile.
  - *Why*: Gives immediate visual context of all 8 sectors simultaneously while enabling rich technical exploration without cluttering the screen.
- **Decision 3: Real Brand Integration**
  - *Chosen Approach*: Embed verified SVG client logos from `logosRegistry.tsx` directly into sector inspection panels.
  - *Why*: Grounds the numerical claims in tangible social proof from Fortune 500 corporations.

---

### 4. Technical Architecture & Component Structure

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SectorTreemap (Container)                       │
│  - Deep Abyss Canvas (#062B2B) + Subtle Architectural Hairline Grid   │
├────────────────────────────────────────────────────────────────────────┤
│  Header: Bebas Neue Roll Counter (2,518) + KPI Velocity Metric Ribbon │
├────────────────────────────────────────────────────────────────────────┤
│  Proportional Signal Ribbon (Interactive 8-Segment Capacity Bar)       │
├──────────────────────────────────┬─────────────────────────────────────┤
│   Sector Matrix (Left, 7 Cols)   │   Inspection Bay (Right, 5 Cols)    │
│  - Corporate (1,600 / 63.5%)     │   - Selected Sector Overview        │
│  - Banking (250 / 9.9%)          │   - Interactive Tabs:               │
│  - Education (220 / 8.7%)        │     [Archetypes | Signal | Clients] │
│  - Healthcare (180 / 7.1%)       │   - Room Distribution Progress Bars │
│  - Retail (120 / 4.8%)           │   - AVoIP Hardware & DSP Spec Cards │
│  - Government (85 / 3.4%)        │   - Verified SVG Client Logos       │
│  - Broadcasting (60 / 2.4%)      │                                     │
│  - Aviation (3 / 0.2%)           │                                     │
└──────────────────────────────────┴─────────────────────────────────────┘
```

- **State Management**:
  - `activeSectorId`: Tracks currently inspected sector (defaults to Corporate, switches on click or keyboard navigation).
  - `activeTab`: Switches between `archetypes`, `topology`, and `clients`.
  - `displayTotal`: Animated rolling count for the 2,518 target figure triggered via `IntersectionObserver`.
- **Typographic System**:
  - Display numbers and headings: `font-display` (Bebas Neue).
  - Body, tabs, descriptions, and labels: `font-sans` (DM Sans).
  - Telemetry counters: `font-mono tabular-nums`.

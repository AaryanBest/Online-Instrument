export interface SolutionSpace {
  id: string;
  slug: string;
  name: string;
  roomCode: string;
  capacity: string;
  headline: string;
  description: string;
  keyComponents: string[];
  acousticConsideration: string;
  spacesDeployed2024: number; // Part of 2,518 total spaces
  typicalSectors: string[];
}

export const solutionsData: SolutionSpace[] = [
  {
    id: "meeting-rooms",
    slug: "meeting-rooms",
    name: "Meeting rooms",
    roomCode: "CONF-LG-98 · 04.213",
    capacity: "4 to 24 seats (Huddle, Medium, Boardroom)",
    headline: "Unified collaboration spaces built for clear speech and zero meeting-start friction.",
    description: "From 4-person huddle spaces to 24-person executive boardrooms, our meeting rooms feature native Microsoft Teams Rooms and Zoom Rooms integration, automated camera framing, acoustic boundary microphones, and clean single-cable table interfaces.",
    keyComponents: [
      "Native MTR / Zoom Rooms appliance or compute",
      "Beamforming ceiling microphone arrays with AEC",
      "Auto-framing 4K PTZ cameras",
      "Commercial 4K displays or fine-pitch LED",
      "One-touch capacitive control console"
    ],
    acousticConsideration: "RT60 targeted under 0.6 seconds; speech transmission index (STIPA) > 0.65.",
    spacesDeployed2024: 1640,
    typicalSectors: ["Corporate", "Banking", "Healthcare", "Technology"]
  },
  {
    id: "training-rooms",
    slug: "training-rooms",
    name: "Training rooms",
    roomCode: "TRN-DIV-02 · 02.104",
    capacity: "20 to 80 seats (Collapsible / Multi-purpose)",
    headline: "Flexible learning environments with divisible partition sensing and presenter voice lift.",
    description: "Engineered for active training, corporate induction, and global seminar broadcast. Features divisible partition tracking that automatically adjusts DSP routing, multiple confidence monitors, wireless content sharing, and dual-zone voice lift.",
    keyComponents: [
      "Voice lift ceiling microphone matrix",
      "Partition sensor for automated audio & video re-routing",
      "Dual high-lumen laser projection or LED walls",
      "Presenter tracking PTZ camera system",
      "Wireless presentation gateway with touchback"
    ],
    acousticConsideration: "Voice lift without feedback; background ambient noise below NC-30.",
    spacesDeployed2024: 310,
    typicalSectors: ["Corporate", "Manufacturing", "Banking", "Consulting"]
  },
  {
    id: "command-centres",
    slug: "command-centres",
    name: "Command centres",
    roomCode: "NOC-CTRL-01 · 01.002",
    capacity: "12 to 50 operator consoles (24/7 mission critical)",
    headline: "Mission-critical NOC and SOC environments built for continuous 24/7 visibility.",
    description: "Designed for financial monitoring, cybersecurity operations, and network operation centres. Built with redundant power supplies, ultra-narrow bezel or zero-bezel MicroLED displays, hardware video wall processors, and instantaneous source switching.",
    keyComponents: [
      "24/7 industrial LED / LCD video wall with redundant power",
      "Hardware video wall processor with multi-windowing",
      "Zero-latency AV-over-IP matrix (10GbE or 1GbE)",
      "Ergonomic operator console audio and KVM routing",
      "Environmental & thermal monitoring integration"
    ],
    acousticConsideration: "Operator console acoustic privacy with sound masking; HVAC NC-25 rating.",
    spacesDeployed2024: 85,
    typicalSectors: ["Banking", "Telecom", "Government", "Enterprise IT"]
  },
  {
    id: "customer-experience-centres",
    slug: "customer-experience-centres",
    name: "Customer experience centres",
    roomCode: "EBC-IMM-07 · 05.501",
    capacity: "Executive briefings & client showcase",
    headline: "Immersive briefing environments that combine interactive technology and brand storytelling.",
    description: "High-impact spaces where global corporations host C-level clients. Incorporates curved fine-pitch LED canvasses, interactive multi-touch displays, spatial audio, programmable architectural lighting, and bespoke touch-panel automation.",
    keyComponents: [
      "Custom curved fine-pitch active LED canvas",
      "Spatial multi-channel audio processing",
      "DMX architectural lighting control integration",
      "Interactive multi-user touch surfaces",
      "Centralized show-control automation scripting"
    ],
    acousticConsideration: "Studio-grade acoustic isolation from adjacent corporate spaces.",
    spacesDeployed2024: 68,
    typicalSectors: ["Technology", "Semiconductor", "Consulting", "Aerospace"]
  },
  {
    id: "digital-signage",
    slug: "digital-signage",
    name: "Digital signage",
    roomCode: "SGN-ENT-44 · LOBBY",
    capacity: "Campus-wide distributed endpoints",
    headline: "Centrally managed enterprise visual communications and architectural LED displays.",
    description: "From lobby video walls to elevator bank screens, cafeteria IPTV, and campus wayfinding. Managed through enterprise content management platforms with automated scheduling, emergency alert override, and remote endpoint health monitoring.",
    keyComponents: [
      "Enterprise CMS with cloud and on-premise redundancy",
      "High-brightness commercial displays (700+ nits)",
      "SoC or dedicated industrial media players",
      "Emergency broadcast & PA system integration",
      "Interactive wayfinding kiosks with accessibility compliance"
    ],
    acousticConsideration: "Directional audio in reception zones without spill into work bays.",
    spacesDeployed2024: 345,
    typicalSectors: ["Corporate Campuses", "Airports", "Healthcare", "Universities"]
  },
  {
    id: "auditoriums",
    slug: "auditoriums",
    name: "Auditoriums",
    roomCode: "AUD-TH-01 · 01.100",
    capacity: "150 to 1,200 seats (Town halls & Global webcasts)",
    headline: "Large-format assembly halls engineered for broadcast acoustics and high-impact town halls.",
    description: "Multi-tiered or raked seating venues for company all-hands, international symposiums, and live-streamed keynote presentations. Features calibrated line array acoustics, broadcast-grade multi-camera production, professional stage lighting, and digital interpreter integration.",
    keyComponents: [
      "Steerable line array loudspeaker systems",
      "Large-venue 4K laser projection or large LED backdrop",
      "Broadcast 4K SDI / NDI PTZ camera package",
      "Digital mixing console with Dante audio networking",
      "Theatrical motorized rigging and lighting trusses"
    ],
    acousticConsideration: "Room acoustic modeling via EASE; uniform sound pressure across all seats within ±2 dB.",
    spacesDeployed2024: 70,
    typicalSectors: ["Corporate HQ", "Financial Institutions", "Higher Education"]
  }
];

export interface SOPStep {
  stepNumber: number;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  responsibleTeam: string;
}

export const sopStepsData: SOPStep[] = [
  {
    stepNumber: 1,
    phase: "Initiation",
    title: "Site survey and civil coordination",
    description: "Physical inspection of containment pathways, structural ceiling load ratings, electrical drops, and HVAC diffusers with general contractors and architects.",
    deliverables: ["Site readiness checklist", "Containment layout sign-off", "Electrical & heat load guidance"],
    responsibleTeam: "Projects & Engineering"
  },
  {
    stepNumber: 2,
    phase: "Initiation",
    title: "System schematics and engineering",
    description: "Production of single-line diagrams, architectural floor plan overlays, rack elevations, and thermal load (BTU) calculations.",
    deliverables: ["Single-line audio/video schematics", "Rack elevation CAD drawings", "BTU & power consumption audit"],
    responsibleTeam: "Technology & Solutions Engineering"
  },
  {
    stepNumber: 3,
    phase: "Procurement",
    title: "Hardware procurement and live tracking",
    description: "Orders placed directly with OEM partners. Line-by-line shipment tracking from factory dispatch to central staging facility.",
    deliverables: ["Live hardware procurement ledger", "Serial number asset log", "ETA status notifications"],
    responsibleTeam: "Supply Management"
  },
  {
    stepNumber: 4,
    phase: "Staging",
    title: "Off-site rack pre-assembly and staging",
    description: "Assembly, power distribution, thermal ducting, and neat cable dressing executed in our Bengaluru engineering facility prior to site arrival.",
    deliverables: ["Pre-assembled equipment racks", "Velcro cable harness dressing", "Factory QC sign-off tag"],
    responsibleTeam: "Projects & Engineering"
  },
  {
    stepNumber: 5,
    phase: "Staging",
    title: "Simulation and bench testing",
    description: "Full system interconnection in our facility. Devices are powered, firmware upgraded, and control network simulated under load for 48 continuous hours.",
    deliverables: ["48-hour burn-in certificate", "Firmware version audit", "Pre-delivery test report"],
    responsibleTeam: "Programming & Engineering"
  },
  {
    stepNumber: 6,
    phase: "First Fix",
    title: "Onsite conduit and certified cable pulling",
    description: "Low-voltage Cat6/6A, fiber, and speaker lines pulled through dedicated pathways. Every single cable is labeled at both ends with heat-shrink tags.",
    deliverables: ["Cable pull schedule", "Wire-map verification", "Pathway compliance log"],
    responsibleTeam: "Projects"
  },
  {
    stepNumber: 7,
    phase: "Second Fix",
    title: "Equipment mounting and rack deployment",
    description: "Pre-tested racks brought to site and positioned. Displays, camera brackets, and ceiling mics mounted using engineered hardware.",
    deliverables: ["Physical installation sign-off", "Level & laser plumb check", "Interconnect termination"],
    responsibleTeam: "Projects"
  },
  {
    stepNumber: 8,
    phase: "Integration",
    title: "Control, DSP and network programming",
    description: "Onsite deployment of custom touch panel interfaces, acoustic echo cancellation (AEC) filter tuning, and corporate VLAN routing.",
    deliverables: ["DSP audio presets", "Touch panel GUI sign-off", "Network configuration record"],
    responsibleTeam: "Programming"
  },
  {
    stepNumber: 9,
    phase: "Commissioning",
    title: "AQ-AV CQT calibrated commissioning",
    description: "Exacting verification using Fluke, NTi, Murideo, and Klein calibrated tools. Audio RT60, video EDID handshakes, and cable link margins verified.",
    deliverables: ["Video CQT report", "Audio acoustics & STIPA report", "Fluke DSX-5000 certified cable reports"],
    responsibleTeam: "Engineering (AQ-AV CQT Certified)"
  },
  {
    stepNumber: 10,
    phase: "Handover",
    title: "Client demonstration and user training",
    description: "Hands-on walkthrough with IT, workplace teams, and executive admins. Custom quick-start user guides provided for every room type.",
    deliverables: ["User training session", "Room quick-start laminate cards", "Admin troubleshooting guide"],
    responsibleTeam: "Projects & Support"
  },
  {
    stepNumber: 11,
    phase: "Handover",
    title: "As-built documentation and formal sign-off",
    description: "Delivery of final red-lined CAD drawings, IP addressing tables, password vaults, and formal acceptance certificates.",
    deliverables: ["As-built CAD drawing pack", "Asset IP & MAC directory", "Project completion certificate"],
    responsibleTeam: "Projects & Engineering"
  },
  {
    stepNumber: 12,
    phase: "Lifecycle",
    title: "Attic stock handover and support SLA transition",
    description: "Transition of spare items, patch cables, and warranties into the central helpdesk ticketing system with assigned L1/L2 engineers.",
    deliverables: ["Attic stock inventory log", "Warranty certificates", "SLA helpdesk contact matrix"],
    responsibleTeam: "Support & Services"
  }
];

export interface HardwareTrackingItem {
  id: string;
  itemDescription: string;
  makeModel: string;
  roomAllocation: string;
  qtyOrdered: number;
  qtyDelivered: number;
  qtyPending: number;
  status: "Delivered" | "Staging" | "In transit" | "Scheduled";
  eta: string;
}

export const hardwareTrackingSample: HardwareTrackingItem[] = [
  {
    id: "HW-001",
    itemDescription: "Core DSP Audio Matrix Processor",
    makeModel: "Q-SYS Core 110f v2",
    roomAllocation: "Boardrooms & divisible rooms",
    qtyOrdered: 24,
    qtyDelivered: 24,
    qtyPending: 0,
    status: "Delivered",
    eta: "Site Staging"
  },
  {
    id: "HW-002",
    itemDescription: "Beamforming Ceiling Microphone Array",
    makeModel: "Shure MXA920-W-S",
    roomAllocation: "Executive Conference 04.213",
    qtyOrdered: 48,
    qtyDelivered: 48,
    qtyPending: 0,
    status: "Delivered",
    eta: "Site Staging"
  },
  {
    id: "HW-003",
    itemDescription: "85\" 4K UHD Commercial Anti-Glare Display",
    makeModel: "Sony Bravia FW-85BZ40L",
    roomAllocation: "Large Conference Rooms",
    qtyOrdered: 32,
    qtyDelivered: 28,
    qtyPending: 4,
    status: "In transit",
    eta: "Oct 31, 2026"
  },
  {
    id: "HW-004",
    itemDescription: "Touch Screen Control Interface (10.1\")",
    makeModel: "Crestron TSW-1070-B-S",
    roomAllocation: "All Meeting Rooms",
    qtyOrdered: 64,
    qtyDelivered: 64,
    qtyPending: 0,
    status: "Delivered",
    eta: "Pre-Configured"
  },
  {
    id: "HW-005",
    itemDescription: "Custom Engineered XLR/HDMI Patch Panel",
    makeModel: "OI Manufacturing LOGIC-PP24",
    roomAllocation: "Equipment Racks R01-R12",
    qtyOrdered: 24,
    qtyDelivered: 24,
    qtyPending: 0,
    status: "Delivered",
    eta: "Fabricated"
  },
  {
    id: "HW-006",
    itemDescription: "10GbE AV-over-IP Fiber Matrix Switch",
    makeModel: "Netgear M4250-26G4F-PoE+",
    roomAllocation: "Central Server Room",
    qtyOrdered: 6,
    qtyDelivered: 6,
    qtyPending: 0,
    status: "Delivered",
    eta: "Burn-in Passed"
  }
];

export interface SiteProgressItem {
  roomCode: string;
  floorZone: string;
  spaceType: string;
  firstFixPercent: number;
  secondFixPercent: number;
  hardwarePercent: number;
  cqtStatus: "Passed" | "Scheduled" | "Pending Fix";
  signOff: "Approved" | "In Review" | "Pending";
}

export const siteProgressSample: SiteProgressItem[] = [
  {
    roomCode: "CONF-LG-98 · 04.213",
    floorZone: "Floor 4, West Wing",
    spaceType: "24-Seat Executive Boardroom",
    firstFixPercent: 100,
    secondFixPercent: 100,
    hardwarePercent: 100,
    cqtStatus: "Passed",
    signOff: "Approved"
  },
  {
    roomCode: "TRN-DIV-02 · 02.104",
    floorZone: "Floor 2, East Wing",
    spaceType: "Divisible Training Hall",
    firstFixPercent: 100,
    secondFixPercent: 100,
    hardwarePercent: 90,
    cqtStatus: "Scheduled",
    signOff: "In Review"
  },
  {
    roomCode: "NOC-CTRL-01 · 01.002",
    floorZone: "Floor 1, Secure Core",
    spaceType: "24/7 Security Operations Centre",
    firstFixPercent: 100,
    secondFixPercent: 100,
    hardwarePercent: 100,
    cqtStatus: "Passed",
    signOff: "Approved"
  },
  {
    roomCode: "CONF-MD-42 · 03.118",
    floorZone: "Floor 3, North Hub",
    spaceType: "12-Seat Conference Room",
    firstFixPercent: 100,
    secondFixPercent: 80,
    hardwarePercent: 60,
    cqtStatus: "Scheduled",
    signOff: "Pending"
  },
  {
    roomCode: "EBC-IMM-07 · 05.501",
    floorZone: "Floor 5, Client Pavilion",
    spaceType: "Customer Experience Centre",
    firstFixPercent: 100,
    secondFixPercent: 100,
    hardwarePercent: 100,
    cqtStatus: "Passed",
    signOff: "Approved"
  }
];

export const testReportsSample = {
  videoReport: {
    room: "CONF-LG-98 · 04.213",
    instrument: "Murideo Fox & Hound Generator & Analyzer (4K HDR)",
    tests: [
      { parameter: "Resolution & Frame Rate", target: "3840 x 2160 @ 60Hz 4:4:4", measured: "3840 x 2160 @ 60Hz 8-bit RGB", status: "Pass" },
      { parameter: "HDCP Handshake Negotiation", target: "HDCP 2.2 Compliant", measured: "HDCP 2.2 Locked < 450ms", status: "Pass" },
      { parameter: "Image Height Ratio (DISCAS)", target: "Basic Decision Making > 3.0", measured: "3.44 Ratio Achieved", status: "Pass" },
      { parameter: "Screen Luminance (Center)", target: "Minimum 350 cd/m²", measured: "412 cd/m² measured", status: "Pass" },
      { parameter: "Display Contrast Ratio", target: "15:1 Minimum Contrast", measured: "28:1 Ambient Measured", status: "Pass" }
    ]
  },
  audioReport: {
    room: "CONF-LG-98 · 04.213",
    instrument: "NTi Audio XL2 Class 1 Acoustic Analyzer + M4260 Calibrated Mic",
    tests: [
      { parameter: "Reverberation Time (RT60)", target: "0.45s to 0.60s (500Hz - 2kHz)", measured: "0.52s Mid-Band Average", status: "Pass" },
      { parameter: "Ambient Noise Floor", target: "Below NC-30 (Noise Criteria)", measured: "NC-26 (HVAC running high)", status: "Pass" },
      { parameter: "Speech Intelligibility (STIPA)", target: "STIPA > 0.65 (Good / Excellent)", measured: "0.71 STIPA at furthest listener", status: "Pass" },
      { parameter: "Codec Outbound Volume SPL", target: "65 dB(A) ± 3 dB", measured: "66.4 dB(A) nominal at 1m", status: "Pass" },
      { parameter: "Acoustic Echo Cancellation", target: "Zero audible return / echo", measured: "-32 dB residual return rejection", status: "Pass" }
    ]
  },
  cableReport: {
    room: "CONF-LG-98 · 04.213 (Drop R04-WP01)",
    instrument: "Fluke Networks DSX-5000 CableAnalyzer (Permanent Link)",
    tests: [
      { parameter: "Wire Map & Shield Continuity", target: "TIA-568-C.2 Cat6A Shielded", measured: "12345678 + S Continuous", status: "Pass" },
      { parameter: "Cable Length", target: "Max 90.0 meters", measured: "42.8 meters", status: "Pass" },
      { parameter: "Insertion Loss Margin", target: "Pass with > 2.0 dB headroom", measured: "+4.6 dB Headroom at 500 MHz", status: "Pass" },
      { parameter: "NEXT (Near End Crosstalk)", target: "Pass with > 3.0 dB margin", measured: "+6.8 dB Margin (Pair 3,6-4,5)", status: "Pass" },
      { parameter: "Return Loss", target: "Pass with > 3.0 dB margin", measured: "+5.2 dB Margin", status: "Pass" }
    ]
  }
};

export const supportIncidentSteps = [
  {
    step: 1,
    title: "Incident reported",
    detail: "Ticket raised via dedicated client portal, phone hotline, or automated SNMP trap. Unique tracking number generated immediately.",
    timeline: "Instant (< 5 min)"
  },
  {
    step: 2,
    title: "Engineer assigned",
    detail: "L1 or L2 engineer assigned based on severity matrix. On-site engineer dispatched or remote secure session initiated within agreed SLA window.",
    timeline: "15 – 60 min SLA"
  },
  {
    step: 3,
    title: "Service addressed",
    detail: "Issue diagnosed and resolved. For major component failures, advanced RMA is triggered immediately with the manufacturer and loaner units deployed.",
    timeline: "Same-day restoration"
  },
  {
    step: 4,
    title: "Service closure report",
    detail: "Engineer generates a structured root-cause analysis and closure report, verified and signed off by the client facility contact.",
    timeline: "Within 24 hours"
  },
  {
    step: 5,
    title: "Periodic reporting",
    detail: "Consolidated monthly and quarterly SLA reports delivered to facilities and IT leadership detailing room uptime, recurring trends, and preventive maintenance.",
    timeline: "Monthly / Quarterly"
  }
];

export const escalationMatrix = [
  { level: "L1", role: "Helpdesk & On-site Technician", responsibility: "First response, basic troubleshooting, cable checks, restart protocols, room sign-in" },
  { level: "L2", role: "Senior Systems Engineer", responsibility: "DSP routing, firmware troubleshooting, EDID clocking, network configuration, equipment replacement" },
  { level: "L3", role: "Service Manager & Design Team", responsibility: "System re-architecture, complex code revisions, code updates, warranty manufacturer RMA escalation" }
];

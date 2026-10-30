export type ProjectSector = "Corporate" | "Banking" | "Healthcare" | "Manufacturing";
export type ServiceType = "Consultancy" | "Design" | "Supply" | "Implementation" | "Support";

export interface Project {
  slug: string;
  client: string;
  sector: ProjectSector;
  countries: string[];
  rooms: string;
  value?: string; // Hidden unless approved
  summary: string;
  scope: string[];
  services: ServiceType[];
  showLogo: boolean;
  completionPeriod?: string;
  technicalHighlights?: string[];
}

export const projectsData: Project[] = [
  {
    slug: "micron-technologies",
    client: "Micron Technologies",
    sector: "Corporate",
    countries: ["India", "Singapore", "Malaysia", "Taiwan"],
    rooms: "1,500+",
    // value: "$9 million" — hidden per blueprint instructions unless client approves
    showLogo: false,
    summary: "Standardised enterprise deployment of Zoom Rooms, interactive training labs, and boardrooms across four countries. Online Instruments engineers provide ongoing AQ-AV CQT managed services for remote configuration and quality checks in Singapore and Taiwan.",
    scope: [
      "Zoom Rooms deployment across standard and large conference suites",
      "Interactive multi-purpose training centres with ceiling mic arrays",
      "Executive boardrooms with wireless presentation and dual 4K displays",
      "Off-site rack staging and custom panel fabrication",
      "Cross-border managed services and DSP tuning in Singapore and Taiwan"
    ],
    services: ["Consultancy", "Design", "Supply", "Implementation", "Support"],
    completionPeriod: "2021 – Present (Multi-phase expansion)",
    technicalHighlights: [
      "Recipient of Micron Best Partner Award 2023",
      "Calibrated CQT testing across all overseas endpoints",
      "100% adherence to corporate IT security standards"
    ]
  },
  {
    slug: "siemens",
    client: "Siemens",
    sector: "Manufacturing",
    countries: ["India"],
    rooms: "2,000",
    showLogo: false,
    summary: "Nationwide AV integration across manufacturing plants, design offices, and corporate headquarters in India. Our work spanned initial acoustic consultancy and schematic engineering through to turnkey deployment of 2,000 operational spaces.",
    scope: [
      "2,000 collaborative and executive meeting rooms across India",
      "Factory floor briefing spaces with industrial-grade acoustic shielding",
      "Town hall auditoriums with line-array sound and PTZ camera packages",
      "Centralized asset management and SLA maintenance contracts"
    ],
    services: ["Consultancy", "Design", "Supply", "Implementation", "Support"],
    completionPeriod: "2018 – Present (Enterprise framework)",
    technicalHighlights: [
      "Comprehensive heat load (BTU) and acoustic simulation for all spaces",
      "Zero downtime changeover in operating engineering hubs"
    ]
  },
  {
    slug: "google",
    client: "Google",
    sector: "Corporate",
    countries: ["India", "Singapore", "Malaysia"],
    rooms: "1,000+",
    showLogo: false,
    summary: "Large-scale lifecycle replacement of more than 1,000 rooms across Bangalore, Hyderabad, Singapore, and Kuala Lumpur. Deployed within strict non-operational hours with methodical legacy equipment decommissioning and zero interruption to active work teams.",
    scope: [
      "Lifecycle overhaul of 1,000+ meeting and collaboration rooms",
      "Decommissioning, asset logging, and e-waste certified recycling of legacy hardware",
      "Strict off-hours installation windows (evening and weekend shifts)",
      "Uniform Google Meet hardware compute and ceiling microphone integration"
    ],
    services: ["Design", "Supply", "Implementation", "Support"],
    completionPeriod: "2022 – 2024",
    technicalHighlights: [
      "Night shift precision handover with daily site audit checklists",
      "100% compliance with strict global corporate physical security protocols"
    ]
  },
  {
    slug: "amazon",
    client: "Amazon",
    sector: "Corporate",
    countries: ["India", "Singapore", "APAC"],
    rooms: "1,500+",
    showLogo: false,
    summary: "Repeat AV infrastructure rollouts across multiple corporate headquarters, tech centres, and fulfilment hubs. Delivered over 1,500 meeting rooms, multi-purpose training spaces, and all-hands town hall arenas under rigorous global procurement standards.",
    scope: [
      "Standardised conference rooms, phone booths, and huddle areas",
      "High-density training academies with voice-lift ceiling arrays",
      "Campus town hall spaces with theatrical lighting and live streaming",
      "Preventive maintenance and dedicated on-site L1/L2 engineering staff"
    ],
    services: ["Consultancy", "Supply", "Implementation", "Support"],
    completionPeriod: "2019 – Present",
    technicalHighlights: [
      "Rapid room turnaround averaging 36 hours from bare walls to tested handover",
      "Consistent 99.8% room uptime across managed facilities"
    ]
  },
  {
    slug: "deloitte-usi",
    client: "Deloitte USI",
    sector: "Corporate",
    countries: ["India"],
    rooms: "1,000+",
    showLogo: false,
    summary: "Design consultancy and enterprise deployment setting standardized AV architectural specifications across Deloitte offices in India. Over 1,000 client-facing and internal team rooms engineered for unified hybrid meetings.",
    scope: [
      "Development of global space-type AV architectural standard templates",
      "Rollout of 1,000+ hybrid meeting rooms and partner boardrooms",
      "Integration with enterprise calendar platforms and capacitive room-scheduling panels",
      "Custom table connectivity boxes designed and manufactured in-house"
    ],
    services: ["Consultancy", "Design", "Implementation", "Support"],
    completionPeriod: "2020 – 2024",
    technicalHighlights: [
      "Standardized bill of materials adopted nationwide",
      "Direct sound pressure level verification meeting STIPA > 0.68"
    ]
  },
  {
    slug: "tata-consultancy-services",
    client: "TCS",
    sector: "Corporate",
    countries: ["India", "Global"],
    rooms: "1,000+",
    showLogo: false,
    summary: "End-to-end audio-visual implementation across major IT delivery centres in Bengaluru, Hyderabad, Chennai, and Mumbai. Spanned over 1,000 rooms including software development war rooms and customer briefing centres.",
    scope: [
      "Software delivery war rooms with multi-source video distribution",
      "Executive client presentation suites with fine-pitch LED displays",
      "Campus-wide digital signage and corporate communications IPTV",
      "Dedicated helpdesk escalation protocol and quarterly uptime reporting"
    ],
    services: ["Supply", "Implementation", "Support"],
    completionPeriod: "2019 – Present",
    technicalHighlights: [
      "Unified AV-over-IP network architecture isolated on dedicated VLANs",
      "Proven multi-campus procurement logistics"
    ]
  },
  {
    slug: "amdocs",
    client: "Amdocs",
    sector: "Corporate",
    countries: ["Israel", "United Kingdom", "United States", "Philippines", "Singapore", "India"],
    rooms: "1,000+",
    showLogo: false,
    summary: "Global deployment and ongoing remote managed services covering corporate spaces across six countries. Our programming team handles centralized DSP audio tuning, control interface scripting, and firmware validation across all continents.",
    scope: [
      "1,000+ meeting spaces integrated across six international territories",
      "Centralized remote programming and system commissioning",
      "Bespoke touch screen GUI design tailored for uniform multi-region user experience",
      "Proactive remote health monitoring and quarterly incident reporting"
    ],
    services: ["Consultancy", "Design", "Implementation", "Support"],
    completionPeriod: "2021 – Present",
    technicalHighlights: [
      "Remote Q-SYS and Crestron programming deployed from Bengaluru tech centre",
      "SLA response times maintained across multiple international time zones"
    ]
  },
  {
    slug: "persistent-systems",
    client: "Persistent Systems",
    sector: "Corporate",
    countries: ["United States", "Malaysia", "India"],
    rooms: "450+",
    showLogo: false,
    summary: "Cross-border AV modernization project across key delivery facilities in the United States, Malaysia, and India. Focused on executive collaboration, acoustic isolation, and seamless video conferencing across distributed engineering teams.",
    scope: [
      "Design and implementation of executive boardrooms and training halls",
      "Acoustic RT60 remediation in heritage campus buildings",
      "Off-site rack pre-assembly reducing onsite commissioning time by 50%",
      "Structured tier-2 support SLA with quarterly reviews"
    ],
    services: ["Design", "Supply", "Implementation", "Support"],
    completionPeriod: "2022 – 2024",
    technicalHighlights: [
      "100% off-site rack staging executed before overseas air-freight",
      "Handover completed 2 weeks ahead of scheduled campus inauguration"
    ]
  },
  {
    slug: "tier-1-financial-institution",
    client: "State Bank of India / Financial Hub",
    sector: "Banking",
    countries: ["India"],
    rooms: "320+",
    showLogo: false,
    summary: "Turnkey audiovisual infrastructure for corporate headquarters and secure regional operations centres. Included a 24/7 security monitoring command centre, multi-screen boardrooms, and high-security air-gapped AV distribution.",
    scope: [
      "Mission-critical 24/7 Security Operations Centre (SOC) video wall",
      "Hardware video wall processor with redundant power and instantaneous switching",
      "Air-gapped audio-visual routing for high-security confidential boardrooms",
      "Full ISO 9001:2015 documentation and strict physical security compliance"
    ],
    services: ["Consultancy", "Design", "Supply", "Implementation", "Support"],
    completionPeriod: "2023 – 2025",
    technicalHighlights: [
      "Zero video wall failure over 18,000+ continuous operating hours",
      "Comprehensive Fluke DSX-5000 certified cable link test passes for 100% of runs"
    ]
  },
  {
    slug: "national-healthcare-network",
    client: "Leading Healthcare & Hospital Network",
    sector: "Healthcare",
    countries: ["India"],
    rooms: "280+",
    showLogo: false,
    summary: "Specialised audio-visual integration across medical colleges, surgical simulation rooms, and multi-tier hospital auditoriums. Engineered for medical-grade video clarity, surgical broadcast latency under 15ms, and hygienic touchless room control.",
    scope: [
      "Medical symposium auditoriums with low-latency surgical video streaming",
      "Clinical training rooms with interactive smart displays and voice capture",
      "Public hospital digital wayfinding and emergency notification network",
      "Acoustically isolated consultation rooms with certified STIPA speech privacy"
    ],
    services: ["Consultancy", "Design", "Supply", "Implementation", "Support"],
    completionPeriod: "2022 – 2025",
    technicalHighlights: [
      "Zero unshielded cabling near high-field MRI and surgical imaging zones",
      "4K 60Hz 4:4:4 uncompressed clinical image reproduction"
    ]
  }
];

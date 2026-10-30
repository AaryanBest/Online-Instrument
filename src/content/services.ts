export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  oneLine: string;
  whatWeDo: string;
  youGet: string[];
  proofExample: {
    client: string;
    description: string;
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: "consultancy",
    slug: "consultancy",
    name: "Consultancy",
    oneLine: "Space analysis, technical requirement definitions, and enterprise deployment blueprints.",
    whatWeDo: "We start by understanding the real problem: how people use the space today, what is not working, and what a better version looks like. We look for opportunities clients have not spotted yet, then shape AV solutions that are built for the purpose, can scale, and fit the organisation's wider plans.",
    youGet: [
      "A clear brief for each space type",
      "Recommendations tied to how your teams work",
      "A plan that can be repeated across many sites"
    ],
    proofExample: {
      client: "Deloitte USI",
      description: "We work with Deloitte to set AV standards across 1,000+ rooms in India."
    }
  },
  {
    id: "design",
    slug: "design",
    name: "Design",
    oneLine: "Acoustic simulations, equipment line schematics, BTU calculations, and rack elevations.",
    whatWeDo: "We design AV systems around the physical room, the technical requirements and the way the client's operations run. Before anything is bought or installed, the system is simulated and drawn, so the plan and the finished room match.",
    youGet: [
      "AV simulation and drawings",
      "Rack elevations and cable schedules",
      "Heat load (BTU) calculations based on actual equipment placement"
    ],
    proofExample: {
      client: "Siemens",
      description: "Design consulting led into 2,000 rooms across India."
    }
  },
  {
    id: "supply",
    slug: "supply",
    name: "Supply",
    oneLine: "Direct manufacturer procurement, line-by-line logistics tracking, and custom fabrication.",
    whatWeDo: "We supply tested, tailored products and deliver on time. Hardware is tracked line by line from order to site, so everyone can see what has arrived, what is pending, and when the rest is coming.",
    youGet: [
      "A live hardware procurement and tracking report (make, model, quantities, delivery status, ETA)",
      "Dead-on-arrival checks and RMA handling",
      "Custom-made items where needed, such as patch panels and mounting brackets"
    ],
    proofExample: {
      client: "Enterprise Tech Campus",
      description: "Hardware tracking report tracking 3,400+ line items with zero site delays."
    }
  },
  {
    id: "implementation",
    slug: "implementation",
    name: "Implementation",
    oneLine: "12-step SOP deployment, rack staging, DSP tuning, and AQ-AV CQT certification.",
    whatWeDo: "We install, configure, program and test. We keep to the timeline, document everything, and stay within the agreed budget. Each project follows a written 12-step procedure that runs from site coordination to attic stock handover.",
    youGet: [
      "Site coordination and progress reporting room by room",
      "Installation, dressing and cabling to a consistent standard",
      "Programming and control interfaces",
      "Commissioning against the AQ-AV CQT checklist",
      "Demo, training and handover documentation"
    ],
    proofExample: {
      client: "Google",
      description: "Lifecycle replacement of 1,000+ rooms across Bangalore, Hyderabad, Singapore and Kuala Lumpur, with limited working hours and careful decommissioning of old systems."
    }
  },
  {
    id: "support-and-service",
    slug: "support-and-service",
    name: "Support and service",
    oneLine: "Helpdesk SLA, L1/L2 engineering, preventive maintenance, and remote DSP managed services.",
    whatWeDo: "Our work does not end at handover. We provide helpdesk support, maintenance, and remote or on-site service. Every incident gets a number, an engineer, a closure report, and a place in the monthly or quarterly report.",
    youGet: [
      "Helpdesk by phone, email or ticket",
      "L1 and L2 support engineers, with a service manager for escalation",
      "OEM and RMA handling for major faults",
      "Managed services, including remote programming and configuration",
      "Monthly or quarterly incident reports"
    ],
    proofExample: {
      client: "Micron",
      description: "Our AQ-AV CQT certified engineers handle managed services for programming, configuration and quality checks in Singapore and Taiwan."
    }
  }
];

export const valueAddedServices = {
  rackStaging: {
    title: "Rack staging",
    summary: "We build, wire and test racks in our own facility before they go to site.",
    metrics: [
      { label: "Onsite man hours", value: "50% fewer", note: "Eliminates chaotic field wiring" },
      { label: "Simulation to implementation", value: "100% match", note: "Verified against thermal & power specs" },
      { label: "RMA turnaround", value: "70% faster", note: "DOA spotted before dispatch" },
      { label: "Deployment quality", value: "20% better", note: "Standardised wire lacing & labeling" },
      { label: "Delivery and handover", value: "30% shorter", note: "Plug-and-play connection on site" }
    ]
  },
  cqtTesting: {
    title: "Commissioning and testing (AQ-AV CQT)",
    summary: "Every room is tested with calibrated instruments, and the results are recorded in a report.",
    instruments: [
      "Fluke 62 MAX (thermal & temperature checks)",
      "NTi XL2 with M4260 (audio SPL, RT60 & STIPA analysis)",
      "Klein Tools CL700 (electrical load & circuit verification)",
      "Murideo Fox & Hound (HDMI 4K video signal & EDID testing)",
      "Fluke DSX-5000 (Cat6/Cat6A certified cable link verification)"
    ],
    disciplines: [
      {
        name: "Video verification",
        items: "Display focus and illumination, laptop resolution, viewing distance and image-height ratio."
      },
      {
        name: "Audio verification",
        items: "Ambient noise baseline, codec volume levels, RT60 reverberation time, noise criteria compliance."
      },
      {
        name: "Cable certification",
        items: "Certified link tests with full margin results, wire-map verification, and return loss documentation."
      }
    ]
  },
  managedServices: {
    title: "Managed services",
    summary: "Remote configuration, DSP tuning, firmware management, and continuous monitoring across multiple countries.",
    examples: [
      { client: "Amdocs", geography: "Israel, UK, USA, Philippines, Singapore" },
      { client: "Persistent Systems", geography: "USA, Malaysia, India" },
      { client: "Micron Technologies", geography: "Singapore, Taiwan" }
    ]
  }
};

export interface Certification {
  name: string;
  body: string;
  description: string;
  category: "Professional Credentials" | "Enterprise Standards";
}

export const certificationsData: Certification[] = [
  {
    name: "AVIXA CTS / CTS-D / CTS-I",
    body: "AVIXA (Audiovisual and Integrated Experience Association)",
    description: "Industry gold standard for AV design, installation and project management engineering.",
    category: "Professional Credentials"
  },
  {
    name: "AQ-AV CQT (Certified Quality Technician)",
    body: "Association for Quality in Audio Visual Technology",
    description: "Calibrated objective testing standard for audio, video, and physical AV installations.",
    category: "Professional Credentials"
  },
  {
    name: "PSNI Global Deployment Partner",
    body: "PSNI Global Alliance",
    description: "Vetted international consortium of premier technology integration specialists with standardized global SLA delivery.",
    category: "Professional Credentials"
  },
  {
    name: "PMP (Project Management Professional)",
    body: "Project Management Institute",
    description: "Formal structured project controls, risk mitigation, and milestone delivery frameworks.",
    category: "Professional Credentials"
  },
  {
    name: "Dante Certified Level 3",
    body: "Audinate",
    description: "Advanced Dante IP audio networking, multi-subnet clocking, and redundant routing.",
    category: "Professional Credentials"
  },
  {
    name: "Crestron DMC-E-4K & DMC-D-4K",
    body: "Crestron Electronics",
    description: "DigitalMedia 4K Certified Engineer and Designer credentials.",
    category: "Professional Credentials"
  },
  {
    name: "Q-SYS Certified Systems Architect",
    body: "QSC",
    description: "Advanced audio, video, and control enterprise system programming on Q-SYS ecosystem.",
    category: "Professional Credentials"
  },
  {
    name: "BSS Audio Soundweb London",
    body: "Harman Professional",
    description: "Digital signal processing matrix configuration and architectural sound dispersion.",
    category: "Professional Credentials"
  },
  {
    name: "Cisco CCNA (Routing & Switching)",
    body: "Cisco Systems",
    description: "Corporate enterprise network topology, multicast routing, and VLAN segment security.",
    category: "Professional Credentials"
  },
  {
    name: "Extron Certified AV Associate",
    body: "Extron",
    description: "Video switching, EDID management, and commercial control systems.",
    category: "Professional Credentials"
  },
  {
    name: "Kramer Certified AV Specialist",
    body: "Kramer Electronics",
    description: "Pro AV signal distribution and collaborative wireless architectures.",
    category: "Professional Credentials"
  },
  {
    name: "Shure Audio Institute Certified",
    body: "Shure Incorporated",
    description: "Microflex Advance beamforming array acoustics and Dante integration.",
    category: "Professional Credentials"
  },
  {
    name: "ISO 9001:2015 Quality Management",
    body: "Bureau Veritas Certification",
    description: "Certified systematic quality management system across all engineering and deployment stages.",
    category: "Enterprise Standards"
  },
  {
    name: "Great Place to Work",
    body: "Great Place to Work Institute India",
    description: "Certified back-to-back in India for 2024–25 and 2025–26 (Jul 2025 – Jul 2026).",
    category: "Enterprise Standards"
  }
];

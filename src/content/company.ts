/**
 * Company information directly from OI_AV_Overview.pdf
 */

export interface CompanyInfo {
  name: string;
  legalName: string;
  foundedYear: number;
  headquarters: string;
  totalPeople: number;
  totalOffices: number;
  roomsDeployedYear: string; // "more than 2,500" in 2024-25 (2,518 total)
  businesses: {
    name: string;
    slug: string;
    color: string;
    description: string;
    badge?: string;
  }[];
  approach3Rs: {
    title: string;
    body: string;
  }[];
  workforceTeams: {
    team: string;
    headcount: number;
    sharePercent: number;
  }[];
  gptwRecognition: string;
  dunsNumber: string;
  isoCertifications: {
    standard: string;
    certifier?: string;
    status: 'Certified' | 'In progress';
  }[];
}

export const companyData: CompanyInfo = {
  name: "Online Instruments",
  legalName: "Online Instruments (India) Private Limited",
  foundedYear: 2006,
  headquarters: "Bengaluru, Karnataka, India",
  totalPeople: 527,
  totalOffices: 18,
  roomsDeployedYear: "more than 2,500 spaces in 2024–25",
  businesses: [
    {
      name: "AV System Integration",
      slug: "av-system-integration",
      color: "var(--teal)",
      description: "The core of what we do. It covers consultancy, design, supply, installation and ongoing support for meeting rooms, training rooms, command centres, customer experience centres, digital signage and auditoriums.",
    },
    {
      name: "LOGIC",
      slug: "logic",
      color: "var(--logic)",
      // [CLIENT TO CONFIRM: what LOGIC products are, one sentence]
      description: "Our in-house brand engineering commercial display solutions, interactive touch panels, and specialised mounting hardware engineered specifically for collaborative workspaces.",
      badge: "In-house brand",
    },
    {
      name: "Manufacturing",
      slug: "manufacturing",
      color: "var(--make)",
      // [CLIENT TO CONFIRM: wider manufacturing scope]
      description: "Custom manufacturing that lets us build what is not available off the shelf. Custom patch panels, architectural table boxes, and speaker-mount brackets in our recent project tracking are examples.",
      badge: "Custom engineering",
    },
  ],
  approach3Rs: [
    {
      title: "Relationships",
      body: "Most of our largest clients have come back for more rooms, more countries and more years. Amazon, Micron, Google, TCS, Deloitte, Siemens and Amdocs each have more than 1,000 rooms with us.",
    },
    {
      title: "Relevance",
      body: "We design around the room, the building and the way the client's teams actually work, not around a product list.",
    },
    {
      title: "Results",
      body: "We commission and test every room against a written checklist and hand over documentation. The reports are in the How we work section.",
    },
  ],
  workforceTeams: [
    { team: "Projects", headcount: 394, sharePercent: 74.8 },
    { team: "Supply management", headcount: 80, sharePercent: 15.2 },
    { team: "Technology & solutions engineering", headcount: 32, sharePercent: 6.1 },
    { team: "Programming", headcount: 21, sharePercent: 4.0 },
  ],
  gptwRecognition: "Certified as a Great Place to Work in India for 2024–25 and again for 2025–26 (Jul 2025 – Jul 2026).",
  dunsNumber: "65-008-6072",
  isoCertifications: [
    { standard: "ISO 9001:2015", certifier: "Bureau Veritas", status: "Certified" },
    { standard: "PSNI Global Alliance", certifier: "Certified Global Deployment Partner", status: "Certified" },
    { standard: "ISO 27001 (Information Security)", certifier: "Accredited Body", status: "In progress" },
    { standard: "ISO 45001 (Occupational Health & Safety)", certifier: "Accredited Body", status: "In progress" },
    { standard: "ISO 14001 (Environmental Management)", certifier: "Accredited Body", status: "In progress" },
  ],
};

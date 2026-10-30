export interface PartnerGroup {
  groupName: string;
  description: string;
  names: string[];
}

export const partnersData: PartnerGroup[] = [
  {
    groupName: "Technology Manufacturers",
    description: "Certified engineering and tier-one direct procurement partnerships with leading audio, video, and unified communication manufacturers.",
    names: [
      "Crestron",
      "Q-SYS",
      "Shure",
      "Sony",
      "Samsung",
      "Cisco",
      "Zoom",
      "Poly",
      "Biamp",
      "Extron",
      "LG Commercial",
      "Panasonic",
      "Harman",
      "Sennheiser",
      "Jabra",
      "Logitech",
      "Neat",
      "Bose Professional",
      "Meyer Sound",
      "Audio-Technica",
      "Kramer",
      "Epson",
      "Blackmagic Design",
      "Belden",
      "Panduit",
      "Chief"
    ]
  },
  {
    groupName: "Authorized Distribution Partners",
    description: "Enterprise supply chain and inventory warehousing networks ensuring multi-region project delivery with zero logistics latency.",
    names: [
      "Wesco Anixter",
      "Ingram Micro",
      "Redington",
      "Brightstar",
      "CDW",
      "TD SYNNEX"
    ]
  }
];

export const clientRelationships = [
  { name: "Siemens", rooms: "2,000 rooms", focus: "Industrial & Corporate Facilities" },
  { name: "Amazon", rooms: "1,500+ rooms", focus: "Corporate Headquarters & Logistics" },
  { name: "Micron Technologies", rooms: "1,500+ rooms", focus: "Global Semiconductor Facilities" },
  { name: "Google", rooms: "1,000+ rooms", focus: "Lifecycle Upgrades & Engineering Campuses" },
  { name: "Deloitte USI", rooms: "1,000+ rooms", focus: "Workplace Standards & Meeting Suites" },
  { name: "TCS", rooms: "1,000+ rooms", focus: "Software Delivery War Rooms & Briefings" },
  { name: "Amdocs", rooms: "1,000+ rooms", focus: "Global Managed Services across 6 Countries" },
  { name: "Persistent Systems", rooms: "450+ rooms", focus: "Multi-Country Executive Boardrooms" }
];

export const pmcConsultancies = [
  "CBRE",
  "JLL (Jones Lang LaSalle)",
  "Cushman & Wakefield",
  "Colliers International",
  "Turner & Townsend"
];

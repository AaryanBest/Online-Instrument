export type OfficeRegion = "India" | "Middle East" | "Rest of Asia" | "USA";

export interface Office {
  city: string;
  country: string;
  region: OfficeRegion;
  hq?: boolean;
  addressNote?: string;
  facilities?: string;
}

export const officesData: Office[] = [
  // India (9 offices)
  { city: "Bengaluru", country: "India", region: "India", hq: true, addressNote: "Global Headquarters, Central Engineering & Staging Facility", facilities: "Engineering Lab, 40-Rack Staging Floor, R&D" },
  { city: "Ahmedabad", country: "India", region: "India", addressNote: "Regional Project Office & Support Centre" },
  { city: "Chennai", country: "India", region: "India", addressNote: "Southern Regional Operations & Service Depot" },
  { city: "Hyderabad", country: "India", region: "India", addressNote: "Tech Hub Delivery Centre & NOC Support" },
  { city: "New Delhi", country: "India", region: "India", addressNote: "NCR Regional Headquarters & Government Liaison" },
  { city: "Kochi", country: "India", region: "India", addressNote: "Kerala Project Delivery & Field Support" },
  { city: "Kolkata", country: "India", region: "India", addressNote: "Eastern Region Integration Office" },
  { city: "Mumbai", country: "India", region: "India", addressNote: "Financial District Operations & High-Rise Deployment" },
  { city: "Pune", country: "India", region: "India", addressNote: "Automotive & Manufacturing Corridor Delivery Hub" },

  // Middle East (2 offices)
  { city: "Dubai", country: "United Arab Emirates", region: "Middle East", addressNote: "GCC Regional Office & Enterprise Logistics" },
  { city: "Riyadh", country: "Saudi Arabia", region: "Middle East", addressNote: "KSA Operations & Vision 2030 Project Delivery" },

  // Rest of Asia (4 offices)
  { city: "Kuala Lumpur", country: "Malaysia", region: "Rest of Asia", addressNote: "Southeast Asia Integration & Support Hub" },
  { city: "Manila", country: "Philippines", region: "Rest of Asia", addressNote: "BPO Sector Operations & Enterprise Deployment" },
  { city: "Singapore", country: "Singapore", region: "Rest of Asia", addressNote: "APAC Regional Headquarters & CQT Engineering Lab" },
  { city: "Taipei", country: "Taiwan", region: "Rest of Asia", addressNote: "Semiconductor & High-Tech Facilities Support" },

  // USA (3 offices)
  { city: "San Francisco", country: "United States", region: "USA", addressNote: "Bay Area Client Support & West Coast Liaison" },
  { city: "New Jersey", country: "United States", region: "USA", addressNote: "East Coast Operations & Financial Enterprise Services" },
  { city: "Phoenix", country: "United States", region: "USA", addressNote: "Southwest Technology Corridor Delivery" }
];

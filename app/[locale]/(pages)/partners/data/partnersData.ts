export type PartnerCategory =
  | "all"
  | "electrical"
  | "hvac"
  | "plumbing"
  | "systems";

export interface PartnerItem {
  id: string;
  name: string;
  category: "electrical" | "hvac" | "plumbing" | "systems";
  logo: string;
  description: string;
  featured?: boolean;
  tagline?: string;
}

import {
  HiOutlineBuildingLibrary,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineGlobeAsiaAustralia,
} from "react-icons/hi2";

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  location: string;
  scope: string;
  icon: React.ElementType;
}

export const PARTNER_ITEMS: PartnerItem[] = [
  // Electrical
  {
    id: "schneider",
    name: "Schneider Electric",
    category: "electrical",
    logo: "/images/partners/schneider-electric.png",
    description:
      "Energy management & low-voltage electrical distribution systems",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "abb",
    name: "ABB",
    category: "electrical",
    logo: "/images/partners/abb.png",
    description:
      "Electrification products, MV switchgears & power distribution",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "siemens",
    name: "Siemens",
    category: "electrical",
    logo: "/images/partners/siemens.png",
    description:
      "Industrial automation, circuit breakers & electrical engineering",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "legrand",
    name: "Legrand",
    category: "electrical",
    logo: "/images/partners/legrand.png",
    description:
      "Cable management, power distribution & electrical wiring devices",
    tagline: "Certified Supplier",
  },
  {
    id: "alfanar",
    name: "Al Fanar",
    category: "electrical",
    logo: "/images/partners/alfanar.svg",
    description: "Electrical construction products & distribution panels",
    tagline: "Approved Manufacturer",
  },
  {
    id: "belden",
    name: "Belden",
    category: "electrical",
    logo: "/images/partners/belden.svg",
    description: "High-performance signal transmission & network cabling",
    tagline: "Approved Supplier",
  },
  {
    id: "elsewedy",
    name: "Elsewedy Electric",
    category: "electrical",
    logo: "/images/partners/elsewedy.svg",
    description: "Power cables, transformers & electrical infrastructure",
    tagline: "Regional Partner",
  },
  {
    id: "riyadh-cables",
    name: "Riyadh Cables",
    category: "electrical",
    logo: "/images/partners/riyadh-cables.svg",
    description: "High & medium voltage power & control cables",
    tagline: "KSA Certified",
  },

  // HVAC
  {
    id: "carrier",
    name: "Carrier",
    category: "hvac",
    logo: "/images/partners/carrier.png",
    description:
      "Commercial chillers, air handling units & central climate control",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "trane",
    name: "Trane",
    category: "hvac",
    logo: "/images/partners/trane.png",
    description:
      "Eco-friendly commercial HVAC systems & chilled water plant controls",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "daikin",
    name: "Daikin",
    category: "hvac",
    logo: "/images/partners/daikin.png",
    description: "VRF air conditioning solutions & advanced chiller technology",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "york",
    name: "York",
    category: "hvac",
    logo: "/images/partners/york.svg",
    description: "Industrial chillers, fan coil units & ventilation equipment",
    tagline: "Approved Vendor",
  },
  {
    id: "zamil",
    name: "Zamil Air Conditioners",
    category: "hvac",
    logo: "/images/partners/zamil.svg",
    description: "Heavy-duty commercial AC units & ductwork solutions",
    tagline: "National Brand",
  },
  {
    id: "gree",
    name: "Gree",
    category: "hvac",
    logo: "/images/partners/gree.svg",
    description: "Central HVAC systems & smart temperature management",
    tagline: "Certified Supplier",
  },

  // Plumbing & Firefighting
  {
    id: "grundfos",
    name: "Grundfos",
    category: "plumbing",
    logo: "/images/partners/grundfos.png",
    description: "High-efficiency water booster pumps & hydronic circulation",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "naffco",
    name: "Naffco",
    category: "plumbing",
    logo: "/images/partners/naffco.svg",
    description:
      "NFPA-certified fire pumps, sprinklers & fire protection networks",
    featured: true,
    tagline: "NFPA Certified",
  },
  {
    id: "ksb",
    name: "KSB",
    category: "plumbing",
    logo: "/images/partners/ksb.svg",
    description: "Industrial water pumps & heavy duty valve systems",
    tagline: "Approved Vendor",
  },
  {
    id: "hcbm",
    name: "HCBM",
    category: "plumbing",
    logo: "/images/partners/hcbm.svg",
    description: "High-pressure piping systems & sanitary infrastructure",
    tagline: "Certified Supplier",
  },
  {
    id: "neproplast",
    name: "Neproplast",
    category: "plumbing",
    logo: "/images/partners/neproplast.svg",
    description: "Industrial UPVC & CPVC pressure pipe networks",
    tagline: "KSA Manufacturer",
  },

  // Smart Systems & Integration
  {
    id: "cisco",
    name: "Cisco",
    category: "systems",
    logo: "/images/partners/cisco.png",
    description:
      "Enterprise networking, data center infrastructure & IP systems",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "samsung",
    name: "Samsung",
    category: "systems",
    logo: "/images/partners/samsung.png",
    description: "Smart building displays, surveillance & digital signage",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "honeywell",
    name: "Honeywell",
    category: "systems",
    logo: "/images/partners/honeywell.png",
    description: "Building automation system (BMS) & intelligent security",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "bosch",
    name: "Bosch",
    category: "systems",
    logo: "/images/partners/bosch.png",
    description:
      "IP video surveillance, access control & public address systems",
    featured: true,
    tagline: "Tier-1 OEM Partner",
  },
  {
    id: "lg",
    name: "LG",
    category: "systems",
    logo: "/images/partners/lg.svg",
    description: "Commercial video walls & smart display management",
    tagline: "Approved Vendor",
  },
  {
    id: "hp",
    name: "HP",
    category: "systems",
    logo: "/images/partners/hp.svg",
    description: "Data center server infrastructure & workstation hardware",
    tagline: "Enterprise Partner",
  },
  {
    id: "dell",
    name: "Dell Technologies",
    category: "systems",
    logo: "/images/partners/dell.svg",
    description: "Enterprise storage, compute servers & network nodes",
    tagline: "Enterprise Partner",
  },
  {
    id: "huawei",
    name: "Huawei",
    category: "systems",
    logo: "/images/partners/huawei.svg",
    description: "Enterprise fiber optic networks & smart campus technology",
    tagline: "Approved Vendor",
  },
  {
    id: "avaya",
    name: "Avaya",
    category: "systems",
    logo: "/images/partners/avaya.svg",
    description: "Unified IP telephony & communication systems",
    tagline: "Approved Vendor",
  },
  {
    id: "axis",
    name: "Axis Communications",
    category: "systems",
    logo: "/images/partners/axis.svg",
    description: "Advanced IP security cameras & smart access control",
    tagline: "Certified Integration",
  },
];

export const CLIENTS_LIST: ClientItem[] = [
  {
    id: "hajj-ministry",
    name: "Ministry of Hajj and Umrah",
    category: "Government & Public Infrastructure",
    location: "Saudi Arabia",
    scope: "Public Facilities MEP & Smart Systems",
    icon: HiOutlineBuildingLibrary,
  },
  {
    id: "nwc",
    name: "National Water Company (NWC)",
    category: "Water & Utilities Infrastructure",
    location: "Makkah, KSA",
    scope: "Administrative Building MEP Upgrade",
    icon: HiOutlineGlobeAsiaAustralia,
  },
  {
    id: "rta-dubai",
    name: "Roads & Transport Authority (RTA)",
    category: "Transport & Datacenter Infrastructure",
    location: "Dubai, UAE",
    scope: "Data Center MEP Infrastructure",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "pnu",
    name: "Princess Noura University (PNU)",
    category: "Higher Education Infrastructure",
    location: "Riyadh, KSA",
    scope: "Structured Cabling & Low Current Systems",
    icon: HiOutlineAcademicCap,
  },
  {
    id: "olayan",
    name: "Olayan Group",
    category: "Real Estate & Hospitality",
    location: "Makkah / KSA",
    scope: "Olayan Towers & Golden Hotel MEP Works",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "attameer",
    name: "ATTAMEER Construction",
    category: "High-Rise Commercial & Residential",
    location: "Makkah, KSA",
    scope: "Al Maqam Towers (A-D) & Al Naseem Towers",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "bafel",
    name: "Omar Saeed Bafel Co. (OBSC)",
    category: "Hospitality & Hotel Towers",
    location: "Makkah, KSA",
    scope: "12+ Janadriah & Al Shrooq Hotel Towers",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "al-zaydi",
    name: "Al Zaydi Group",
    category: "Industrial & Commercial Facilities",
    location: "Makkah, KSA",
    scope: "Hyper Abraj, Concrete Factory & Hotel MEP",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "saudi-post",
    name: "Saudi Post",
    category: "Government Logistics",
    location: "Jeddah, KSA",
    scope: "Postal Facility MEP Upgrade & Systems",
    icon: HiOutlineBuildingLibrary,
  },
  {
    id: "merrill-lynch",
    name: "Bank of America (Merrill Lynch)",
    category: "Banking & Financial Services",
    location: "Riyadh, KSA",
    scope: "Corporate Office MEP Installation",
    icon: HiOutlineCurrencyDollar,
  },
  {
    id: "mobily",
    name: "Mobily Telecommunications",
    category: "Telecom & Datacenter",
    location: "KSA",
    scope: "Terminal Building MEP & Low Current",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "al-jomaih",
    name: "Al Jomaih Automotive (GM)",
    category: "Automotive Commercial",
    location: "KSA",
    scope: "Cadillac Flagship Showroom MEP",
    icon: HiOutlineBuildingOffice2,
  },
];

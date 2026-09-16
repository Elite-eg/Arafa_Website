import type { Project } from "./constants";

/**
 * Curated project list compiled from the IMDAD business profile.
 * Each entry maps to an existing image asset by category.
 */
export const projects: Project[] = [
  // ── Featured / Major Projects ──
  {
    id: "princess-noura-university",
    title: "Princess Noura University (PNU)",
    category: "low-current",
    client: "Postech Co.",
    location: "Riyadh, KSA",
    scope: "Low Current SCS",
    status: "Finished",
    image: "/images/service-smart.png",
    featured: true,
    description:
      "Delivered a full structured cabling system for Princess Noura bint Abdulrahman University — one of the largest women's universities in the world. The scope covered backbone and horizontal cabling across multiple campus buildings, providing the low-current backbone for data, voice, and security networks.",
    stats: [
      { value: "100%", label: "Campus Backbone" },
      { value: "SCS", label: "Structured Cabling" },
    ],
    highlights: [
      "Campus-wide backbone & horizontal structured cabling (SCS)",
      "High-density data rack setup & fiber optic termination",
      "Integrated IP surveillance & access control connectivity",
      "Full IEEE & TIA/EIA standard compliance & OTDR testing",
    ],
    gallery: [
      "/images/service-smart.png",
      "/images/service-mep.png",
      "/images/hero-bg.png",
    ],
  },
  {
    id: "sofitel-makkah-hotel",
    title: "Sofitel Makkah Hotel",
    category: "mep",
    client: "Beyout Makkah Co.",
    location: "Makkah, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-contracting.png",
    featured: true,
    description:
      "Complete mechanical, electrical, and plumbing engineering for the prestigious Sofitel Makkah hotel. Our team delivered HVAC, power distribution, plumbing, and fire protection systems — all coordinated under strict timeline requirements to meet the hospitality sector's exacting standards.",
    stats: [
      { value: "5-Star", label: "Hospitality Standard" },
      { value: "Full MEP", label: "Disciplines" },
    ],
    highlights: [
      "Centralized chilled-water HVAC system & air handling units (AHUs)",
      "High-voltage transformers & emergency generator power distribution",
      "Domestic water booster pumps & sanitary drainage risers",
      "Automated NFPA-compliant fire sprinkler & alarm systems",
    ],
    gallery: [
      "/images/service-contracting.png",
      "/images/service-firefighting.png",
      "/images/about-team.png",
    ],
  },
  {
    id: "stella-hotel-dubai",
    title: "Stella Hotel (32 Floors)",
    category: "mep",
    client: "Target Co.",
    location: "Dubai, UAE",
    scope: "Full MEP Works",
    status: "Working",
    image: "/images/hero-bg.png",
    featured: true,
    description:
      "A landmark 32-storey hotel tower in Dubai requiring full-scope MEP services including HVAC, electrical power distribution, plumbing risers, firefighting, and BMS integration. Our engineers are coordinating across all MEP disciplines to deliver a world-class hospitality facility.",
    stats: [
      { value: "32", label: "Tower Floors" },
      { value: "BMS", label: "Smart Integration" },
    ],
    highlights: [
      "32-floor MEP riser distribution & electrical busbar system",
      "Central HVAC chillers, FCUs, and energy recovery ventilation",
      "Building Management System (BMS) for smart energy monitoring",
      "Comprehensive firefighting pump room & wet-pipe sprinkler system",
    ],
    gallery: [
      "/images/hero-bg.png",
      "/images/service-mep.png",
      "/images/service-contracting.png",
    ],
  },
  {
    id: "rta-data-center",
    title: "Roads & Transport Authority (RTA)",
    category: "data-center",
    client: "Target Co.",
    location: "Dubai, UAE",
    scope: "Data Center MEP",
    status: "Finished",
    image: "/images/service-smart.png",
    featured: true,
    description:
      "Designed and executed the complete MEP infrastructure for the RTA's mission-critical data center facility. Scope included precision cooling, redundant power supply, UPS integration, raised-floor systems, and environmental monitoring — delivering Tier-III-level reliability.",
    stats: [
      { value: "Tier-III", label: "Data Center Reliability" },
      { value: "24/7", label: "Precision Cooling" },
    ],
    highlights: [
      "Precision N+1 cooling units (CRAC/CRAH) & raised floor airflow",
      "Uninterruptible Power Supply (UPS) & automatic transfer switches (ATS)",
      "FM-200 / Novec 1230 clean agent fire suppression systems",
      "Environmental & leak detection monitoring connected to central BMS",
    ],
    gallery: [
      "/images/service-smart.png",
      "/images/service-mep.png",
      "/images/bg-stats.png",
    ],
  },
  {
    id: "king-salman-oasis-of-science",
    title: "King Salman Oasis of Science",
    category: "mep",
    client: "AKNAN",
    location: "Riyadh, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-mep.png",
    featured: true,
    description:
      "Full MEP engineering services for the King Salman Oasis of Science — a prestigious educational and cultural facility. Our team handled all mechanical, electrical, and plumbing systems, ensuring energy-efficient climate control and reliable power distribution throughout the complex.",
    stats: [
      { value: "100%", label: "Self-Performed" },
      { value: "HVAC", label: "Climate Control" },
    ],
    highlights: [
      "Energy-efficient HVAC climate control for large public exhibition spaces",
      "Low-voltage power distribution & specialized architectural lighting",
      "Plumbing, drainage & rainwater harvesting system engineering",
      "Life safety, fire detection & voice evacuation integration",
    ],
    gallery: [
      "/images/service-mep.png",
      "/images/about-team.png",
      "/images/service-contracting.png",
    ],
  },
  {
    id: "al-maqam-towers",
    title: "Al Maqam Towers (A, B, C, D)",
    category: "mep",
    client: "ATTAMEER Co.",
    location: "Makkah, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-contracting.png",
    featured: true,
    description:
      "A massive four-tower development in Makkah requiring comprehensive MEP installation across all buildings. Our scope covered HVAC, electrical distribution, plumbing, and firefighting systems — delivered under tight coordination with the main contractor.",
    stats: [
      { value: "4", label: "High-Rise Towers" },
      { value: "Full MEP", label: "Scope Package" },
    ],
    highlights: [
      "Comprehensive 4-tower mechanical, electrical & plumbing execution",
      "High-capacity HVAC chiller plant & vertical riser pipe networks",
      "Substation transformer hookups & emergency backup generator sync",
      "Centralized fire pump room & life-safety system monitoring",
    ],
    gallery: [
      "/images/service-contracting.png",
      "/images/hero-bg.png",
      "/images/service-mep.png",
    ],
  },

  // ── Bank / Finance ──
  {
    id: "bank-of-america",
    title: "Bank of America (Merrill Lynch)",
    category: "mep",
    client: "Postech Co.",
    location: "Riyadh, KSA",
    scope: "MEP Works",
    status: "Finished",
    image: "/images/service-mep.png",
    description:
      "MEP installation for the Bank of America — Merrill Lynch corporate offices in Riyadh. Precision engineering to meet the financial sector's stringent requirements for power redundancy, climate control, and security infrastructure.",
  },

  // ── Education ──
  {
    id: "tabouk-university-accommodation",
    title: "Student Accommodation Tabouk University",
    category: "mep",
    client: "Target Co.",
    location: "Tabouk, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/about-team.png",
    description:
      "Full MEP engineering for the student accommodation complex at Tabouk University. Delivered HVAC, plumbing, electrical, and fire safety systems to create comfortable and safe living spaces for students.",
  },
  {
    id: "taif-university-medical-college",
    title: "Medical Science College — Taif University",
    category: "mep",
    client: "Target Co.",
    location: "Taif, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-mep.png",
    description:
      "Complete MEP works for the Medical Science College at Taif University, including laboratory-grade ventilation, clean-room HVAC, specialized plumbing, and reliable electrical distribution systems.",
  },
  {
    id: "shaqraa-university",
    title: "Shaqraa University",
    category: "low-current",
    client: "Petrojet",
    location: "Shaqraa, KSA",
    scope: "Data & Low Current Systems",
    status: "Finished",
    image: "/images/service-smart.png",
    description:
      "Installed comprehensive data networking and low-current systems throughout Shaqraa University campus, delivering structured cabling, access control, and surveillance infrastructure.",
  },

  // ── Government ──
  {
    id: "police-training-institute",
    title: "Police Training Institute",
    category: "mep",
    client: "Target Co.",
    location: "Qatar",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/about-team.png",
    description:
      "Full MEP installation for a government police training institute in Qatar. Scope included climate control, power distribution, plumbing, and fire protection across training halls, dormitories, and administrative buildings.",
  },
  {
    id: "saudi-post-jeddah",
    title: "Saudi Post (Jeddah)",
    category: "mep",
    client: "MERCO Co.",
    location: "Jeddah, KSA",
    scope: "MEP Upgrade",
    status: "Finished",
    image: "/images/service-contracting.png",
    description:
      "MEP upgrade for the Saudi Post facility in Jeddah, modernizing HVAC, electrical, and plumbing systems to improve energy efficiency and operational reliability of the postal hub.",
  },
  {
    id: "ministry-auditorium-riyadh",
    title: "Ministry of Municipality Auditorium",
    category: "mep",
    client: "Petrojet",
    location: "Riyadh, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-mep.png",
    description:
      "Complete MEP engineering for the Ministry of Municipality auditorium in Riyadh, including acoustic-grade HVAC, theatrical lighting systems, and comprehensive plumbing and fire protection.",
  },

  // ── Firefighting ──
  {
    id: "al-hada-hospital",
    title: "Al Hada Armed Force Hospital",
    category: "firefighting",
    client: "Honeywell Co.",
    location: "Taif, KSA",
    scope: "Fire Alarm System",
    status: "Working",
    image: "/images/service-firefighting.png",
    description:
      "Partnering with Honeywell to deliver a comprehensive fire alarm and detection system for Al Hada Armed Forces Hospital — a critical healthcare facility requiring the highest standards of life-safety engineering.",
  },
  {
    id: "zamzam-health-building",
    title: "Zamzam Health Building 3",
    category: "firefighting",
    client: "SVC Co.",
    location: "Makkah, KSA",
    scope: "Fire Fighting Systems",
    status: "Working",
    image: "/images/service-firefighting.png",
    description:
      "Design and installation of firefighting systems including sprinklers, standpipes, fire pump rooms, and control panels for the Zamzam Health Building in Makkah — ensuring full compliance with international fire safety codes.",
  },

  // ── Automotive ──
  {
    id: "cadillac-showroom",
    title: "Cadillac Showroom — Al Jomaih",
    category: "mep",
    client: "Somit Co.",
    location: "KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-contracting.png",
    description:
      "Complete MEP works for the flagship Cadillac showroom operated by Al Jomaih Automotive. Delivered precision climate control, showroom lighting, and plumbing systems to meet premium automotive retail standards.",
  },

  // ── Telecom ──
  {
    id: "mobily-terminal",
    title: "Mobily Terminal Building",
    category: "mep",
    client: "Petrojet",
    location: "KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-mep.png",
    description:
      "Full MEP engineering for the Mobily telecommunications terminal building, including precision cooling for equipment rooms, redundant power distribution, and comprehensive fire protection.",
  },

  // ── Makkah Hotels — Olayan Group ──
  {
    id: "olayan-towers-qudai",
    title: "Olayan Tower Qudai",
    category: "mep",
    client: "Olayan Group",
    location: "Makkah, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-contracting.png",
    description:
      "Complete MEP installation for the Olayan Tower in the Qudai district of Makkah, delivering HVAC, electrical, plumbing, and firefighting systems for one of the city's prominent hospitality towers.",
  },
  {
    id: "olayan-golden-hotel",
    title: "Olayan Golden Hotel",
    category: "mep",
    client: "Olayan Group",
    location: "Makkah, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/hero-bg.png",
    description:
      "Full-scope MEP engineering for the Olayan Golden Hotel in Makkah. Our team delivered all mechanical, electrical, and plumbing works including central HVAC, power distribution, and fire protection systems.",
  },

  // ── Makkah Hotels — Bafel Co. ──
  {
    id: "janadriah-palace-hotel",
    title: "Hotel Al Janadriah Palace",
    category: "mep",
    client: "Omar Saeed Bafel Co. (OBSC)",
    location: "Makkah, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/service-contracting.png",
    description:
      "Complete MEP services for the Al Janadriah Palace Hotel in Makkah — one of multiple hotel towers delivered for Omar Saeed Bafel Company. Scope covered HVAC, electrical, plumbing, and fire protection.",
  },

  // ── Retail / Commercial ──
  {
    id: "ikea-riyadh",
    title: "IKEA Store (Riyadh)",
    category: "low-current",
    client: "Sister Company",
    location: "Riyadh, KSA",
    scope: "Structured Cabling",
    status: "Finished",
    image: "/images/service-smart.png",
    description:
      "Structured cabling installation for the IKEA retail store in Riyadh, providing backbone and horizontal data cabling to support point-of-sale, security, and communications systems across the large retail space.",
  },
  {
    id: "al-andalus-intercontinental",
    title: "Al Andalus Intercontinental Hotel",
    category: "mep",
    client: "Direct",
    location: "Jeddah, KSA",
    scope: "Full MEP Works",
    status: "Finished",
    image: "/images/hero-bg.png",
    description:
      "Full MEP engineering for the Al Andalus Intercontinental Hotel in Jeddah — a premium hospitality project requiring world-class HVAC, electrical distribution, plumbing, and fire protection systems.",
  },

  // ── Industrial ──
  {
    id: "jouf-cement-factory",
    title: "Jouf Cement Factory",
    category: "civil-mep",
    client: "MERCO Sister Company",
    location: "Jouf, KSA",
    scope: "Civil & MEP",
    status: "Finished",
    image: "/images/about-team.png",
    description:
      "Civil construction and full MEP works for the Jouf Cement Factory. Scope included industrial HVAC, heavy-duty electrical distribution, process plumbing, and fire protection for the manufacturing facility.",
  },

  // ── Education (Civil + MEP) ──
  {
    id: "jazan-schools",
    title: "7 Schools (Jazan)",
    category: "civil-mep",
    client: "MERCO Sister Company",
    location: "Jazan, KSA",
    scope: "Civil & MEP",
    status: "Finished",
    image: "/images/service-mep.png",
    description:
      "Civil construction and complete MEP installation across seven school buildings in the Jazan region. Delivered classroom-grade HVAC, lighting, plumbing, and fire safety for each school to Ministry of Education standards.",
  },

  // ── Healthcare ──
  {
    id: "king-fahd-hospital",
    title: "King Fahd M. Hospital",
    category: "low-current",
    client: "MERCO",
    location: "Jeddah, KSA",
    scope: "Fire Alarm & CCTV",
    status: "Finished",
    image: "/images/service-firefighting.png",
    description:
      "Installation of fire alarm and CCTV surveillance systems for King Fahd Hospital in Jeddah — critical life-safety and security infrastructure for a major healthcare facility.",
  },
];

/** Helper: get unique categories present in the data */
export function getProjectCategories() {
  const cats = new Set(projects.map((p) => p.category));
  return Array.from(cats);
}

/** Helper: get project by id */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/** Helper: get related projects (same category, excluding self) */
export function getRelatedProjects(
  project: Project,
  limit = 3,
): Project[] {
  return projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, limit);
}

/** Helper: get featured projects */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

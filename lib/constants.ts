// Non-translatable constants — raw contact data & URLs
export const COMPANY = {
  phone: "+966-057-353-4185",
  phoneRaw: "966573534185",
  email: "aljazirallilimdad@gmail.com",
  address: "7676 - Bathaa Quraish, Makkah Al Mokaramah, KSA",
  lat: 21.3635,
  lng: 39.8226,
  whatsapp: "966573534185",
  whatsappMessage: "Hello, I would like to inquire about your services.",
  website: "https://www.aljazira-imdad.com",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "#",
  twitter: "#",
  instagram: "#",
  facebook: "#",
} as const;

export const NAV_LINKS = [
  { key: "home", href: "/home" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects" },
  { key: "partners", href: "/partners" },
  { key: "contact", href: "/contact" },
] as const;

export const PARTNERS = [
  "Schneider Electric",
  "ABB",
  "Carrier",
  "Trane",
  "Siemens",
  "Cisco",
  "Honeywell",
  "Samsung",
  "LG",
  "Daikin",
  "Grundfos",
  "Bosch",
  "Legrand",
  "Naffco",
  "Dell",
  "HP",
] as const;

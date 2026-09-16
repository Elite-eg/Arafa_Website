import {
  HiOutlineOfficeBuilding,
  HiOutlineFire,
  HiOutlineChip,
  HiOutlineServer,
  HiOutlineCube,
  HiOutlineUserGroup,
  HiOutlineLocationMarker,
  HiOutlineCog,
  HiOutlineCheckCircle,
  HiOutlineTag,
} from "react-icons/hi";

// ─── Types ───

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  /** URL-safe slug used as the route param */
  id: string;
  /** Display title */
  title: string;
  /** Filter category */
  category: ProjectCategory;
  /** Client / developer company name */
  client: string;
  /** City, Country */
  location: string;
  /** Brief scope description */
  scope: string;
  /** Current project status */
  status: "Finished" | "Working";
  /** Path to the card thumbnail image */
  image: string;
  /** Short description for the detail page */
  description: string;
  /** Whether this project appears on the homepage preview */
  featured?: boolean;
  /** Key metrics / stats for detail page */
  stats?: ProjectStat[];
  /** Key engineering deliverables / scope highlights */
  highlights?: string[];
  /** Gallery image URLs */
  gallery?: string[];
}

export type ProjectCategory =
  | "all"
  | "mep"
  | "firefighting"
  | "low-current"
  | "data-center"
  | "civil-mep";

// ─── Filter Category Keys (ordered) ───

export const CATEGORY_KEYS: ProjectCategory[] = [
  "all",
  "mep",
  "firefighting",
  "low-current",
  "data-center",
  "civil-mep",
];

// ─── Category Icons (for filter tabs) ───

export const CATEGORY_ICONS: Record<string, React.ElementType> = {
  mep: HiOutlineOfficeBuilding,
  firefighting: HiOutlineFire,
  "low-current": HiOutlineChip,
  "data-center": HiOutlineServer,
  "civil-mep": HiOutlineCube,
};

// ─── Category Labels (human-readable) ───

export const CATEGORY_LABELS: Record<string, string> = {
  mep: "MEP Works",
  firefighting: "Firefighting",
  "low-current": "Low Current",
  "data-center": "Data Center",
  "civil-mep": "Civil & MEP",
};

// ─── Info Card Icons (detail page) ───

export const INFO_ICON_MAP = {
  client: HiOutlineUserGroup,
  location: HiOutlineLocationMarker,
  scope: HiOutlineCog,
  status: HiOutlineCheckCircle,
  category: HiOutlineTag,
} as const;

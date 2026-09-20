"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { HiOutlineCheckCircle } from "react-icons/hi";
import type { Project } from "@/app/[locale]/(pages)/projects/data/constants";

interface ProjectHighlightsProps {
  project: Project;
  titleLabel?: string;
  badgeLabel?: string;
}

const DEFAULT_HIGHLIGHTS: Record<string, string[]> = {
  mep: [
    "Complete mechanical, electrical & plumbing system engineering",
    "Energy-efficient HVAC climate control & air handling distribution",
    "High-capacity electrical power distribution & emergency generator sync",
    "Sanitary drainage, water booster pumping & rainwater management",
  ],
  firefighting: [
    "NFPA-compliant automatic fire sprinkler & standpipe systems",
    "Addressable fire alarm control panel & smoke evacuation setup",
    "FM-200 clean agent gaseous fire suppression for equipment rooms",
    "Certified fire pump room installation & 24/7 life safety monitoring",
  ],
  "low-current": [
    "Structured cabling system (SCS) backbone & horizontal cabling",
    "High-density data center rack wiring & fiber optic termination",
    "IP video surveillance (CCTV), access control & intruder alarm systems",
    "Building Management System (BMS) & IoT sensor integration",
  ],
  "data-center": [
    "Mission-critical Tier-III precision cooling & raised floor ventilation",
    "N+1 redundant UPS power supply & automatic transfer switches (ATS)",
    "Clean-agent fire suppression & early warning smoke detection (VESDA)",
    "Environmental monitoring & DCIM software integration",
  ],
  "civil-mep": [
    "Integrated civil structure execution & full MEP service installation",
    "Heavy-duty industrial power distribution & process plumbing risers",
    "HVAC ventilation systems for specialized commercial & industrial units",
    "Turnkey project delivery conforming strictly to international codes",
  ],
};

export default function ProjectHighlights({
  project,
  titleLabel = "Key Deliverables & Technical Highlights",
  badgeLabel = "Engineering Scope",
}: ProjectHighlightsProps) {
  const highlights =
    project.highlights && project.highlights.length > 0
      ? project.highlights
      : DEFAULT_HIGHLIGHTS[project.category] || DEFAULT_HIGHLIGHTS.mep;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image — subtle behind dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-stats.png"
          alt=""
          fill
          className="object-cover opacity-[0.6]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark opacity-90" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/20 text-accent-light border border-accent/30 backdrop-blur-md mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {badgeLabel}
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white">
            {titleLabel}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/[0.12] card-hover-lift transition-all"
            >
              <div className="shrink-0 w-8 h-8 rounded-xl bg-accent/20 text-accent-light flex items-center justify-center mt-0.5 border border-accent/30">
                <HiOutlineCheckCircle className="w-5 h-5" />
              </div>
              <p className="text-base text-white/85 leading-relaxed font-medium">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

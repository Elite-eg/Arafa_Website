"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroTextReveal, heroStagger } from "@/lib/animations";
import { HiOutlineArrowLeft } from "react-icons/hi";
import type { Project } from "@/app/[locale]/(pages)/projects/data/constants";
import CurvedDivider from "@/components/shared/CurvedDivider";
import ProjectStatus from "../../components/ProjectStatus";

interface ProjectHeroProps {
  project: Project;
  backLabel: string;
  statusLabel: string;
}

export default function ProjectHero({
  project,
  backLabel,
  statusLabel,
}: ProjectHeroProps) {
  return (
    <section className="relative h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
      </div>

      {/* Curved bottom */}
      <CurvedDivider />

      {/* Content */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-24 md:pb-28 px-4"
      >
        <div className="container-custom">
          {/* Back link */}
          <motion.div variants={heroTextReveal}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200 mb-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-2 py-1 -ms-2"
            >
              <HiOutlineArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              {backLabel}
            </Link>
          </motion.div>

          {/* Category + Status */}
          <motion.div
            variants={heroTextReveal}
            className="flex flex-wrap items-center gap-3 mb-4"
          >
            <span className="px-3 py-1.5 rounded-full bg-accent/20 text-accent-light text-xs font-semibold uppercase tracking-wider border border-accent/30 backdrop-blur-md">
              {project.scope}
            </span>
            <ProjectStatus status={project.status} statusLabel={statusLabel} />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={heroTextReveal}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl"
          >
            {project.title}
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineArrowRight } from "react-icons/hi";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/app/[locale]/(pages)/projects/data/constants";
import ProjectStatus from "./ProjectStatus";

interface ProjectCardProps {
  project: Project;
  statusLabel: string;
}

export default function ProjectCard({ project, statusLabel }: ProjectCardProps) {
  return (
    <motion.div variants={fadeInUp} className="group">
      <Link
        href={`/projects/${project.id}`}
        className="block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card card-hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-label={project.title}
      >
        {/* Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/25 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark to-transparent opacity-40" />
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-30 transition-all duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 start-4 px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-lg text-white text-xs font-semibold border border-white/[0.1] uppercase tracking-wider">
          {project.scope}
        </div>

        {/* Status badge */}
        <ProjectStatus
          status={project.status}
          statusLabel={statusLabel}
          className="absolute top-4 end-4"
        />

        {/* Bottom info */}
        <div className="absolute bottom-0 start-0 end-0 p-5 sm:p-6">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1.5 transition-transform duration-300 group-hover:-translate-y-2 line-clamp-2">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-white/75 text-sm transition-transform duration-300 group-hover:-translate-y-2">
            <HiOutlineLocationMarker className="w-4 h-4 shrink-0" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Center hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
          <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/30 flex items-center justify-center border border-white/30 backdrop-blur-sm">
              <HiOutlineArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

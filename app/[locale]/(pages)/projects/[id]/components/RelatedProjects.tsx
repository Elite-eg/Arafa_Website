"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/app/[locale]/(pages)/projects/components/ProjectCard";
import type { Project } from "@/app/[locale]/(pages)/projects/data/constants";

interface RelatedProjectsProps {
  projects: Project[];
  heading: string;
  headingHighlight: string;
  subtitle: string;
  viewLabel: string;
}

export default function RelatedProjects({
  projects,
  heading,
  headingHighlight,
  subtitle,
}: RelatedProjectsProps) {
  const t = useTranslations("projectsPage");

  if (projects.length === 0) return null;

  return (
    <section className="section-padding bg-body-alt/50">
      <div className="container-custom">
        <SectionHeading
          heading={heading}
          headingHighlight={headingHighlight}
          subtitle={subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              statusLabel={t(`grid.status.${project.status}`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

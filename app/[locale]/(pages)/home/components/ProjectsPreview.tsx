"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/buttons";
import ProjectCard from "@/app/[locale]/(pages)/projects/components/ProjectCard";
import { projects } from "@/app/[locale]/(pages)/projects/data/projects";

export default function ProjectsPreview() {
  const t = useTranslations("projects");
  const tProjectsPage = useTranslations("projectsPage");

  const previewProjects = projects.slice(0, 6);

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image — very subtle */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-projects.png"
          alt=""
          fill
          className="object-cover opacity-[0.2]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-body" style={{ opacity: 0.75 }} />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={t("badge")}
          heading={t("heading")}
          headingHighlight={t("headingHighlight")}
          subtitle={t("subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {previewProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              statusLabel={tProjectsPage(`grid.status.${project.status}`)}
            />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <ButtonLink href="/projects">{t("viewAll")}</ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}

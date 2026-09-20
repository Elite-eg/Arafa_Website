"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { INFO_ICON_MAP } from "@/app/[locale]/(pages)/projects/data/constants";
import type { Project } from "@/app/[locale]/(pages)/projects/data/constants";

interface ProjectDetailsProps {
  project: Project;
  labels: {
    projectInfo: string;
    client: string;
    location: string;
    scope: string;
    status: string;
    category: string;
    aboutProject: string;
    statusFinished: string;
    statusWorking: string;
  };
  categoryLabel: string;
}

export default function ProjectDetails({
  project,
  labels,
  categoryLabel,
}: ProjectDetailsProps) {
  const projectStats =
    project.stats && project.stats.length > 0
      ? project.stats
      : [
          { value: "85%", label: "Self-Performed" },
          { value: "21+", label: "MEP Disciplines" },
        ];

  const infoItems = [
    {
      key: "client" as const,
      label: labels.client,
      value: project.client,
    },
    {
      key: "location" as const,
      label: labels.location,
      value: project.location,
    },
    {
      key: "scope" as const,
      label: labels.scope,
      value: project.scope,
    },
    {
      key: "status" as const,
      label: labels.status,
      value:
        project.status === "Finished"
          ? labels.statusFinished
          : labels.statusWorking,
    },
    {
      key: "category" as const,
      label: labels.category,
      value: categoryLabel,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Info cards */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <h2 className="font-heading font-bold text-xl md:text-2xl text-primary mb-6">
              {labels.projectInfo}
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-4"
            >
              {infoItems.map((item) => {
                const Icon = INFO_ICON_MAP[item.key];
                return (
                  <motion.div
                    key={item.key}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 rounded-xl bg-body-alt/70 border border-edge/60 card-hover-lift card-shine"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/[0.06] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-content-muted mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-base font-medium text-primary">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <h2 className="font-heading font-bold text-xl md:text-2xl text-primary mb-6">
              {labels.aboutProject}
            </h2>

            <div className="relative p-6 md:p-8 rounded-2xl bg-body-alt/50 border border-edge/50 card-shine">
              {/* Decorative accent line */}
              <div className="absolute top-0 start-6 md:start-8 w-12 h-1 rounded-full bg-gradient-to-r from-accent to-secondary -translate-y-1/2" />

              <p className="text-base md:text-lg text-content-light leading-relaxed">
                {project.description}
              </p>

              {/* Quick stats within description */}
              {projectStats.length > 0 && (
                <div className="mt-8 pt-6 border-t border-edge grid grid-cols-2 gap-6">
                  {projectStats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                        {stat.value}
                      </p>
                      <p className="text-xs font-medium text-content-muted mt-1 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

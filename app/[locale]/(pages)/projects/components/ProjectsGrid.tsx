"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import FilterTabs, {
  type FilterTabOption,
} from "@/components/shared/FilterTabs";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/[locale]/(pages)/projects/data/projects";
import {
  CATEGORY_ICONS,
  CATEGORY_KEYS,
  type ProjectCategory,
} from "@/app/[locale]/(pages)/projects/data/constants";

export default function ProjectsGrid() {
  const t = useTranslations("projectsPage");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  // Build filter tabs from categories
  const filterOptions: FilterTabOption<ProjectCategory>[] = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    return CATEGORY_KEYS.filter((key) => key === "all" || counts[key]).map(
      (key) => ({
        key,
        label: t(`filters.${key}`),
        icon: key !== "all" ? CATEGORY_ICONS[key] : undefined,
        count: counts[key] || 0,
      }),
    );
  }, [t]);

  // Filtered projects
  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="section-padding pt-10">
      <div className="container-custom">
        <SectionHeading
          badge={t("grid.badge")}
          heading={t("grid.heading")}
          headingHighlight={t("grid.headingHighlight")}
          subtitle={t("grid.subtitle")}
        />

        {/* Filter Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 md:mb-12"
        >
          <div className="flex justify-center">
            <FilterTabs<ProjectCategory>
              options={filterOptions}
              activeKey={activeCategory}
              onSelect={setActiveCategory}
              layoutId="projectCategoryFilter"
              size="md"
              variant="pills"
              wrap
            />
          </div>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  statusLabel={t(`grid.status.${project.status}`)}
                />
              ))
            ) : (
              <motion.div
                variants={fadeInUp}
                className="col-span-full text-center py-20"
              >
                <p className="text-lg font-medium text-content-light">
                  {t("grid.noResults")}
                </p>
                <p className="text-sm text-content-muted mt-2">
                  {t("grid.noResultsSubtitle")}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

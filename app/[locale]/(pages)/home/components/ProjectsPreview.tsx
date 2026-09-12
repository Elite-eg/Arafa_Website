"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import { HiOutlineArrowRight, HiOutlineLocationMarker } from "react-icons/hi";
import { ButtonLink } from "@/components/shared/buttons";

const PROJECT_IMAGES = [
  "/images/service-mep.png",
  "/images/service-contracting.png",
  "/images/service-firefighting.png",
  "/images/service-smart.png",
  "/images/about-team.png",
  "/images/hero-bg.png",
];

export default function ProjectsPreview() {
  const t = useTranslations("projects");

  const projects = [
    {
      title: t("items.0.title"),
      category: t("items.0.category"),
      location: t("items.0.location"),
      image: PROJECT_IMAGES[0],
    },
    {
      title: t("items.1.title"),
      category: t("items.1.category"),
      location: t("items.1.location"),
      image: PROJECT_IMAGES[1],
    },
    {
      title: t("items.2.title"),
      category: t("items.2.category"),
      location: t("items.2.location"),
      image: PROJECT_IMAGES[2],
    },
    {
      title: t("items.3.title"),
      category: t("items.3.category"),
      location: t("items.3.location"),
      image: PROJECT_IMAGES[3],
    },
    {
      title: t("items.4.title"),
      category: t("items.4.category"),
      location: t("items.4.location"),
      image: PROJECT_IMAGES[4],
    },
    {
      title: t("items.5.title"),
      category: t("items.5.category"),
      location: t("items.5.location"),
      image: PROJECT_IMAGES[5],
    },
  ];

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
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-card"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="absolute top-4 start-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                {project.category}
              </div>

              <div className="absolute bottom-0 start-0 end-0 p-6">
                <h3 className="font-heading font-bold text-lg text-white mb-1 transition-transform duration-300 group-hover:-translate-y-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-white/60 text-sm transition-transform duration-300 group-hover:-translate-y-2">
                  <HiOutlineLocationMarker className="w-4 h-4" />
                  {project.location}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/30 flex items-center justify-center border border-white/40">
                    <HiOutlineArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">
                    View Project
                  </span>
                </div>
              </div>
            </motion.div>
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

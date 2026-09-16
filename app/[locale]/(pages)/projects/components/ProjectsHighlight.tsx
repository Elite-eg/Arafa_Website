"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export default function ProjectsHighlight() {
  const t = useTranslations("projectsPage.intro");

  return (
    <section className="relative section-padding pt-12 md:pt-16 overflow-hidden">
      {/* Background Image — subtle with small opacity overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-projects.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-body opacity-60" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left — Image Showcase */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-intense">
              <Image
                src="/images/header-projects.png"
                alt="IMDAD Engineering Projects Showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-50" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -end-4 md:end-6 bg-white rounded-2xl p-5 shadow-intense border border-edge-light"
            >
              <div className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-gradient">
                  {t("statValue")}
                </div>
                <div className="text-xs md:text-sm text-content-light font-medium mt-1">
                  {t("statLabel")}
                </div>
              </div>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -top-3 -start-3 w-20 h-20 border-t-4 border-s-4 border-accent rounded-tl-2xl" />
          </motion.div>

          {/* Right — Content */}
          <motion.div variants={fadeInRight}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 text-secondary-dark border border-gray-200 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {t("badge")}
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-6">
              {t("heading")}{" "}
              <span className="text-gradient">
                {t("headingHighlight")}
              </span>
            </h2>

            <p className="text-content-light text-base md:text-lg leading-relaxed mb-4">
              {t("description")}
            </p>

            <p className="text-content-light text-base md:text-lg leading-relaxed mb-6">
              {t("descriptionExtra")}
            </p>

            {/* Quote / Highlight Box */}
            <div className="relative ps-5 border-s-4 border-accent rounded-s-sm">
              <p className="text-content italic text-sm md:text-base leading-relaxed">
                &ldquo;{t("highlightQuote")}&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-accent uppercase tracking-wider">
                {t("highlightAuthor")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

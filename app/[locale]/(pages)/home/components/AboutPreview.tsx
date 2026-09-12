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
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { ButtonLink } from "@/components/shared/buttons";

export default function AboutPreview() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stats.years"), label: t("stats.yearsLabel") },
    { value: t("stats.projects"), label: t("stats.projectsLabel") },
    { value: t("stats.selfPerformed"), label: t("stats.selfPerformedLabel") },
    { value: t("stats.partners"), label: t("stats.partnersLabel") },
  ];

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image — very subtle texture */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-about.png"
          alt="about us background image"
          fill
          className="object-cover opacity-[0.2]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-body opacity-75" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left — Image */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-intense">
              <Image
                src="/images/about-team.png"
                alt="Engineering team reviewing blueprints on construction site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -end-4 md:end-6 bg-white rounded-2xl p-5 shadow-intense border border-edge-light"
            >
              <div className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-gradient">
                  45+
                </div>
                <div className="text-xs md:text-sm text-content-light font-medium mt-1">
                  {t("stats.yearsLabel")}
                </div>
              </div>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -top-3 -start-3 w-20 h-20 border-t-4 border-s-4 border-accent rounded-tl-2xl" />
          </motion.div>

          {/* Right — Content */}
          <motion.div variants={fadeInRight}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/10 text-secondary-dark border border-secondary/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {t("badge")}
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-6">
              {t("heading")}{" "}
              <span className="text-gradient">{t("headingHighlight")}</span>
            </h2>

            <p className="text-content-light text-base md:text-lg leading-relaxed mb-4">
              {t("description")}
            </p>

            <p className="text-content-light text-base md:text-lg leading-relaxed mb-8">
              {t("descriptionExtra")}
            </p>

            <ButtonLink href="/about" size="md" className="mb-10">
              {t("learnMore")}
            </ButtonLink>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <AnimatedCounter
                  key={idx}
                  value={stat.value}
                  label={stat.label}
                  className="text-start"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

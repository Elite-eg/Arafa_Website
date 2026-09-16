"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export default function ProjectStats() {
  const t = useTranslations("projectsPage.stats");

  const statItems = [
    { value: t("items.0.value"), label: t("items.0.label") },
    { value: t("items.1.value"), label: t("items.1.label") },
    { value: t("items.2.value"), label: t("items.2.label") },
    { value: t("items.3.value"), label: t("items.3.label") },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-stats.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark opacity-90" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {t("heading")}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="mt-6 h-1 w-16 mx-auto rounded-full bg-accent" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {statItems.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <AnimatedCounter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

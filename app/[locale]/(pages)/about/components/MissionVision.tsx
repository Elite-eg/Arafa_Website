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
import { HiOutlineEye, HiOutlineLightBulb } from "react-icons/hi";

export default function MissionVision() {
  const t = useTranslations("aboutPage");

  const missionPillars = [
    t("mission.pillars.0"),
    t("mission.pillars.1"),
    t("mission.pillars.2"),
    t("mission.pillars.3"),
    t("mission.pillars.4"),
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-stats.png"
          alt=""
          fill
          className="object-cover opacity-[0.25]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark opacity-90" />
      </div>

      <div className="container-custom relative z-10">
        {/* Vertical divider — desktop only */}
        <div className="hidden lg:flex absolute inset-y-0 start-1/2 -translate-x-1/2 items-center pointer-events-none z-10">
          <div className="w-px h-2/3 bg-gradient-to-b from-transparent via-secondary-dark to-transparent" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Mission */}
          <motion.div variants={fadeInLeft}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <HiOutlineLightBulb className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                {t("mission.heading")}
              </h2>
            </div>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              {t("mission.description")}
            </p>

            <div className="space-y-4">
              {missionPillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <span className="text-[10px] font-bold text-accent group-hover:text-primary-dark transition-colors duration-300">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {pillar}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={fadeInRight}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <HiOutlineEye className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                {t("vision.heading")}
              </h2>
            </div>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              {t("vision.description")}
            </p>

            {/* Strategy Focus Areas */}
            <div className="space-y-4">
              {[0, 1, 2].map((idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.15 * idx, duration: 0.4 }}
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-secondary/30 transition-colors duration-300"
                >
                  <h3 className="font-heading font-semibold text-sm md:text-base text-white mb-1">
                    {t(`vision.strategies.${idx}.title`)}
                  </h3>
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                    {t(`vision.strategies.${idx}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

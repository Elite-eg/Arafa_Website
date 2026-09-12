"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import {
  HiOutlineShieldCheck,
  HiOutlineCheckBadge,
  HiOutlineCpuChip,
  HiOutlineTruck,
} from "react-icons/hi2";

export default function PartnershipValue() {
  const t = useTranslations("partnersPage");

  const icons = [
    HiOutlineShieldCheck,
    HiOutlineCheckBadge,
    HiOutlineCpuChip,
    HiOutlineTruck,
  ];

  return (
    <section className="section-padding relative bg-primary-dark text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-partners.png"
          alt="Engineering partners background"
          fill
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/90 to-primary-dark/95" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={t("value.badge")}
          heading={t("value.heading")}
          headingHighlight={t("value.headingHighlight")}
          subtitle={t("value.subtitle")}
          light
          centered
        />

        {/* Value Items Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[0, 1, 2, 3].map((index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-accent transition-colors">
                    {t(`value.items.${index}.title`)}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {t(`value.items.${index}.description`)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40 group-hover:text-white/70">
                  <span>{t("value.standardCompliant")}</span>
                  <span className="font-mono text-accent">0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Partnership Metrics Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-start"
        >
          <div className="max-w-xl">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
              {t("value.metricsBanner.title")}
            </h3>
            <p className="text-sm text-white/60">
              {t("value.metricsBanner.description")}
            </p>
          </div>

          <div className="flex items-center gap-6 sm:gap-10">
            <div className="text-center">
              <span className="block font-heading font-bold text-3xl md:text-4xl text-accent">
                30+
              </span>
              <span className="text-xs text-white/50 uppercase tracking-wider">
                {t("value.metricsBanner.stat1Label")}
              </span>
            </div>

            <div className="w-px h-12 bg-white/15" />

            <div className="text-center">
              <span className="block font-heading font-bold text-3xl md:text-4xl text-accent">
                100%
              </span>
              <span className="text-xs text-white/50 uppercase tracking-wider">
                {t("value.metricsBanner.stat2Label")}
              </span>
            </div>

            <div className="w-px h-12 bg-white/15" />

            <div className="text-center">
              <span className="block font-heading font-bold text-3xl md:text-4xl text-accent">
                85%
              </span>
              <span className="text-xs text-white/50 uppercase tracking-wider">
                {t("value.metricsBanner.stat3Label")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

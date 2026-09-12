"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import {
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineGlobe,
} from "react-icons/hi";
import SectionHeading from "@/components/shared/SectionHeading";

const STRENGTH_ICONS = [
  HiOutlineGlobe,
  HiOutlineStar,
  HiOutlineShieldCheck,
  HiOutlineClock,
];

/* Accent colors per card for the top-border gradient */
const CARD_ACCENTS = [
  "from-accent via-accent-light to-accent",
  "from-secondary via-secondary-light to-secondary",
  "from-accent via-amber-300 to-accent",
  "from-secondary via-cyan-300 to-secondary",
];

export default function StrengthsSection() {
  const t = useTranslations("aboutPage");

  const strengths = [0, 1, 2, 3].map((idx) => ({
    title: t(`strengths.items.${idx}.title`),
    description: t(`strengths.items.${idx}.description`),
    Icon: STRENGTH_ICONS[idx],
  }));

  return (
    <section className="relative section-padding overflow-hidden">
      {/* ── Dark background with image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/service-mep.png"
          alt="Strength Section Background Image"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark opacity-[0.8]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <SectionHeading
          badge={t("strengths.badge")}
          heading={t("strengths.heading")}
          headingHighlight={t("strengths.headingHighlight")}
          subtitle={t("strengths.subtitle")}
          light
        />

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {strengths.map((strength, idx) => {
            const Icon = strength.Icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative"
              >
                {/* Card body */}
                <div className="relative h-full rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/[0.1] p-6 md:p-8 overflow-hidden transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.15] hover:shadow-[0_8px_40px_rgba(200,149,46,0.12)]">
                  {/* Accent top bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${CARD_ACCENTS[idx]} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Shine overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(135deg,transparent_0%,rgba(200,149,46,0.04)_50%,transparent_100%)]" />

                  {/* Large background number */}
                  <span className="absolute top-7 end-4 font-heading font-bold text-5xl md:text-6xl text-white/[0.1] group-hover:text-white/[0.06] select-none transition-colors duration-500 leading-none">
                    {idx + 1}
                  </span>

                  {/* Icon container */}
                  <div className="relative w-14 h-14 rounded-xl bg-white/[0.1] border border-white/[0.15] flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:border-accent/30 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-7 h-7 text-accent group-hover:text-accent-light transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-accent-light transition-colors duration-300">
                    {strength.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-[2px] rounded-full bg-accent/30 mb-4 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

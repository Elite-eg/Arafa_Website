"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineClipboardCheck,
  HiOutlineCog,
} from "react-icons/hi";
import SectionHeading from "@/components/shared/SectionHeading";

/* ── Level configuration ── */
const LEVEL_CONFIG = [
  {
    icon: HiOutlineBriefcase,
    accentFrom: "from-accent",
    accentTo: "to-accent-light",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    tagBg: "bg-accent/[0.08]",
    tagBorder: "border-accent/20",
    tagText: "text-accent-dark",
    dotColor: "bg-accent",
    ringColor: "ring-accent/20",
  },
  {
    icon: HiOutlineClipboardCheck,
    accentFrom: "from-secondary",
    accentTo: "to-secondary-light",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    tagBg: "bg-secondary/[0.08]",
    tagBorder: "border-secondary/20",
    tagText: "text-secondary-dark",
    dotColor: "bg-secondary",
    ringColor: "ring-secondary/20",
  },
  {
    icon: HiOutlineUserGroup,
    accentFrom: "from-primary-light",
    accentTo: "to-primary",
    iconBg: "bg-primary/[0.06]",
    iconColor: "text-primary-light",
    tagBg: "bg-primary/[0.05]",
    tagBorder: "border-primary/15",
    tagText: "text-primary",
    dotColor: "bg-primary-light",
    ringColor: "ring-primary/10",
  },
  {
    icon: HiOutlineCog,
    accentFrom: "from-content-muted",
    accentTo: "to-content-light",
    iconBg: "bg-content-muted/10",
    iconColor: "text-content-muted",
    tagBg: "bg-body-alt",
    tagBorder: "border-edge",
    tagText: "text-content",
    dotColor: "bg-content-muted",
    ringColor: "ring-content-muted/10",
  },
];

export default function TeamPyramid() {
  const t = useTranslations("aboutPage");

  const levels = [0, 1, 2, 3].map((idx) => ({
    title: t(`team.levels.${idx}.title`),
    roles: Array.from(
      { length: idx === 1 ? 6 : idx === 0 ? 3 : 4 },
      (_, rIdx) => t(`team.levels.${idx}.roles.${rIdx}`)
    ),
    ...LEVEL_CONFIG[idx],
  }));

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-body" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <SectionHeading
          badge={t("team.badge")}
          heading={t("team.heading")}
          headingHighlight={t("team.headingHighlight")}
          subtitle={t("team.subtitle")}
        />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-content-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-14"
        >
          {t("team.description")}
        </motion.p>

        {/* Pyramid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto"
        >
          {levels.map((level, idx) => {
            const Icon = level.icon;
            /* Pyramid narrowing: top is narrowest, bottom is full width */
            const inset = (3 - idx) * 3;

            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative"
                style={{
                  marginInlineStart: `${inset}%`,
                  marginInlineEnd: `${inset}%`,
                }}
              >
                {/* Connector line between levels */}
                {idx > 0 && (
                  <div className="flex justify-center -mt-px mb-0">
                    <div className="w-px h-6 bg-gradient-to-b from-edge to-edge-light" />
                  </div>
                )}

                {/* Card */}
                <div className="group relative rounded-2xl bg-white border border-edge-light overflow-hidden transition-all duration-500 hover:shadow-card hover:border-edge">
                  {/* Top accent gradient bar */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${level.accentFrom} ${level.accentTo} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(135deg,transparent_0%,rgba(200,149,46,0.03)_50%,transparent_100%)]" />

                  <div className="relative p-5 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      {/* Level indicator */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {/* Icon with ring */}
                        <div
                          className={`relative w-12 h-12 rounded-xl ${level.iconBg} flex items-center justify-center ring-4 ${level.ringColor} group-hover:scale-110 transition-transform duration-500`}
                        >
                          <Icon
                            className={`w-6 h-6 ${level.iconColor} transition-colors duration-300`}
                          />
                          {/* Level number badge */}
                          <span
                            className={`absolute -top-1.5 -end-1.5 w-5 h-5 rounded-full ${level.dotColor} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}
                          >
                            {idx + 1}
                          </span>
                        </div>

                        {/* Title + subtle line */}
                        <div>
                          <h3 className="font-heading font-bold text-base md:text-lg text-primary group-hover:text-primary-light transition-colors duration-300">
                            {level.title}
                          </h3>
                          <div
                            className={`mt-1 h-[2px] w-10 rounded-full bg-gradient-to-r ${level.accentFrom} ${level.accentTo} opacity-40 group-hover:w-16 group-hover:opacity-80 transition-all duration-500`}
                          />
                        </div>
                      </div>

                      {/* Roles */}
                      <div className="flex flex-wrap gap-2">
                        {level.roles.map((role, rIdx) => (
                          <span
                            key={rIdx}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${level.tagBg} ${level.tagText} border ${level.tagBorder} transition-all duration-300 hover:shadow-sm hover:scale-[1.03]`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full ${level.dotColor} opacity-60`}
                            />
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom flourish */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex items-center justify-center gap-2 opacity-40"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-edge" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-edge" />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PartnerItem } from "../data/partnersData";

interface PartnerCardProps {
  partner: PartnerItem;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  const t = useTranslations("partnersPage");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="group relative bg-white rounded-2xl p-6 border border-edge/80 shadow-soft hover:shadow-hover hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between"
    >
      {/* Logo Container — Full Natural Brand Colors */}
      <div className="h-20 w-full mb-4 flex items-center justify-center relative p-2">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={partner.logo}
            alt={t("card.logoAlt", { name: partner.name })}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Partner Name */}
      <h3 className="font-heading font-bold text-base md:text-lg text-primary mb-1 group-hover:text-accent transition-colors duration-200">
        {partner.name}
      </h3>

      {/* Category Tagline */}
      <span className="text-xs font-medium text-content-muted">
        {partner.category === "electrical" && t("categories.taglines.electrical")}
        {partner.category === "hvac" && t("categories.taglines.hvac")}
        {partner.category === "plumbing" && t("categories.taglines.plumbing")}
        {partner.category === "systems" && t("categories.taglines.systems")}
      </span>
    </motion.div>
  );
}

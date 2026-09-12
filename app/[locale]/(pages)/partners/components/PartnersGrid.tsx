"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { PARTNER_ITEMS, PartnerCategory } from "../data/partnersData";
import PartnerCard from "./PartnerCard";
import PartnerFilter, { CategoryOption } from "./PartnerFilter";
import {
  HiOutlineBolt,
  HiOutlineCpuChip,
  HiOutlineFire,
  HiOutlineAdjustmentsVertical,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export default function PartnersGrid() {
  const t = useTranslations("partnersPage");
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: CategoryOption[] = [
    { key: "all", label: t("categories.all"), icon: HiOutlineSparkles },
    { key: "electrical", label: t("categories.electrical"), icon: HiOutlineBolt },
    { key: "hvac", label: t("categories.hvac"), icon: HiOutlineAdjustmentsVertical },
    { key: "plumbing", label: t("categories.plumbing"), icon: HiOutlineFire },
    { key: "systems", label: t("categories.systems"), icon: HiOutlineCpuChip },
  ];

  const filteredPartners = PARTNER_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (category: PartnerCategory) => {
    if (category === "all") return PARTNER_ITEMS.length;
    return PARTNER_ITEMS.filter((item) => item.category === category).length;
  };

  return (
    <section className="section-padding bg-body-alt relative overflow-hidden">
      {/* Background Decorative Soft Glows */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 end-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={t("intro.badge")}
          heading={t("intro.heading")}
          headingHighlight={t("intro.headingHighlight")}
          subtitle={t("intro.subtitle")}
          centered
        />

        {/* Modular Partner Filter Component */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <PartnerFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            getCategoryCount={getCategoryCount}
          />
        </motion.div>

        {/* Results Counter Notice */}
        <div className="flex items-center justify-between text-xs text-content-muted mb-6 px-1">
          <span>
            {t.rich("grid.showing", {
              count: filteredPartners.length,
              strong: (chunks) => <strong className="text-primary font-semibold">{chunks}</strong>,
            })}
          </span>
          {(activeCategory !== "all" || searchQuery !== "") && (
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="text-accent hover:underline font-semibold"
            >
              {t("grid.resetFilters")}
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredPartners.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-edge/80 shadow-soft">
            <HiOutlineShieldCheck className="w-12 h-12 text-content-muted mx-auto mb-3" />
            <h3 className="font-heading font-semibold text-lg text-primary mb-1">
              {t("grid.noMatching", { query: searchQuery })}
            </h3>
            <p className="text-xs text-content-muted mb-4">
              {t("grid.emptyStateSubtitle")}
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary-light transition-colors"
            >
              {t("grid.showAllPartners")}
            </button>
          </div>
        ) : (
          /* Cards Grid with Modular PartnerCard Component */
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPartners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}

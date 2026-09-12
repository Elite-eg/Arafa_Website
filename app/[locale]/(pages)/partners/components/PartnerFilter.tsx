"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { PartnerCategory } from "../data/partnersData";
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";

export interface CategoryOption {
  key: PartnerCategory;
  label: string;
  icon: React.ElementType;
}

interface PartnerFilterProps {
  categories: CategoryOption[];
  activeCategory: PartnerCategory;
  onSelectCategory: (category: PartnerCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  getCategoryCount: (category: PartnerCategory) => number;
}

export default function PartnerFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  getCategoryCount,
}: PartnerFilterProps) {
  const t = useTranslations("partnersPage");
  return (
    <div className="bg-white/80 backdrop-blur-xl p-2.5 md:p-3 rounded-2xl border border-edge/80 shadow-soft flex flex-col lg:flex-row items-center justify-between gap-4">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 md:gap-2 w-full lg:w-auto">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.key;
          const count = getCategoryCount(cat.key);
          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(cat.key)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 group z-10",
                isActive
                  ? "text-white shadow-soft"
                  : "text-content-muted hover:text-primary hover:bg-body-alt"
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 transition-colors",
                  isActive ? "text-accent" : "text-content-muted group-hover:text-primary"
                )}
              />
              <span>{cat.label}</span>
              <span
                className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded-full font-bold transition-colors",
                  isActive
                    ? "bg-accent/20 text-accent"
                    : "bg-edge/60 text-content-muted"
                )}
              >
                {count}
              </span>

              {/* Smooth Active Tab Background Slider */}
              {isActive && (
                <motion.div
                  layoutId="activeLightTab"
                  className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-soft"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Clean Light Search Input */}
      <div className="relative w-full lg:w-72">
        <HiOutlineMagnifyingGlass className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-content-muted" />
        <input
          type="text"
          placeholder={t("grid.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full ps-10 pe-9 py-2.5 bg-body-alt/70 border border-edge/80 rounded-xl text-xs md:text-sm text-primary placeholder:text-content-muted/70 focus:outline-none focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15 transition-all duration-300"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute end-3 top-1/2 -translate-y-1/2 text-content-muted hover:text-primary transition-colors"
          >
            <HiOutlineXMark className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

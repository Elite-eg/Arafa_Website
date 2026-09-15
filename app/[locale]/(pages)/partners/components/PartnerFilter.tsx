"use client";

import { useTranslations } from "next-intl";
import { PartnerCategory } from "../data/partnersData";
import FilterTabs, { FilterTabOption } from "@/components/shared/FilterTabs";
import SearchInput from "@/components/shared/SearchInput";

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

  const filterTabOptions: FilterTabOption<PartnerCategory>[] = categories.map(
    (cat) => ({
      key: cat.key,
      label: cat.label,
      icon: cat.icon,
      count: getCategoryCount(cat.key),
    })
  );

  return (
    <div className="bg-white/95 backdrop-blur-xl p-3 md:p-3.5 rounded-2xl border border-edge/90 shadow-soft flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-4">
      {/* Filter Tabs - flex-wrap enabled with no horizontal scroll-x */}
      <div className="flex-1">
        <FilterTabs<PartnerCategory>
          options={filterTabOptions}
          activeKey={activeCategory}
          onSelect={onSelectCategory}
          layoutId="partnerActiveCategoryTab"
          size="md"
          wrap={true}
        />
      </div>

      {/* Clear Separator Line: Horizontal on mobile, tall Vertical on desktop */}
      <div className="w-full md:w-px h-px md:h-20 bg-content-muted shrink-0 self-center my-1 md:my-0" />

      {/* Integrated Search Input */}
      <div className="w-full md:w-64 lg:w-72 xl:w-80 shrink-0">
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder={t("grid.searchPlaceholder")}
          variant="subtle"
          size="md"
        />
      </div>
    </div>
  );
}

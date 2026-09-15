"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FilterTabOption<T extends string = string> {
  key: T;
  label: string;
  icon?: React.ElementType;
  count?: number;
  badge?: string | number;
}

export interface FilterTabsProps<T extends string = string> {
  options: FilterTabOption<T>[];
  activeKey: T;
  onSelect: (key: T) => void;
  layoutId?: string;
  size?: "sm" | "md" | "lg";
  variant?: "pills" | "segmented" | "underline";
  className?: string;
  tabClassName?: string;
  fullWidth?: boolean;
  wrap?: boolean;
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs gap-1.5 rounded-lg",
  md: "px-4 py-2.5 text-xs md:text-sm gap-2 rounded-xl",
  lg: "px-5 py-3 text-sm md:text-base gap-2.5 rounded-2xl",
};

const iconSizes = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export default function FilterTabs<T extends string = string>({
  options,
  activeKey,
  onSelect,
  layoutId = "activeFilterTab",
  size = "md",
  variant = "pills",
  className,
  tabClassName,
  fullWidth = false,
  wrap = false,
}: FilterTabsProps<T>) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 md:gap-2 py-0.5",
        wrap ? "flex-wrap overflow-visible" : "overflow-x-auto no-scrollbar",
        fullWidth && "w-full justify-between",
        variant === "segmented" &&
          "bg-body-alt/80 p-1.5 rounded-2xl border border-edge/80 backdrop-blur-md",
        variant === "underline" &&
          "border-b border-edge gap-4 rounded-none bg-transparent p-0",
        className,
      )}
    >
      {options.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeKey === tab.key;
        const displayCount = tab.count !== undefined ? tab.count : tab.badge;

        return (
          <motion.button
            key={tab.key}
            onClick={() => onSelect(tab.key)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "relative flex items-center justify-center font-semibold transition-colors duration-200 group z-10 select-none whitespace-nowrap",
              sizeClasses[size],
              fullWidth && "flex-1",
              variant === "pills" && [
                isActive
                  ? "text-white shadow-soft"
                  : "text-content-muted hover:text-primary hover:bg-body-alt/80",
              ],
              variant === "segmented" && [
                isActive
                  ? "text-primary shadow-xs"
                  : "text-content-muted hover:text-primary",
              ],
              variant === "underline" && [
                "rounded-none px-1 py-3 border-b-2 border-transparent transition-all",
                isActive
                  ? "text-primary font-bold border-accent"
                  : "text-content-muted hover:text-primary",
              ],
              tabClassName,
            )}
          >
            {/* Optional Icon */}
            {Icon && (
              <Icon
                className={cn(
                  "transition-colors duration-200",
                  iconSizes[size],
                  isActive
                    ? variant === "pills"
                      ? "text-accent"
                      : "text-accent"
                    : "text-content-muted group-hover:text-primary",
                )}
              />
            )}

            {/* Label */}
            <span>{tab.label}</span>

            {/* Count / Badge Pill */}
            {displayCount !== undefined && (
              <span
                className={cn(
                  "inline-flex items-center justify-center leading-none text-[10px] font-mono px-2 py-1 rounded-full font-bold transition-all duration-200 min-w-[18px]",
                  isActive
                    ? variant === "pills"
                      ? "bg-white/20 text-white"
                      : "bg-accent/15 text-accent"
                    : "bg-edge/70 text-content-muted group-hover:bg-edge group-hover:text-primary",
                )}
              >
                {displayCount}
              </span>
            )}

            {/* Sliding Active Pill Background (for 'pills' and 'segmented') */}
            {isActive && variant !== "underline" && (
              <motion.div
                layoutId={layoutId}
                className={cn(
                  "absolute inset-0 -z-10 shadow-soft",
                  sizeClasses[size].match(/rounded-\w+/)?.[0] || "rounded-xl",
                  variant === "pills"
                    ? "bg-primary"
                    : "bg-white border border-edge/60",
                )}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

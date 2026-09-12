"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  heading: string;
  headingHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  heading,
  headingHighlight,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4",
            light
              ? "bg-white/[0.08] text-white/75 border border-white/[0.08]"
              : "bg-secondary/10 text-secondary-dark border border-secondary/20"
          )}
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full",
              light ? "bg-accent" : "bg-secondary"
            )}
          />
          {badge}
        </motion.span>
      )}

      <h2
        className={cn(
          "font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight",
          light ? "text-white" : "text-primary"
        )}
      >
        {heading}{" "}
        {headingHighlight && (
          <span className={light ? "text-accent" : "text-gradient"}>
            {headingHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 md:mt-6 text-base md:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/50" : "text-content-light"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Line */}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full",
          centered && "mx-auto",
          light
            ? "bg-accent"
            : "bg-gradient-to-r from-accent to-secondary"
        )}
      />
    </motion.div>
  );
}

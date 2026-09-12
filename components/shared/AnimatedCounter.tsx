"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
  light?: boolean;
}

export default function AnimatedCounter({
  value,
  label,
  className,
  light = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const numericMatch = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, "");

    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[1], 10);
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-center", className)}
    >
      <div
        className={cn(
          "font-heading font-bold text-4xl md:text-5xl lg:text-6xl tabular-nums",
          light ? "text-white" : "text-gradient"
        )}
      >
        {displayValue}
      </div>
      <div
        className={cn(
          "mt-2 text-sm md:text-base font-medium",
          light ? "text-white/60" : "text-content-light"
        )}
      >
        {label}
      </div>
    </motion.div>
  );
}

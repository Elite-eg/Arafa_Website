"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroTextReveal, heroStagger } from "@/lib/animations";
import CurvedDivider from "@/components/shared/CurvedDivider";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function PageHeader({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: PageHeaderProps) {
  return (
    <section className="relative h-[340px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-primary-dark opacity-80" />
      </div>

      {/* Curved bottom edge */}
      <CurvedDivider />

      {/* Content */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        {/* Decorative line */}
        <motion.div
          variants={heroTextReveal}
          className="w-12 h-1 rounded-full bg-accent mb-6"
        />

        {/* Title */}
        <motion.h1
          variants={heroTextReveal}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            variants={heroTextReveal}
            className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb-style accent */}
        <motion.div
          variants={heroTextReveal}
          className="mt-6 inline-flex items-center gap-2 text-sm text-white/60"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          <span className="uppercase tracking-widest text-xs font-medium">
            {title}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

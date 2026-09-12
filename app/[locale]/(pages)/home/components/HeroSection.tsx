"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { heroTextReveal, heroStagger } from "@/lib/animations";
import { HiOutlineChevronDown } from "react-icons/hi";
import { ButtonLink } from "@/components/shared/buttons";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-primary">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Strong dark overlay for text readability */}
        <div className="absolute inset-0 bg-primary-dark opacity-75" />
        {/* Gradient layers for cinematic depth on top */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-transparent to-primary-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/30 via-transparent to-primary-dark/30" />
      </div>

      {/* Content */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom text-center px-4"
      >
        {/* Badge */}
        <motion.div
          variants={heroTextReveal}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/[0.1] text-white/75 text-xs sm:text-sm font-medium mb-6 md:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          {t("badge")}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={heroTextReveal}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] text-white mb-6"
        >
          {t("title")}
          <br />
          <span className="text-gradient">{t("titleHighlight")}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={heroTextReveal}
          className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={heroTextReveal}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/services" variant="accent" fullWidthMobile>
            {t("cta")}
          </ButtonLink>
          <ButtonLink href="/projects" variant="ghost" fullWidthMobile>
            {t("ctaSecondary")}
          </ButtonLink>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">
          {t("scrollDown")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiOutlineChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroTextReveal, heroStagger, viewportOnce } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";
import { HiOutlinePhone } from "react-icons/hi";
import { ButtonLink } from "@/components/shared/buttons";

export default function ProjectsCTA() {
  const t = useTranslations("projectsPage.cta");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image — subtle behind dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-cta.png"
          alt=""
          fill
          className="object-cover opacity-[0.4]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark opacity-85" />
      </div>

      {/* Floating geometric accents */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 end-[15%] w-24 h-24 border border-white/30 rounded-2xl"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 end-[20%] w-16 h-16 border border-white/30 rounded-lg"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 start-[20%] w-16 h-16 border border-white/30 rounded-lg"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 start-[15%] w-24 h-24 border border-white/30 rounded-2xl"
      />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-custom relative z-10 text-center"
      >
        <motion.h2
          variants={heroTextReveal}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
        >
          {t("heading")}
          <br />
          <span className="text-gradient">{t("headingHighlight")}</span>
        </motion.h2>

        <motion.p
          variants={heroTextReveal}
          className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          variants={heroTextReveal}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/contact" variant="accent" fullWidthMobile>
            {t("button")}
          </ButtonLink>
          <ButtonLink
            href={`tel:${COMPANY.phoneRaw}`}
            variant="ghost"
            fullWidthMobile
            arrow={false}
            icon={<HiOutlinePhone className="w-5 h-5" />}
            external
          >
            {t("buttonSecondary")}
          </ButtonLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

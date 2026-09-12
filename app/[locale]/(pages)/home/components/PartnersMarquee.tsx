"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, viewportOnce } from "@/lib/animations";

const PARTNER_LOGOS = [
  { name: "Schneider Electric", src: "/images/partners/schneider-electric.png" },
  { name: "ABB", src: "/images/partners/abb.png" },
  { name: "Carrier", src: "/images/partners/carrier.png" },
  { name: "Trane", src: "/images/partners/trane.png" },
  { name: "Cisco", src: "/images/partners/cisco.png" },
  { name: "Daikin", src: "/images/partners/daikin.png" },
  { name: "Samsung", src: "/images/partners/samsung.png" },
  { name: "Legrand", src: "/images/partners/legrand.png" },
  { name: "Grundfos", src: "/images/partners/grundfos.png" },
];

function MarqueeRow({
  logos,
  reverse = false,
}: {
  logos: typeof PARTNER_LOGOS;
  reverse?: boolean;
}) {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative">
      {/* Edge fades */}
      <div className="absolute start-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-body-alt to-transparent z-10 pointer-events-none" />
      <div className="absolute end-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-body-alt to-transparent z-10 pointer-events-none" />

      <div
        className={
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }
      >
        <div className="flex items-center gap-5 md:gap-8">
          {doubled.map((partner, idx) => (
            <div key={`${partner.name}-${idx}`} className="flex-shrink-0 group">
              <div className="relative h-[72px] md:h-[85px] rounded-2xl bg-white/80 backdrop-blur-sm border border-edge-light/60 p-4 flex items-center justify-center transition-all duration-400 hover:shadow-lg hover:border-accent/30 hover:scale-105 hover:bg-white overflow-hidden">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={190}
                  height={85}
                  className="object-contain p-3.5 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PartnersMarquee() {
  const t = useTranslations("partners");

  // Split logos into two rows
  const midpoint = Math.ceil(PARTNER_LOGOS.length / 2);
  const row1 = PARTNER_LOGOS.slice(0, midpoint);
  const row2 = PARTNER_LOGOS.slice(midpoint);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-partners.png"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-body-alt opacity-94" />
      </div>

      {/* Top & bottom lines */}
      <div className="absolute top-0 start-0 end-0 h-px bg-gradient-to-r from-transparent via-edge/50 to-transparent z-10" />
      <div className="absolute bottom-0 start-0 end-0 h-px bg-gradient-to-r from-transparent via-edge/50 to-transparent z-10" />

      {/* Section heading */}
      <div className="container-custom mb-12 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/5 text-primary border border-primary/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("heading")}
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-3">
            {t("heading")}
          </h2>
          <p className="text-content-light text-sm md:text-base max-w-lg mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="relative z-10 space-y-5 md:space-y-6">
        <MarqueeRow logos={row1} />
        <MarqueeRow logos={row2} reverse />
      </div>
    </section>
  );
}

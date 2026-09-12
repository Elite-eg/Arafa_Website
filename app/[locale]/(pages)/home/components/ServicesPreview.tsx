"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  HiOutlineOfficeBuilding,
  HiOutlineLightningBolt,
  HiOutlineFire,
  HiOutlineChip,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { ButtonLink } from "@/components/shared/buttons";

const SERVICE_IMAGES = [
  "/images/service-contracting.png",
  "/images/service-mep.png",
  "/images/service-firefighting.png",
  "/images/service-smart.png",
];

const SERVICE_ICONS = [
  HiOutlineOfficeBuilding,
  HiOutlineLightningBolt,
  HiOutlineFire,
  HiOutlineChip,
];

export default function ServicesPreview() {
  const t = useTranslations("services");

  const services = [
    { title: t("items.0.title"), description: t("items.0.description"), image: SERVICE_IMAGES[0], Icon: SERVICE_ICONS[0] },
    { title: t("items.1.title"), description: t("items.1.description"), image: SERVICE_IMAGES[1], Icon: SERVICE_ICONS[1] },
    { title: t("items.2.title"), description: t("items.2.description"), image: SERVICE_IMAGES[2], Icon: SERVICE_ICONS[2] },
    { title: t("items.3.title"), description: t("items.3.description"), image: SERVICE_IMAGES[3], Icon: SERVICE_ICONS[3] },
  ];

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image — very subtle */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-services.png"
          alt=""
          fill
          className="object-cover opacity-[0.2]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-body-alt" style={{ opacity: 0.90 }} />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={t("badge")}
          heading={t("heading")}
          headingHighlight={t("headingHighlight")}
          subtitle={t("subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.Icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative h-[380px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Full-bleed image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient overlay — expands on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Numbered badge — top corner */}
                <div className="absolute top-4 start-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <span className="text-sm font-heading font-bold text-white/80">
                    0{idx + 1}
                  </span>
                </div>

                {/* Icon badge — top end corner */}
                <div className="absolute top-4 end-4 w-10 h-10 rounded-xl bg-accent/20 backdrop-blur-md border border-accent/30 flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:scale-110">
                  <Icon className="w-5 h-5 text-accent group-hover:text-primary-dark transition-colors duration-300" />
                </div>

                {/* Content — pinned to bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {service.title}
                  </h3>

                  {/* Description — reveals on hover */}
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-3 max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {service.description}
                  </p>

                  {/* Divider + learn more */}
                  <Link href="/services" className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-medium text-accent uppercase tracking-widest">
                      {t("viewAll")}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                      <HiOutlineArrowRight className="w-4 h-4 text-white group-hover:text-primary-dark transition-colors duration-300" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <ButtonLink href="/services">
            {t("viewAll")}
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}

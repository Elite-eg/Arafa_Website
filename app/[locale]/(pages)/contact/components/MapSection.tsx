"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { COMPANY } from "@/lib/constants";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import SectionHeading from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/buttons";

const MAP_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3714.5!2d${COMPANY.lng}!3d${COMPANY.lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDIxJzQ4LjYiTiAzOcKwNDknMjEuNCJF!5e0!3m2!1sen!2ssa!4v1`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${COMPANY.lat},${COMPANY.lng}`;

export default function MapSection() {
  const t = useTranslations("contactPage");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Full dark background with image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-cta.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark opacity-90" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-12">
          <SectionHeading
            badge={t("map.badge")}
            heading={t("map.heading")}
            headingHighlight={t("map.headingHighlight")}
            subtitle={t("map.subtitle")}
            light
          />
        </div>

        {/* Map + Floating Card */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Map */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl overflow-hidden shadow-intense border border-white/10"
          >
            <iframe
              title={t("map.iframeTitle")}
              src={MAP_EMBED_URL}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[350px] md:h-[450px] lg:h-[500px]"
            />
          </motion.div>

          {/* Floating Info Card — left side, half inside / half outside map */}
          <motion.div
            variants={scaleIn}
            className="hidden lg:block absolute top-[90px] start-[10px] w-[320px] z-10"
          >
            <div className="bg-white rounded-2xl shadow-intense border border-edge-light p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-gold">
                  <HiOutlineLocationMarker className="w-5 h-5 text-primary-dark" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary">
                  {t("map.cardTitle")}
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: HiOutlineLocationMarker, label: t("map.addressLabel"), value: COMPANY.address },
                  { icon: HiOutlinePhone, label: t("map.phoneLabel"), value: COMPANY.phone },
                  { icon: HiOutlineMail, label: t("map.emailLabel"), value: COMPANY.email },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="mt-0.5 w-8 h-8 rounded-lg bg-body-alt flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-content-muted group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-content-muted mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-content leading-snug">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Directions button */}
              <ButtonLink
                href={DIRECTIONS_URL}
                external
                variant="accent"
                size="sm"
                arrow={false}
                fullWidth
                icon={<HiOutlineLocationMarker className="w-4 h-4" />}
                className="mt-5"
              >
                {t("map.directionsButton")}
              </ButtonLink>
            </div>
          </motion.div>

          {/* Mobile card — below map */}
          <div className="lg:hidden mt-6">
            <div className="bg-white rounded-2xl shadow-intense border border-edge-light p-5 mx-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-gold">
                  <HiOutlineLocationMarker className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-primary">
                    {t("map.cardTitle")}
                  </h3>
                  <p className="text-xs text-content-muted">{COMPANY.address}</p>
                </div>
              </div>
              <ButtonLink
                href={DIRECTIONS_URL}
                external
                variant="accent"
                size="sm"
                arrow={false}
                fullWidth
                icon={<HiOutlineLocationMarker className="w-4 h-4" />}
              >
                {t("map.directionsButton")}
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

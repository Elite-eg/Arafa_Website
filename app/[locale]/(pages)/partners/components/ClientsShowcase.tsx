"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { HiOutlineMapPin, HiOutlineCheckCircle } from "react-icons/hi2";
import { CLIENTS_LIST } from "../data/partnersData";

export default function ClientsShowcase() {
  const t = useTranslations("partnersPage");

  return (
    <section className="section-padding bg-body-alt/60 relative overflow-hidden border-t border-edge/60">
      {/* Background Soft Ambient Decorative Glows */}
      <div className="absolute top-1/3 start-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 end-10 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={t("clients.badge")}
          heading={t("clients.heading")}
          headingHighlight={t("clients.headingHighlight")}
          subtitle={t("clients.subtitle")}
          centered
        />

        {/* Modern Clients Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CLIENTS_LIST.map((client) => {
            const Icon = client.icon;
            const clientName = t(`clients.items.${client.id}.name`);
            const clientCategory = t(`clients.items.${client.id}.category`);
            const clientLocation = t(`clients.items.${client.id}.location`);
            const clientScope = t(`clients.items.${client.id}.scope`);

            return (
              <motion.div
                key={client.id}
                variants={fadeInUp}
                className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-edge/80 shadow-soft hover:shadow-hover hover:border-accent/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Border */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle Hover Shimmer Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(135deg,transparent_0%,rgba(200,149,46,0.03)_50%,transparent_100%)]" />

                <div className="relative z-10">
                  {/* Icon & Location Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-content-muted bg-body-alt/80 backdrop-blur-xs px-3 py-1 rounded-full border border-edge/80 group-hover:border-accent/30 transition-all">
                      <HiOutlineMapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{clientLocation}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-primary mb-1.5 group-hover:text-accent transition-colors duration-300">
                    {clientName}
                  </h3>

                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="inline-flex items-center text-[11px] font-semibold text-secondary-dark bg-secondary/8 px-2.5 py-0.5 rounded-md border border-secondary/15">
                      {clientCategory}
                    </span>
                  </div>

                  {/* Scope Description */}
                  <p className="text-xs text-content-light leading-relaxed">
                    {clientScope}
                  </p>
                </div>

                {/* Card Footer Status Bar */}
                <div className="relative z-10 mt-6 pt-3.5 border-t border-edge/60 flex items-center justify-between text-[11px] text-content-muted">
                  <span className="font-medium">{t("clients.trustedPartner")}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:text-accent transition-colors">
                    <HiOutlineCheckCircle className="w-3.5 h-3.5 text-accent" />
                    {t("clients.completedProject")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

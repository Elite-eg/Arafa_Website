"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import {
  HiOutlineBuildingLibrary,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineMapPin,
} from "react-icons/hi2";

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  location: string;
  scope: string;
  icon: React.ElementType;
}

const CLIENTS_LIST: ClientItem[] = [
  {
    id: "hajj-ministry",
    name: "Ministry of Hajj and Umrah",
    category: "Government & Public Infrastructure",
    location: "Saudi Arabia",
    scope: "Public Facilities MEP & Smart Systems",
    icon: HiOutlineBuildingLibrary,
  },
  {
    id: "nwc",
    name: "National Water Company (NWC)",
    category: "Water & Utilities Infrastructure",
    location: "Makkah, KSA",
    scope: "Administrative Building MEP Upgrade",
    icon: HiOutlineGlobeAsiaAustralia,
  },
  {
    id: "rta-dubai",
    name: "Roads & Transport Authority (RTA)",
    category: "Transport & Datacenter Infrastructure",
    location: "Dubai, UAE",
    scope: "Data Center MEP Infrastructure",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "pnu",
    name: "Princess Noura University (PNU)",
    category: "Higher Education Infrastructure",
    location: "Riyadh, KSA",
    scope: "Structured Cabling & Low Current Systems",
    icon: HiOutlineAcademicCap,
  },
  {
    id: "olayan",
    name: "Olayan Group",
    category: "Real Estate & Hospitality",
    location: "Makkah / KSA",
    scope: "Olayan Towers & Golden Hotel MEP Works",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "attameer",
    name: "ATTAMEER Construction",
    category: "High-Rise Commercial & Residential",
    location: "Makkah, KSA",
    scope: "Al Maqam Towers (A-D) & Al Naseem Towers",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "bafel",
    name: "Omar Saeed Bafel Co. (OBSC)",
    category: "Hospitality & Hotel Towers",
    location: "Makkah, KSA",
    scope: "12+ Janadriah & Al Shrooq Hotel Towers",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "al-zaydi",
    name: "Al Zaydi Group",
    category: "Industrial & Commercial Facilities",
    location: "Makkah, KSA",
    scope: "Hyper Abraj, Concrete Factory & Hotel MEP",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "saudi-post",
    name: "Saudi Post",
    category: "Government Logistics",
    location: "Jeddah, KSA",
    scope: "Postal Facility MEP Upgrade & Systems",
    icon: HiOutlineBuildingLibrary,
  },
  {
    id: "merrill-lynch",
    name: "Bank of America (Merrill Lynch)",
    category: "Banking & Financial Services",
    location: "Riyadh, KSA",
    scope: "Corporate Office MEP Installation",
    icon: HiOutlineCurrencyDollar,
  },
  {
    id: "mobily",
    name: "Mobily Telecommunications",
    category: "Telecom & Datacenter",
    location: "KSA",
    scope: "Terminal Building MEP & Low Current",
    icon: HiOutlineBuildingOffice2,
  },
  {
    id: "al-jomaih",
    name: "Al Jomaih Automotive (GM)",
    category: "Automotive Commercial",
    location: "KSA",
    scope: "Cadillac Flagship Showroom MEP",
    icon: HiOutlineBuildingOffice2,
  },
];

export default function ClientsShowcase() {
  const t = useTranslations("partnersPage");

  return (
    <section className="section-padding bg-body-alt relative overflow-hidden border-t border-edge/60">
      <div className="container-custom relative">
        <SectionHeading
          badge={t("clients.badge")}
          heading={t("clients.heading")}
          headingHighlight={t("clients.headingHighlight")}
          subtitle={t("clients.subtitle")}
          centered
        />

        {/* Clients Cards Grid */}
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
                className="bg-white rounded-2xl p-6 border border-edge/70 shadow-soft hover:shadow-hover hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-content-muted bg-body-alt px-2.5 py-1 rounded-full border border-edge/50">
                      <HiOutlineMapPin className="w-3.5 h-3.5 text-accent" />
                      <span>{clientLocation}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-primary mb-1 group-hover:text-accent transition-colors">
                    {clientName}
                  </h3>

                  <span className="inline-block text-xs font-medium text-accent-dark mb-3">
                    {clientCategory}
                  </span>

                  <p className="text-xs text-content-light leading-relaxed">
                    {clientScope}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-edge/40 flex items-center justify-between text-[11px] text-content-muted">
                  <span>{t("clients.trustedPartner")}</span>
                  <span className="font-semibold text-primary group-hover:text-accent transition-colors">
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

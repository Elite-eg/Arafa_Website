"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { NAV_LINKS, COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { icon: FaTwitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
    { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { icon: FaFacebookF, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  ];

  return (
    <footer className="relative bg-primary-dark text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-20 end-20 w-80 h-80 bg-gray-800/70 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 start-10 w-96 h-96 bg-gray-800/70 rounded-full blur-[100px]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-custom section-padding relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex items-start gap-3 mb-2">
              <div className="relative w-[250px] h-[108px]">
                <Image
                  src="/images/logo-light.png"
                  alt="Aljazira for Imdad Smart Company"
                  fill
                  className="object-contain object-left"
                  sizes="160px"
                />
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t("description")}
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading font-semibold text-base mb-6 text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-200" />
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading font-semibold text-base mb-6 text-white">
              {t("ourServices")}
            </h3>
            <ul className="space-y-3">
              {["generalContracting", "mepWorks", "firefighting", "smartSystems"].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/45 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-200" />
                    {t(service)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading font-semibold text-base mb-6 text-white">
              {t("contactInfo")}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-start gap-3 text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                <HiOutlinePhone className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span>{COMPANY.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                <HiOutlineMail className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/45">
                <HiOutlineLocationMarker className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-white/35">
            {t("rights", { year: currentYear })}
          </p>
          <p className="text-xs text-white/25">
            {t("subsidiary")}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

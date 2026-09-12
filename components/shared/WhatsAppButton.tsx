"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    COMPANY.whatsappMessage
  )}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "backOut" }}
      className="fixed bottom-6 end-6 z-40 group"
    >
      {/* Tooltip */}
      <div className="absolute bottom-full end-0 mb-3 px-3 py-1.5 bg-primary-dark text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {t("tooltip")}
        <div className="absolute top-full end-4 w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-primary-dark" />
      </div>

      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("tooltip")}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </motion.div>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HiOutlinePhone, HiOutlineMail, HiX } from "react-icons/hi";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  closed: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
} as const;

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
} as const;

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/home") {
      return (
        pathname === "/" ||
        pathname === "/en" ||
        pathname === "/en/home" ||
        pathname.endsWith("/home")
      );
    }
    return pathname.includes(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 end-0 bottom-0 z-50 w-[80%] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <Link href="/home" onClick={onClose} className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-heading font-bold text-lg">
                    AJ
                  </div>
                  <div className="absolute -bottom-0.5 -end-0.5 w-3 h-3 rounded-full bg-accent animate-pulse-slow" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm tracking-wide text-primary">
                    ALJAZIRA
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-content-muted">
                    IMDAD SMART
                  </span>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-content-muted hover:text-primary hover:bg-body-alt transition-all duration-200"
                aria-label="Close menu"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-6 py-4 space-y-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, index) => {
                const active = isLinkActive(link.href);
                return (
                  <motion.div key={link.key} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-4 px-4 py-4 text-lg font-medium rounded-xl transition-all duration-200 group",
                        active
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-content hover:text-primary hover:bg-body-alt"
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm font-mono transition-colors",
                          active
                            ? "text-accent font-bold"
                            : "text-content-muted group-hover:text-accent"
                        )}
                      >
                        0{index + 1}
                      </span>
                      {t(link.key)}
                    </Link>
                  </motion.div>
                );
              })}

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary-light transition-all duration-300"
                >
                  {t("getQuote")}
                </Link>
              </motion.div>
            </nav>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="px-6 py-6 border-t border-edge"
            >
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-content-light hover:text-primary transition-colors"
                >
                  <HiOutlinePhone className="w-5 h-5 text-accent" />
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-content-light hover:text-primary transition-colors"
                >
                  <HiOutlineMail className="w-5 h-5 text-accent" />
                  {COMPANY.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

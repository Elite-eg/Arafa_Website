"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { fadeInDown } from "@/lib/animations";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/buttons";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 start-0 end-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-effect shadow-soft border-0 py-5"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className={cn(
                  "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-heading font-bold text-lg md:text-xl transition-all duration-300",
                  scrolled
                    ? "bg-primary text-white"
                    : "bg-white/[0.08] text-white backdrop-blur-sm border border-white/[0.12]"
                )}
              >
                AJ
              </div>
              <div className="absolute -bottom-0.5 -end-0.5 w-3 h-3 rounded-full bg-accent animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-bold text-sm md:text-base tracking-wide transition-colors duration-300",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                ALJAZIRA
              </span>
              <span
                className={cn(
                  "text-[10px] md:text-xs tracking-widest uppercase transition-colors duration-300",
                  scrolled ? "text-content-muted" : "text-white/50"
                )}
              >
                IMDAD SMART
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-all duration-300 rounded-lg group",
                    active
                      ? scrolled
                        ? "text-primary font-bold"
                        : "text-white font-bold"
                      : scrolled
                      ? "text-content font-medium hover:text-primary"
                      : "text-white/70 font-medium hover:text-white"
                  )}
                >
                  {t(link.key)}
                  <span
                    className={cn(
                      "absolute bottom-0 start-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 rounded-full bg-accent",
                      active ? "w-2/3" : "w-0 group-hover:w-2/3"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <ButtonLink
              href="/contact"
              variant={scrolled ? "accent" : "ghost"}
              size="sm"
              className="hidden lg:inline-flex"
            >
              {t("getQuote")}
            </ButtonLink>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2.5 rounded-xl transition-all duration-300",
                scrolled
                  ? "text-primary hover:bg-body-alt"
                  : "text-white hover:bg-white/[0.08]"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiOutlineMenuAlt3 className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

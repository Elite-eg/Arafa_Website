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
import Image from "next/image";
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
            ? "glass-effect shadow-soft border-0 py-1"
            : "bg-transparent py-1"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="relative w-[100px] h-[80px] md:w-[220px] md:h-[80px]">
              {/* Light logo (for transparent/dark background - before scroll) */}
              <Image
                src="/images/logo-light.png"
                alt="Aljazira for Imdad Smart Company"
                fill
                className={cn(
                  "object-contain transition-opacity duration-500",
                  scrolled ? "opacity-0" : "opacity-100"
                )}
                priority
                sizes="160px"
              />
              {/* Dark logo (for glass-effect/light background - after scroll) */}
              <Image
                src="/images/logo.png"
                alt="Aljazira for Imdad Smart Company"
                fill
                className={cn(
                  "object-contain transition-opacity duration-500",
                  scrolled ? "opacity-100" : "opacity-0"
                )}
                priority
                sizes="160px"
              />
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

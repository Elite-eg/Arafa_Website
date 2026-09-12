"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import InputField from "@/components/shared/InputField";
import TextArea from "@/components/shared/TextArea";
import { ButtonLink } from "@/components/shared/buttons";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { COMPANY } from "@/lib/constants";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

export default function ContactInfo() {
  const t = useTranslations("contactPage");

  const contactItems = [
    {
      icon: HiOutlinePhone,
      label: t("info.phone.label"),
      value: COMPANY.phone,
      href: `tel:${COMPANY.phoneRaw}`,
      color: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary-dark",
    },
    {
      icon: HiOutlineMail,
      label: t("info.email.label"),
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      color: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
    },
    {
      icon: HiOutlineLocationMarker,
      label: t("info.address.label"),
      value: COMPANY.address,
      href: `https://maps.google.com/?q=${COMPANY.lat},${COMPANY.lng}`,
      color: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
    },
    {
      icon: HiOutlineClock,
      label: t("info.hours.label"),
      value: t("info.hours.value"),
      href: undefined,
      color: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary-dark",
    },
  ];

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left — Contact Info Cards */}
          <motion.div variants={fadeInLeft}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/10 text-secondary-dark border border-secondary/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {t("info.badge")}
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-4">
              {t("info.heading")}{" "}
              <span className="text-gradient">{t("info.headingHighlight")}</span>
            </h2>

            <p className="text-content-light text-base md:text-lg leading-relaxed mb-8">
              {t("info.description")}
            </p>

            <div className="space-y-4">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                const isExternal = item.href?.startsWith("http") ?? false;
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      ...(isExternal && { target: "_blank" as const, rel: "noopener noreferrer" }),
                    }
                  : {};

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  >
                    <Wrapper
                      {...wrapperProps}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-edge-light hover:border-accent/30 hover:shadow-card transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${item.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-content-muted mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm md:text-base font-medium text-content">
                          {item.value}
                        </p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div variants={fadeInRight}>
            <div className="bg-white rounded-2xl border border-edge-light p-6 md:p-8 shadow-card">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-primary mb-2">
                {t("form.heading")}
              </h3>
              <p className="text-content-light text-sm mb-6">
                {t("form.subtitle")}
              </p>

              <form className="space-y-5">
                <InputField
                  id="contact-name"
                  label={t("form.name")}
                  type="text"
                  required
                  placeholder={t("form.namePlaceholder")}
                />

                <InputField
                  id="contact-email"
                  label={t("form.email")}
                  type="email"
                  required
                  placeholder={t("form.emailPlaceholder")}
                />

                <InputField
                  id="contact-phone"
                  label={t("form.phone")}
                  type="tel"
                  placeholder={t("form.phonePlaceholder")}
                />

                <InputField
                  id="contact-subject"
                  label={t("form.subject")}
                  type="text"
                  required
                  placeholder={t("form.subjectPlaceholder")}
                />

                <TextArea
                  id="contact-message"
                  label={t("form.message")}
                  rows={4}
                  required
                  placeholder={t("form.messagePlaceholder")}
                />

                <ButtonLink type="submit" variant="accent" fullWidth arrow={false} icon={<HiOutlinePaperAirplane className="w-5 h-5 rotate-90" />}>
                  {t("form.submit")}
                </ButtonLink>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

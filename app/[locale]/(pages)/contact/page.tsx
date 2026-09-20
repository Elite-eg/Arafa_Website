import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ContactInfo from "./components/ContactInfo";
import MapSection from "./components/MapSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    openGraph: {
      title: t("contactTitle"),
      description: t("contactDescription"),
    },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contactPage");

  return (
    <>
      <PageHeader
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        imageSrc="/images/header-contact.png"
        imageAlt="Modern engineering office with blueprints and city skyline"
      />
      <ContactInfo />
      <MapSection />
    </>
  );
}

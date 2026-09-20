import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import PartnersGrid from "./components/PartnersGrid";
import PartnershipValue from "./components/PartnershipValue";
import ClientsShowcase from "./components/ClientsShowcase";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("partnersTitle"),
    description: t("partnersDescription"),
    openGraph: {
      title: t("partnersTitle"),
      description: t("partnersDescription"),
    },
  };
}

export default async function PartnersPage() {
  const t = await getTranslations("partnersPage");

  return (
    <>
      <PageHeader
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        imageSrc="/images/bg-partners.png"
        imageAlt="Global technology partners and engineering alliances"
      />
      <PartnersGrid />
      <PartnershipValue />
      <ClientsShowcase />
    </>
  );
}

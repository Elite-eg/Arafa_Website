import { useTranslations } from "next-intl";
import PageHeader from "@/components/shared/PageHeader";
import PartnersGrid from "./components/PartnersGrid";
import PartnershipValue from "./components/PartnershipValue";
import ClientsShowcase from "./components/ClientsShowcase";

export default function PartnersPage() {
  const t = useTranslations("partnersPage");

  return (
    <>
      <PageHeader
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        imageSrc="/images/bg-partners.png"
        imageAlt="Global technology partners and engineering alliances"
      />
      {/* <PartnersGrid />
      <PartnershipValue />
      <ClientsShowcase /> */}
    </>
  );
}

import { useTranslations } from "next-intl";
import PageHeader from "@/components/shared/PageHeader";
import ContactInfo from "./components/ContactInfo";
import MapSection from "./components/MapSection";

export default function ContactPage() {
  const t = useTranslations("contactPage");

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

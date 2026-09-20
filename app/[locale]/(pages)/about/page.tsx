import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import CompanyStory from "./components/CompanyStory";
import StrengthsSection from "./components/StrengthsSection";
import MissionVision from "./components/MissionVision";
import TeamPyramid from "./components/TeamPyramid";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    openGraph: {
      title: t("aboutTitle"),
      description: t("aboutDescription"),
    },
  };
}

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");

  return (
    <>
      <PageHeader
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        imageSrc="/images/header-about.png"
        imageAlt="Construction team reviewing plans on a project site"
      />
      <CompanyStory />
      <StrengthsSection />
      <MissionVision />
      <TeamPyramid />
    </>
  );
}

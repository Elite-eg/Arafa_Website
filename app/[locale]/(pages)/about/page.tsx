import { useTranslations } from "next-intl";
import PageHeader from "@/components/shared/PageHeader";
import CompanyStory from "./components/CompanyStory";
import StrengthsSection from "./components/StrengthsSection";
import MissionVision from "./components/MissionVision";
import TeamPyramid from "./components/TeamPyramid";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

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

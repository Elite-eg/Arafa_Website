import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectStats from "./components/ProjectStats";
import ProjectsHighlight from "./components/ProjectsHighlight";
import ProjectsCTA from "./components/ProjectsCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return {
    title: t("projectsTitle"),
    description: t("projectsDescription"),
    openGraph: {
      title: t("projectsTitle"),
      description: t("projectsDescription"),
    },
  };
}

export default async function ProjectsPage() {
  const t = await getTranslations("projectsPage.header");

  return (
    <>
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
        imageSrc="/images/header-projects.png"
        imageAlt="MEP construction site with engineering systems"
      />
      <ProjectsGrid />
      <ProjectStats />
      <ProjectsHighlight />
      <ProjectsCTA />
    </>
  );
}

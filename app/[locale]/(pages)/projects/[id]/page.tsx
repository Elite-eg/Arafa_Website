import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import {
  projects,
  getProjectById,
  getRelatedProjects,
} from "@/app/[locale]/(pages)/projects/data/projects";
import { CATEGORY_LABELS } from "@/app/[locale]/(pages)/projects/data/constants";
import ProjectHero from "./components/ProjectHero";
import ProjectDetails from "./components/ProjectDetails";
import ProjectHighlights from "./components/ProjectHighlights";
import ProjectGallery from "./components/ProjectGallery";
import ProjectsCTA from "../components/ProjectsCTA";
import RelatedProjects from "./components/RelatedProjects";

interface PageProps {
  params: Promise<{ id: string; locale: string }>;
}

/** Generate static paths for all projects */
export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

/** Per-project SEO metadata */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};

  const t = await getTranslations("seo");
  const title = t("projectDetailTitle", { title: project.title });
  const description = t("projectDetailDescription", {
    title: project.title,
    scope: project.scope,
    location: project.location,
  });

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  const t = await getTranslations("projectsPage");
  const related = getRelatedProjects(project, 3);

  const categoryLabel = CATEGORY_LABELS[project.category] ?? project.category;

  return (
    <>
      <ProjectHero
        project={project}
        backLabel={t("detail.backToProjects")}
        statusLabel={t(`grid.status.${project.status}`)}
      />
      <ProjectDetails
        project={project}
        labels={{
          projectInfo: t("detail.projectInfo"),
          client: t("detail.client"),
          location: t("detail.location"),
          scope: t("detail.scope"),
          status: t("detail.status"),
          category: t("detail.category"),
          aboutProject: t("detail.aboutProject"),
          statusFinished: t("grid.status.Finished"),
          statusWorking: t("grid.status.Working"),
        }}
        categoryLabel={categoryLabel}
      />
      <ProjectHighlights project={project} />
      <ProjectGallery project={project} />
      <ProjectsCTA />
      <RelatedProjects
        projects={related}
        heading={t("detail.relatedProjects")}
        headingHighlight={t("detail.relatedProjectsHighlight")}
        subtitle={t("detail.relatedProjectsSubtitle")}
        viewLabel={t("detail.viewProject")}
      />
    </>
  );
}

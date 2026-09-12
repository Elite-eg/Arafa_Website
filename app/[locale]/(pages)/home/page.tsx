import HeroSection from "./components/HeroSection";
import AboutPreview from "./components/AboutPreview";
import ServicesPreview from "./components/ServicesPreview";
import StatsSection from "./components/StatsSection";
import ProjectsPreview from "./components/ProjectsPreview";
import PartnersMarquee from "./components/PartnersMarquee";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <StatsSection />
      <ProjectsPreview />
      <PartnersMarquee />
      <CTASection />
    </>
  );
}
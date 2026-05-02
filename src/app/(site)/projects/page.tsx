import { PageHero } from "@/components/PageHero";
import { Projects } from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        variant="blur"
        eyebrow="Work"
        title="Projects & case studies"
        subtitle="A living gallery of interfaces, systems, and launches—swap in your own links anytime from the data file."
      />
      <Projects />
    </>
  );
}

import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        variant="rotate"
        eyebrow="Capabilities"
        title="Services"
        subtitle="From UI physics to resilient backends—everything required to design, build, and optimize a modern web presence."
      />
      <Services />
    </>
  );
}

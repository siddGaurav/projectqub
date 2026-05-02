import { About } from "@/components/About";
import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="slide-left"
        eyebrow="Qubnix"
        title="About Qubnix"
        subtitle="   A compact three-person team with the speed to move fast, the taste to make
  every detail feel intentional, and the technical depth to build products that
  launch with the confidence, polish, and presence of a flagship release."
      />
      <About />
    </>
  );
}

import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="fade"
        eyebrow="Let’s talk"
        title="Contact"
        subtitle="Share your goals, product links, and timeline—we’ll turn your ideas into a
  clear plan, outline the next steps, and help you move from concept to launch
  with confidence."
      />
      <Contact />
    </>
  );
}

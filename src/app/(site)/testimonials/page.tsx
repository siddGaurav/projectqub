import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        variant="fade"
        eyebrow="Voices"
        title="Client testimonials"
        subtitle="What partners say after shipping—motion, clarity, and reliability under real-world pressure."
      />
      <Testimonials />
    </>
  );
}

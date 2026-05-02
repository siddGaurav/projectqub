import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";

export default function ProcessPage() {
  return (
    <>
      <PageHero
        variant="slide-up"
        eyebrow="Method"
        title="Our process"
        subtitle="Our process is built to turn ideas into polished digital experiences without confusion or guesswork.

Every step is planned with clarity—from the first conversation to the final launch.

We move through strategy, design, development, and refinement as one connected flow.

Nothing is rushed, nothing is hidden, and every detail is shaped with purpose.

The result is a process that feels transparent, smooth, and built to keep momentum alive.

By the time your project launches, every piece is already working together perfectly."

      />
      <Process />
    </>
  );
}

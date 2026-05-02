import { PageHero } from "@/components/PageHero";
import { Team } from "@/components/Team";

export default function TeamPage() {
  return (
    <>
      <PageHero
        variant="scale"
        eyebrow="People"
        title="The core team"
        subtitle="The minds behind QUBNIX move as one—design, code, and strategy woven into a single creative system.

From bold interfaces to powerful backend architecture, every member brings a distinct strength to the table.

We believe great products are not built in silos, but through constant collaboration, speed, and obsession with detail.

Our team blends frontend precision, backend reliability, and full-stack versatility to shape experiences that feel effortless.

Every project is approached with the same goal: create something memorable, high-performing, and built to last.

We move fast, think deeply, and refine relentlessly until every interaction feels premium.

Together, we turn ambitious ideas into digital experiences that stand far beyond expectations."
      />
      <Team />
    </>
  );
}

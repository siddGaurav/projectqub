import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col pt-[5.25rem]">
        <main className="relative z-[20] flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

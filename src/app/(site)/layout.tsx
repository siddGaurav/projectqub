import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AppProviders } from "@/components/providers/AppProviders";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <Navbar />

      <div className="flex min-h-screen flex-col pt-[5.25rem]">
        <main className="relative z-[20] flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </AppProviders>
  );
}
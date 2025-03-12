import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { CorporateValuesSection } from "@/components/sections/corpate-values-section";
import { ThemeProvider } from "@/components/theme-provider";
import ServicesSection from "@/components/sections/services-section";

export default function HealthClinicLanding() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="health-clinic-theme">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <CorporateValuesSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

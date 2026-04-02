import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StaySection from "@/components/StaySection";
import WorkshopSection from "@/components/WorkshopSection";
import ExcursionsSection from "@/components/ExcursionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <StaySection />
        <WorkshopSection />
        <ExcursionsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ApartmentSection from "@/components/ApartmentSection";
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
        <ApartmentSection />
        <ExcursionsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;

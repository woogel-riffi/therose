import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-background" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <div className="mb-6">
          <span className="inline-block w-16 h-px bg-accent mb-6" />
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
          The Rose
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-4">
          Rifferswil, Switzerland
        </p>
        <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-10">
          {t.subtitle[lang]}
        </p>
        <a
          href="#apartment"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
        >
          {t.cta[lang]}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

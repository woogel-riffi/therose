import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const AboutSection = () => {
  const { lang } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block w-12 h-px bg-accent mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-2">
            {t.title[lang]}
          </h2>
          <span className="inline-block w-12 h-px bg-accent mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder image */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="The Rose - Fachwerkhaus"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">{t.p1[lang]}</p>
            <p className="text-muted-foreground leading-relaxed">{t.p2[lang]}</p>
            <p className="text-muted-foreground leading-relaxed">{t.p3[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Check } from "lucide-react";

const ApartmentSection = () => {
  const { lang } = useLanguage();
  const t = translations.apartment;

  return (
    <section id="apartment" className="py-24 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block w-12 h-px bg-accent mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-2">
            {t.title[lang]}
          </h2>
          <span className="inline-block w-12 h-px bg-accent mt-4" />
        </div>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          {t.intro[lang]}
        </p>

        {/* Image gallery placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {[
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80",
          ].map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-sm overflow-hidden bg-muted">
              <img src={src} alt={`Apartment ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Stay & Workshop */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-8 border border-border rounded-sm bg-background">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{t.stay.title[lang]}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.stay.desc[lang]}</p>
          </div>
          <div className="p-8 border border-border rounded-sm bg-background">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{t.workshop.title[lang]}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.workshop.desc[lang]}</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {t.features[lang].map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentSection;

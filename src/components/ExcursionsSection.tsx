import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { MapPin } from "lucide-react";

const ExcursionsSection = () => {
  const { lang } = useLanguage();
  const t = translations.excursions;

  return (
    <section id="excursions" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
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

        <div className="grid sm:grid-cols-2 gap-6">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="p-6 border border-border rounded-sm hover:border-accent/50 transition-colors bg-background"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {item.title[lang]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;

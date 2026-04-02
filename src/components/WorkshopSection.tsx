import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Check } from "lucide-react";

const WorkshopSection = () => {
  const { lang } = useLanguage();
  const t = translations.workshops;

  return (
    <section id="workshops" className="py-24 px-4">
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-8 border border-border rounded-sm bg-card">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{t.space.title[lang]}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.space.desc[lang]}</p>
          </div>
          <div className="p-8 border border-border rounded-sm bg-card">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{t.catering.title[lang]}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.catering.desc[lang]}</p>
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

export default WorkshopSection;

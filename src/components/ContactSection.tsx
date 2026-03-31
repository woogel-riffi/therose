import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { lang } = useLanguage();
  const t = translations.contact;

  return (
    <section id="contact" className="py-24 px-4 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-16">
          <span className="inline-block w-12 h-px bg-accent mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-2">
            {t.title[lang]}
          </h2>
          <span className="inline-block w-12 h-px bg-accent mt-4" />
        </div>

        <p className="text-muted-foreground leading-relaxed mb-12">
          {t.intro[lang]}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <a
            href="mailto:info@therose.riffi.ch"
            className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            {t.email[lang]}
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" />
          <span>The Rose, Rifferswil, Schweiz</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

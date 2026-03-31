import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-serif text-foreground tracking-wide">The Rose</span>
        <span>© {new Date().getFullYear()} The Rose. {translations.footer.rights[lang]}</span>
      </div>
    </footer>
  );
};

export default Footer;

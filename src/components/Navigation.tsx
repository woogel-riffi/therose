import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations.nav;
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: t.about[lang] },
    { href: "#apartment", label: t.apartment[lang] },
    { href: "#excursions", label: t.excursions[lang] },
    { href: "#contact", label: t.contact[lang] },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl font-semibold text-foreground tracking-wide">
          The Rose
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="ml-2 px-3 py-1 text-xs font-semibold border border-border rounded-sm hover:bg-muted transition-colors tracking-widest"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-xs font-semibold border border-border rounded-sm tracking-widest"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;

import React, { createContext, useContext, useState } from "react";
import { type Language, getInitialLanguage } from "./translations";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  const toggleLanguage = () => setLang((prev) => (prev === "de" ? "en" : "de"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

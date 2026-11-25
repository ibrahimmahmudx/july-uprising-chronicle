import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "bn";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

const STORAGE_KEY = "site-lang";

const getInitialLang = (): Lang => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "bn" ? "bn" : "en";
  } catch {
    return "en";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable (e.g. private mode) — language just won't persist.
    }
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = (): LanguageContextValue => useContext(LanguageContext);

/** Convert Latin digits in a number/string to Bengali digits (e.g. 834 -> ৮৩৪). */
export const toBnDigits = (value: number | string): string =>
  String(value).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

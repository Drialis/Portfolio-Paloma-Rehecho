import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  de: {
    translation: de,
  },
  it: {
    translation: it,
  },
  fr: {
    translation: fr,
  },
} 

export const defaultNS = "translation";

const languageDetector = {
  type: "languageDetector",
  detect: () => {
    const locale = navigator.language || navigator.userLanguage;
    const lang = locale.split("-")[0];
    const supportedLocales = ["es", "en"];
    return supportedLocales.includes(lang) ? lang : "en";
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    ns: [defaultNS],
    defaultNS,
    debug: true,
  });

export default i18n;


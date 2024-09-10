import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import en from "../locales/en.json";
import es from "../locales/es.json";

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  }
} 

export const defaultNS = "translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie']
    },
    ns: [defaultNS],
    defaultNS,
  });

export default i18n;


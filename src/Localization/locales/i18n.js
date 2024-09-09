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
 // .use(languageDetector)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    en:{
      translation: en
    },
    es: {
      translation: es
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },
    lng: 'en', 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    ns: [defaultNS],
    defaultNS,
    debug: true,
  });

export default i18n;


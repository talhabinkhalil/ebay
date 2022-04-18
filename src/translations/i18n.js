import i18n from "i18next";
import React from "react";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ENGLISH from "./en/translation.json";
import GERMAN from "./de/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "de",
    lng: "de",
    interpolation: {
      escapeValue: true,
    },
    resources: {
      en: { translation: ENGLISH },
      de: { translation: GERMAN },
    },
  });
export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishTranslations from "./translations/en/global.json";
import spanishTranslations from "./translations/es/global.json";
import arabicTranslations from "./translations/ar/global.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      global: englishTranslations,
    },
    es: {
      global: spanishTranslations,
    },
    ar: {
      global: arabicTranslations,
    },
  },
  lng: "en", // Set default language
  fallbackLng: "en",
  ns: ["global"],
  defaultNS: ["global"],
  debug: true,
});

export default i18n;

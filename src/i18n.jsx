import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

import english from "./languages/english/translation.json";
import japanese from "./languages/japanese/translation.json";
import burmese from "./languages/burmese/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: english },
    jp: { translation: japanese },
    bur: { translation: burmese },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;

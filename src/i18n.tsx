import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./translation/English/translation.json";
import translationSlovenian from "./translation/Slovenian/translation.json";


//---Using translation
const resources = {
    en: {
        translation: translationEnglish,
    },
    sl: {
        translation: translationSlovenian,
    },
   
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;
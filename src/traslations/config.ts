import { initReactI18next } from 'react-i18next';
import { Languages } from './models';
import { resources } from './languages/index';
import i18n from 'i18next';
import LanguegeDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguegeDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources,
    fallbackLng: Languages.ES,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18n from 'i18next';
import { en } from './resources/en';
import { fr } from './resources/fr';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en,
    fr,
  },
  lng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export const t = i18n.t;

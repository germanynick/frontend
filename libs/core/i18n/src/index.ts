import i18n from 'i18next';
import { en } from './resources/en';
import { fr } from './resources/fr';

i18n.init({
  resources: {
    en,
    fr,
  },
  lng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;

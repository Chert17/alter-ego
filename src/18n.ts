import en from './translate/en.json';
import ua from './translate/ua.json';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem('language') as string),
  fallbackLng: 'en',
});

export default i18n;

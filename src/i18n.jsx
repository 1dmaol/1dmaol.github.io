import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslation } from './resources/enTranslations';
import { esTranslation } from './resources/esTranslations';
import { vlTranslation } from './resources/vlTranslations';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        lng: 'es',
        interpolation:{
            escapeValue: false
        },
        resources: {
            en: enTranslation,
            es: esTranslation,
            vl: vlTranslation,
        }
    });

export default i18n;
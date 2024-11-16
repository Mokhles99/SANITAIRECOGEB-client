// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // Pour le chargement des traductions via HTTP
import LanguageDetector from 'i18next-browser-languagedetector'; // Pour détecter la langue de l'utilisateur

// Importation des fichiers de traduction locaux
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Configuration de i18next
i18n
  .use(HttpBackend) // Active le backend HTTP pour charger les fichiers de traduction (optionnel si fichiers locaux seulement)
  .use(LanguageDetector) // Détecte automatiquement la langue de l'utilisateur (ex : à partir du navigateur)
  .use(initReactI18next) // Intègre i18next à React
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr', // Langue de secours si la traduction n'est pas disponible
    interpolation: {
      escapeValue: false, // Désactive l'échappement des caractères HTML, React gère déjà cela
    },
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator'], // Ordre de détection des langues
      caches: ['localStorage', 'cookie'], // Où stocker la langue détectée
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Chemin pour charger les fichiers de traduction
    },
    react: {
      useSuspense: true, // Active Suspense pour le chargement des traductions
    },
  });

export default i18n;

# Internationalization (i18n) Setup

This directory contains the localization files for the application.

## Chosen Library

We will use **i18next** as the primary i18n library for both frontend and backend.

-   **Frontend:** `i18next` with `react-i18next` for React integration.
-   **Backend:** `i18next` (or a compatible library like `i18next-fs-backend` for Node.js) for handling translations in API responses, emails, and PDFs.

## Basic Configuration Approach (Frontend Example)

```javascript
// Example i18n.js (Frontend)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend'; // Or local files
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Or use direct import for local files
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: 'es', // Default language
    defaultNS: 'common', // Default namespace
    ns: ['common', 'auth', 'academic', 'crm', 'finance'], // Available namespaces
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
```

## Structure

-   Files are named by language code (e.g., `en.json`, `es.json`).
-   Each file contains key-value pairs, potentially nested by module/namespace (e.g., `common`, `auth`).
-   New languages can be added by creating a new JSON file with the corresponding language code.

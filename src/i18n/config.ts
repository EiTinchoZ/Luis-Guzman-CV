export const languages = [
  { code: 'es', name: 'Espanol', short: 'ES', dir: 'ltr' },
  { code: 'en', name: 'English', short: 'EN', dir: 'ltr' },
  { code: 'pt', name: 'Portugues', short: 'PT', dir: 'ltr' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

export const defaultLanguage: LanguageCode = 'es';

export const languageNames: Record<LanguageCode, string> = {
  es: 'Espanol',
  en: 'English',
  pt: 'Portugues',
};

export type LanguageCode = 'es' | 'en' | 'pt';

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
}

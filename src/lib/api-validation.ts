import type { LanguageCode } from '@/i18n';

const VALID_LANGUAGES: LanguageCode[] = ['es', 'en', 'pt'];
const VALID_SECTIONS = ['skills', 'experience', 'education', 'services', 'clients'];

export function validateLanguage(language: unknown): LanguageCode {
  if (typeof language !== 'string' || !VALID_LANGUAGES.includes(language as LanguageCode)) {
    return 'es';
  }
  return language as LanguageCode;
}

export function validateSection(section: unknown): string | null {
  if (typeof section !== 'string' || !VALID_SECTIONS.includes(section)) {
    return null;
  }
  return section;
}

export function validateQuestion(question: unknown): string | null {
  if (typeof question !== 'string' || question.trim().length === 0) {
    return null;
  }
  return question.length > 500 ? question.slice(0, 500) : question.trim();
}

export function validateMessage(message: unknown): string | null {
  if (typeof message !== 'string' || message.trim().length === 0) {
    return null;
  }
  return message.length > 2000 ? message.slice(0, 2000) : message.trim();
}

export function createErrorResponse(
  message: string,
  status: number = 400,
  errorCode: string = 'invalid_request'
) {
  return new Response(JSON.stringify({ error: message, errorCode }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { defaultLanguage, languages, type LanguageCode } from './config';

import es from './locales/es.json';
import en from './locales/en.json';
import pt from './locales/pt.json';

type TranslationData = typeof es;

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  dir: 'ltr' | 'rtl';
  isLoading: boolean;
};

const STORAGE_KEY = 'luis-language';

const translations: Record<LanguageCode, TranslationData> = {
  es,
  en,
  pt,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(source: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = source;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return current;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    const nextLanguage =
      stored && languages.some((item) => item.code === stored)
        ? stored
        : defaultLanguage;

    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.documentElement.dir =
      languages.find((item) => item.code === nextLanguage)?.dir ?? 'ltr';
    setIsLoading(false);
  }, []);

  const setLanguage = (nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
    document.documentElement.dir =
      languages.find((item) => item.code === nextLanguage)?.dir ?? 'ltr';
  };

  const value = useMemo<LanguageContextType>(() => {
    const t = (key: string) => {
      const result = getNestedValue(
        translations[language] as unknown as Record<string, unknown>,
        key
      );
      return typeof result === 'string' ? result : key;
    };

    const tArray = (key: string) => {
      const result = getNestedValue(
        translations[language] as unknown as Record<string, unknown>,
        key
      );
      return Array.isArray(result) ? result.map(String) : [];
    };

    return {
      language,
      setLanguage,
      t,
      tArray,
      dir: languages.find((item) => item.code === language)?.dir ?? 'ltr',
      isLoading,
    };
  }, [isLoading, language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslation() {
  return useLanguage();
}

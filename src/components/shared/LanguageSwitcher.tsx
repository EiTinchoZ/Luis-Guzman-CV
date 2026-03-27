'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { type LanguageCode, languages, useLanguage } from '@/i18n';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { isLoading, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((item) => item.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (isLoading) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-md">
        <Globe className="h-4 w-4 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={cn(
          'flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1.5 text-sm font-medium transition-all duration-200',
          'bg-transparent hover:border-border/50 hover:bg-accent/10'
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-xs uppercase tracking-[0.24em] text-white/72">
          {currentLanguage?.short}
        </span>
        <ChevronDown
          className={cn('h-3 w-3 transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-lg border border-border bg-background/95 shadow-lg backdrop-blur-md'
            )}
          >
            <div className="max-h-[300px] overflow-y-auto py-1">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={cn(
                    'flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-accent/10',
                    language === item.code && 'bg-primary/10 font-medium text-primary'
                  )}
                >
                  <span className="w-6 text-left text-xs uppercase tracking-[0.24em] text-white/68">
                    {item.short}
                  </span>
                  <span className="flex-1 text-left">{item.name}</span>
                  {language === item.code && (
                    <motion.div layoutId="active-language" className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

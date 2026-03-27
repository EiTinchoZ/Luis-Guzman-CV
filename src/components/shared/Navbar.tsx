'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp, Menu, X } from 'lucide-react';
import { useLanguage } from '@/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

const navLinks = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.clients', href: '#clients' },
  { key: 'nav.fees', href: '#fees' },
  { key: 'nav.contact', href: '#contact' },
];

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sectionIds = ['home', ...navLinks.map((item) => item.href.slice(1))];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      let current = '#home';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 96) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed left-4 right-4 top-4 z-50 transition-all duration-500 lg:left-1/2 lg:right-auto lg:top-6 lg:-translate-x-1/2">
        <nav
          className="flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-500"
          style={{
            background: isScrolled ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0.34)',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(8px)',
            border: isScrolled
              ? '1px solid rgba(255,255,255,0.08)'
              : '1px solid transparent',
            boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
          }}
        >
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('#home');
            }}
            className="mr-1 flex-shrink-0 text-sm font-semibold tracking-wider transition-opacity hover:opacity-70"
            style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            LG
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition-all"
                style={{
                  color:
                    activeSection === item.href
                      ? 'oklch(0.720 0.130 73)'
                      : 'rgba(255,255,255,0.45)',
                  fontFamily: 'var(--font-jakarta), sans-serif',
                }}
              >
                {activeSection === item.href && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'oklch(0.720 0.130 73 / 10%)',
                      border: '1px solid oklch(0.720 0.130 73 / 20%)',
                    }}
                    transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.8 }}
                  />
                )}
                <span className="relative z-10">{t(item.key)}</span>
              </a>
            ))}
          </div>

          <div className="flex-1 lg:hidden" />

          <div className="ml-1 flex items-center gap-1">
            <LanguageSwitcher />
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-all"
                style={{
                  background: isOpen ? 'oklch(0.720 0.130 73 / 15%)' : 'transparent',
                  color: 'rgba(255,255,255,0.6)',
                }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 flex flex-col gap-1 rounded-2xl p-4"
              style={{
                background: 'rgba(0,0,0,0.85)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="rounded-xl px-4 py-3 text-base font-medium transition-all"
                  style={{
                    color:
                      activeSection === item.href
                        ? 'oklch(0.720 0.130 73)'
                        : 'rgba(255,255,255,0.55)',
                    background:
                      activeSection === item.href
                        ? 'oklch(0.720 0.130 73 / 8%)'
                        : 'transparent',
                    fontFamily: 'var(--font-jakarta), sans-serif',
                  }}
                >
                  {t(item.key)}
                </a>
              ))}

              <div className="mt-2 border-t pt-3" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="block w-full rounded-full px-6 py-2.5 text-center text-sm font-semibold transition-all"
                  style={{
                    background: 'oklch(0.720 0.130 73 / 15%)',
                    border: '1px solid oklch(0.720 0.130 73 / 30%)',
                    color: 'oklch(0.720 0.130 73)',
                    fontFamily: 'var(--font-jakarta), sans-serif',
                  }}
                >
                  {t('contact.eyebrow')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {isScrolled && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.4)',
            }}
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

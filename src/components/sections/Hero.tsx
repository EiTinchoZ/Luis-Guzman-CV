'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { luisData } from '@/data/cv-data';
import { useLanguage } from '@/i18n';

type LangKey = 'es' | 'en' | 'pt';

const statLabels: Record<string, Record<LangKey, string>> = {
  'years.experience': {
    es: 'A\u00f1os de experiencia',
    en: 'Years of experience',
    pt: 'Anos de experi\u00eancia',
  },
  'people.led': {
    es: 'Personas lideradas',
    en: 'People led',
    pt: 'Pessoas lideradas',
  },
  'plants.latam': {
    es: 'Plantas en LATAM',
    en: 'Plants in LATAM',
    pt: 'Plantas na LATAM',
  },
  countries: {
    es: 'Pa\u00edses con operaciones',
    en: 'Countries with operations',
    pt: 'Pa\u00edses com opera\u00e7\u00f5es',
  },
};

export function Hero() {
  const { language, t } = useLanguage();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.9,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  return (
    <section id="home" className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#0a0f15]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{ opacity: 0.36 }}
        src="/videos/hero-bg.mp4"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1]"
        style={{ height: 120, background: 'linear-gradient(to bottom, #05070a 0%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]"
        style={{ height: 360, background: 'linear-gradient(to top, #05070a 0%, transparent 100%)' }}
      />

      <div className="section-wash" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-end gap-12 px-6 pb-40 pt-32 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:px-10">
        <div className="max-w-3xl text-left">
          <motion.div {...fadeUp(0.1)}>
            <span className="badge-pill mb-6 inline-flex items-center">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.p
            {...fadeUp(0.2)}
            className="mb-4 text-xs uppercase tracking-[0.5em]"
            style={{ color: 'oklch(0.79 0.12 79)', fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            {t('hero.eyebrow')}
          </motion.p>

          <motion.h1
            {...fadeUp(0.3)}
            className="mb-3 text-6xl leading-[0.84] tracking-tight text-white sm:text-7xl lg:text-[6.8rem]"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            Luis Guzm\u00e1n
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-5 max-w-2xl text-lg font-light text-white/82 md:text-2xl"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('hero.title')}
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="mt-4 max-w-xl text-sm leading-relaxed text-white/72 md:text-base"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div {...fadeUp(0.6)} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-white transition-all duration-300 hover:gap-3"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
            >
              {t('hero.cta')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/25 px-7 py-3 font-medium text-white/86 transition-all duration-300 hover:border-white/50 hover:text-white"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
            >
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.75)} className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {luisData.stats.map((stat) => {
              const label = statLabels[stat.label]?.[language as LangKey] ?? stat.label;
              return (
                <div key={stat.label} className="border-l border-white/14 pl-4">
                  <div
                    className="text-4xl leading-none text-primary md:text-5xl"
                    style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-2 text-[10px] uppercase tracking-[0.24em] text-white/52"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.aside
          {...fadeUp(0.55)}
          className="liquid-glass-strong relative overflow-hidden rounded-[2rem] p-7 lg:mb-8"
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(201,160,32,0.7), transparent)' }}
          />
          <p
            className="text-xs uppercase tracking-[0.3em] text-primary"
            style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            Perfil de planta
          </p>
          <h2
            className="mt-4 text-3xl leading-tight text-white"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            Soporte t\u00e9cnico con criterio operativo real.
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed text-white/70"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            Enfoque senior para diagn\u00f3stico, herramientas de precisi\u00f3n, mantenimiento y acompa\u00f1amiento en planta para operaciones de metal packaging en LATAM.
          </p>

          <div className="mt-6 space-y-3">
            {[
              'Cobertura regional LATAM',
              'Experiencia directa en planta',
              'Diagn\u00f3stico + mejora de proceso',
              'Soporte comercial y t\u00e9cnico',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-white/7 pb-3 last:border-b-0 last:pb-0">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span
                  className="text-sm text-white/78"
                  style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5 text-white/24" />
        </motion.div>
      </motion.div>
    </section>
  );
}

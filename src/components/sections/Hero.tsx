'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { luisData } from '@/data/cv-data';
import { useLanguage } from '@/i18n';

type LangKey = 'es' | 'en' | 'pt';

const statLabels: Record<string, Record<LangKey, string>> = {
  'years.experience': {
    es: 'Anos de experiencia',
    en: 'Years of experience',
    pt: 'Anos de experiencia',
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
    es: 'Paises con operaciones',
    en: 'Countries with operations',
    pt: 'Paises com operacoes',
  },
};

export function Hero() {
  const { language, t } = useLanguage();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  return (
    <section id="home" className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{ opacity: 0.38 }}
        src="/videos/hero-bg.mp4"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1]"
        style={{ height: 120, background: 'linear-gradient(to bottom, #000000 0%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]"
        style={{ height: 360, background: 'linear-gradient(to top, #000000 0%, transparent 100%)' }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-52 pt-36 text-center">
        <motion.div {...fadeUp(0.1)}>
          <span className="badge-pill mb-6 inline-flex items-center">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
            {t('hero.badge')}
          </span>
        </motion.div>

        <motion.p
          {...fadeUp(0.2)}
          className="mb-4 text-xs uppercase tracking-[0.5em]"
          style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          {...fadeUp(0.3)}
          className="mb-2 text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-9xl"
          style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
        >
          Luis Guzman
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-6 max-w-xl text-lg font-light text-white/60 md:text-xl"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        >
          {t('hero.title')}
        </motion.p>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-3 max-w-md text-sm leading-relaxed text-white/40"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div {...fadeUp(0.6)} className="mt-10 flex flex-wrap justify-center gap-4">
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
            className="rounded-full border border-white/15 px-7 py-3 font-medium text-white/60 transition-all duration-300 hover:border-white/35 hover:text-white"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.75)} className="mt-20 flex flex-wrap items-start justify-center gap-10 md:gap-16">
          {luisData.stats.map((stat) => {
            const label = statLabels[stat.label]?.[language as LangKey] ?? stat.label;
            return (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl leading-none text-primary md:text-5xl"
                  style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1.5 text-[10px] uppercase tracking-widest text-white/35"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </motion.div>
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
          <ChevronDown className="h-5 w-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

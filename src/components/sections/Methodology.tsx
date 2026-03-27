'use client';

import { motion } from 'framer-motion';
import { luisData } from '@/data/cv-data';
import { useLanguage, type LanguageCode } from '@/i18n';

export function Methodology() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const steps = cv?.methodology ?? [];
  const copy = {
    es: {
      note:
        'La idea no es solo visitar; es dejar una lectura técnica accionable, con contexto operacional y un cierre claro de siguiente paso.',
      step: 'Paso',
    },
    en: {
      note:
        'The goal is not only to visit; it is to leave behind actionable technical reading, operational context, and a clear next step.',
      step: 'Step',
    },
    pt: {
      note:
        'A ideia não é apenas visitar; é deixar uma leitura técnica acionável, com contexto operacional e um próximo passo claro.',
      step: 'Etapa',
    },
  }[language as LanguageCode];

  return (
    <section id="methodology" className="relative bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)]"
        >
          <div>
            <span className="badge-pill">{t('methodology.eyebrow')}</span>
            <h2
              className="mt-4 text-4xl leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
            >
              {t('methodology.title')}
            </h2>
          </div>
          <p
            className="max-w-2xl text-base leading-relaxed text-white/72 lg:pt-10"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('methodology.subtitle')} {copy.note}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {steps.map((step, index) => {
            const spanClass =
              index === 0
                ? 'lg:col-span-5'
                : index === 1
                  ? 'lg:col-span-7'
                  : index === 2
                    ? 'lg:col-span-7'
                    : index === 3
                      ? 'lg:col-span-5'
                      : 'lg:col-span-12';

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`${spanClass} liquid-glass group relative overflow-hidden rounded-[2rem] p-6 md:p-7`}
              >
                <span
                  className="absolute right-4 top-2 text-[4.8rem] leading-none text-primary/10"
                  style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                >
                  {step.number}
                </span>

                <div className="relative z-10 max-w-2xl">
                  <p
                    className="text-xs uppercase tracking-[0.28em] text-primary"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {copy.step} {step.number}
                  </p>
                  <h3
                    className="mt-4 text-2xl leading-tight text-white"
                    style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-4 text-sm leading-relaxed text-white/72"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <span
                    className="pointer-events-none absolute bottom-5 right-5 text-base text-white/18"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {'->'}
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

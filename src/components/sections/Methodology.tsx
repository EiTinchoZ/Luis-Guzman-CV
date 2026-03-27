'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n';
import { luisData } from '@/data/cv-data';
import type { LanguageCode } from '@/i18n';

export function Methodology() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const steps = cv?.methodology ?? [];

  return (
    <section id="methodology" className="py-28 px-6 md:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-pill">{t('methodology.eyebrow')}</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight leading-[0.9]"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('methodology.title')}
          </h2>
          <p className="text-white/45 mt-4 max-w-2xl mx-auto text-base" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            {t('methodology.subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass hover-card rounded-2xl p-6 relative overflow-hidden flex flex-col"
            >
              {/* Decorative large number */}
              <span
                className="absolute -top-4 -right-2 text-[6rem] font-serif leading-none select-none pointer-events-none"
                style={{
                  color: 'oklch(0.720 0.130 73 / 6%)',
                  fontFamily: 'var(--font-instrument), serif',
                  fontStyle: 'italic',
                }}
              >
                {step.number}
              </span>

              {/* Step number badge */}
              <span
                className="text-xs font-mono mb-3"
                style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                PASO {step.number}
              </span>

              {/* Title */}
              <h3
                className="text-base text-white mb-2 flex-shrink-0"
                style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-white/50 text-sm leading-relaxed flex-1"
                style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                {step.description}
              </p>

              {/* Connector arrow (not on last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/15 text-lg"
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

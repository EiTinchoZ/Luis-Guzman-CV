'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n';
import { luisData } from '@/data/cv-data';
import type { LanguageCode } from '@/i18n';

export function Education() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const education = cv?.education ?? [];

  return (
    <section id="education" className="py-28 px-6 md:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-pill">{t('education.eyebrow')}</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight leading-[0.9]"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('education.title')}
          </h2>
          <p className="text-white/45 mt-4 max-w-2xl mx-auto text-base" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            {t('education.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass hover-card rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Gold top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, oklch(0.720 0.130 73), transparent)' }}
              />

              {/* Year */}
              <div
                className="text-5xl leading-none mb-4 mt-2"
                style={{
                  color: 'oklch(0.720 0.130 73)',
                  fontFamily: 'var(--font-instrument), serif',
                  fontStyle: 'italic',
                }}
              >
                {edu.year}
              </div>

              {/* Degree */}
              <h3
                className="text-base font-semibold text-white leading-snug"
                style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                {edu.degree}
              </h3>

              {/* Institution */}
              <p
                className="text-white/45 text-sm mt-2 leading-snug"
                style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                {edu.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

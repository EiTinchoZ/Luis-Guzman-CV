'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n';
import { luisData } from '@/data/cv-data';
import type { LanguageCode } from '@/i18n';

export function Experience() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const experience = cv?.experience ?? [];

  return (
    <section id="experience" className="py-28 px-6 md:px-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="badge-pill">TRAYECTORIA</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight leading-[0.9]"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('experience.title')}
          </h2>
          <p className="text-white/45 mt-4 max-w-xl text-base" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-white/10">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[1.65rem] top-5 w-3 h-3 rounded-full border-2 border-black"
                style={{ backgroundColor: 'oklch(0.720 0.130 73)' }}
              />

              {/* Card */}
              <div className="liquid-glass hover-card rounded-xl p-5 ml-2">
                {/* Period badge */}
                <span
                  className="inline-block liquid-glass rounded-full px-3 py-1 text-xs mb-3"
                  style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {item.period}
                </span>

                {/* Role */}
                <h3
                  className="text-lg font-semibold text-white leading-tight"
                  style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                >
                  {item.role}
                </h3>

                {/* Company + location */}
                <p className="text-white/45 text-sm mt-0.5" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                  {item.company} · {item.location}
                </p>

                {/* Description */}
                <p className="text-white/65 text-sm leading-relaxed mt-3" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

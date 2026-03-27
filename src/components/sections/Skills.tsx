'use client';

import { motion } from 'framer-motion';
import { Monitor, ScanSearch, Users, Wrench } from 'lucide-react';
import { luisData } from '@/data/cv-data';
import { useLanguage, type LanguageCode } from '@/i18n';

export function Skills() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];

  const categories = [
    { icon: Wrench, titleKey: 'skills.technical', items: cv?.skills?.technical ?? [] },
    { icon: ScanSearch, titleKey: 'skills.equipment', items: cv?.skills?.equipment ?? [] },
    { icon: Monitor, titleKey: 'skills.software', items: cv?.skills?.software ?? [] },
    { icon: Users, titleKey: 'skills.softSkills', items: cv?.skills?.softSkills ?? [] },
  ];

  const copy = {
    es: 'Matriz técnica',
    en: 'Technical matrix',
    pt: 'Matriz técnica',
  }[language as LanguageCode];

  return (
    <section id="skills" className="bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        >
          <div>
            <span className="badge-pill">COMPETENCIAS</span>
            <h2
              className="mt-4 text-4xl leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
            >
              {t('skills.title')}
            </h2>
          </div>
          <div>
            <p
              className="spec-label"
            >
              {copy}
            </p>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed text-white/72"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
            >
              {t('skills.subtitle')}
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {categories.map(({ icon: Icon, titleKey, items }, index) => (
            <motion.article
              key={titleKey}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.035] px-5 py-5 md:grid-cols-[220px_minmax(0,1fr)] md:px-6"
            >
              <div className="flex items-start gap-4">
                <div className="liquid-glass-strong flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="spec-label">{String(index + 1).padStart(2, '0')}</p>
                  <h3
                    className="mt-2 text-2xl leading-tight text-white"
                    style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                  >
                    {t(titleKey)}
                  </h3>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {items.map((item, idx) => (
                  <div
                    key={`${titleKey}-${idx}`}
                    className="rounded-2xl border border-white/8 bg-[#0f141c]/70 px-4 py-3"
                  >
                    <p
                      className="text-sm leading-relaxed text-white/76"
                      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

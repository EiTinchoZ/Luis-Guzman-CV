'use client';

import { motion } from 'framer-motion';
import { Wrench, ScanSearch, Monitor, Users } from 'lucide-react';
import { useLanguage } from '@/i18n';
import { luisData } from '@/data/cv-data';
import type { LanguageCode } from '@/i18n';

export function Skills() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];

  const categories = [
    { icon: Wrench, titleKey: 'skills.technical', items: cv?.skills?.technical ?? [] },
    { icon: ScanSearch, titleKey: 'skills.equipment', items: cv?.skills?.equipment ?? [] },
    { icon: Monitor, titleKey: 'skills.software', items: cv?.skills?.software ?? [] },
    { icon: Users, titleKey: 'skills.softSkills', items: cv?.skills?.softSkills ?? [] },
  ];

  return (
    <section id="skills" className="bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-pill">COMPETENCIAS</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight leading-[0.9]"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('skills.title')}
          </h2>
          <p className="text-white/68 mt-4 max-w-2xl mx-auto text-base" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(({ icon: Icon, titleKey, items }, i) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass hover-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="liquid-glass-strong w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4" style={{ color: 'oklch(0.720 0.130 73)' }} />
                </div>
                <h3
                  className="text-lg text-white"
                  style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                >
                  {t(titleKey)}
                </h3>
              </div>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-white/65" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                    <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: 'oklch(0.720 0.130 73)' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { luisData } from '@/data/cv-data';
import { useLanguage, type LanguageCode } from '@/i18n';

export function Experience() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const experience = cv?.experience ?? [];
  const [featured, ...timeline] = experience;
  const copy = {
    es: { current: 'Actualidad', base: 'Base operativa' },
    en: { current: 'Current role', base: 'Operating base' },
    pt: { current: 'Atualidade', base: 'Base operacional' },
  }[language as LanguageCode];

  return (
    <section id="experience" className="relative bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(300px,0.85fr)_minmax(0,1.35fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="badge-pill">TRAYECTORIA</span>
          <h2
            className="mt-4 text-4xl leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('experience.title')}
          </h2>
          <p
            className="mt-4 max-w-md text-base leading-relaxed text-white/72"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('experience.subtitle')}
          </p>

          {featured && (
            <div className="liquid-glass-strong mt-8 rounded-[2rem] p-7">
              <p
                className="text-xs uppercase tracking-[0.28em] text-primary"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                {copy.current}
              </p>
              <h3
                className="mt-4 text-3xl leading-tight text-white"
                style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
              >
                {featured.role}
              </h3>
              <p
                className="mt-2 text-sm text-white/68"
                style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                {featured.company}
              </p>
              <p
                className="mt-1 text-xs uppercase tracking-[0.2em] text-primary/86"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                {featured.period}
              </p>
              <p
                className="mt-5 text-sm leading-relaxed text-white/74"
                style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                {featured.description}
              </p>
            </div>
          )}
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-primary/40 via-white/12 to-transparent md:block" />
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid gap-4 border-b border-white/8 pb-6 last:border-b-0 md:grid-cols-[96px_minmax(0,1fr)]"
              >
                <div className="relative pl-8 md:pl-14">
                  <span className="absolute left-3 top-2 hidden h-3 w-3 rounded-full border border-[#0a0f15] bg-primary md:block" />
                  <span
                    className="text-xs uppercase tracking-[0.22em] text-primary/88"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {item.period}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_210px] md:items-start">
                  <div>
                    <h3
                      className="text-xl leading-tight text-white"
                      style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="mt-1 text-sm text-white/82"
                      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                    >
                      {item.company}
                    </p>
                    <p
                      className="mt-3 text-sm leading-relaxed text-white/68"
                      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 md:text-right">
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] text-white/42"
                      style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                    >
                      {copy.base}
                    </p>
                    <p
                      className="mt-2 text-sm leading-relaxed text-white/78"
                      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                    >
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

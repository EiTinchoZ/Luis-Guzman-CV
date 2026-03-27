'use client';

import { motion } from 'framer-motion';
import { Briefcase, Clock, Globe, MapPin } from 'lucide-react';
import { luisData } from '@/data/cv-data';
import { useLanguage, type LanguageCode } from '@/i18n';

export function About() {
  const { language, t } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];

  const highlightCards = [
    {
      value: '27+',
      label:
        language === 'en'
          ? 'years in manufacturing'
          : language === 'pt'
            ? 'anos em manufatura'
            : 'a\u00f1os en manufactura',
    },
    {
      value: 'LATAM',
      label:
        language === 'en'
          ? 'regional network'
          : language === 'pt'
            ? 'rede regional'
            : 'red regional',
    },
    {
      value: '60+',
      label:
        language === 'en'
          ? 'people led'
          : language === 'pt'
            ? 'pessoas lideradas'
            : 'personas lideradas',
    },
    {
      value: '8+',
      label:
        language === 'en'
          ? 'plants served'
          : language === 'pt'
            ? 'plantas atendidas'
            : 'plantas atendidas',
    },
  ];

  return (
    <section id="about" className="bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="badge-pill">PERFIL</span>
          <h2
            className="mt-4 text-4xl leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('about.title')}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/74" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <p
              className="text-base leading-[1.85] text-white/75"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
            >
              {cv.profile}
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Briefcase,
                  label: t('about.currentRole'),
                  value: `${luisData.personal.currentRole} @ ${luisData.personal.currentCompany}`,
                },
                { icon: MapPin, label: t('about.location'), value: luisData.personal.location },
                { icon: Clock, label: t('about.availability'), value: t('about.availabilityValue') },
                { icon: Globe, label: t('about.languages'), value: t('about.languagesValue') },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="liquid-glass rounded-xl p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    <span
                      className="text-[10px] uppercase tracking-widest text-white/35"
                      style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                    >
                      {label}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-snug text-white/80"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="liquid-glass-strong rounded-2xl p-8">
              <div
                className="mb-3 select-none text-8xl leading-none text-primary/20"
                style={{ fontFamily: 'var(--font-instrument), serif' }}
              >
                &ldquo;
              </div>
              <p
                className="-mt-6 text-2xl leading-tight text-primary md:text-3xl"
                style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
              >
                {cv.about.quote}
              </p>
              <p
                className="mt-4 text-sm leading-relaxed text-white/72"
                style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                {cv.about.quoteDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlightCards.map((item) => (
                <div key={item.label} className="liquid-glass rounded-xl p-4 text-center">
                  <div
                    className="text-2xl leading-none text-primary"
                    style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="mt-1 text-xs text-white/64"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="liquid-glass-gold flex items-start gap-4 rounded-xl p-5">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'oklch(0.720 0.130 73 / 15%)' }}
              >
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p
                  className="mb-1 text-xs uppercase tracking-widest text-primary"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {t('about.currentRole')}
                </p>
                <p
                  className="text-sm font-semibold text-white/90"
                  style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                >
                  {luisData.personal.currentRole}
                </p>
                <p
                  className="mt-0.5 text-xs text-white/68"
                  style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                >
                  {luisData.personal.currentCompany}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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

  const sideCopy = {
    es: {
      dossier: 'Ficha operativa',
      fieldNotes: 'Notas de campo',
      lines: ['Metal packaging', 'Diagn\u00f3stico de proceso', 'Tooling y mantenimiento', 'Cobertura LATAM'],
      note:
        'Perfil construido desde planta, no desde teor\u00eda. La propuesta combina criterio t\u00e9cnico, lectura de operaci\u00f3n y acompa\u00f1amiento comercial cre\u00edble.',
    },
    en: {
      dossier: 'Operating profile',
      fieldNotes: 'Field notes',
      lines: ['Metal packaging', 'Process diagnostics', 'Tooling and maintenance', 'LATAM coverage'],
      note:
        'This profile was built on the plant floor, not in theory. The value combines technical judgment, operational reading, and credible commercial support.',
    },
    pt: {
      dossier: 'Ficha operacional',
      fieldNotes: 'Notas de campo',
      lines: ['Metal packaging', 'Diagn\u00f3stico de processo', 'Ferramental e manuten\u00e7\u00e3o', 'Cobertura LATAM'],
      note:
        'Este perfil foi constru\u00eddo em planta, n\u00e3o na teoria. A proposta combina crit\u00e9rio t\u00e9cnico, leitura operacional e suporte comercial confi\u00e1vel.',
    },
  }[language as LanguageCode];

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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.15fr)_380px]">
          <div className="grid gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="dossier-panel p-8"
            >
              <div className="technical-grid" />
              <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
                <div>
                  <p className="spec-label">{sideCopy.dossier}</p>
                  <p
                    className="mt-5 text-base leading-[1.9] text-white/78"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {cv.profile}
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-[#0f141c]/80 p-5">
                  <p className="spec-label">{sideCopy.fieldNotes}</p>
                  <div className="steel-rule mt-4" />
                  <div className="mt-4 space-y-3">
                    {sideCopy.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm leading-relaxed text-white/78"
                        style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                  <p
                    className="mt-6 text-sm leading-relaxed text-white/62"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {sideCopy.note}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
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
                    <span className="spec-label">{label}</span>
                  </div>
                  <p
                    className="text-sm leading-snug text-white/82"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="liquid-glass-strong rounded-[2rem] p-8">
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
                <div key={item.label} className="liquid-glass rounded-xl p-5 text-left">
                  <div
                    className="text-3xl leading-none text-primary"
                    style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="mt-2 text-xs leading-relaxed text-white/64"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="liquid-glass-gold flex items-start gap-4 rounded-[1.6rem] p-5">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'oklch(0.720 0.130 73 / 15%)' }}
              >
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="spec-label" style={{ color: 'oklch(0.79 0.12 79)' }}>
                  {t('about.currentRole')}
                </p>
                <p
                  className="mt-2 text-sm font-semibold text-white/92"
                  style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                >
                  {luisData.personal.currentRole}
                </p>
                <p
                  className="mt-1 text-xs text-white/70"
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

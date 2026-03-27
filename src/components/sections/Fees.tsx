'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { luisData } from '@/data/cv-data';
import { useLanguage, type LanguageCode } from '@/i18n';

function BackgroundVideo({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return <video autoPlay loop muted playsInline className={className} style={style} src="/videos/hero-bg.mp4" />;
}

export function Fees() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const fees = cv?.fees ?? [];

  const copy = {
    es: {
      preface:
        'La tarifa está pensada como intervención especializada. No compite por volumen: compite por criterio, velocidad de lectura técnica y capacidad de destrabar decisiones operativas.',
      featured: 'Recomendado para visita completa',
    },
    en: {
      preface:
        'The rate structure is designed for specialized intervention. It does not compete on volume; it competes on judgment, speed of technical reading, and the ability to unblock operating decisions.',
      featured: 'Recommended for full-visit scope',
    },
    pt: {
      preface:
        'A estrutura de tarifas foi pensada para intervenção especializada. Ela não compete por volume; compete por critério, velocidade de leitura técnica e capacidade de destravar decisões operacionais.',
      featured: 'Recomendado para visita completa',
    },
  }[language as LanguageCode];

  return (
    <section id="fees" className="relative overflow-hidden bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      <BackgroundVideo className="absolute inset-0 z-0 h-full w-full object-cover" style={{ opacity: 0.1 }} />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        >
          <div>
            <span className="badge-pill">{t('fees.eyebrow')}</span>
            <h2
              className="mt-4 text-4xl leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
            >
              {t('fees.title')}
            </h2>
          </div>
          <p
            className="max-w-2xl text-base leading-relaxed text-white/72 lg:pt-8"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('fees.subtitle')} {copy.preface}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)]">
          {fees.map((fee, index) => {
            const isFeatured = index === 2;
            return (
              <motion.article
                key={fee.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-[2rem] px-6 py-7 ${
                  isFeatured ? 'liquid-glass-gold' : 'liquid-glass'
                }`}
              >
                <p className="spec-label" style={isFeatured ? { color: 'oklch(0.79 0.12 79)' } : undefined}>
                  {fee.type}
                </p>

                {isFeatured && (
                  <p
                    className="mt-3 text-xs uppercase tracking-[0.18em] text-white/78"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {copy.featured}
                  </p>
                )}

                <p
                  className="mt-6 text-5xl leading-none text-white"
                  style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                >
                  {fee.rate.split(' ')[0]}
                </p>
                <p className="mt-1 text-xs text-white/38" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>
                  USD
                </p>

                <div className="steel-rule mt-6" />

                <p
                  className="mt-5 text-sm text-white/70"
                  style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                >
                  {fee.duration}
                </p>
                <p
                  className="mt-4 text-sm leading-relaxed text-white/78"
                  style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                >
                  {fee.includes}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-center text-sm italic text-white/38"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        >
          {t('fees.note')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contact"
            className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-medium text-white transition-all duration-300 hover:gap-3"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('fees.cta')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

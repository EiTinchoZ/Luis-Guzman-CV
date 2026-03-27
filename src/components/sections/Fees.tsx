'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n';
import { luisData } from '@/data/cv-data';
import type { LanguageCode } from '@/i18n';

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

  return (
    <section id="fees" className="py-28 px-6 md:px-16 bg-black relative overflow-hidden">
      {/* CTA video bg */}
      <BackgroundVideo
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.13 }}
      />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-pill">{t('fees.eyebrow')}</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight leading-[0.9]"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('fees.title')}
          </h2>
          <p className="text-white/45 mt-4 max-w-2xl mx-auto text-base" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            {t('fees.subtitle')}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {fees.map((fee, i) => {
            const isFeatured = i === 2; // Full day is featured
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`hover-card rounded-2xl p-8 text-center ${
                  isFeatured
                    ? 'liquid-glass-strong ring-1'
                    : 'liquid-glass'
                }`}
                style={isFeatured ? { ['--tw-ring-color' as string]: 'oklch(0.720 0.130 73 / 40%)' } : {}}
              >
                {/* Type */}
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-4"
                  style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {fee.type}
                </p>

                {/* Rate */}
                <p
                  className="text-5xl text-white leading-none"
                  style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                >
                  {fee.rate.split(' ')[0]}
                </p>
                <p className="text-white/30 text-xs mt-1" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>
                  USD
                </p>

                {/* Duration */}
                <p className="text-white/45 text-sm mt-3" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                  {fee.duration}
                </p>

                <div className="border-t border-white/10 my-5" />

                {/* Includes */}
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                  {fee.includes}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-white/30 text-sm italic mb-10"
          style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        >
          {t('fees.note')}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-10 py-4 text-white font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 text-base"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('fees.cta')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
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

export function Clients() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const clients = cv?.clients ?? [];
  const events = cv?.events ?? [];

  return (
    <section id="clients" className="relative overflow-hidden bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      {/* Stats video bg */}
      <BackgroundVideo
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.12, filter: 'saturate(0)' }}
      />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="badge-pill">{t('clients.eyebrow')}</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight leading-[0.9]"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('clients.title')}
          </h2>
          <p className="text-white/68 mt-4 max-w-2xl mx-auto text-base" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            {t('clients.subtitle')}
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-12 md:gap-20 mb-14"
        >
          {luisData.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-5xl leading-none"
                style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Client table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass-strong rounded-2xl overflow-hidden mb-8"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 px-6 py-3 border-b border-white/8">
            {[t('clients.company'), t('clients.country'), t('clients.relationship')].map((h) => (
              <span key={h} className="text-[10px] tracking-widest uppercase" style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                {h}
              </span>
            ))}
          </div>
          {/* Rows */}
          {clients.map((client, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors"
            >
              <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                {client.company}
              </span>
              <span className="text-white/76 text-sm" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                {client.country}
              </span>
              <span className="text-white/64 text-sm" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                {client.relationship}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Events callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="liquid-glass-gold rounded-xl p-5 flex items-start gap-4 max-w-xl mx-auto"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'oklch(0.720 0.130 73 / 15%)' }}
          >
            <CalendarCheck className="w-4 h-4" style={{ color: 'oklch(0.720 0.130 73)' }} />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}>
              {t('clients.events')}
            </p>
            {events.map((ev, i) => (
              <p key={i} className="text-white/80 text-sm font-medium" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
                {ev}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

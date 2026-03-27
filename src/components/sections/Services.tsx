'use client';

import { motion } from 'framer-motion';
import { Wrench, Settings, AlertTriangle, GraduationCap, BarChart3, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n';
import { luisData } from '@/data/cv-data';
import type { LanguageCode } from '@/i18n';

const ICONS = [Wrench, Settings, AlertTriangle, GraduationCap, BarChart3];

function BackgroundVideo({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return <video autoPlay loop muted playsInline className={className} style={style} src="/videos/hero-bg.mp4" />;
}

export function Services() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const services = cv?.services ?? [];

  return (
    <section id="services" className="py-28 px-6 md:px-16 bg-black relative overflow-hidden">
      {/* Video background */}
      <BackgroundVideo
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.18 }}
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
          className="text-center mb-16"
        >
          <span className="badge-pill">{t('services.eyebrow')}</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 tracking-tight leading-[0.9]"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('services.title')}
          </h2>
          <p className="text-white/45 mt-4 max-w-2xl mx-auto text-base" style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = ICONS[i] ?? Wrench;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="liquid-glass-strong hover-card rounded-2xl p-6 relative overflow-hidden flex flex-col"
              >
                {/* Decorative number */}
                <span
                  className="absolute top-2 right-4 text-6xl font-mono leading-none select-none pointer-events-none"
                  style={{ color: 'oklch(0.720 0.130 73 / 12%)', fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'oklch(0.720 0.130 73 / 12%)' }}
                >
                  <Icon className="w-4 h-4" style={{ color: 'oklch(0.720 0.130 73)' }} />
                </div>

                <h3
                  className="text-lg text-white mb-2 flex-shrink-0"
                  style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-white/55 text-sm leading-relaxed flex-1"
                  style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-12"
        >
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-8 py-3 text-white font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('services.cta')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

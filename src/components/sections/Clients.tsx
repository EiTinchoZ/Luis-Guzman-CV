'use client';

import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
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

export function Clients() {
  const { t, language } = useLanguage();
  const cv = luisData.cv[language as LanguageCode];
  const clients = cv?.clients ?? [];
  const events = cv?.events ?? [];
  const copy = {
    es: {
      note:
        'La propuesta de valor aquí no es una lista bonita de nombres; es credibilidad operativa acumulada en plantas, grupos industriales y conversaciones técnicas reales.',
      regional: 'Alcance regional',
      market: 'Mercado',
      statLabels: {
        'years.experience': 'años de experiencia',
        'people.led': 'personas lideradas',
        'plants.latam': 'plantas atendidas',
        countries: 'países activos',
      },
    },
    en: {
      note:
        'The value here is not a pretty list of names; it is operational credibility built across plants, industrial groups, and real technical conversations.',
      regional: 'Regional scope',
      market: 'Market',
      statLabels: {
        'years.experience': 'years of experience',
        'people.led': 'people led',
        'plants.latam': 'plants served',
        countries: 'active countries',
      },
    },
    pt: {
      note:
        'O valor aqui não é uma lista bonita de nomes; é credibilidade operacional acumulada em plantas, grupos industriais e conversas técnicas reais.',
      regional: 'Alcance regional',
      market: 'Mercado',
      statLabels: {
        'years.experience': 'anos de experiência',
        'people.led': 'pessoas lideradas',
        'plants.latam': 'plantas atendidas',
        countries: 'países ativos',
      },
    },
  }[language as LanguageCode];

  return (
    <section id="clients" className="relative overflow-hidden bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      <BackgroundVideo
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{ opacity: 0.1, filter: 'saturate(0.12)' }}
      />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
        >
          <div>
            <span className="badge-pill">{t('clients.eyebrow')}</span>
            <h2
              className="mt-4 text-4xl leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
            >
              {t('clients.title')}
            </h2>
          </div>
          <p
            className="max-w-2xl text-base leading-relaxed text-white/72 lg:pt-8"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('clients.subtitle')} {copy.note}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)]">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="liquid-glass-strong rounded-[2rem] p-7">
              <p
                className="text-xs uppercase tracking-[0.28em] text-primary"
                style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
              >
                {copy.regional}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {luisData.stats.map((stat) => (
                  <div key={stat.label} className="border-l border-white/10 pl-4">
                    <p
                      className="text-4xl leading-none text-primary"
                      style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-2 text-[10px] uppercase tracking-[0.24em] text-white/44"
                      style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                    >
                      {copy.statLabels[stat.label as keyof typeof copy.statLabels]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="liquid-glass-gold rounded-[2rem] p-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'oklch(0.720 0.130 73 / 15%)' }}
                >
                  <CalendarCheck className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.24em] text-primary"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {t('clients.events')}
                  </p>
                  <div className="mt-3 space-y-2">
                    {events.map((event) => (
                      <p
                        key={event}
                        className="text-sm leading-relaxed text-white/84"
                        style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                      >
                        {event}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          <div className="space-y-3">
            {clients.map((client, index) => (
              <motion.article
                key={`${client.company}-${client.country}`}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`grid gap-4 rounded-[1.8rem] border px-5 py-5 transition-all duration-300 md:grid-cols-[minmax(0,1fr)_180px] md:px-6 ${
                  index % 2 === 0
                    ? 'border-white/10 bg-white/[0.045]'
                    : 'border-primary/18 bg-[rgba(201,160,32,0.045)]'
                }`}
              >
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.22em] text-primary/86"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3
                    className="mt-3 text-2xl leading-tight text-white"
                    style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                  >
                    {client.company}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed text-white/72"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {client.relationship}
                  </p>
                </div>

                <div className="border-t border-white/8 pt-3 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                  <p
                    className="text-[10px] uppercase tracking-[0.24em] text-white/42"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {copy.market}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed text-white/82"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {client.country}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

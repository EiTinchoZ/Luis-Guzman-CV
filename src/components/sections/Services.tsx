'use client';

import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, BarChart3, GraduationCap, Settings, Wrench } from 'lucide-react';
import { luisData } from '@/data/cv-data';
import { useLanguage, type LanguageCode } from '@/i18n';

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
  const copy = {
    es: {
      intervention: 'Criterio de intervención',
      interventionText:
        'Luis entra donde se cruzan problema técnico, presión operativa y necesidad de decisión rápida. El servicio no es decorativo: busca reducir fricción real en planta.',
      expected: 'Resultado esperado',
      outcomes: [
        'Visibilidad inmediata del proceso y recomendaciones en contexto.',
        'Validación técnica y comparativa útil para tomar decisión.',
        'Causa raíz clara y acción correctiva priorizada.',
        'Transferencia operativa aplicable para técnicos y líderes.',
        'Menos improvisación y mejor disponibilidad de equipo.',
      ],
    },
    en: {
      intervention: 'Intervention criteria',
      interventionText:
        'Luis steps in where technical problems, operating pressure, and the need for fast decisions intersect. The service is not decorative: it is meant to reduce real friction on the plant floor.',
      expected: 'Expected outcome',
      outcomes: [
        'Immediate process visibility and in-context recommendations.',
        'Technical validation and useful comparison for decision-making.',
        'Clear root cause and prioritized corrective action.',
        'Operational transfer that technicians and leaders can apply.',
        'Less improvisation and better equipment availability.',
      ],
    },
    pt: {
      intervention: 'Critério de intervenção',
      interventionText:
        'Luis entra onde se cruzam problema técnico, pressão operacional e necessidade de decisão rápida. O serviço não é decorativo: ele reduz atrito real na planta.',
      expected: 'Resultado esperado',
      outcomes: [
        'Leitura imediata do processo e recomendações no contexto real.',
        'Validação técnica e comparação útil para decidir.',
        'Causa raiz clara e ação corretiva priorizada.',
        'Transferência operacional aplicável para técnicos e líderes.',
        'Menos improvisação e melhor disponibilidade do equipamento.',
      ],
    },
  }[language as LanguageCode];

  return (
    <section id="services" className="relative overflow-hidden bg-transparent px-6 py-28 md:px-16">
      <div className="section-wash" />
      <BackgroundVideo className="absolute inset-0 z-0 h-full w-full object-cover" style={{ opacity: 0.13 }} />
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.25fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="badge-pill">{t('services.eyebrow')}</span>
          <h2
            className="mt-4 text-4xl leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('services.title')}
          </h2>
          <p
            className="mt-5 max-w-md text-base leading-relaxed text-white/74"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('services.subtitle')}
          </p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p
              className="text-xs uppercase tracking-[0.26em] text-primary/88"
              style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              {copy.intervention}
            </p>
            <p
              className="mt-4 max-w-sm text-sm leading-relaxed text-white/68"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
            >
              {copy.interventionText}
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = ICONS[index] ?? Wrench;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group grid gap-5 rounded-[2rem] border px-5 py-6 transition-all duration-300 md:grid-cols-[88px_minmax(0,1fr)] md:px-7 ${
                  index % 2 === 0
                    ? 'ml-0 border-white/10 bg-white/[0.045] lg:ml-0'
                    : 'ml-0 border-primary/20 bg-[rgba(201,160,32,0.05)] lg:ml-12'
                }`}
              >
                <div className="flex items-start justify-between md:block">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#131a22]"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span
                    className="text-[2.6rem] leading-none text-primary/18"
                    style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_180px] md:items-start">
                  <div>
                    <h3
                      className="text-2xl leading-tight text-white"
                      style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72"
                      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-white/8 pt-3 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                    <p
                      className="text-[10px] uppercase tracking-[0.24em] text-white/42"
                      style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                    >
                      {copy.expected}
                    </p>
                    <p
                      className="mt-2 text-sm leading-relaxed text-white/74"
                      style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                    >
                      {copy.outcomes[index]}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6"
          >
            <a
              href="#contact"
              className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-8 py-3 font-medium text-white transition-all duration-300 hover:gap-3"
              style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
            >
              {t('services.cta')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

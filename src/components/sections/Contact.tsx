'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { luisData } from '@/data/cv-data';
import { useLanguage } from '@/i18n';

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const whatsappUrl = `https://wa.me/${luisData.personal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hola Luis, me interesa tu servicio de consultoria tecnica.'
  )}`;

  const infoItems = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: luisData.personal.email,
      href: `mailto:${luisData.personal.email}`,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: luisData.personal.phone,
      href: whatsappUrl,
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: luisData.personal.location,
    },
    {
      icon: Clock,
      label: t('contact.availability'),
      value: t('contact.availabilityValue'),
    },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Consulta tecnica - ${form.company || form.name || 'Nuevo contacto'}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmpresa/Planta: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${luisData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-black px-6 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="badge-pill">{t('contact.eyebrow')}</span>
          <h2
            className="mt-4 text-4xl leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-instrument), serif', fontStyle: 'italic' }}
          >
            {t('contact.title')}
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base text-white/45"
            style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {infoItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="liquid-glass rounded-xl p-5">
                <div className="mb-1 flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5" style={{ color: 'oklch(0.720 0.130 73)' }} />
                  <span
                    className="text-[10px] uppercase tracking-widest text-white/30"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {label}
                  </span>
                </div>
                {href ? (
                  <a
                    href={href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    className="text-sm text-white/75"
                    style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
                  >
                    {value}
                  </p>
                )}
              </div>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-gold mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:gap-3"
              style={{
                color: 'oklch(0.720 0.130 73)',
                fontFamily: 'var(--font-jakarta), sans-serif',
              }}
            >
              <MessageCircle className="h-4 w-4" />
              {t('contact.whatsapp')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="liquid-glass-strong flex flex-col gap-5 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs tracking-wider text-white/40"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {t('contact.formName')}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder={t('contact.formName')}
                    className="liquid-glass rounded-xl border-0 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:ring-1"
                    style={{
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      ['--tw-ring-color' as string]: 'oklch(0.720 0.130 73 / 50%)',
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs tracking-wider text-white/40"
                    style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                  >
                    {t('contact.formEmail')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder={t('contact.formEmail')}
                    className="liquid-glass rounded-xl border-0 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:ring-1"
                    style={{
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      ['--tw-ring-color' as string]: 'oklch(0.720 0.130 73 / 50%)',
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-company"
                  className="text-xs tracking-wider text-white/40"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {t('contact.formCompany')}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={form.company}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, company: event.target.value }))
                  }
                  placeholder={t('contact.formCompany')}
                  className="liquid-glass rounded-xl border-0 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:ring-1"
                  style={{
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    ['--tw-ring-color' as string]: 'oklch(0.720 0.130 73 / 50%)',
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs tracking-wider text-white/40"
                  style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
                >
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, message: event.target.value }))
                  }
                  placeholder={t('contact.formMessage')}
                  className="liquid-glass resize-none rounded-xl border-0 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:ring-1"
                  style={{
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    ['--tw-ring-color' as string]: 'oklch(0.720 0.130 73 / 50%)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="liquid-glass-gold w-full rounded-full px-8 py-3.5 font-semibold transition-all duration-300 hover:opacity-90"
                style={{
                  color: 'oklch(0.720 0.130 73)',
                  fontFamily: 'var(--font-jakarta), sans-serif',
                }}
              >
                {t('contact.formSend')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

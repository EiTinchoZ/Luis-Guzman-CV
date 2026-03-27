'use client';

import { Linkedin, Mail, Phone } from 'lucide-react';
import { luisData } from '@/data/cv-data';
import { useLanguage } from '@/i18n';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.clients'), href: '#clients' },
    { label: t('nav.fees'), href: '#fees' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: luisData.personal.linkedin, icon: Linkedin },
    { name: 'Email', href: `mailto:${luisData.personal.email}`, icon: Mail },
    { name: 'WhatsApp', href: `https://wa.me/${luisData.personal.phone.replace(/[^0-9]/g, '')}`, icon: Phone },
  ].filter((item): item is { name: string; href: string; icon: typeof Linkedin } => Boolean(item.href));

  return (
    <footer
      className="border-t bg-transparent"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        background: 'linear-gradient(180deg, rgba(10,15,21,0.08), rgba(10,15,21,0.42))',
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:gap-8 md:px-16 md:py-16">
        <div className="space-y-4">
          <div>
            <p
              className="text-2xl tracking-tight"
              style={{
                color: 'oklch(0.720 0.130 73)',
                fontFamily: 'var(--font-instrument), serif',
                fontStyle: 'italic',
              }}
            >
              {'Luis Guzm\u00e1n'}
            </p>
            <p
              className="mt-1 text-xs uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              {t('hero.eyebrow')}
            </p>
          </div>
          <p
            className="text-sm"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-jakarta), sans-serif' }}
          >
            &copy; {currentYear} {luisData.personal.name}. {t('footer.rights')}
          </p>
        </div>

        <div className="space-y-4">
          <h3
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            {t('footer.navigation')}
          </h3>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.56)', fontFamily: 'var(--font-jakarta), sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h3
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: 'oklch(0.720 0.130 73)', fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            {t('footer.connect')}
          </h3>
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.56)', fontFamily: 'var(--font-jakarta), sans-serif' }}
                aria-label={link.name}
              >
                <link.icon className="h-3.5 w-3.5" />
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: 'oklch(0.720 0.130 73)' }} />
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-geist-mono), monospace' }}
            >
              {t('contact.availability')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

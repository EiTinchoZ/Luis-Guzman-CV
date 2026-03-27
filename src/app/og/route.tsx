import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const copy = {
  es: {
    title: 'Luis Guzman',
    subtitle: 'Consultor tecnico senior para metal packaging en LATAM',
    chips: ['27+ anos', 'Mantenimiento', 'Diagnostico', 'Tooling'],
  },
  en: {
    title: 'Luis Guzman',
    subtitle: 'Senior technical consultant for metal packaging in LATAM',
    chips: ['27+ years', 'Maintenance', 'Diagnostics', 'Tooling'],
  },
  pt: {
    title: 'Luis Guzman',
    subtitle: 'Consultor tecnico senior para metal packaging na LATAM',
    chips: ['27+ anos', 'Manutencao', 'Diagnostico', 'Ferramentas'],
  },
} as const;

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const langParam = searchParams.get('lang');
  const lang = langParam === 'en' || langParam === 'pt' ? langParam : 'es';
  const content = copy[lang];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#050505',
          color: '#ffffff',
          padding: '56px 64px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top right, rgba(201,160,32,0.24), transparent 38%), radial-gradient(circle at bottom left, rgba(201,160,32,0.12), transparent 32%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '20px',
                background: 'rgba(201,160,32,0.18)',
                border: '1px solid rgba(201,160,32,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c9a020',
                fontSize: '28px',
                fontWeight: 700,
              }}
            >
              LG
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#c9a020', fontSize: '18px', fontWeight: 700 }}>
                Luis Guzman Portfolio
              </span>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px' }}>
                Panama City, Panama
              </span>
            </div>
          </div>
          <span style={{ color: '#c9a020', fontSize: '17px', letterSpacing: '0.24em' }}>
            ES / EN / PT
          </span>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              fontSize: '82px',
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: '-0.05em',
            }}
          >
            {content.title}
          </div>
          <div
            style={{
              maxWidth: '900px',
              fontSize: '30px',
              lineHeight: 1.3,
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            {content.subtitle}
          </div>
          <div style={{ display: 'flex', gap: '14px', marginTop: '18px' }}>
            {content.chips.map((chip) => (
              <div
                key={chip}
                style={{
                  padding: '10px 18px',
                  borderRadius: '999px',
                  border: '1px solid rgba(201,160,32,0.24)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#f6f2e3',
                  fontSize: '18px',
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '18px',
          }}
        >
          <span>Metal packaging | Plant support | LATAM coverage</span>
          <span style={{ color: '#c9a020' }}>luiseudoro@gmail.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

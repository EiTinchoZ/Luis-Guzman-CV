import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luis Guzm\u00e1n | Senior Technical Consultant',
    short_name: 'Luis Guzm\u00e1n',
    description:
      'Interactive professional portfolio for Luis Guzm\u00e1n with multilingual content, technical services, and AI-assisted contact support.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f15',
    theme_color: '#0a0f15',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

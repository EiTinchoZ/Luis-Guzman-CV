import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luis Guzman | Senior Technical Consultant',
    short_name: 'Luis Guzman',
    description:
      'Interactive professional portfolio for Luis Guzman with multilingual content, technical services, and AI-assisted contact support.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

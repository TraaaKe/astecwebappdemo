import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ASTEC Spotting CDG',
  description: 'Boutique démo de vidéos de spotting à Paris CDG'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

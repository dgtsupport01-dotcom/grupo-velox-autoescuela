import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Grupo Velox Autoescuela | Trámites de permiso de conducir en España',
  description:
    'Acompañamiento profesional para el canje de permisos extranjeros y la obtención de un nuevo permiso de conducir en España.',
  keywords: [
    'canje permiso extranjero España',
    'canje permiso conducir',
    'permiso de conducir España',
    'obtener permiso conducir España',
    'autoescuela España',
    'canje carnet extranjero'
  ],
  metadataBase: new URL('https://www.grupoveloxautoescuela.es'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

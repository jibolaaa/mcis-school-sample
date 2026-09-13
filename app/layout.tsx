import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MasterCare International School | Raising Global Heroes',
  description:
    'MasterCare International School, Asaba — a Christ-centred international learning community preparing students for excellence, leadership and a changing world.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

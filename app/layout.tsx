import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Breadcrumbs from '@/components/Breadcrumbs';
import './fonts.css';
import './site.css';

export const metadata: Metadata = {
  title: { default: 'MasterCare International School | Raising Global Heroes', template: '%s | MasterCare International School' },
  description:
    'Explore MasterCare International School in Asaba. Discover Early Years, Primary and Secondary learning, day and boarding life, and admissions.',
  icons: { icon: '/images/logo.png', apple: '/images/logo.png' },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}><Breadcrumbs />{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

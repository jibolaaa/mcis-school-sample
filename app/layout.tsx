import type { Metadata, Viewport } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Breadcrumbs from '@/components/Breadcrumbs';
import localFont from 'next/font/local';
import {isIndexable, siteUrl} from '@/lib/seo';
import './site.css';

const sans=localFont({src:[{path:'../public/fonts/school-font-1.woff2',weight:'400'},{path:'../public/fonts/school-font-3.woff2',weight:'600'}],variable:'--font-sans',display:'swap'});
const serif=localFont({src:'../public/fonts/school-font-4.woff2',weight:'400',variable:'--font-serif',display:'swap'});
export const viewport:Viewport={themeColor:'#f5f2e9',colorScheme:'light',width:'device-width',initialScale:1};
export const metadata: Metadata = {
 metadataBase:new URL(siteUrl),
  title: { default: 'MasterCare International School | Raising Global Heroes', template: '%s | MasterCare International School' },
  description:
    'Explore MasterCare International School in Asaba. Discover Early Years, Primary and Secondary learning, day and boarding life, and admissions.',
  icons: { icon: '/images/logo.jpg', apple: '/images/logo.jpg' },
  robots: { index: isIndexable, follow: isIndexable },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body id="top">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}><Breadcrumbs />{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { school } from '@/lib/school';

export default function SiteFooter() {
  return <footer className="footer site-footer-v2">
    <div className="shell footer-grid-v2">
      <div className="footer-brand-v2">
        <Image src="/images/logo.png" alt="MasterCare International School logo" width={52} height={52} />
        <div><strong>MasterCare</strong><span>International School</span></div>
        <p>Excellence through Christ.<br />Learning, character and community in Asaba.</p>
      </div>
      <nav className="footer-nav-v2" aria-label="Footer navigation">
        <div><span>Explore</span><Link href="/discover">Discover MCIS</Link><Link href="/academics">Academics</Link><Link href="/student-life">Student Life</Link></div>
        <div><span>Join us</span><Link href="/admissions">Admissions</Link><Link href="/contact#enquire">Plan a visit</Link><a href={school.portalUrl} target="_blank" rel="noopener noreferrer">School portal ↗<span className="sr-only">(opens in a new tab)</span></a></div>
      </nav>
      <div className="footer-contact-v2"><span>Asaba campus</span><p>1 Dan Okenyi Street<br />Off Okpanam Road<br />Asaba, Delta State</p><a href={'mailto:' + school.email}>{school.email}</a><a href={school.phoneHref}>{school.phone}</a><a href={school.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions ↗<span className="sr-only">(opens Google Maps in a new tab)</span></a></div>
    </div>
    <div className="shell footer-bottom-v2"><span>© {new Date().getFullYear()} MasterCare International School</span><a href="#top">Back to top ↑</a></div>
  </footer>;
}

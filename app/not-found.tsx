import Link from 'next/link';

export default function NotFound() {
  return <section className="not-found shell"><p className="eyebrow">Page not found</p><h1>Let’s find your way.</h1><p>This page may have moved. Explore MCIS or contact the school for help.</p><div className="page-hero-actions"><Link className="pill-button" href="/">Back to home</Link><Link className="text-link" href="/contact">Contact MCIS</Link></div></section>;
}

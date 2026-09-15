'use client';

import Link from 'next/link';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="not-found shell"><p className="eyebrow">Something went wrong</p><h1>Let’s try that again.</h1><p>We couldn’t load this page. Try again or return to the homepage.</p><div className="page-hero-actions"><button type="button" className="pill-button" onClick={reset}>Try again</button><Link className="text-link" href="/">Back to home</Link></div></section>;
}

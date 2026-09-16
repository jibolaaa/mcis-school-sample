'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const labels: Record<string, string> = { news: 'News & Notices', calendar: 'School Calendar', discover: 'Discover MCIS', academics: 'Academics', 'early-years': 'Early Years', primary: 'Primary', secondary: 'Secondary', 'student-life': 'Student Life', admissions: 'Admissions', contact: 'Visit & Contact' };

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/' || !pathname.split('/').filter(Boolean).every(part => labels[part])) return null;
  const parts = pathname.split('/').filter(Boolean);
  return <nav className={'breadcrumbs shell' + (pathname === '/academics' ? ' breadcrumbs-light' : '')} aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li>{parts.map((part, index) => <li key={part}>{index === parts.length - 1 ? <span aria-current="page">{labels[part] || 'Page'}</span> : <Link href={'/' + parts.slice(0, index + 1).join('/')}>{labels[part] || part}</Link>}</li>)}</ol></nav>;
}

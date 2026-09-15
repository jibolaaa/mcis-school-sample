'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import ArrowIcon from './ArrowIcon';

const navItems = [
  ['Discover', '/discover'],
  ['Academics', '/academics'],
  ['Student Life', '/student-life'],
  ['Admissions', '/admissions'],
  ['Visit & Contact', '/contact'],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScroll = useRef(0);
  const menu = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 26);
      if (!open && current > 160 && current > lastScroll.current + 6) setHidden(true);
      else if (current < lastScroll.current - 6 || current < 100) setHidden(false);
      lastScroll.current = current;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const desktop = window.matchMedia('(min-width: 1181px)');
    const closeOnDesktop = () => { if (desktop.matches) menu.current?.close(); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  useEffect(() => {
    menu.current?.close();
    setHidden(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const solid = scrolled || pathname !== '/' || open;

  return <>
    <header className={'site-header ' + (solid ? 'is-scrolled ' : '') + (hidden ? 'is-hidden' : '')}>
      <Link className="brand" href="/" aria-label="MasterCare International School home">
        <Image src="/images/logo.png" alt="" width={48} height={48} priority />
        <span><strong>MasterCare</strong><small>International School</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <Link className={isActive(href) ? 'is-active' : ''} aria-current={isActive(href) ? 'page' : undefined} key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <a className="portal-link" href="https://mcissch.com/portal/login.html" target="_blank" rel="noopener noreferrer">Portal <span className="sr-only">(opens in a new tab)</span><ArrowIcon size={14} /></a>
        <Link className="pill-button compact" href="/admissions">Begin admission</Link>
        <button ref={toggle} type="button" className="menu-toggle" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { menu.current?.showModal(); setOpen(true); setHidden(false); }}><span /><span /></button>
      </div>
    </header>
    <dialog ref={menu} id="mobile-navigation" className="mobile-menu" aria-labelledby="menu-title" onClose={() => { setOpen(false); toggle.current?.focus({ preventScroll: true }); }} onClick={(event) => { if (event.target === event.currentTarget) menu.current?.close(); }}>
      <div className="mobile-menu-inner">
        <div className="mobile-menu-heading"><p id="menu-title" className="eyebrow light">Explore MasterCare</p><button type="button" className="menu-close" onClick={() => menu.current?.close()} aria-label="Close menu">✕</button></div>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => <Link key={href} href={href} className={isActive(href) ? 'is-active' : ''} aria-current={isActive(href) ? 'page' : undefined} onClick={() => menu.current?.close()}><span>0{index + 1}</span><b>{label}</b><ArrowIcon size={20} /></Link>)}
        </nav>
        <Link href="/admissions" className="pill-button light mobile-admission" onClick={() => menu.current?.close()}>Begin admission <ArrowIcon size={17} /></Link>
        <div className="mobile-contact"><a href="https://mcissch.com/portal/login.html" target="_blank" rel="noopener noreferrer">School portal <span className="sr-only">(opens in a new tab)</span><ArrowIcon size={16} /></a><p>1 Dan Okenyi Street, off Okpanam Road, Asaba.</p><a href="mailto:info@mcis.sch.ng">info@mcis.sch.ng</a></div>
      </div>
    </dialog>
  </>;
}

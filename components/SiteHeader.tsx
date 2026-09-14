'use client';

import { useEffect, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon';

const navItems = [
  ['Discover', '/discover'],
  ['Academics', '/academics'],
  ['Student Life', '/student-life'],
  ['Admissions', '/admissions'],
  ['Visit', '/contact'],
];

export default function SiteHeader({ overlay = true }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 26);

      if (!open && current > 140 && current > lastScroll.current + 5) {
        setHidden(true);
      } else if (current < lastScroll.current - 5 || current < 100) {
        setHidden(false);
      }
      lastScroll.current = current;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) setHidden(false);
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const solid = scrolled || !overlay || open;

  return (
    <>
      <header className={`site-header ${solid ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}>
        <a className="brand" href="/" aria-label="MasterCare International School home">
          <img src="https://edusko-dev-bucket.s3.eu-north-1.amazonaws.com/16375729583010KhsqsXmqEs7MGLQHaGfh804IMpfTuT1.png" alt="MasterCare International School logo" />
          <span><strong>MasterCare</strong><small>International School</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <a className="portal-link" href="https://mcissch.com/portal/login.html" target="_blank" rel="noreferrer">Portal</a>
          <a className="pill-button compact" href="/admissions">Begin admission</a>
          <button className={`menu-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <p className="eyebrow light">Explore MCIS</p>
          <nav>
            {navItems.map(([label, href], index) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span><b>{label}</b><ArrowIcon size={20} />
              </a>
            ))}
          </nav>
          <div className="mobile-contact"><p>1 Dan Okenyi Street, off Okpanam Road, Asaba.</p><a href="mailto:info@mcis.sch.ng">info@mcis.sch.ng</a></div>
        </div>
      </div>
    </>
  );
}

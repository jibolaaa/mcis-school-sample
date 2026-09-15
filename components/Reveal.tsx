'use client';

import { ReactNode, useEffect, useRef } from 'react';

export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.animate([{ transform: 'translateY(18px)' }, { transform: 'translateY(0)' }], { duration: 550, easing: 'cubic-bezier(.2,.75,.2,1)' });
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={'reveal ' + className}>{children}</div>;
}

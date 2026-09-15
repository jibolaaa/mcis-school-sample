'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon';

type Stage = { number: string; title: string; text: string; meta: string; href: string };

export default function StageCarousel({ stages }: { stages: Stage[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const [active, setActive] = useState(0);
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const update = () => {
      const left = rail.getBoundingClientRect().left;
      const cards = Array.from(rail.children) as HTMLElement[];
      if (rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2 && rail.scrollLeft > 0) { setActive(cards.length - 1); return; }
      const distances = cards.map(card => Math.abs(card.getBoundingClientRect().left - left));
      setActive(distances.indexOf(Math.min(...distances)));
    };
    rail.addEventListener('scroll', update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(rail);
    update();
    return () => { rail.removeEventListener('scroll', update); resize.disconnect(); };
  }, []);

  const goTo = (index: number) => {
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;
    rail.scrollTo({ left: rail.scrollLeft + card.getBoundingClientRect().left - rail.getBoundingClientRect().left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  return <div className="stage-carousel-shell" role="region" aria-label="Academic stages">
    <div id={id} ref={railRef} className="stage-grid">
      {stages.map(stage => <Link key={stage.title} href={stage.href} className="stage-card-link" aria-label={'Explore ' + stage.title}>
        <article className={"stage-card stage-tone-" + stage.number}>
          <div className="stage-top"><span>{stage.number}</span><span className="stage-arrow"><ArrowIcon size={18} /></span></div>
          <div className="stage-body"><p>{stage.meta}</p><h3>{stage.title}</h3><p className="stage-description">{stage.text}</p><span className="stage-explore">Explore this stage <ArrowIcon size={16} /></span></div>
        </article>
      </Link>)}
    </div>
    <div className="stage-progress">
      <div className="stage-pagination" aria-label="Choose a learning stage">{stages.map((stage, index) => <button type="button" key={stage.number} aria-label={'Show ' + stage.title} aria-pressed={active === index} aria-controls={id} onClick={() => goTo(index)}><span /></button>)}</div>
      <span className="stage-count" aria-live="polite" aria-atomic="true">{active + 1} / {stages.length}</span>
      <div className="stage-controls"><button type="button" aria-label="Previous learning stage" aria-controls={id} disabled={active === 0} onClick={() => goTo(Math.max(0, active - 1))}>←</button><button type="button" aria-label="Next learning stage" aria-controls={id} disabled={active === stages.length - 1} onClick={() => goTo(Math.min(stages.length - 1, active + 1))}>→</button></div>
    </div>
  </div>;
}

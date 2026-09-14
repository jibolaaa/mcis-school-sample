'use client';

import { useEffect, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon';

type Stage = {
  number: string;
  title: string;
  text: string;
  meta: string;
  href: string;
  image: string;
};

export default function StageCarousel({ stages }: { stages: Stage[] }) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updateActive = () => {
      const cards = Array.from(rail.querySelectorAll<HTMLElement>('.stage-card-link'));
      if (!cards.length) return;
      const center = rail.scrollLeft + rail.clientWidth / 2;
      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const nextDistance = Math.abs(cardCenter - center);
        if (nextDistance < distance) {
          distance = nextDistance;
          closest = index;
        }
      });
      setActive(closest);
    };

    updateActive();
    rail.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      rail.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  return (
    <div className="stage-carousel-shell">
      <div ref={railRef} className="stage-grid" aria-label="Academic stages">
        {stages.map((stage) => (
          <a key={stage.title} href={stage.href} className="stage-card-link">
            <article className="stage-card">
              <div
                className="stage-card-bg"
                aria-hidden="true"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(5,37,29,.2), rgba(5,37,29,.86)), url(${stage.image})` }}
              />
              <div className="stage-top">
                <span>{stage.number}</span>
                <span className="stage-arrow"><ArrowIcon size={18} /></span>
              </div>
              <div className="stage-body">
                <p>{stage.meta}</p>
                <h3>{stage.title}</h3>
                <p className="stage-description">{stage.text}</p>
              </div>
            </article>
          </a>
        ))}
      </div>

      <div className="stage-progress" aria-live="polite">
        <span className="stage-progress-label">Swipe to explore</span>
        <strong>{String(active + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}</strong>
        <div className="stage-progress-bars" aria-hidden="true">
          {stages.map((stage, index) => <i key={stage.number} className={index === active ? 'is-active' : ''} />)}
        </div>
      </div>
    </div>
  );
}

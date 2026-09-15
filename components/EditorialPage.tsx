import Link from 'next/link';
import StageNavigation from './StageNavigation';
import ArrowIcon from './ArrowIcon';

export type EditorialSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export default function EditorialPage({
  eyebrow,
  title,
  intro,
  sections,
  ctaLabel = 'Explore admissions',
  ctaHref = '/admissions',
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: EditorialSection[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className={"section-page academic-detail-page " + (eyebrow === "Early Years" ? "early-stage" : eyebrow === "Primary School" ? "primary-stage" : "secondary-stage")}>

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <div className="page-hero-actions"><Link className="pill-button" href={ctaHref}>{ctaLabel}</Link><Link className="inline-cta" href="/academics">All academics <ArrowIcon size={18} /></Link></div>
          </div>
          <aside className="stage-summary" aria-label="At this stage"><div className="stage-summary-top"><span>THE LEARNING JOURNEY</span><span aria-hidden="true">{eyebrow === 'Early Years' ? '01' : eyebrow === 'Primary School' ? '02' : '03'}</span></div><h2>{eyebrow}</h2><p>At this stage</p><ul>{sections.map(section => <li key={section.heading}>{section.heading}<span aria-hidden="true">↗</span></li>)}</ul><Link href="/contact#enquire">Ask about joining this stage <ArrowIcon size={18}/></Link></aside>
        </div>
      </section>

      <StageNavigation current={eyebrow} />

      <section className="section-pad">
        <div className="shell editorial-split">
          <div className="editorial-sticky"><p className="eyebrow">Inside {eyebrow}</p><h2>The foundations for what follows.</h2><p>A closer look at the learning, habits and experiences at this stage.</p></div>
          <div className="editorial-stack">
            {sections.map((section, index) => (
              <article className="editorial-row" key={section.heading}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                  {section.bullets && <ul className="inner-bullets">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="shell">
          <div><p className="eyebrow light">Next step</p><h2>See how this stage fits into the wider MCIS journey.</h2></div>
          <div className="page-final-actions"><Link className="pill-button light" href={ctaHref}>{ctaLabel}</Link><Link className="text-link light-link" href="/contact">Plan a visit <ArrowIcon size={17} /></Link></div>
        </div>
      </section>

    </div>
  );
}

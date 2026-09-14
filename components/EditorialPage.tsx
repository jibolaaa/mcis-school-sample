import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
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
  image,
  sections,
  ctaLabel = 'Explore admissions',
  ctaHref = '/admissions',
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  sections: EditorialSection[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <main className="section-page academic-detail-page">
      <SiteHeader overlay={false} />

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <div className="page-hero-actions"><a className="pill-button" href={ctaHref}>{ctaLabel}</a><a className="inline-cta" href="/academics">All academics <ArrowIcon size={18} /></a></div>
          </div>
          <div className="page-hero-media">
            <img src={image} alt="" />
            <div className="page-hero-caption"><span>MasterCare International School</span><span>{eyebrow}</span></div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell editorial-split">
          <div className="editorial-sticky"><p className="eyebrow">Inside {eyebrow}</p><h2>What this stage is designed to build.</h2><p>Each stage has its own pace and expectations, but the same focus on knowledge, confidence, character and readiness for what comes next.</p></div>
          <div className="editorial-stack">
            {sections.map((section, index) => (
              <article className="editorial-row" key={section.heading}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                  {section.bullets && <div className="inner-bullets">{section.bullets.map((item) => <span key={item}>{item}</span>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="shell">
          <div><p className="eyebrow light">Next step</p><h2>See how this stage fits into the wider MCIS journey.</h2></div>
          <div className="page-final-actions"><a className="pill-button light" href={ctaHref}>{ctaLabel}</a><a className="text-link light-link" href="/contact">Plan a visit <ArrowIcon size={17} /></a></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

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
    <main id="top" className="inner-page">
      <SiteHeader overlay={false} />
      <section className="inner-hero shell">
        <div className="inner-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <a className="inline-cta" href={ctaHref}>{ctaLabel}<ArrowIcon size={18} /></a>
        </div>
        <div className="inner-hero-image" style={{ backgroundImage: `linear-gradient(rgba(5,37,29,.08),rgba(5,37,29,.32)), url(${image})` }} />
      </section>

      <section className="inner-content shell">
        {sections.map((section, index) => (
          <article className="inner-section" key={section.heading}>
            <span>0{index + 1}</span>
            <div>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.bullets && <div className="inner-bullets">{section.bullets.map((item) => <span key={item}>{item}</span>)}</div>}
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}

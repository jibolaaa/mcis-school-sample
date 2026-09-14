import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArrowIcon from '@/components/ArrowIcon';

const steps = [
  ['01', 'Discover', 'Explore the school, learning stages and student experience before deciding whether MCIS feels right for your family.'],
  ['02', 'Visit', 'See the campus, ask questions and understand the environment your child would be joining.'],
  ['03', 'Apply', 'Share the appropriate information for your child’s intended entry level and academic stage.'],
  ['04', 'Assessment', 'Complete the relevant assessment and conversation with the admissions team.'],
  ['05', 'Enrol', 'Receive next-step guidance and prepare for entry into the MCIS community.'],
];

export default function AdmissionsPage() {
  return (
    <main className="section-page admissions-page">
      <SiteHeader overlay={false} />

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">Admissions</p>
            <h1>A clear path into <em>MCIS.</em></h1>
            <p>Choosing a school is a major family decision. The admissions journey should make it easier to understand the school, experience the campus and know exactly what comes next.</p>
            <div className="page-hero-actions"><a className="pill-button" href="/contact">Plan a school visit</a><a className="inline-cta" href="#process">See the process <ArrowIcon size={18} /></a></div>
          </div>
          <div className="page-hero-media">
            <img src="https://mcis.sch.ng/home/images/w14.png" alt="MasterCare International School students" />
            <span className="page-hero-index">04</span>
            <div className="page-hero-caption"><span>Admissions at MCIS</span><span>Discover · Visit · Apply</span></div>
          </div>
        </div>
      </section>

      <section id="process" className="admissions-process section-pad">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">The journey</p><h2>Five steps.<br />No guesswork.</h2></div>
            <p className="heading-note">The sample site focuses on making the public admissions journey understandable first. The full digital application workflow can sit behind this experience when the final system is commissioned.</p>
          </div>
          <div className="process-grid">
            {steps.map(([number, title, text]) => <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell admission-help">
          <article>
            <div><p className="eyebrow light">Not sure where to start?</p><h3>Visit before you decide.</h3><p>Meet the school team, explore the campus and discuss the appropriate entry point for your child.</p></div>
            <a className="text-link light-link" href="/contact">Plan your visit <ArrowIcon size={17} /></a>
          </article>
          <article>
            <div><p className="eyebrow light">Already exploring MCIS?</p><h3>Understand the learning route.</h3><p>Compare Early Years, Primary and Secondary, then review the Cambridge and Nigerian qualification pathways.</p></div>
            <a className="text-link light-link" href="/academics">Explore academics <ArrowIcon size={17} /></a>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell editorial-split">
          <div className="editorial-sticky"><p className="eyebrow">Before you apply</p><h2>Know what matters to your family.</h2><p>A strong admissions page should help families arrive at the application stage already understanding the school’s academic direction, culture and daily experience.</p></div>
          <div className="editorial-stack">
            <article className="editorial-row"><span>01</span><div><h3>Choose the right stage</h3><p>Identify whether your child is entering Early Years, Primary or Secondary and review the expectations for that stage.</p></div></article>
            <article className="editorial-row"><span>02</span><div><h3>Understand day or boarding life</h3><p>Ask how the daily routine differs for day students and boarders, and what pastoral support looks like in practice.</p></div></article>
            <article className="editorial-row"><span>03</span><div><h3>Review the academic pathway</h3><p>For older students, understand how Cambridge, IGCSE, WAEC, NECO and UTME routes fit into future university plans.</p></div></article>
          </div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="shell">
          <div><p className="eyebrow light">Your next step</p><h2>Start with a conversation and a campus visit.</h2></div>
          <div className="page-final-actions"><a className="pill-button light" href="/contact">Contact MCIS</a><a className="text-link light-link" href="/discover">Discover the school <ArrowIcon size={17} /></a></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';

const steps = [
  ['01', 'Discover', 'Explore the school, learning stages and student experience before deciding whether MCIS feels right for your family.'],
  ['02', 'Visit', 'See the campus, ask questions and understand the environment your child would be joining.'],
  ['03', 'Apply', 'Ask admissions for the current application form and confirm the documents required for your child’s stage.'],
  ['04', 'Assessment', 'Complete the relevant assessment and conversation with the admissions team.'],
  ['05', 'Enrol', 'Receive next-step guidance and prepare for entry into the MCIS community.'],
];

export const metadata = pageMetadata('admissions');

export default function AdmissionsPage() {
  return (
    <div className="section-page admissions-page">

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">Admissions</p>
            <h1>A clear path into <em>MCIS.</em></h1>
            <p>Explore the right learning stage, visit the campus and speak with the admissions team about your child’s next step.</p>
            <div className="page-hero-actions"><Link className="pill-button" href="/contact#enquire">Enquire about admission <ArrowIcon size={17} /></Link><Link className="inline-cta" href="#process">See the process <ArrowIcon size={18} /></Link></div>
          </div>
          <aside className="admissions-chooser" aria-label="Choose a learning stage"><p className="eyebrow light">A place for your next chapter</p><h2>Where will<br/><em>you begin?</em></h2>{[['01','Early Years','/academics/early-years'],['02','Primary','/academics/primary'],['03','Secondary','/academics/secondary']].map(([n,title,href]) => <Link href={href} key={n}><span>{n}</span><strong>{title}</strong><ArrowIcon size={21}/></Link>)}<p className="chooser-note">Not sure? The admissions team can help you find the right entry point.</p></aside>
        </div>
      </section>

      <section id="process" className="admissions-process section-pad">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">The journey</p><h2>Your admissions<br />journey.</h2></div>
            <p className="heading-note">The school will confirm entry requirements, assessment arrangements, fees and available places for your child’s stage.</p>
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
            <Link className="text-link light-link" href="/contact">Plan your visit <ArrowIcon size={17} /></Link>
          </article>
          <article>
            <div><p className="eyebrow light">Already exploring MCIS?</p><h3>Understand the learning route.</h3><p>Compare Early Years, Primary and Secondary, then review the Cambridge and Nigerian qualification pathways.</p></div>
            <Link className="text-link light-link" href="/academics">Explore academics <ArrowIcon size={17} /></Link>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell editorial-split">
          <div className="editorial-sticky"><p className="eyebrow">Before you apply</p><h2>Know what matters to your family.</h2><p>A strong admissions journey helps families arrive at the application stage already understanding the school’s academic direction, culture and daily experience.</p></div>
          <div className="editorial-stack">
            <article className="editorial-row"><span>01</span><div><h3>Choose the right stage</h3><p>Identify whether your child is entering Early Years, Primary or Secondary and review the expectations for that stage.</p></div></article>
            <article className="editorial-row"><span>02</span><div><h3>Understand day or boarding life</h3><p>Ask how the daily routine differs for day students and boarders, and what pastoral support looks like in practice.</p></div></article>
            <article className="editorial-row"><span>03</span><div><h3>Review the academic pathway</h3><p>For older students, understand how Cambridge, IGCSE, WAEC, NECO and UTME routes fit into future university plans.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell"><div className="admission-faq">
          <p className="eyebrow">Questions families ask</p><h2>Before your next step.</h2>
          <details><summary>How do I start an application?</summary><p><Link href="/contact#enquire">Contact the admissions team</Link> for the current application form and help choosing an entry stage. The school will guide you through its requirements.</p></details>
          <details><summary>Can we visit before applying?</summary><p>Contact the school to arrange a suitable time. Share the learning stage you are considering and any questions about learning, boarding or student life. <Link href="/contact#enquire">Prepare a visit enquiry.</Link></p></details>
          <details><summary>Where can I find current fees and available places?</summary><p>Ask the admissions team for the current fees, what they include and availability for your child’s stage. Confirm these details with the school before making plans or payments.</p></details>
          <details><summary>Which documents will we need?</summary><p>The admissions team can confirm the documents and assessments required for your child’s intended entry point. Have their current school stage and the stage you wish to enter ready for the conversation.</p></details>
          <details><summary>Who can help with day and boarding options?</summary><p>The school team can explain which options are available for your child’s stage, including routines, supervision, pastoral care and family communication. <Link href="/student-life#boarding">Explore student life.</Link></p></details>
        </div></div>
      </section>

      <section className="page-final-cta">
        <div className="shell">
          <div><p className="eyebrow light">Your next step</p><h2>Start with a conversation and a campus visit.</h2></div>
          <div className="page-final-actions"><Link className="pill-button light" href="/contact">Contact MCIS</Link><Link className="text-link light-link" href="/discover">Discover the school <ArrowIcon size={17} /></Link></div>
        </div>
      </section>

    </div>
  );
}

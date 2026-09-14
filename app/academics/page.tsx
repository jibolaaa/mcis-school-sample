import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArrowIcon from '@/components/ArrowIcon';

const stages = [
  { title: 'Early Years', meta: 'Crèche · Pre-School', text: 'Curiosity, communication, movement and confident exploration form the first layer of learning.', href: '/academics/early-years', image: 'https://mcis.sch.ng/home/images/w14.png' },
  { title: 'Primary', meta: 'Elementary School', text: 'Strong foundations in literacy, numeracy, creativity and character create room for bigger questions.', href: '/academics/primary', image: 'https://www.nigeriaprivateschools.com/uploads/images/master_care.jpg' },
  { title: 'Secondary', meta: 'Middle · High School', text: 'A more rigorous local and international pathway builds independence, leadership and examination readiness.', href: '/academics/secondary', image: 'https://mcis.sch.ng/home/images/w12.jpg' },
];

const pathways = [
  ['01', 'Cambridge', 'Checkpoint pathway'],
  ['02', 'IGCSE', 'International qualification'],
  ['03', 'WAEC', 'West African progression'],
  ['04', 'NECO', 'National qualification'],
  ['05', 'UTME', 'University progression'],
];

export default function AcademicsPage() {
  return (
    <main className="section-page academics-page">
      <SiteHeader overlay={false} />

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow light">Academics</p>
            <h1>Strong foundations. <em>Wider possibilities.</em></h1>
            <p>MCIS blends Nigerian and international learning pathways so students build depth, confidence and the qualifications needed for the next stage of their education.</p>
            <div className="page-hero-actions"><a className="pill-button light" href="#stages">Explore learning stages</a><a className="text-link light-link" href="/admissions">Admissions <ArrowIcon size={17} /></a></div>
          </div>
          <div className="page-hero-media">
            <img src="https://mcis.sch.ng/home/images/w12.jpg" alt="Students learning at MasterCare International School" />
            <span className="page-hero-index">02</span>
            <div className="page-hero-caption"><span>Learning at MCIS</span><span>Local depth · Global route</span></div>
          </div>
        </div>
      </section>

      <section id="stages" className="section-pad">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Learning stages</p><h2>One journey.<br />Three distinct stages.</h2></div>
            <p className="heading-note">Expectations, independence and academic challenge increase as students move through the school, while the core focus on curiosity and character remains consistent.</p>
          </div>
          <div className="academic-stage-list">
            {stages.map((stage, index) => (
              <a className="academic-stage-panel" href={stage.href} key={stage.title}>
                <img src={stage.image} alt="" />
                <div className="academic-stage-copy"><span>0{index + 1} · {stage.meta}</span><h3>{stage.title}</h3><p>{stage.text}</p><span className="text-link light-link">Explore stage <ArrowIcon size={16} /></span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pathway-band section-pad">
        <div className="shell">
          <div className="pathway-head">
            <div><p className="eyebrow light">Qualification pathways</p><h2>Prepared for Nigeria. Ready for the world.</h2></div>
            <p>Senior students can progress through Cambridge and Nigerian examination routes, giving families flexibility without asking students to choose between local relevance and international opportunity.</p>
          </div>
          <div className="pathway-grid">
            {pathways.map(([number, title, caption]) => <a className="pathway-card" href="/academics/secondary" key={title}><span>{number}</span><strong>{title}</strong><small>{caption}</small></a>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Beyond subjects</p><h2>Academic growth needs more than a timetable.</h2></div>
            <p className="heading-note">A serious academic culture also depends on the habits students build outside lessons.</p>
          </div>
          <div className="learning-beyond">
            <article><span>01</span><h3>Critical thinking</h3><p>Students are encouraged to question, connect ideas and explain their reasoning rather than simply reproduce answers.</p></article>
            <article><span>02</span><h3>Communication</h3><p>Clear writing, confident speaking and purposeful collaboration support progress across every subject area.</p></article>
            <article><span>03</span><h3>Mentorship</h3><p>Regular guidance gives students space to reflect on choices, habits, goals and personal development.</p></article>
            <article><span>04</span><h3>Enterprise</h3><p>Entrepreneurship helps students turn knowledge into initiative, problem-solving and practical responsibility.</p></article>
          </div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="shell">
          <div><p className="eyebrow light">Find the right stage</p><h2>Explore where your child fits into the MCIS learning journey.</h2></div>
          <div className="page-final-actions"><a className="pill-button light" href="/admissions">Explore admissions</a><a className="text-link light-link" href="/contact">Plan a visit <ArrowIcon size={17} /></a></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

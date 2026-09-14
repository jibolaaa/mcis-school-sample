import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArrowIcon from '@/components/ArrowIcon';

const rhythm = [
  ['MON–THU', 'Entrepreneurship', 'Ideas into action'],
  ['WED', 'Mentorship', 'Guidance and reflection'],
  ['THU', 'Sport', 'Movement and teamwork'],
  ['FRI', 'Clubs', 'Interests and community'],
];

export default function StudentLifePage() {
  return (
    <main className="section-page student-life-page">
      <SiteHeader overlay={false} />

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">Student life</p>
            <h1>Growing through <em>participation.</em></h1>
            <p>Life at MCIS extends beyond lessons. Boarding, sport, clubs, mentoring and enterprise create daily opportunities to build confidence, discipline, friendship and responsibility.</p>
            <div className="page-hero-actions"><a className="pill-button" href="#rhythm">Explore student life</a><a className="inline-cta" href="/contact">Visit the campus <ArrowIcon size={18} /></a></div>
          </div>
          <div className="student-collage">
            <figure><img src="https://mcis.sch.ng/home/images/u33.jpg" alt="Student life at MasterCare International School" /></figure>
            <figure><img src="https://static.wixstatic.com/media/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg/v1/fill/w_980%2Ch_728%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg" alt="MasterCare International School students" /></figure>
            <figure><img src="https://mcis.sch.ng/home/images/u11.jpg" alt="MasterCare International School activities" /></figure>
          </div>
        </div>
      </section>

      <section id="rhythm" className="rhythm-section section-pad">
        <div className="shell rhythm-grid">
          <div>
            <p className="eyebrow light">A fuller school week</p>
            <h2>Growth has a rhythm.</h2>
            <p>MCIS builds structured activities into the school week so development beyond academics is not left to chance.</p>
          </div>
          <div className="rhythm-list">
            {rhythm.map(([day, title, note]) => <div className="rhythm-row" key={title}><span>{day}</span><strong>{title}</strong><small>{note}</small></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell life-feature-grid">
          <div className="life-feature-main">
            <img src="https://lh5.googleusercontent.com/p/AF1QipOjs_kqNXM1d97iMBMi72tSiEP9oSWjWS9ZWxE2=w1600-k-no" alt="MasterCare International School campus" />
            <div className="life-feature-copy"><p className="eyebrow light">Boarding & community</p><h2>Belonging is part of the education.</h2><p>Residential life is designed around structure, care and growing independence, while keeping students connected to a supervised school community.</p></div>
          </div>
          <div className="life-mini-grid">
            <article className="life-mini"><span>01 · Sport & clubs</span><div><h3>Confidence through action.</h3><p>Teamwork, competition and shared interests give students more ways to discover strengths and form friendships.</p></div></article>
            <article className="life-mini"><span>02 · Leadership & enterprise</span><div><h3>Responsibility in practice.</h3><p>Students are given practical opportunities to lead, solve problems, make decisions and turn ideas into useful outcomes.</p></div></article>
          </div>
        </div>
      </section>

      <section className="discover-values section-pad">
        <div className="shell">
          <div><p className="eyebrow light">Pastoral development</p><h2>Students need people who notice how they are growing.</h2><p>Mentorship, assemblies, routines and community life give students consistent touchpoints for reflection, guidance and accountability.</p></div>
          <div className="heroes-grid">
            <div className="hero-value"><span>01</span><strong>Mentorship</strong></div>
            <div className="hero-value"><span>02</span><strong>Service</strong></div>
            <div className="hero-value"><span>03</span><strong>Leadership</strong></div>
            <div className="hero-value"><span>04</span><strong>Belonging</strong></div>
          </div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="shell">
          <div><p className="eyebrow light">Experience daily life</p><h2>Walk the campus, meet the team and see where students spend their day.</h2></div>
          <div className="page-final-actions"><a className="pill-button light" href="/contact">Plan a visit</a><a className="text-link light-link" href="/admissions">Admissions <ArrowIcon size={17} /></a></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

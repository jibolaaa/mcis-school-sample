import SiteHeader from '@/components/SiteHeader';
import Reveal from '@/components/Reveal';

const learningStages = [
  {
    number: '01',
    title: 'Early Years',
    text: 'A warm beginning built around curiosity, language, movement and confident exploration.',
    meta: 'Crèche · Pre-School',
  },
  {
    number: '02',
    title: 'Primary',
    text: 'Strong foundations in literacy, numeracy, creativity and character — with room to ask bigger questions.',
    meta: 'Elementary School',
  },
  {
    number: '03',
    title: 'Secondary',
    text: 'A rigorous Nigerian and international pathway designed for independence, leadership and global progression.',
    meta: 'Middle · High School',
  },
];

const values = [
  ['H', 'Heroes'],
  ['E', 'Excellence'],
  ['R', 'Responsibility'],
  ['O', 'Order'],
  ['E', 'Entrepreneurship'],
  ['S', 'Solutions'],
];

const admissionSteps = [
  ['01', 'Discover', 'Explore the school, our curriculum and the opportunities available to your child.'],
  ['02', 'Visit', 'Experience the campus, meet our team and understand daily life at MCIS.'],
  ['03', 'Apply', 'Submit the appropriate admission information for your child’s entry level.'],
  ['04', 'Assessment', 'Complete the relevant assessment and conversation with the admissions team.'],
  ['05', 'Enrol', 'Receive next-step guidance and prepare to join the MCIS community.'],
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content shell">
          <p className="hero-kicker">Asaba, Delta State · Nigeria</p>
          <h1 id="hero-title">
            Raising<br />
            <span>global heroes.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              A forward-looking international education where academic excellence,
              character and purpose grow together.
            </p>
            <div className="hero-actions">
              <a href="#discover" className="pill-button light">Explore MCIS</a>
              <a href="#admissions" className="text-link light-link">Admissions <span>↗</span></a>
            </div>
          </div>
        </div>

        <div className="hero-side-note">Scroll to discover <span>↓</span></div>
      </section>

      <section id="discover" className="manifesto section-pad">
        <div className="shell manifesto-grid">
          <Reveal>
            <p className="eyebrow">MasterCare International School</p>
          </Reveal>
          <Reveal className="manifesto-copy">
            <h2>
              More than a school.<br />
              <em>A foundation for what comes next.</em>
            </h2>
            <p>
              MCIS combines Nigerian and international learning pathways with a culture
              designed to help students think creatively, reason critically, communicate
              confidently and grow into responsible world citizens.
            </p>
            <a className="text-link" href="#academics">Discover our approach <span>↗</span></a>
          </Reveal>
        </div>
      </section>

      <section id="academics" className="academics section-pad">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Learning journey</p>
              <h2>Built for every<br />stage of becoming.</h2>
            </div>
            <p className="heading-note">
              From first discoveries to examination years, each stage is designed to
              develop knowledge, independence and a genuine appetite for learning.
            </p>
          </Reveal>

          <div className="stage-grid">
            {learningStages.map((stage) => (
              <Reveal key={stage.title} className="stage-card-wrap">
                <article className="stage-card">
                  <div className="stage-top">
                    <span>{stage.number}</span>
                    <span className="stage-arrow">↗</span>
                  </div>
                  <div className="stage-body">
                    <p>{stage.meta}</p>
                    <h3>{stage.title}</h3>
                    <p className="stage-description">{stage.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cambridge section-pad">
        <div className="shell cambridge-grid">
          <Reveal className="cambridge-title">
            <p className="eyebrow light">Academic pathways</p>
            <h2>Local grounding.<br /><em>Global possibility.</em></h2>
          </Reveal>
          <Reveal className="cambridge-copy">
            <p className="big-copy">
              Students progress through a blended academic environment that includes
              Cambridge Checkpoint and IGCSE alongside WAEC, NECO and UTME pathways.
            </p>
            <div className="qualification-row" aria-label="Academic qualifications">
              <span>Cambridge</span><span>IGCSE</span><span>WAEC</span><span>NECO</span><span>UTME</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="campus-feature">
        <div className="campus-image" role="img" aria-label="MasterCare International School campus in Asaba" />
        <div className="campus-panel">
          <Reveal>
            <p className="eyebrow light">The MCIS campus</p>
            <h2>Space to learn.<br />Room to become.</h2>
            <p>
              A purpose-built school environment in Asaba with learning, recreation and
              community spaces designed around the rhythm of student life.
            </p>
            <a className="pill-button light" href="#visit">Explore the campus</a>
          </Reveal>
        </div>
      </section>

      <section id="student-life" className="student-life section-pad">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Beyond the classroom</p>
              <h2>A fuller kind<br />of education.</h2>
            </div>
            <p className="heading-note">
              Sport, mentorship, clubs, entrepreneurship and boarding life give students
              practical spaces to build confidence, discipline and community.
            </p>
          </Reveal>

          <div className="life-layout">
            <Reveal className="life-quote">
              <blockquote>“We are preparing students not only to pass examinations, but to carry responsibility.”</blockquote>
              <p>MCIS educational philosophy</p>
            </Reveal>
            <Reveal className="life-image-card">
              <img
                src="https://static.wixstatic.com/media/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg/v1/fill/w_980%2Ch_728%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg"
                alt="MasterCare International School student receiving academic recognition"
              />
              <div className="image-caption"><span>Academic recognition</span><span>MCIS · Asaba</span></div>
            </Reveal>
          </div>

          <Reveal className="life-tags">
            <span>Boarding</span><span>Sport</span><span>Mentorship</span><span>Clubs</span><span>Entrepreneurship</span><span>Leadership</span>
          </Reveal>
        </div>
      </section>

      <section className="values section-pad">
        <div className="shell values-grid">
          <Reveal>
            <p className="eyebrow light">Our values</p>
            <h2>HEROES is more<br />than an acronym.</h2>
            <p className="values-intro">
              It is the standard MCIS sets for how students learn, contribute and lead.
            </p>
          </Reveal>
          <div className="values-list">
            {values.map(([letter, label]) => (
              <Reveal key={label} className="value-row">
                <span>{letter}</span><strong>{label}</strong><span className="rule" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="admissions section-pad">
        <div className="shell">
          <Reveal className="admissions-intro">
            <p className="eyebrow">Admissions</p>
            <h2>Your child’s next chapter<br /><em>can begin here.</em></h2>
            <p>
              The full online application system comes next. For this public-site sample,
              we are making the journey clear before asking families to take action.
            </p>
          </Reveal>

          <div className="admission-steps">
            {admissionSteps.map(([number, title, description]) => (
              <Reveal key={number} className="admission-step">
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="admission-cta">
            <div>
              <p className="eyebrow light">Ready when you are</p>
              <h3>Come and experience MCIS.</h3>
            </div>
            <div className="cta-actions">
              <a className="pill-button light" href="mailto:info@mcis.sch.ng?subject=MCIS%20Admissions%20Enquiry">Make an enquiry</a>
              <a className="text-link light-link" href="#visit">Plan a visit <span>↗</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="visit" className="footer">
        <div className="shell footer-top">
          <div className="footer-brand">
            <img
              src="https://edusko-dev-bucket.s3.eu-north-1.amazonaws.com/16375729583010KhsqsXmqEs7MGLQHaGfh804IMpfTuT1.png"
              alt="MasterCare International School logo"
            />
            <div>
              <strong>MasterCare International School</strong>
              <span>Excellence through Christ.</span>
            </div>
          </div>
          <div className="footer-columns">
            <div><p>Visit</p><span>1 Dan Okenyi Street<br />Off Okpanam Road<br />Asaba, Delta State</span></div>
            <div><p>Contact</p><a href="mailto:info@mcis.sch.ng">info@mcis.sch.ng</a><a href="tel:+2348090917701">+234 809 091 7701</a></div>
            <div><p>Explore</p><a href="#academics">Academics</a><a href="#student-life">Student Life</a><a href="#admissions">Admissions</a></div>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} MasterCare International School</span>
          <span>Sample concept · Public website direction</span>
        </div>
      </footer>
    </main>
  );
}

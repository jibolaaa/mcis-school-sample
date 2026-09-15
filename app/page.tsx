import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import ArrowIcon from '@/components/ArrowIcon';
import StageCarousel from '@/components/StageCarousel';

const learningStages = [
  {
    number: '01',
    title: 'Early Years',
    text: 'A warm beginning built around curiosity, language, movement and confident exploration.',
    meta: 'Crèche · Pre-School',
    href: '/academics/early-years',
    image: '/images/leadership.jpg',
  },
  {
    number: '02',
    title: 'Primary',
    text: 'Strong foundations in literacy, numeracy, creativity and character, with room to ask bigger questions.',
    meta: 'Elementary School',
    href: '/academics/primary',
    image: '/images/campus.jpg',
  },
  {
    number: '03',
    title: 'Secondary',
    text: 'A rigorous Nigerian and international pathway designed for independence, leadership and global progression.',
    meta: 'Middle · High School',
    href: '/academics/secondary',
    image: '/images/leadership.jpg',
  },
];

const credentials = [
  ['01', 'Cambridge', 'Checkpoint pathway'],
  ['02', 'IGCSE', 'International qualification'],
  ['03', 'WAEC', 'West African pathway'],
  ['04', 'NECO', 'National qualification'],
  ['05', 'UTME', 'University progression'],
];

const lifeCards = [
  {
    title: 'Boarding & Community',
    kicker: 'Belonging beyond the classroom',
    text: 'A structured residential experience shaped around care, routine, friendship and independence.',
    image: '/images/leadership.jpg',
    href: '/student-life#boarding',
    tags: ['Boarding', 'Mentorship'],
  },
  {
    title: 'Sport & Activities',
    kicker: 'Energy, teamwork, confidence',
    text: 'From organised sport to clubs and outdoor learning, students are encouraged to participate, compete and grow.',
    image: '/images/campus.jpg',
    href: '/student-life#sport',
    tags: ['Sport', 'Clubs'],
  },
  {
    title: 'Leadership & Enterprise',
    kicker: 'Character put into practice',
    text: 'Leadership, recognition and entrepreneurship give students practical opportunities to take responsibility.',
    image: '/images/leadership.jpg',
    href: '/student-life#leadership',
    tags: ['Leadership', 'Entrepreneurship'],
  },
];

const values = [['H', 'Heroes'], ['E', 'Excellence'], ['R', 'Responsibility'], ['O', 'Order'], ['E', 'Entrepreneurship'], ['S', 'Solutions']];
const admissionSteps = [
  ['01', 'Discover', 'Explore the school, curriculum and opportunities available to your child.'],
  ['02', 'Visit', 'Experience the campus, meet the team and understand daily life at MCIS.'],
  ['03', 'Apply', 'Submit the appropriate admission information for your child’s entry level.'],
  ['04', 'Assessment', 'Complete the relevant assessment and conversation with the admissions team.'],
  ['05', 'Enrol', 'Receive next-step guidance and prepare to join the MCIS community.'],
];

export default function Home() {
  return (
    <div className="home-page">

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media"><Image src="/images/campus.jpg" alt="MasterCare International School campus in Asaba" fill priority sizes="100vw" quality={85} /></div>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content shell">
          <p className="hero-kicker">Asaba, Delta State · Nigeria</p>
          <h1 id="hero-title">Raising<br /><span>global heroes.</span></h1>
          <div className="hero-bottom">
            <p>Early Years, Primary and Secondary education in Asaba, shaped by academic ambition, Christian values and a sense of belonging.</p>
            <div className="hero-actions">
              <Link href="/discover" className="pill-button light">Explore MCIS</Link>
              <Link href="/admissions" className="text-link light-link">Admissions <ArrowIcon size={17} /></Link>
            </div>
          </div>
          <div className="hero-facts"><span>Early Years to Secondary</span><span>Day & Boarding</span><span>Excellence through Christ</span></div>
        </div>
      </section>

      <section id="discover" className="manifesto section-pad">
        <div className="shell manifesto-grid">
          <Reveal><p className="eyebrow">MasterCare International School</p></Reveal>
          <Reveal className="manifesto-copy">
            <h2>More than a school.<br /><em>A foundation for what comes next.</em></h2>
            <p>MCIS combines Nigerian and international learning pathways with a culture designed to help students think creatively, reason critically, communicate confidently and grow into responsible world citizens.</p>
            <Link className="text-link" href="/discover">Discover our approach <ArrowIcon size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section id="academics" className="academics section-pad">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div><p className="eyebrow">Learning journey</p><h2>Built for every<br />stage of becoming.</h2></div>
            <p className="heading-note">From first discoveries to examination years, each stage is designed to develop knowledge, independence and a genuine appetite for learning.</p>
          </Reveal>
          <StageCarousel stages={learningStages} />
        </div>
      </section>

      <section className="cambridge section-pad">
        <div className="shell">
          <div className="cambridge-grid">
            <Reveal className="cambridge-title"><p className="eyebrow light">Academic pathways</p><h2>Local grounding.<br /><em>Global possibility.</em></h2></Reveal>
            <Reveal className="cambridge-copy"><p className="big-copy">Students progress through a blended academic environment that includes Cambridge Checkpoint and IGCSE alongside WAEC, NECO and UTME pathways.</p></Reveal>
          </div>
          <div className="credential-strip" aria-label="Academic pathways">
            {credentials.map(([number, title, caption]) => (
              <Link href="/academics#pathways" className="credential-item" key={title}>
                <span>{number}</span><strong>{title}</strong><small>{caption}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="campus-feature">
        <div className="campus-image"><Image src="/images/campus.jpg" alt="School buildings and sports grounds at MasterCare" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
        <div className="campus-panel"><Reveal><p className="eyebrow light">The MCIS campus</p><h2>Space to learn.<br />Room to become.</h2><p>A purpose-built school environment in Asaba with learning, recreation and community spaces designed around the rhythm of student life.</p><Link className="pill-button light" href="/contact">Plan a visit</Link></Reveal></div>
      </section>

      <section id="student-life" className="student-life section-pad">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div><p className="eyebrow">Beyond the classroom</p><h2>A fuller kind<br />of education.</h2></div>
            <p className="heading-note">Student life is where confidence, discipline, friendship and responsibility are practised every day.</p>
          </Reveal>
          <div className="life-showcase">
            {lifeCards.map((card) => (
              <Link className="life-card" href={card.href} key={card.title}>
                <div className="life-photo"><Image src={card.image} alt="" fill sizes="(max-width: 600px) 100vw, 33vw" /></div>
                <div className="life-card-scrim" />
                <div className="life-card-top"><span>{card.kicker}</span><ArrowIcon size={19} /></div>
                <div className="life-card-copy"><div className="life-card-tags">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><h3>{card.title}</h3><p>{card.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="values section-pad">
        <div className="shell values-grid">
          <Reveal><p className="eyebrow light">Our values</p><h2>HEROES is more<br />than an acronym.</h2><p className="values-intro">It is the standard MCIS sets for how students learn, contribute and lead.</p></Reveal>
          <div className="values-list">{values.map(([letter, label]) => <Reveal key={label} className="value-row"><span>{letter}</span><strong>{label}</strong><span className="rule" /></Reveal>)}</div>
        </div>
      </section>

      <section id="admissions" className="admissions section-pad">
        <div className="shell">
          <Reveal className="admissions-intro"><p className="eyebrow">Admissions</p><h2>Your child’s next chapter<br /><em>can begin here.</em></h2><p>Explore the school, meet the team and find the right entry stage for your child.</p></Reveal>
          <div className="admission-steps">{admissionSteps.map(([number, title, description]) => <Reveal key={number} className="admission-step"><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
          <Reveal className="admission-cta"><div><p className="eyebrow light">Ready when you are</p><h3>Come and experience MCIS.</h3></div><div className="cta-actions"><Link className="pill-button light" href="/admissions">Begin the journey</Link><Link className="text-link light-link" href="/contact">Plan a visit <ArrowIcon size={17} /></Link></div></Reveal>
        </div>
      </section>

    </div>
  );
}

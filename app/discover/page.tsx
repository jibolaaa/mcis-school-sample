import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/components/ArrowIcon';

const values = [
  ['H', 'Heroes'],
  ['E', 'Excellence'],
  ['R', 'Responsibility'],
  ['O', 'Order'],
  ['E', 'Entrepreneurship'],
  ['S', 'Solutions'],
];

export const metadata: Metadata = { title: 'Discover MCIS', description: 'Meet MasterCare International School in Asaba: its approach to learning, Christian values and school community.' };

export default function DiscoverPage() {
  return (
    <div className="section-page discover-page">

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">Discover MCIS</p>
            <h1>A school built around <em>purpose.</em></h1>
            <p>MasterCare International School brings academic ambition, character formation and a Christ-centred culture together in one forward-looking school community in Asaba.</p>
            <div className="page-hero-actions">
              <Link className="pill-button" href="/contact">Plan a visit</Link>
              <Link className="inline-cta" href="/academics">Explore academics <ArrowIcon size={18} /></Link>
            </div>
          </div>
          <div className="page-hero-media">
            <Image src="/images/campus.jpg" alt="MasterCare International School campus" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
            <span className="page-hero-index">01</span>
            <div className="page-hero-caption"><span>MasterCare International School</span><span>Asaba · Delta State</span></div>
          </div>
        </div>
      </section>

      <section className="stat-ribbon">
        <div className="shell">
          <div className="stat-cell"><span>01</span><strong>2014</strong><small>Founded in Asaba</small></div>
          <div className="stat-cell"><span>02</span><strong>Cambridge + Nigerian</strong><small>Blended pathways</small></div>
          <div className="stat-cell"><span>03</span><strong>Day + Boarding</strong><small>One school community</small></div>
          <div className="stat-cell"><span>04</span><strong>Christ-centred</strong><small>Character with excellence</small></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell editorial-split">
          <div className="editorial-sticky">
            <p className="eyebrow">What defines MCIS</p>
            <h2>Education with direction.</h2>
            <p>The goal is not simply to complete a curriculum. It is to help students think clearly, communicate confidently, make responsible choices and leave school ready for a wider world.</p>
          </div>
          <div className="editorial-stack">
            <article className="editorial-row"><span>01</span><div><h3>Academic ambition</h3><p>MCIS combines Nigerian and international learning routes so students can progress through recognised local examinations while also engaging with Cambridge standards and assessment.</p></div></article>
            <article className="editorial-row"><span>02</span><div><h3>Character in practice</h3><p>Conduct, responsibility, service and leadership are treated as part of the education itself rather than extras around the edge of school life.</p></div></article>
            <article className="editorial-row"><span>03</span><div><h3>Confidence beyond class</h3><p>Sport, clubs, mentorship, boarding and enterprise create repeated opportunities for students to participate, collaborate and become more independent.</p></div></article>
            <article className="editorial-row"><span>04</span><div><h3>A global outlook from Asaba</h3><p>The school remains grounded in its Nigerian context while preparing students to move confidently into universities, careers and communities far beyond the campus.</p></div></article>
          </div>
        </div>
      </section>

      <section className="discover-values section-pad">
        <div className="shell">
          <div>
            <p className="eyebrow light">The HEROES standard</p>
            <h2>A simple language for how students should grow.</h2>
            <p>HEROES turns the school’s values into something students can recognise in everyday behaviour, learning and leadership.</p>
          </div>
          <div className="heroes-grid">
            {values.map(([letter, label], index) => <div className="hero-value" key={`${letter}-${label}`}><span>0{index + 1} · {letter}</span><strong>{label}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="photo-story section-pad">
        <div className="shell photo-story-grid">
          <div className="photo-story-main"><Image src="/images/campus.jpg" alt="Life at MasterCare International School" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
          <div className="photo-story-side">
            <div className="story-photo"><Image src="/images/leadership.jpg" alt="A family at MasterCare International School" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="photo-story-copy">
              <p className="eyebrow light">One community</p>
              <h3>School life should feel connected.</h3>
              <p>Academics, boarding, mentorship, sport and activities work best when they feel like parts of the same student experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="shell">
          <div><p className="eyebrow light">See it for yourself</p><h2>The best way to understand MCIS is to experience the campus.</h2></div>
          <div className="page-final-actions"><Link className="pill-button light" href="/contact">Plan a visit</Link><Link className="text-link light-link" href="/admissions">Admissions <ArrowIcon size={17} /></Link></div>
        </div>
      </section>

    </div>
  );
}

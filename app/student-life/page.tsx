import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from '@/components/SchoolImage';
import ArrowIcon from '@/components/ArrowIcon';

const rhythm = [
  ['01', 'Entrepreneurship', 'Ideas into action'],
  ['02', 'Mentorship', 'Guidance and reflection'],
  ['03', 'Sport', 'Movement and teamwork'],
  ['04', 'Clubs', 'Interests and community'],
];

export const metadata = pageMetadata('student-life');

export default function StudentLifePage() {
  return (
    <div className="section-page student-life-page">

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">Student life</p>
            <h1>Growing through <em>participation.</em></h1>
            <p>Life at MCIS extends beyond lessons. Boarding, sport, clubs, mentoring and enterprise create daily opportunities to build confidence, discipline, friendship and responsibility.</p>
            <div className="page-hero-actions"><Link className="pill-button" href="#rhythm">Explore student life</Link><Link className="inline-cta" href="/contact">Visit the campus <ArrowIcon size={18} /></Link></div>
          </div>
          <div className="page-hero-media">
            <Image src="/images/sport-2017.jpg" alt="MCIS football team celebrating their 2017 Delta State Principals’ Cup victory" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
            <div className="page-hero-caption"><span>Principals’ Cup champions · 2017 archive</span><a href="https://guardian.ng/sport/delta-to-ban-schools-without-sporting-facilities/">Photo: The Guardian Nigeria ↗</a></div>
          </div>
        </div>
      </section>

      <section id="rhythm" className="rhythm-section section-pad">
        <div className="shell rhythm-grid">
          <div>
            <p className="eyebrow light">Beyond lessons</p>
            <h2>Room for every interest.</h2>
            <p>Explore the activities and support that sit alongside classroom learning. Ask the school about the current programme during your visit.</p>
          </div>
          <div className="rhythm-list">
            {rhythm.map(([day, title, note]) => <div className="rhythm-row" key={title}><span>{day}</span><strong>{title}</strong><small>{note}</small></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell life-feature-grid">
          <div id="boarding" className="life-feature-main">
            <span className="boarding-mark" aria-hidden="true">MCIS</span>
            <div className="life-feature-copy"><p className="eyebrow light">Boarding & community</p><h2>Belonging is part of the education.</h2><p>Residential life is designed around structure, care and growing independence, while keeping students connected to a supervised school community.</p></div>
          </div>
          <div className="life-mini-grid">
            <article id="sport" className="life-mini"><span>01 · Sport & clubs</span><div><h3>Our 2017 champions.</h3><p>MCIS won the 2017 Delta State Principals’ Cup, defeating Idjerhe Grammar School 2–1. This achievement is part of the school’s sporting history. Ask about current teams and clubs when you visit.</p></div></article>
            <article id="leadership" className="life-mini"><span>02 · Leadership & enterprise</span><div><h3>Responsibility in practice.</h3><p>Students are given practical opportunities to lead, solve problems, make decisions and turn ideas into useful outcomes.</p></div></article>
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
          <div className="page-final-actions"><Link className="pill-button light" href="/contact">Plan a visit</Link><Link className="text-link light-link" href="/admissions">Admissions <ArrowIcon size={17} /></Link></div>
        </div>
      </section>

    </div>
  );
}

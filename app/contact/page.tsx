import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '@/components/ArrowIcon';
import EnquiryForm from '@/components/EnquiryForm';
import { school } from '@/lib/school';

export const metadata: Metadata = { title: 'Visit & Contact', description: 'Plan your visit to MasterCare International School in Asaba. Find directions, contact the school and prepare an admissions enquiry.' };

export default function ContactPage() {
  return <div className="section-page contact-page">
    <section className="page-hero-v2">
      <div className="shell page-hero-grid">
        <div className="contact-hero-panel">
          <p className="eyebrow light">Visit MCIS</p>
          <h1>Come and see <em>for yourself.</em></h1>
          <p>Walk the campus, meet the team and ask the questions that matter to your family. Contact the school to arrange a suitable time.</p>
          <div className="page-hero-actions"><Link className="pill-button light" href="#enquire">Enquire about a visit</Link><a className="text-link light-link" href={school.phoneHref}>Call the school <ArrowIcon size={17} /></a></div>
          <div className="contact-details">
            <div className="contact-detail"><span>Find us</span><strong>{school.address}</strong></div>
            <div className="contact-detail"><span>Get in touch</span><a href={'mailto:' + school.email}>{school.email}</a><br /><a href={school.phoneHref}>{school.phone}</a></div>
          </div>
        </div>
        <div className="page-hero-media">
          <Image src="/images/campus.jpg" alt="School buildings and grounds at MasterCare International School, Asaba" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="page-hero-caption"><span>Asaba, Delta State</span><a href={school.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions ↗<span className="sr-only"> (opens Google Maps in a new tab)</span></a></div>
        </div>
      </div>
    </section>
    <section className="section-pad" id="enquire">
      <div className="shell visit-planner">
        <div>
          <p className="eyebrow">Make your visit count</p>
          <h2>Your questions.<br />A personal conversation.</h2>
          <p>Tell the school which stage you are exploring and what you would like to know. The team can help you with the next steps.</p>
          <a className="text-link" href={school.directionsUrl} target="_blank" rel="noopener noreferrer">Find the campus <ArrowIcon size={17} /><span className="sr-only">(opens Google Maps in a new tab)</span></a>
          <div className="visit-list">
            <article className="visit-row"><span>01</span><div><h3>Learning & progression</h3><p>Ask about the right entry stage, curriculum, assessments and subject options.</p></div></article>
            <article className="visit-row"><span>02</span><div><h3>Day or boarding</h3><p>Discuss routines, supervision, pastoral care and how the school keeps families informed.</p></div></article>
            <article className="visit-row"><span>03</span><div><h3>Practical details</h3><p>Confirm current fees, term dates, availability and the documents needed to apply.</p></div></article>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
    <section className="page-final-cta"><div className="shell"><div><p className="eyebrow light">Ready for the next step?</p><h2>Find your place at MCIS.</h2></div><div className="page-final-actions"><Link className="pill-button light" href="/admissions">Explore admissions</Link><Link className="text-link light-link" href="/academics">Find a learning stage <ArrowIcon size={17} /></Link></div></div></section>
  </div>;
}

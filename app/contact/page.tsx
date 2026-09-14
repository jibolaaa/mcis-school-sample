import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ArrowIcon from '@/components/ArrowIcon';

export default function ContactPage() {
  return (
    <main className="section-page contact-page">
      <SiteHeader overlay={false} />

      <section className="page-hero-v2">
        <div className="shell page-hero-grid">
          <div className="contact-hero-panel">
            <div>
              <p className="eyebrow light">Visit MCIS</p>
              <h1>Experience the school <em>in person.</em></h1>
              <p>A campus visit gives families the clearest sense of the learning environment, school culture and the daily experience their child would be joining.</p>
            </div>
            <div className="contact-details">
              <div className="contact-detail"><span>Address</span><strong>1 Dan Okenyi Street, Off Okpanam Road, Asaba, Delta State</strong></div>
              <div className="contact-detail"><span>Location</span><strong>Asaba · Delta State · Nigeria</strong></div>
              <div className="contact-detail"><span>Email</span><a href="mailto:info@mcis.sch.ng">info@mcis.sch.ng</a></div>
            </div>
          </div>
          <div className="page-hero-media">
            <img src="https://lh5.googleusercontent.com/p/AF1QipOjs_kqNXM1d97iMBMi72tSiEP9oSWjWS9ZWxE2=w1600-k-no" alt="MasterCare International School campus in Asaba" />
            <span className="page-hero-index">05</span>
            <div className="page-hero-caption"><span>Visit the MCIS campus</span><span>Asaba · Delta State</span></div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell visit-planner">
          <div>
            <p className="eyebrow">Make the visit useful</p>
            <h2>Come with the questions that matter.</h2>
            <p>A school visit is more useful when families know what to look for. Use the public site to understand the academic direction and student experience before you arrive.</p>
            <div className="page-hero-actions"><a className="pill-button" href="mailto:info@mcis.sch.ng">Email the school</a><a className="inline-cta" href="/admissions">Explore admissions <ArrowIcon size={18} /></a></div>
          </div>
          <div className="visit-list">
            <article className="visit-row"><span>01</span><div><h3>Learning spaces</h3><p>See the classrooms and environments students use at the stage relevant to your child.</p></div></article>
            <article className="visit-row"><span>02</span><div><h3>Academic pathway</h3><p>Ask how Nigerian and Cambridge routes are structured and what progression looks like for older students.</p></div></article>
            <article className="visit-row"><span>03</span><div><h3>Student life</h3><p>Explore sport, clubs, mentorship, leadership and the spaces students use beyond lessons.</p></div></article>
            <article className="visit-row"><span>04</span><div><h3>Boarding</h3><p>If boarding is relevant to your family, understand routines, supervision, pastoral care and community life.</p></div></article>
          </div>
        </div>
      </section>

      <section className="photo-story section-pad">
        <div className="shell photo-story-grid">
          <div className="photo-story-main"><img src="https://mcis.sch.ng/home/images/w17.jpg" alt="MasterCare International School in Asaba" /></div>
          <div className="photo-story-side">
            <img src="https://mcis.sch.ng/home/images/u11.jpg" alt="MasterCare International School community" />
            <div className="photo-story-copy"><p className="eyebrow light">Before you arrive</p><h3>Explore first. Visit second.</h3><p>Use the Academics, Student Life and Admissions pages to prepare the questions you want answered when you come to campus.</p></div>
          </div>
        </div>
      </section>

      <section className="page-final-cta">
        <div className="shell">
          <div><p className="eyebrow light">Continue exploring</p><h2>Understand the school before taking the next admissions step.</h2></div>
          <div className="page-final-actions"><a className="pill-button light" href="/admissions">Admissions</a><a className="text-link light-link" href="/discover">Discover MCIS <ArrowIcon size={17} /></a></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

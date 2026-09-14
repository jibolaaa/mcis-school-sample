export default function SiteFooter() {
  return (
    <footer className="footer site-footer-v2">
      <div className="shell footer-grid-v2">
        <div className="footer-brand-v2">
          <img src="https://edusko-dev-bucket.s3.eu-north-1.amazonaws.com/16375729583010KhsqsXmqEs7MGLQHaGfh804IMpfTuT1.png" alt="MasterCare International School logo" />
          <div><strong>MasterCare</strong><span>International School</span></div>
          <p>Excellence through Christ. A forward-looking school community in Asaba, Delta State.</p>
        </div>
        <div className="footer-nav-v2">
          <div><span>Explore</span><a href="/discover">Discover MCIS</a><a href="/academics">Academics</a><a href="/student-life">Student Life</a></div>
          <div><span>Join us</span><a href="/admissions">Admissions</a><a href="/contact">Visit MCIS</a><a href="https://mcissch.com/portal/login.html" target="_blank" rel="noreferrer">School Portal</a></div>
        </div>
        <div className="footer-contact-v2"><span>Asaba campus</span><p>1 Dan Okenyi Street<br />Off Okpanam Road<br />Asaba, Delta State</p><a href="mailto:info@mcis.sch.ng">info@mcis.sch.ng</a></div>
      </div>
      <div className="shell footer-bottom-v2"><span>© MasterCare International School</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

# Content and asset notes

Reviewed 15 September 2026. Existing editorial school content is retained from the repository unless noted here.

## Contact details

- School contact page: https://mcis.sch.ng/contact.html
- Published telephone on that page: 08067541405 (Primary and Secondary).
- Email: info@mcis.sch.ng
- Address: 1 Dan Okenyi Street, off Okpanam Road, Asaba, Delta State.
- The older primary page shows different telephone numbers. This version uses the dedicated contact page; school confirmation remains advisable before official launch.
- Existing portal link retained: https://mcissch.com/portal/login.html
- Application link found on the school homepage: https://forms.gle/1jugDpJ86qVw8Xf67. Fetch returned HTTP 401, so it is not presented as a working application submission path.
- Exact weekday claims for student activities are removed until the school confirms its current schedule. Activities themselves are preserved.

## Existing public-source assets

- `public/images/logo.jpg`: https://edusko-dev-bucket.s3.eu-north-1.amazonaws.com/16375729583010KhsqsXmqEs7MGLQHaGfh804IMpfTuT1.png
- `public/images/campus.jpg`: https://lh5.googleusercontent.com/p/AF1QipOjs_kqNXM1d97iMBMi72tSiEP9oSWjWS9ZWxE2=w1600-k-no
- `public/images/leadership.jpg`: https://static.wixstatic.com/media/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg/v1/fill/w_980%2Ch_728%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg

These are the logo and genuine school photos already used by the sample. The former community image has been removed from all rendered pages; the people’s relationship is unverified. Replace with school-supplied originals before official use.

The old w14, w17, w12, u11 and u33 photo references failed at both their previous and homepage-advertised locations. They have been removed from rendered pages. The previous Nigeria Private Schools image returned HTTP 403.

## Fonts

DM Sans (400/500/600) and Libre Caslon Display (400), fetched from the same Google Fonts families used by the existing sample. They are served locally with font-display: swap.

Original CSS: https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Libre+Caslon+Display&display=swap


## September presentation pass: verified school material

- Official school homepage https://mcis.sch.ng/ supports founding in 2014 by Dcns. Roli Nere Uduagan; nursery and primary subjects, laboratories, library, STEM/robotics and Cambridge pathways.
- Reference layout studied: https://charterhouselagos.com/ . No Charterhouse images, identity or school claims were copied.
- `archive-3.jpg`: https://www.nbplc.com/storage/2018/10/ASABA-3-1024x682.jpg . Classroom block at commissioning.
- `archive-2.jpg`: https://www.nbplc.com/storage/2018/10/ASABA-2-1024x682.jpg . Commissioning plaque ceremony.
- Source: https://www.nbplc.com/nigerian-breweries-fulfills-promise-to-maltina-teacher-of-the-year-donates-block-of-classrooms/ . Six classrooms, library and conveniences donated following Felix Ariguzo’s 2017 award. Images explicitly labelled as archive; not evidence of present-day staff or condition.
- `sport-2017.jpg`: https://cdn.guardian.ng/wp-content/uploads/2017/05/Zenith-P.43-22052017.jpg . MCIS football champions.
- Source: https://guardian.ng/sport/delta-to-ban-schools-without-sporting-facilities/ (22 May 2017). MCIS beat Idjerhe Grammar School 2–1. Date and photo credit shown in the site. Not current news.
- Public-source photos are attributed; public availability does not establish a reuse licence. School-supplied originals/clearance are needed for an official school launch.
- No suitable verified nursery or primary classroom photos could be retrieved; those sections use distinct typographic layouts rather than unrelated school photos.
- Local WOFF2 fonts (400/600 sans, 400 serif) reduce delivered font bytes. All page photos use static imports for intrinsic metadata/blur placeholders and Next Image sizing.
- Preview deployment is intentionally noindex. Set NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_SITE_INDEXABLE=true only for a confirmed official domain.

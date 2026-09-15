# MasterCare International School sample

Public website concept for MasterCare International School, Asaba. The existing logo, green and blue identity, learning stages and dedicated school pages are preserved.

## Development

```sh
npm ci
npm run dev
npm run build
npm start
```

Next.js 15 and React 19. All nine public pages are statically generated. Global navigation, breadcrumbs and footer live in the root layout. Styles are consolidated in `app/site.css`; font definitions are in `app/fonts.css`.

## Included

- Responsive homepage, Discover, Academics, three academic stage pages, Student Life, Admissions and Visit & Contact.
- A native dialog mobile menu with focus containment, Escape dismissal and portal access.
- Swipeable academic cards with previous/next controls, stage selectors and active position.
- Functional links between related pages, learning-stage navigation and direct links to boarding, sport and leadership.
- Admissions FAQs; school telephone, email and Google Maps links.
- An enquiry composer with validation, editable preview, email-app handoff and copy fallback. It does not send, store or log enquiries. Sending takes place in the visitor's email app.
- Local images and fonts, responsive Next Image delivery, reduced-motion support, visible keyboard focus, skip navigation, loading and error states.
- Page-specific metadata. Search indexing is disabled because this is a sample; review before an official launch.

## Content and assets

`lib/school.ts` contains shared contact information. The existing logo is kept byte-for-byte. Available authentic school photos are stored in `public/images` so visitors do not depend on external image hosts. Several former `mcis.sch.ng/home/images/` URLs returned 404 during this update. The school-supplied high-resolution photo collection is still needed for a more varied, current gallery.

Sources and validation notes are in `docs/content-sources.md`. The application form previously linked by the school's site returned HTTP 401 during verification. Admissions enquiries therefore go to the school's published contact channels. Replace that path with the current school-approved application URL when access is confirmed.

## Production work still requiring the school

Confirm photos, curriculum details, fees, admission requirements, current programmes and contact ownership. Connect school-controlled content management and a direct enquiry delivery service if required. Full applications and the existing school portal remain separate from this public sample.

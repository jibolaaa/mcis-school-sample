import type { Metadata } from 'next';
import EditorialPage from '@/components/EditorialPage';

export const metadata: Metadata = { title: 'Secondary School', description: 'Explore Nigerian and international examination pathways, study skills and leadership at MasterCare International School.' };

export default function SecondaryPage() {
  return <EditorialPage
    eyebrow="Secondary School"
    title="Prepared for what comes next."
    intro="Secondary students move through a rigorous Nigerian and international programme designed for examination readiness, independence and progression."
    image="/images/leadership.jpg"
    sections={[
      { heading: 'Academic depth', body: 'Students develop stronger subject knowledge, study habits and analytical skills as expectations rise through the middle and high school years.' },
      { heading: 'Multiple pathways', body: 'Cambridge Checkpoint and IGCSE sit alongside WAEC, NECO and UTME routes, creating options for local and international progression.', bullets: ['Cambridge', 'IGCSE', 'WAEC', 'NECO', 'UTME'] },
      { heading: 'Leadership & responsibility', body: 'Mentorship, activities and student responsibilities help learners develop maturity alongside academic preparation.' },
    ]}
  />;
}

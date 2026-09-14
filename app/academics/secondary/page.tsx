import EditorialPage from '@/components/EditorialPage';

export default function SecondaryPage() {
  return <EditorialPage
    eyebrow="Secondary School"
    title="Prepared for what comes next."
    intro="Secondary students move through a rigorous Nigerian and international programme designed for examination readiness, independence and progression."
    image="https://static.wixstatic.com/media/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg/v1/fill/w_980%2Ch_728%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg"
    sections={[
      { heading: 'Academic depth', body: 'Students develop stronger subject knowledge, study habits and analytical skills as expectations rise through the middle and high school years.' },
      { heading: 'Multiple pathways', body: 'Cambridge Checkpoint and IGCSE sit alongside WAEC, NECO and UTME routes, creating options for local and international progression.', bullets: ['Cambridge', 'IGCSE', 'WAEC', 'NECO', 'UTME'] },
      { heading: 'Leadership & responsibility', body: 'Mentorship, activities and student responsibilities help learners develop maturity alongside academic preparation.' },
    ]}
  />;
}

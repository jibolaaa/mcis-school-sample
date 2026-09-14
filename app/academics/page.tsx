import EditorialPage from '@/components/EditorialPage';

export default function AcademicsPage() {
  return <EditorialPage
    eyebrow="Academics"
    title="Strong foundations. Wider possibilities."
    intro="MCIS blends Nigerian and international learning pathways so students can build depth, confidence and the qualifications needed for their next step."
    image="https://lh5.googleusercontent.com/p/AF1QipOjs_kqNXM1d97iMBMi72tSiEP9oSWjWS9ZWxE2=w1600-k-no"
    sections={[
      { heading: 'Three learning stages', body: 'The academic journey is structured around Early Years, Primary and Secondary education, with expectations and learning experiences that grow with the student.', bullets: ['Early Years', 'Primary', 'Secondary'] },
      { heading: 'Cambridge pathway', body: 'International progression includes Cambridge Checkpoint and IGCSE, giving students experience with globally recognised standards and assessment styles.', bullets: ['Cambridge Checkpoint', 'IGCSE'] },
      { heading: 'Nigerian progression', body: 'WAEC, NECO and UTME pathways remain central to senior-school progression, ensuring students are prepared for Nigerian university entry alongside international options.', bullets: ['WAEC', 'NECO', 'UTME'] },
      { heading: 'Learning beyond subjects', body: 'Timetabled sport, clubs, mentorship and entrepreneurship strengthen the academic programme by giving students structured opportunities to collaborate, lead and apply what they know.' },
    ]}
  />;
}

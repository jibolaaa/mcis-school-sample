import EditorialPage from '@/components/EditorialPage';

export default function PrimaryPage() {
  return <EditorialPage
    eyebrow="Primary School"
    title="Strong foundations."
    intro="Primary school develops literacy, numeracy, creativity and independent learning."
    image="https://www.nigeriaprivateschools.com/uploads/images/master_care.jpg"
    sections={[
      { heading: 'Core learning', body: 'Students strengthen reading, writing, mathematics and broad subject knowledge through a structured programme.' },
      { heading: 'Curiosity', body: 'Students are encouraged to question, discuss, create and connect ideas across subjects.' },
      { heading: 'Independence', body: 'Daily routines help students build responsibility, confidence and readiness for secondary school.' },
    ]}
  />;
}

import type { Metadata } from 'next';
import EditorialPage from '@/components/EditorialPage';

export const metadata: Metadata = { title: 'Primary School', description: 'Explore literacy, numeracy, creativity and independent learning at MasterCare International School.' };

export default function PrimaryPage() {
  return <EditorialPage
    eyebrow="Primary School"
    title="Strong foundations."
    intro="Primary school develops literacy, numeracy, creativity and independent learning."
    image="/images/campus.jpg"
    sections={[
      { heading: 'Core learning', body: 'Students strengthen reading, writing, mathematics and broad subject knowledge through a structured programme.' },
      { heading: 'Curiosity', body: 'Students are encouraged to question, discuss, create and connect ideas across subjects.' },
      { heading: 'Independence', body: 'Daily routines help students build responsibility, confidence and readiness for secondary school.' },
    ]}
  />;
}

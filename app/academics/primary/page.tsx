import { pageMetadata } from '@/lib/seo';
import EditorialPage from '@/components/EditorialPage';

export const metadata = pageMetadata('primary');

export default function PrimaryPage() {
  return <EditorialPage
    eyebrow="Primary School"
    title="Strong foundations."
    intro="Primary school develops literacy, numeracy, creativity and independent learning."
    sections={[
      { heading: 'Core learning', body: 'Students strengthen reading, writing, mathematics and broad subject knowledge through a structured programme.' },
      { heading: 'Curiosity', body: 'Students are encouraged to question, discuss, create and connect ideas across subjects.' },
      { heading: 'Independence', body: 'Daily routines help students build responsibility, confidence and readiness for secondary school.' },
    ]}
  />;
}

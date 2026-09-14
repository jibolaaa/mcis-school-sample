import EditorialPage from '@/components/EditorialPage';

export default function EarlyYearsPage() {
  return <EditorialPage
    eyebrow="Early Years"
    title="Curiosity starts here."
    intro="The Early Years experience is built around confident exploration, communication, movement, routines and the joy of discovering how the world works."
    image="https://www.nigeriaprivateschools.com/uploads/images/master_care.jpg"
    sections={[
      { heading: 'A warm beginning', body: 'Young learners need security, rhythm and room to explore. The environment is designed to help children settle, communicate and take part with growing confidence.' },
      { heading: 'Learning through experience', body: 'Language, early numeracy, movement, creativity and social development are strengthened through age-appropriate activities and guided exploration.' },
      { heading: 'Growing independence', body: 'Daily routines help children learn to make choices, cooperate with others and build the habits they will carry into primary school.' },
    ]}
  />;
}

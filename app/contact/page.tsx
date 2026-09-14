import EditorialPage from '@/components/EditorialPage';

export default function ContactPage() {
  return <EditorialPage
    eyebrow="Visit"
    title="Experience MCIS in person."
    intro="A school visit gives families the clearest sense of the learning environment and community."
    image="https://lh5.googleusercontent.com/p/AF1QipOjs_kqNXM1d97iMBMi72tSiEP9oSWjWS9ZWxE2=w1600-k-no"
    ctaLabel="Explore admissions"
    ctaHref="/admissions"
    sections={[
      { heading: 'Plan your visit', body: 'Meet the school team, explore the campus and learn more about the right entry point for your child.' },
      { heading: 'What to explore', body: 'Focus on learning spaces, student life, boarding and the academic route that matters to your family.', bullets: ['Campus', 'Student life', 'Boarding', 'Academics'] },
    ]}
  />;
}

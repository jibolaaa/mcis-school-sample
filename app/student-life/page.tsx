import EditorialPage from '@/components/EditorialPage';

export default function StudentLifePage() {
  return <EditorialPage
    eyebrow="Student Life"
    title="Growing through participation."
    intro="Life at MCIS extends beyond lessons. Boarding, sport, clubs, mentoring and enterprise create daily opportunities for students to build confidence, discipline and community."
    image="https://www.nigeriaprivateschools.com/uploads/images/master_care.jpg"
    sections={[
      { heading: 'Boarding & community', body: 'Residential life is designed around structure, care and belonging. Students learn independence while remaining connected to a supervised school community.', bullets: ['Boarding', 'Pastoral support', 'Community routines'] },
      { heading: 'Sport & activities', body: 'Sport and organised activities give students space to compete, collaborate and develop resilience.', bullets: ['Sport', 'Clubs', 'Teamwork'] },
      { heading: 'Mentorship & leadership', body: 'Regular mentorship and leadership opportunities help students reflect on choices, take responsibility and contribute positively.', bullets: ['Mentorship', 'Leadership', 'Service'] },
      { heading: 'Enterprise in practice', body: 'Entrepreneurship is treated as a practical part of student development, encouraging initiative, problem-solving and an understanding of how ideas can become useful solutions.' },
    ]}
  />;
}

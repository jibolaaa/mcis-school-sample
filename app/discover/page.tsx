import EditorialPage from '@/components/EditorialPage';

export default function DiscoverPage() {
  return <EditorialPage
    eyebrow="Discover MCIS"
    title="A school built around purpose."
    intro="MasterCare International School combines academic ambition, character formation and a Christ-centred culture to prepare young people for a changing world."
    image="https://www.nigeriaprivateschools.com/uploads/images/master_care.jpg"
    sections={[
      { heading: 'Education with direction', body: 'Learning at MCIS is designed to go beyond examination performance. Students are encouraged to reason, communicate, create, take responsibility and grow into confident contributors.', bullets: ['Critical thinking', 'Communication', 'Character', 'Global outlook'] },
      { heading: 'Excellence through Christ', body: 'Christian values are woven into the school culture through conduct, community, service and the expectation that excellence should be matched by integrity.' },
      { heading: 'The HEROES standard', body: 'The school’s HEROES values create a simple language for the habits MCIS wants students to carry into school, university and adult life.', bullets: ['Heroes', 'Excellence', 'Responsibility', 'Order', 'Entrepreneurship', 'Solutions'] },
      { heading: 'A community in Asaba', body: 'The campus brings academics, boarding, activities, mentoring and student development together in one environment, giving families a school experience that is both grounded locally and outward-looking.' },
    ]}
  />;
}

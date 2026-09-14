import EditorialPage from '@/components/EditorialPage';

export default function AdmissionsPage() {
  return <EditorialPage
    eyebrow="Admissions"
    title="A clear path into MCIS."
    intro="Families should be able to understand the admissions journey quickly: discover the school, visit the campus, apply, complete the relevant assessment and prepare to enrol."
    image="https://static.wixstatic.com/media/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg/v1/fill/w_980%2Ch_728%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/08a8c9_6b97ecd625a24f829b83f6963badaf7a~mv2.jpg"
    ctaLabel="Plan a school visit"
    ctaHref="/contact"
    sections={[
      { heading: 'Discover', body: 'Start by exploring MCIS, the learning stages, academic pathways and student experience so you can decide whether the school is the right fit for your child.' },
      { heading: 'Visit', body: 'A campus visit gives families the opportunity to experience the environment, ask questions and understand what day-to-day school life feels like.' },
      { heading: 'Apply & assess', body: 'The next stage is the appropriate application and assessment process for the student’s entry level. The full digital application workflow can be added to the final production system.' },
      { heading: 'Enrol', body: 'Successful families receive the next-step guidance needed to prepare for entry into the MCIS community.' },
    ]}
  />;
}

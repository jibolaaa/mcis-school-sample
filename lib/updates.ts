export const academicSession = {
  label: '2026/2027',
  checked: '16 September 2026',
  checkedISO: '2026-09-16',
  admissionsSource: 'https://mcis.sch.ng/admin.html',
};

export const schoolUpdates = [
  {
    id: 'admissions-2026', category: 'Notice', label: 'Admissions · 2026/2027',
    title: 'Your next chapter starts at MasterCare.',
    summary: 'Applications for the 2026/2027 session are open. Speak with admissions about your child’s entry stage, available places and the application process.',
    href: '/admissions', action: 'Explore admissions',
    source: academicSession.admissionsSource, sourceName: 'MCIS admission notice',
    date: 'Checked 16 September 2026', image: '', alt: '',
  },
  {
    id: 'classroom-development', category: 'Archive', label: 'Campus development · Archive',
    title: 'A new chapter for learning spaces.',
    summary: 'A six-classroom block and library were donated to MCIS following Felix Ariguzo’s 2017 Maltina Teacher of the Year award.',
    href: '/discover#heritage', action: 'Explore the school story',
    source: 'https://www.nbplc.com/nigerian-breweries-fulfills-promise-to-maltina-teacher-of-the-year-donates-block-of-classrooms/', sourceName: 'Nigerian Breweries',
    date: 'School development archive', image: '/images/archive-3.jpg', alt: 'MCIS classroom block pictured at its commissioning',
  },
  {
    id: 'principals-cup-2017', category: 'Archive', label: 'Sport · 2017',
    title: 'Celebrating our Principals’ Cup champions.',
    summary: 'MCIS won the 2017 Delta State Principals’ Cup, defeating Idjerhe Grammar School 2–1 in the final.',
    href: '/student-life#sport', action: 'Explore school sport',
    source: 'https://guardian.ng/sport/delta-to-ban-schools-without-sporting-facilities/', sourceName: 'The Guardian Nigeria',
    date: '22 May 2017', image: '/images/sport-2017.jpg', alt: 'MCIS football players celebrating their 2017 Principals’ Cup victory',
  },
] as const;

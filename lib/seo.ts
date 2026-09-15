import type { Metadata } from 'next';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mcis-school-sample-ntf6.vercel.app';
export const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === 'true';
export const pages = {
 home:{path:'/',title:'MasterCare International School, Asaba',socialTitle:'Raising global heroes.',description:'Discover MasterCare International School in Asaba: Early Years, Primary and Secondary education, Christian values, day and boarding life.'},
 discover:{path:'/discover',title:'Discover MCIS',socialTitle:'Education with purpose.',description:'Meet MasterCare International School in Asaba. Explore its approach to learning, HEROES values, Christian ethos and school community.'},
 academics:{path:'/academics',title:'Academics & Learning Stages',socialTitle:'A world of possibility.',description:'Explore Early Years, Primary and Secondary at MasterCare International School, with Nigerian and Cambridge academic pathways.'},
 'early-years':{path:'/academics/early-years',title:'Early Years',socialTitle:'Curiosity starts here.',description:'Discover early learning at MCIS in Asaba: communication, play, creativity and the confidence to explore. Find out about the next step into Primary.'},
 primary:{path:'/academics/primary',title:'Primary School',socialTitle:'Strong foundations.',description:'Explore Primary education at MasterCare International School in Asaba: literacy, numeracy, creativity and growing independence.'},
 secondary:{path:'/academics/secondary',title:'Secondary School',socialTitle:'Ready for what comes next.',description:'Explore Secondary at MCIS: Cambridge Checkpoint, IGCSE, WAEC, NECO and UTME pathways, with study skills, mentorship and leadership.'},
 'student-life':{path:'/student-life',title:'Student Life & Boarding',socialTitle:'Find your place. Grow.',description:'Discover day and boarding life, sport, clubs, mentorship and leadership at MasterCare International School in Asaba.'},
 admissions:{path:'/admissions',title:'Admissions',socialTitle:'Your next chapter starts here.',description:'Explore the MCIS admissions journey. Choose a learning stage, arrange a campus visit and ask the team about applications, fees and available places.'},
 contact:{path:'/contact',title:'Visit & Contact',socialTitle:'Come and see for yourself.',description:'Visit MasterCare International School, 1 Dan Okenyi Street, Asaba. Find directions, call the school or prepare an admissions enquiry.'},
} as const;
export type PageKey = keyof typeof pages;
export function pageMetadata(key: PageKey): Metadata {
 const p=pages[key], title=key==='home'?p.title:`${p.title} | MasterCare International School`;
 const images=[{url:`/social/${key}`,width:1200,height:630,alt:`${p.socialTitle} ${p.title}`}];
 return {title:{absolute:title},description:p.description,alternates:{canonical:p.path},openGraph:{type:'website',locale:'en_NG',siteName:'MasterCare International School',title,description:p.description,url:p.path,images},twitter:{card:'summary_large_image',title,description:p.description,images}};
}

import Link from 'next/link';
import NewsFeed from '@/components/NewsFeed';
import ArrowIcon from '@/components/ArrowIcon';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('news');
export default function NewsPage(){return <div className="section-page news-page"><section className="page-hero-v2 news-hero"><div className="shell"><p className="eyebrow">The MasterCare community</p><h1>News & school notices.</h1><p>Admissions information, school achievements and stories from the MCIS archive.</p><Link href="/calendar" className="text-link">School calendar & session information <ArrowIcon size={18}/></Link></div></section><section className="section-pad"><div className="shell"><NewsFeed/></div></section><section className="page-final-cta"><div className="shell"><div><p className="eyebrow">Stay connected</p><h2>Your school. Your next step.</h2></div><div className="page-final-actions"><Link href="/calendar" className="pill-button">View school calendar</Link><Link href="/contact" className="text-link">Speak to the school <ArrowIcon size={17}/></Link></div></div></section></div>;}

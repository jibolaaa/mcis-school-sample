import Link from 'next/link';
import SchoolImage from './SchoolImage';
import ArrowIcon from './ArrowIcon';
import Reveal from './Reveal';
import { schoolUpdates } from '@/lib/updates';

export default function NewsCards({ category = 'All' }: { category?: 'All' | 'Notice' | 'Archive' }) {
  const updates = schoolUpdates.filter(item => category === 'All' || item.category === category);
  return <div className="news-grid">{updates.map(item => <Reveal key={item.id} className="news-card"><article>
    <Link href={item.href} className={'news-image' + (!item.image ? ' admission-news-art' : '')} aria-label={item.title}>
      {item.image ? <SchoolImage src={item.image} alt={item.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /> : <><span>THE NEXT CHAPTER</span><strong>2026<span>/</span>2027</strong><span>ADMISSIONS OPEN <ArrowIcon size={22}/></span></>}
    </Link>
    <div className="news-card-copy"><p className="eyebrow">{item.label}</p><h3><Link href={item.href}>{item.title}</Link></h3><p>{item.summary}</p><Link className="text-link" href={item.href}>{item.action}<ArrowIcon size={17}/></Link><p className="news-source">{item.date}<br/>{item.image ? 'Report & photograph: ' : 'Source: '}<a href={item.source}>{item.sourceName}</a></p></div>
  </article></Reveal>)}</div>;
}

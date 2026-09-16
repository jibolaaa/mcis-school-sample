'use client';
import { useId, useState } from 'react';
import NewsCards from './NewsCards';
import { schoolUpdates } from '@/lib/updates';
export default function NewsFeed() {
  const [category,setCategory] = useState<'All'|'Notice'|'Archive'>('All');
  const id=useId();
  const count=schoolUpdates.filter(item=>category==='All'||item.category===category).length;
  return <><div className="news-filters" role="group" aria-label="Filter school updates">{(['All','Notice','Archive'] as const).map(value=><button type="button" key={value} aria-pressed={category===value} aria-controls={id} onClick={()=>setCategory(value)}>{value==='All'?'All updates':value==='Notice'?'School notices':'From the archive'}</button>)}<span role="status">{count} {count===1?'update':'updates'}</span></div><div id={id}><NewsCards category={category}/></div></>;
}

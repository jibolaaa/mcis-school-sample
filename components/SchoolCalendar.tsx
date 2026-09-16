'use client';
import { useEffect, useId, useState } from 'react';
import { school } from '@/lib/school';

const monthLabel = (year:number,month:number) => new Date(year,month,1).toLocaleDateString('en-GB',{month:'long',year:'numeric'});
const isoDate = (year:number,month:number,day:number) => `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
export default function SchoolCalendar() {
  const [view,setView]=useState({year:2026,month:8});
  const [today,setToday]=useState('');
  const [selected,setSelected]=useState('');
  const id=useId();
  useEffect(()=>{const now=new Date();setView({year:now.getFullYear(),month:now.getMonth()});setToday(isoDate(now.getFullYear(),now.getMonth(),now.getDate()));},[]);
  const days=new Date(view.year,view.month+1,0).getDate();
  const offset=(new Date(view.year,view.month,1).getDay()+6)%7;
  function move(amount:number){const date=new Date(view.year,view.month+amount,1);setView({year:date.getFullYear(),month:date.getMonth()});setSelected('');}
  const chosenLabel=selected?new Date(selected+'T12:00:00').toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'}):'';
  const email='mailto:'+school.email+'?subject='+encodeURIComponent('MCIS school calendar enquiry')+'&body='+encodeURIComponent(`Hello MasterCare team,\n\nPlease could you confirm ${selected?'whether a school visit is possible on '+chosenLabel:'the school dates for '+monthLabel(view.year,view.month)}?\n\nThank you.`);
  return <div className="calendar-widget"><div className="calendar-toolbar"><button type="button" aria-label="Previous month" onClick={()=>move(-1)}>←</button><h3 id={id} aria-live="polite" aria-atomic="true">{monthLabel(view.year,view.month)}</h3><button type="button" aria-label="Next month" onClick={()=>move(1)}>→</button></div><div className="calendar-weekdays" aria-hidden="true">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day=><span key={day}>{day}</span>)}</div><div className="calendar-days" role="group" aria-labelledby={id}>{Array.from({length:offset},(_,i)=><span key={'blank'+i}/>)}{Array.from({length:days},(_,i)=>{const day=i+1,date=isoDate(view.year,view.month,day);return <button type="button" key={date} aria-label={new Date(view.year,view.month,day).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})} aria-pressed={selected===date} aria-current={date===today?'date':undefined} onClick={()=>setSelected(date)}>{day}</button>;})}</div><div className="calendar-key"><span><i/>Today</span><button type="button" onClick={()=>{const now=new Date();setView({year:now.getFullYear(),month:now.getMonth()});setSelected('');}}>Return to this month</button></div><div className="calendar-selection"><p role="status">{selected?chosenLabel:'Choose a date to ask about visiting.'}</p><p>Visits are arranged with the school. Selecting a date does not reserve a place or confirm an event.</p><a href={email} className="text-link">{selected?'Enquire about this date':'Request this month’s school dates'} ↗</a></div></div>;
}

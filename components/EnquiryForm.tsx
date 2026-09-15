'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { school } from '@/lib/school';
import ArrowIcon from './ArrowIcon';

export default function EnquiryForm() {
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const [status, setStatus] = useState('');
  const [today,setToday]=useState('');
  useEffect(()=>{const now=new Date();setToday([now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-'));},[]);
  const preview = useRef<HTMLDivElement>(null);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    if (!name) {
      const input = event.currentTarget.elements.namedItem('name') as HTMLInputElement;
      input.setCustomValidity('Please enter your name.');
      input.reportValidity();
      return;
    }
    const message = String(data.get('message') || '').trim();
    const purpose = String(data.get('purpose'));
    const stage = String(data.get('stage'));
    const date = String(data.get('date') || 'To be arranged');
    setDraft({
      subject: `MCIS ${purpose.toLowerCase()} enquiry`,
      body: `Hello MasterCare admissions team,\n\nMy name is ${name}. I would like to enquire about ${purpose.toLowerCase()}.\n\nLearning stage: ${stage}\nPreferred visit date: ${date}\n\n${message ? message + '\n\n' : ''}Please let me know the next steps.\n\nThank you,\n${name}`,
    });
    setStatus('Your email is ready to review. It has not been sent.');
    requestAnimationFrame(() => preview.current?.focus());
  }

  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(`To: ${school.email}\nSubject: ${draft.subject}\n\n${draft.body}`);
      setStatus('Enquiry copied. Paste it into your email app and send it to ' + school.email + '.');
    } catch {
      setStatus('Copy is unavailable in this browser. You can select and copy the message below.');
    }
  }

  return <div className="enquiry-form-wrap">
    <form onSubmit={prepare} className="enquiry-form" onChange={() => { setDraft(null); setStatus(''); }}>
      <div className="form-heading"><span className="eyebrow">01 / Prepare · 02 / Review · 03 / Send</span><h3>How can we help?</h3><p>Prepare an email to the school. You can review it before sending from your email app.</p></div>
      <label className="field">Your name<input name="name" onInput={event => event.currentTarget.setCustomValidity('')} autoComplete="name" required maxLength={100} placeholder="Parent or guardian’s name" /></label>
      <div className="form-grid">
        <label className="field">I’m interested in<select name="purpose" defaultValue="A campus visit"><option>A campus visit</option><option>Admissions</option><option>Day or boarding options</option><option>General information</option></select></label>
        <label className="field">Learning stage<select name="stage" defaultValue="Not sure yet"><option>Not sure yet</option><option>Early Years</option><option>Primary</option><option>Secondary</option></select></label>
      </div>
      <label className="field">Preferred visit date <span className="optional">Optional</span><input name="date" type="date" min={today || undefined} aria-describedby="visit-date-note" /><span id="visit-date-note" className="field-note">The school will confirm availability with you.</span></label>
      <label className="field">Your questions <span className="optional">Optional</span><textarea name="message" rows={4} maxLength={1200} placeholder="Tell the team what you would like to know." /></label>
      <button type="submit" className="pill-button">Review enquiry <ArrowIcon size={17} /></button>
      <p className="form-note">This page does not save your enquiry. Please leave out sensitive information or documents.</p>
    </form>
    <p className="form-status" role="status" aria-atomic="true">{status}</p>
    {draft && <div className="enquiry-preview" ref={preview} tabIndex={-1} aria-labelledby="enquiry-preview-title">
      <p className="eyebrow">Review your enquiry</p><h3 id="enquiry-preview-title">Ready for your email app.</h3><p>To: <a href={'mailto:' + school.email}>{school.email}</a></p>
      <label className="field">Subject<input value={draft.subject} maxLength={150} onChange={event => setDraft({ ...draft, subject: event.target.value })} /></label>
      <label className="field">Message<textarea rows={12} value={draft.body} maxLength={2500} onChange={event => setDraft({ ...draft, body: event.target.value })} /></label>
      <div className="draft-actions"><a className="pill-button" href={'mailto:' + school.email + '?subject=' + encodeURIComponent(draft.subject) + '&body=' + encodeURIComponent(draft.body)}>Open email app <ArrowIcon size={17} /></a><button type="button" className="outline-button" onClick={copyDraft}>Copy enquiry</button><a className="outline-button" download="mastercare-enquiry.txt" href={'data:text/plain;charset=utf-8,' + encodeURIComponent(`To: ${school.email}\nSubject: ${draft.subject}\n\n${draft.body}`)}>Save draft</a></div>
      <p className="field-note">Send the email in your email app to complete your enquiry. If it does not open, copy the message instead.</p>
    </div>}
  </div>;
}

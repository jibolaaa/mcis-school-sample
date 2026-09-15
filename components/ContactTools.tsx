'use client';
import {useState} from 'react';
import {school} from '@/lib/school';
export default function ContactTools({compact=false}:{compact?:boolean}){
 const [message,setMessage]=useState('');
 async function copy(value:string,label:string){try{await navigator.clipboard.writeText(value);setMessage(`${label} copied.`);}catch{setMessage(`Copy is unavailable. ${value}`);}}
 return <div className={'contact-tools'+(compact?' compact-tools':'')}><div className="contact-tools-actions"><a href="/mastercare-contact.vcf" download>Save school contact <span aria-hidden="true">↓</span></a><button type="button" onClick={()=>copy(school.email,'Email address')}>Copy email</button>{!compact&&<button type="button" onClick={()=>copy(school.address,'Campus address')}>Copy address</button>}</div><p role="status" aria-atomic="true">{message}</p></div>;
}

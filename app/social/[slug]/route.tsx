import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pages, type PageKey } from '@/lib/seo';
export const dynamic='force-static';
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}));}
export async function GET(_request:Request,context:{params:Promise<{slug:string}>}){
 const {slug}=await context.params;
 if(!Object.prototype.hasOwnProperty.call(pages,slug))return new Response('Not found',{status:404});
 const p=pages[slug as PageKey];
 const [serif,sans,logo,campus]=await Promise.all(['fonts/school-font-4.ttf','fonts/school-font-3.ttf','images/logo.jpg','images/campus.jpg'].map(p=>readFile(join(process.cwd(),'public',p))));
 return new ImageResponse(<div style={{display:'flex',width:'100%',height:'100%',background:'#f5f2e9',color:'#123e30',fontFamily:'DM Sans'}}><div style={{display:'flex',width:790,flexDirection:'column',padding:'50px 60px',justifyContent:'space-between'}}><div style={{display:'flex',alignItems:'center',gap:18}}><img src={`data:image/jpeg;base64,${logo.toString('base64')}`} width={62} height={62} alt=""/><span style={{fontSize:23}}>MasterCare International School</span></div><div style={{display:'flex',fontFamily:'Caslon',fontSize:91,lineHeight:1.05,letterSpacing:-3,maxWidth:660}}>{p.socialTitle}</div><div style={{display:'flex',justifyContent:'space-between',borderTop:'1px solid #b9c6b8',paddingTop:22,fontSize:19}}><span>{slug==='home'?'EARLY YEARS · PRIMARY · SECONDARY':p.title.toUpperCase()}</span></div></div><div style={{display:'flex',width:410,background:'#124b37',flexDirection:'column'}}><img src={`data:image/jpeg;base64,${campus.toString('base64')}`} width={410} height={435} alt="" style={{objectFit:'cover',objectPosition:'55% 50%'}}/><div style={{display:'flex',flexDirection:'column',color:'#fff',padding:38,gap:10}}><span style={{fontSize:28}}>Asaba, Nigeria.</span><span style={{fontSize:18,color:'#d2e2d6'}}>Excellence through Christ.</span></div></div></div>,{width:1200,height:630,fonts:[{name:'Caslon',data:serif,weight:400,style:'normal'},{name:'DM Sans',data:sans,weight:600,style:'normal'}],headers:{'Cache-Control':'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400'}});
}

import type { MetadataRoute } from 'next';
import {isIndexable,pages,siteUrl} from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{return isIndexable?Object.values(pages).map(p=>({url:new URL(p.path,siteUrl).href})):[];}

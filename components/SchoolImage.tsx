import Image, { type ImageProps } from 'next/image';
import campus from '@/public/images/campus.jpg';
import community from '@/public/images/leadership.jpg';
import classrooms from '@/public/images/archive-3.jpg';
import ceremony from '@/public/images/archive-2.jpg';
import sport from '@/public/images/sport-2017.jpg';
const images: Record<string, typeof campus> = {'/images/campus.jpg': campus, '/images/leadership.jpg': community, '/images/archive-3.jpg': classrooms, '/images/archive-2.jpg': ceremony, '/images/sport-2017.jpg': sport};
export default function SchoolImage({src, ...props}: Omit<ImageProps, 'src'> & {src: string}) {
 const asset = images[src];
 return <Image src={asset || src} placeholder={asset ? 'blur' : 'empty'} quality={80} {...props} />;
}

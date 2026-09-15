import Link from 'next/link';

const stages = [['Early Years', '/academics/early-years'], ['Primary School', '/academics/primary'], ['Secondary School', '/academics/secondary']];

export default function StageNavigation({ current }: { current: string }) {
  return <nav className="stage-navigation" aria-label="Learning stages"><div className="shell"><span>Explore learning stages</span><div>{stages.map(([label, href]) => <Link href={href} key={href} aria-current={current === label ? 'page' : undefined}>{label.replace(' School', '')}</Link>)}</div></div></nav>;
}

'use client'

import { useAppSelector } from '@/store/store';
import './About.scss';



export function About () {

  const pos = useAppSelector(state => state.scroll.position);
  const height = typeof window !== 'undefined' ? window.innerHeight : 0;
  
  return(
    <section className={'about'}
      style={{
        transform: `perspective(100px) translateZ(${height - pos * 2 > 0 ? -(height - pos * 2) : 0}px)`,
        opacity: pos < height * 1.25 ? pos < 100 ? 0 : 1 : 1 - (pos - height * 1.25) / 250
      }}
    >
      <div className={'about__location'}></div>
      <h1 className={'about__title'}>HELLO WORLD<br/>I am frontend developer<br/>from Poland</h1>
      <div className={'about__skills'}></div>
    </section>
  )
}
'use client'

import { useScrollPosition } from '@/hooks';
import { useAppSelector } from '@/store/store';



export function BigScrollComponent () {

  useScrollPosition();
  const scrollPosition = useAppSelector(state => state.scroll.position);
  const divider: number = (typeof window !== 'undefined' ? window.innerHeight : 0) * 6.5 / 360;

  return(
    <section 
      style={{ height: '750vh', backdropFilter: `hue-rotate(-${scrollPosition / divider}deg)` }}
    >
    </section>
  )
}


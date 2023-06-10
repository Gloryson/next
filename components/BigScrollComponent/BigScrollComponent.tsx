'use client'

import { useScrollPosition } from '@/hooks';
import { useAppSelector } from '@/store/store';



export function BigScrollComponent () {

  useScrollPosition();
  const scrollPosition = useAppSelector(state => state.scroll.position);
  const divider: number = (window.innerHeight * 4) / 360;

  return(
    <section 
      style={{ height: '500vh', backdropFilter: `hue-rotate(-${scrollPosition / divider}deg)` }}
    >
    </section>
  )
}


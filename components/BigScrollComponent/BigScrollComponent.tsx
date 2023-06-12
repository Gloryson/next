'use client'

import { useScrollPosition, useWindowHeight } from '@/hooks';
import { useAppSelector } from '@/store/store';



export function BigScrollComponent () {

  useScrollPosition();
  const scrollPosition = useAppSelector(state => state.scroll.position);
  const divider: number = useWindowHeight() * 6.5 / 360;

  return(
    <section 
      style={{ height: '750vh', backdropFilter: `hue-rotate(-${scrollPosition / divider}deg)` }}
    >
    </section>
  )
}


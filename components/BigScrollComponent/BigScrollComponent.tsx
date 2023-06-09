'use client'

import { useScrollPosition } from '@/hooks';
import { useAppSelector } from '@/store/store';
import './BigScrollComponent.scss';



export function BigScrollComponent () {

  useScrollPosition();
  const scrollPosition = useAppSelector(state => state.scroll.position);
  const divider: number = (5000 - window.innerHeight) / 360;

  return(
    <section 
      className={'empty'} 
      style={{ backdropFilter: `hue-rotate(-${scrollPosition / divider}deg)`}}
    >
    </section>
  )
}


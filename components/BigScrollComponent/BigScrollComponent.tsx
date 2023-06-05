'use client'

import { useScrollPosition } from '@/hooks';
import './BigScrollComponent.scss';



export function BigScrollComponent () {

  const scrollPosition = useScrollPosition();
  const divider: number = (10000 - window.innerHeight) / 360;

  return(
    <section className={'empty'} style={{ backdropFilter: `hue-rotate(-${scrollPosition / divider}deg)`}}></section>
  )
}


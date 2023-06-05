'use client'

import { useScrollPosition } from '@/hooks';
import './MainFixedBackground.scss';



export function MainFixedBackground () {

  const scrollPosition = useScrollPosition();

  
  return(
    <section className={'main__backgound'}>
      <h3>{ Math.round(scrollPosition) }</h3>
    </section>
  )
}
'use client'

import { useAppSelector } from '@/store/store';
import './MainFixedBackground.scss';



export function MainFixedBackground () {

  const scrollPosition = useAppSelector(state => state.scroll.position);

  
  return(
    <section className={'main__backgound'}>
      <h3>{ Math.round(scrollPosition) }</h3>
    </section>
  )
}
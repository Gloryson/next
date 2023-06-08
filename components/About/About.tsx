'use client'

import { useAppSelector } from '@/store/store';
import { useState } from 'react';
import './About.scss';



export function About () {

  const pos = useAppSelector(state => state.scroll.position);
  const [isVisible, setIsVisible] = useState(false);

  function setAboutStyles (pos: number): void {
    
  }
  
  return(
    <section className={'about' + ' ' + (isVisible ? 'about-in' : 'about-out')}
    >HELLO, WORLD!</section>
  )
}
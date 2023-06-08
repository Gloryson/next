'use client'

import { useAppSelector } from '@/store/store';
import './MainTitle.scss';



export function MainTitle () {

  const pos = useAppSelector(state => state.scroll.position) / 2;


  return pos < window.innerHeight ? (
    <section className={'title__container'}>
      <div>
        <span style={{transform: `translate(-${pos}px, -${pos}px) rotate(-${pos}deg)`}}>W</span>
        <span style={{transform: `translate(${pos / 1.5}px, -${pos}px) rotate(${pos}deg)`}}>EB</span>
      </div>
      <div>
        <span style={{transform: `translate(-${pos * 2}px) rotate(-${pos / 2}deg)`}}>DE</span>
        <span style={{transform: `translate(-${pos * 1.75}px, -${pos * 1.25}px)`}}>V</span>
        <span style={{transform: `translate(-${pos * 1.25}px, ${pos * 1.5}px) rotate(-${pos}deg)`}}>E</span>
        <span style={{transform: `translate(-${pos / 2}px, -${pos * 1.75}px) rotate(${pos}deg)`}}>L</span>
        <span style={{transform: `translate(${pos * 1.25}px, ${pos * 1.5}px) rotate(-${pos}deg)`}}>O</span>
        <span style={{transform: `translate(${pos * 1.75}px, -${pos * 1.25}px)`}}>P</span>
        <span style={{transform: `translate(${pos * 2}px) rotate(${pos / 2}deg)`}}>ER</span>
      </div>
      <div>
        <span style={{transform: `translate(-${pos * 2}px, ${pos / 1.5}px) rotate(${pos}deg)`}}>WL</span>
        <span style={{transform: `translate(-${pos / 2}px, ${pos}px) rotate(-${pos}deg)`}}>A</span>
        <span style={{transform: `translate(${pos / 3}px, ${pos}px) rotate(${pos}deg)`}}>D</span>
        <span style={{transform: `translate(${pos * 2}px, ${pos / 1.5}px) rotate(-${pos}deg)`}}>EK</span>
      </div>
      <div className={'mouse__scroll__down'} style={{transform: `translate(0, -${pos * 3}px)`}}></div>
    </section>
  ) : (
    <></>
  )
}
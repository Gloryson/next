'use client'


import { useScrollPosition } from '@/hooks';
import './MainTitle.scss';



export function MainTitle () {

  const pos = useScrollPosition();


  return pos < window.innerHeight ? (
    <section className={'title__container'}>
      <div>
        <span style={{transform: `translate(-${pos}px, -${pos}px)`}}>W</span>
        <span style={{transform: `translate(0, -${pos}px)`}}>E</span>
        <span style={{transform: `translate(${pos}px, -${pos}px)`}}>B</span>
      </div>
      <div>
        <span style={{transform: `translate(-${pos * 2}px)`}}>D</span>
        <span style={{transform: `translate(-${pos * 2}px, -${pos / 1.5}px)`}}>E</span>
        <span style={{transform: `translate(-${pos * 1.5}px, -${pos}px)`}}>V</span>
        <span style={{transform: `translate(-${pos}px, ${pos}px)`}}>E</span>
        <span style={{transform: `translate(0, ${pos}px)`}}>L</span>
        <span style={{transform: `translate(${pos}px, ${pos}px)`}}>O</span>
        <span style={{transform: `translate(${pos * 1.5}px, -${pos}px)`}}>P</span>
        <span style={{transform: `translate(${pos * 2}px, -${pos / 1.5}px)`}}>E</span>
        <span style={{transform: `translate(${pos * 2}px)`}}>R</span>
      </div>
      <div>
        <span style={{transform: `translate(-${pos * 2}px)`}}>W</span>
        <span style={{transform: `translate(-${pos * 2}px, ${pos / 1.5}px)`}}>L</span>
        <span style={{transform: `translate(-${pos / 2}px, ${pos}px)`}}>A</span>
        <span style={{transform: `translate(${pos / 3}px, ${pos}px)`}}>D</span>
        <span style={{transform: `translate(${pos * 2}px, ${pos / 1.5}px)`}}>E</span>
        <span style={{transform: `translate(${pos * 2}px)`}}>K</span>
      </div>
    </section>
  ) : (
    <></>
  )
}
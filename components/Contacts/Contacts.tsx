'use client'

import Link from 'next/link';
import { useRef } from 'react';
import { useOnScreen } from '@/hooks';
import './Contacts.scss';



export function Contacts () {

  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return(
    <section className={'contacts'}>
      <div
        className={'contacts__transform__container'}
        ref={ref}
        style={{ transform: `translateY(${isVisible ? '0' : '100%'})` }}
      >
        <Link href={'https://www.linkedin.com/in/gloryson/'}>LinkedIn</Link>
        <Link href={'https://github.com/gloryson'}>GitHub</Link>
        <Link href={'https://www.codewars.com/users/W%C5%82adek'}>CodeWars</Link>
        <Link href={'https://leetcode.com/WladekSzymczyk/'}>LeetCode</Link>
      </div>
    </section>
  )
}
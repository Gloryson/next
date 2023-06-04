'use client'

import { Fragment, useState } from 'react';
import Link from 'next/link';
import './NavigationMenu.scss';



export function NavigationMenu () {

  const [isVisible, setIsVisible] = useState(false);

  return(
    <Fragment>

      <div className={'burger' + ' ' + (isVisible ? 'burger-transform' : '')}
        onMouseEnter={() => setIsVisible(true)}
      >
        <div className={'burger__line'}></div>
        <div className={'burger__line'}></div>
        <div className={'burger__line'}></div>
      </div>

      <nav className={isVisible ? 'nav-transform' : ''}
        onMouseLeave={() => setIsVisible(false)}
      >
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contacts'}>Contacts</Link>
      </nav>

    </Fragment>
  )
}
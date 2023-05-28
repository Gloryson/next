import Link from 'next/link';
import './NavigationMenu.scss';



export function NavigationMenu () {
  return(
    <nav>
      <Link href={'#'}>Home</Link>
      <Link href={'#'}>About</Link>
      <Link href={'#'}>Info</Link>
      <Link href={'#'}>Contacts</Link>
    </nav>
  )
}
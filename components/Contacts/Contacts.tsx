import Link from 'next/link';
import './Contacts.scss';



export function Contacts () {

  return(
    <section className={'contacts'}>
      <div className={'contacts__transform__container'}>
        <Link href={'https://www.linkedin.com/in/gloryson/'}>LinkedIn</Link>
        <Link href={'https://github.com/gloryson'}>GitHub</Link>
        <Link href={'https://www.codewars.com/users/W%C5%82adek'}>CodeWars</Link>
        <Link href={'https://leetcode.com/WladekSzymczyk/'}>LeetCode</Link>
        <Link href={'mailto:wladek.developer@gmail.com'}>Gmail</Link>
      </div>
    </section>
  )
}
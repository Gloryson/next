import { Cursor, Main3DCanvas } from '@/components';
import './Main.scss';



export function Main () {
  
  return(
    <section className={'main'}>
      <div className={'main__title'}>
        <div className={'title__image'}></div>
      </div>
      <div className={'main__canvas'}>
        <Main3DCanvas />
      </div>
      <Cursor />
    </section>
  )
}
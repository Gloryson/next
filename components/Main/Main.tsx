import { Main3DCanvas } from '@/components';
import './Main.scss';



export function Main () {
  
  return(
    <section className={'main'}>
      <div className={'main__title'}>
        <h1>WEB<br/>DEVELOPER<br/>WLADEK</h1>
      </div>
      <div className={'main__second'}>
        <Main3DCanvas />
      </div>
    </section>
  )
}
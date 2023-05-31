import { Big3DSectionCanvas } from '@/components';
import './Big3DSection.scss';



export function Big3DSection () {
  return(
    <section className={'big__3d__section'}>
      <Big3DSectionCanvas />
    </section>
  )
}
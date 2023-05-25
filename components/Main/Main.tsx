'use client'

import { Canvas } from '@react-three/fiber';
import { TorusKnot } from '@/components';
import './Main.scss';



export function Main () {
  
  return(
    <section className={'main'}>
      <div className={'main__title'}>
        <h1>WEB<br/>DEVELOPER<br/>WLADEK</h1>
      </div>
      <div className={'main__second'}>
      <Canvas camera={{ position: [0, 0, 120] }} >
        <ambientLight intensity={0.2} />
        <directionalLight color='white' intensity={0.3} position={[0, 0, 5]} />
        <spotLight color='white' intensity={0.5} position={[-5, 50, 10]} />
        <TorusKnot />
      </Canvas>    
      </div>
    </section>
  )
}
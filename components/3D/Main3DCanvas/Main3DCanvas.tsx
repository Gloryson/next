'use client'

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { TorusKnot } from '@/components';



export function Main3DCanvas () {
  
  return(
    <Canvas camera={{ position: [0, 0, 120] }} >
      <ambientLight intensity={0.2} color={'#0055ff'}/>
      <Environment preset={'warehouse'} />
      <TorusKnot />
    </Canvas>
  )
}
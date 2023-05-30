'use client'

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';



export function About3DCanvas () {
  
  return(
    <Canvas camera={{ position: [0, 0, 10] }} >
      <Environment files={'/hdr/shanghai-2k.hdr'} background />
      <OrbitControls enableZoom={false} target={[120, 10, 120]}/>
    </Canvas>
  )
}
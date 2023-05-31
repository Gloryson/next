'use client'

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';



export function Big3DSectionCanvas () {
  
  return(
    <Canvas camera={{ position: [0, 0, 10] }} >
      <Environment files={'/hdr/shanghai-2k.hdr'} background />
      <OrbitControls enableZoom={false} target={[125, 0, 0]}/>
      <mesh position={ [125, 0, 0] } >
        <sphereGeometry args={[28, 64, 32]} />
        <meshPhysicalMaterial roughness={0} metalness={1} envMapIntensity={1.0} />
      </mesh>
    </Canvas>
  )
}
'use client'

import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef } from 'react'




export function TorusKnot (props: ThreeElements['mesh']) {

  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => mesh.current.rotation.y += 0.01);
  
  return (
    <mesh {...props} ref={mesh} >
      <torusKnotGeometry args={[18, 8, 300, 20]} />
      <meshPhysicalMaterial roughness={0} metalness={0.1} envMapIntensity={1.0} />
    </mesh>
  )
}
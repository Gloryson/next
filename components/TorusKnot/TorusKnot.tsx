'use client'

import { ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react"




export function TorusKnot (props: ThreeElements['mesh']) {

  // const texture = useLoader(TextureLoader, '/img/big-liquid-gradient.jpg');
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => (mesh.current.rotation.y += 0.01));
  
  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <torusKnotGeometry args={[18, 8, 150, 20]} />
      <meshPhysicalMaterial roughness={0} envMapIntensity={1.0} />
    </mesh>
  )
}
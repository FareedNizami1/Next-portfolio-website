'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Storm(props) {
  const { nodes, materials } = useGLTF('/models/storm-transformed.glb')

  const modelRef = useRef()

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.004
    }
  })

  return (
    <group
      {...props}
      dispose={null}
      scale={[1,1,1]}
      position={[0, 2, 0]}
      ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[0, 0, 0]} 
        rotation={[-1.542, -0.035, -0.198]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.Handle}
        position={[0, 0, 0]} 
        rotation={[-1.542, -0.035, -0.198]}
      />
    </group>
  )
}

useGLTF.preload('/models/storm-transformed.glb')

'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function AvengersLogo(props) {
  const { nodes, materials } = useGLTF('/models/avenger-transformed.glb')

  const modelRef = useRef()

  useFrame(() => {
    modelRef.current.rotation.y += 0.01
  })
  return (
    <group {...props} dispose={null} ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Body7_Steel_-_Satin_0'].geometry}
        material={materials['Steel_-_Satin']}
        scale={0.5}
      />
    </group>
  )
}

useGLTF.preload('/models/avenger-transformed.glb')
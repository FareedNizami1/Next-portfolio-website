'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Iron(props) {
  const { nodes, materials } = useGLTF('/models/iron-transformed.glb')

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15
  })

  return (
    <group {...props} dispose={null}
    position={[0, -1.5, 0]}
    ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.003']}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials['Material.004']}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        scale={2}
      />
    </group>
  )
}

useGLTF.preload('/models/iron-transformed.glb')


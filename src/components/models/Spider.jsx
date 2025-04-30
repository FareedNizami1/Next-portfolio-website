'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Spider(props) {
  const { nodes, materials } = useGLTF('/models/spider-transformed.glb')

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15
  })

  return (
    <group {...props} dispose={null}
    position={[0, -1.5, 0]}
    ref={modelRef}
    scale={2.2}
    rotation={[Math.PI / 11, 0, 0]}
    >
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_257.geometry}
        material={materials.sm00_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_257.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_259.geometry}
        material={materials.sm01_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_259.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_261.geometry}
        material={materials.sm02_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_261.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_263.geometry}
        material={materials.sm03_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_263.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_265.geometry}
        material={materials.sm04_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_265.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_267.geometry}
        material={materials.sm05_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_267.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_269.geometry}
        material={materials.sm06_materialcharactersherohero_spiderman_shooterhero_Spide}
        skeleton={nodes.Object_269.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_271.geometry}
        material={materials.sm07_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_271.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_273.geometry}
        material={materials.sm08_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_273.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <skinnedMesh
        geometry={nodes.Object_275.geometry}
        material={materials.sm09_charactersherohero_spiderman_advancedmaterialshero_spi}
        skeleton={nodes.Object_275.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/spider-transformed.glb')

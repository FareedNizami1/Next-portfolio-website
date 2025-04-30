import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'

export function Captain(props) {
  const group = useRef()

  const { nodes, materials } = useGLTF('/models/captain-transformed.glb')

//   const boxingFbx = useFBX('/animation/boxing.fbx') // useFBX returns a Group
//   const { animations } = boxingFbx

//   if (animations && animations.length > 0) {
//     animations[0].name = 'boxing'
//   }

//   const { actions } = useAnimations(animations, group)

//   useEffect(() => {
//     if (actions && actions.boxing) {
//       actions.boxing.reset().play()
//     }
//   }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        name="Object_6"
        geometry={nodes.Object_6.geometry}
        material={materials.Object001Matmat}
        skeleton={nodes.Object_6.skeleton}
        scale={31.66}
      />
    </group>
  </group>
  )
}

useGLTF.preload('/models/captain-transformed.glb')




'use client'
import { Environment, OrbitControls, SpotLight} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import clsx from "clsx"
import { Suspense } from "react"

const RenderModel = ({ children, className }) => {

    return (
        <Canvas
        className={clsx("w-screen h-screen -z-10 relative", className)}
        >
            {/* <ambientLight intensity={2}  /> */}
            {/* <SpotLight position={[20,20,20]} /> */}
            <directionalLight intensity={1} position={[50,20,5]} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={null}>
                {children}
            </Suspense> 
            <Environment preset="warehouse"  />
        </Canvas>
    )
}

export default RenderModel


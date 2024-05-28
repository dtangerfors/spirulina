import React, { useRef } from 'react'

import { useGLTF, Text } from "@react-three/drei";

import { useFrame, useThree } from '@react-three/fiber'



export default function Model() {
    const { nodes } = useGLTF("/scene/logotype.glb");
    const { viewport } = useThree()
    const torus = useRef(null);

    useFrame( () => {
        torus.current.rotation.x += 0.02
    })

    return (

        <group scale={viewport.width / 3.75} >

            <Text position={[0, 0, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">

                hello world!

            </Text>

            <mesh ref={torus} {...nodes.Torus002}>

                <meshBasicMaterial/>

            </mesh>

        </group>

    )

}
import React from "react"
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import {OrbitControls,Stars} from "@react-three/drei"
import * as THREE from 'three'
import SunMap from '../assets/image/8k_mercury.jpg'
const Sun = (props) => {
 const [Sunmap] = useLoader(TextureLoader, [SunMap])
 const moon = React.useRef()
 useFrame(({clock}) => {
     const elspedT = clock.getElapsedTime()
    moon.current.position.x = 3.5*Math.cos(elspedT/8) + 0;
    moon.current.position.z = 3.5*Math.sin(elspedT/8) + 0;

})  
     return (
        <>
        <mesh  castShadow  ref ={moon}  scale={[0.2, 0.2 ,0.2]}>
            
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshStandardMaterial attach="material"/>
            <meshPhongMaterial attach="material"  map={Sunmap} opacity={1}  side={THREE.DoubleSide} />
        </mesh>
        </>
    )
    
}

export default Sun
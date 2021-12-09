import React, { Component } from 'react'
import EarthDayMap from "../assets/image/8k_earth_daymap.jpg"
import EarthCloud from "../assets/image/8k_earth_clouds.jpg"
import EarthNightMap from "../assets/image/8k_earth_nightmap.jpg"
import EarthNormalMap from "../assets/image/8k_earth_normal_map.jpg"
import EarthSpecularMap from "../assets/image/8k_earth_specular_map.jpg"
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import {OrbitControls,Stars} from "@react-three/drei"
import * as THREE from 'three'
import Sun from './Sun'

export default function Earth (props) { 
    const [colorMapp,normalMapp,specularMapp,cloudMap,nightMap] = useLoader(TextureLoader,[EarthDayMap,EarthNormalMap,EarthSpecularMap,EarthCloud, EarthNightMap])
       const earth = React.useRef()
       const cloud = React.useRef()
     
       useFrame(({clock}) => {
           const elspedT = clock.getElapsedTime()
        earth.current.rotation.y = elspedT/8
        cloud.current.rotation.y = elspedT/8
      
    })  
      
    return (
            <> 
            <Stars radius={300}  depth={60} count={10000} factor={7} fade={true} saturation={0}/>
            <mesh receiveShadow ref={cloud} scale={[1.9998,1.9998,1.9998]}>
                <sphereBufferGeometry attach="geometry" args={[1.005, 32, 32]} />
                <meshPhongMaterial map={cloudMap} opacity={0.4} depthWrite ={true} transparent={true} side={THREE.DoubleSide}></meshPhongMaterial>
            </mesh>
            <mesh ref={earth} scale={[2,2,2]}  receiveShadow >
                <sphereGeometry attach="geometry" args={[1, 32, 32]} />
                <meshPhongMaterial attach="material" specularMap={specularMapp}  />
                <meshStandardMaterial attach="material" map={colorMapp} metalness={0.5} roughness={0.7} normalMap={normalMapp}/>
                <OrbitControls enableZoom ={true} enablePan={true} zoomSpeed={0.5} enableRotate = {true}  panSpeed={5} rotateSpeed={0.5}/>
            </mesh>
            
            </>
        )
    }


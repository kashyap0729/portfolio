import React, { useEffect, useRef } from 'react'
import spaceship from '../assets/3d/spaceship.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
const Ship = ({isRotating,...props}) => {
    const ref=useRef();
    const {scene, animations}=useGLTF(spaceship);
    const {actions}=useAnimations(animations, ref);
    useEffect(()=>{
        if(isRotating){
            actions["Take 001"].play();
        }else{
            // actions["Take 001"].stop();
        }
    },[actions,isRotating])
  return (
    <mesh {...props} position={[-1,-0.4,3]} scale={[0.05,0.05,0.05]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Ship
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Space from '../models/Space'
import Ship from '../models/Ship'
import HomeInfo from '../Components/HomeInfo'
const Home = () => {
  const[isRotating,setIsRotating]=useState(false);
  const[currentStage,setCurrentStage]=useState(1);
  const adjustSpaceForScreensize =()=>{
    let screenScale=null;
    let screenPosition=[0,-6.5,-43];
    let rotation=[0.1,4.7,0]
    if(window.innerWidth <768){
      screenScale=[4.5,4.5,4.5];
      screenPosition=[0,-6.5,-43];
    } else{
      screenScale=[5,5,5];
      screenPosition=[0,-6.5,-43];
    }
    return [screenScale,screenPosition,rotation]
  }
  const adjustShipForScreensize =()=>{
    let screenScale,screenPosition;
    if(window.innerWidth <768){
      screenScale=[1.5,1.5,1.5];
      screenPosition=[0,-1.5,-0];
    } else{
      screenScale=[3,3,3];
      screenPosition=[0,-4,-4];
    }
    return [screenScale,screenPosition]

  }
  const [spaceScale,spacePosition,spaceRotation]=adjustSpaceForScreensize();
  const [shipScale,shipPosition]=adjustShipForScreensize();
  return (
    <section className='w-full h-screen relative'>
      {/* style={{ backgroundColor: '#a49b72' }} */}
      
     <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
     camera={{near:0.1,far:1000}}>
      <Suspense fallback={<Loader/>}>
        <directionalLight position={[10,10,1]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <pointLight/>
        <spotLight/>
        <hemisphereLight/>
        <Ship
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        shipScale={shipScale}
        shipPosition={shipPosition}
        rotation={[0,-1.9,0]}
        />
        <Space
          position={spacePosition}
          scale={spaceScale}
          rotation={spaceRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
      </Suspense>
      
     </Canvas>
     <div className='absolute top-44
      left-10 right-0 z-10 flex items-center justify-center' >
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
    </section>
  )
}

export default Home
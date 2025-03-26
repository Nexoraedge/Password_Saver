import { Canvas } from '@react-three/fiber'
import React from 'react'
import MOdel from './MOdel'
import { OrbitControls } from '@react-three/drei'

const Saviour = ({Aname}) => {
  const animationName = Aname;
  // console.log(animationName);
  

  return (
    <div className='absolute top-0 -z-10 left-0 w-full h-full'>
 
       
            <Canvas  className='w-full h-full'>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 1]} />
            <group >
                                    <MOdel scale={.028} position={[0, -2.5, 0]} rotation={[-0.22, 0.25, -0.04]} animationName={animationName} />
                                </group>

            </Canvas>
        
      

    </div>
  )}

export default Saviour

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import spaceBoy from '../assets/3d/space_boi.glb';

const Space = ({ setCurrentStage, ...props }) => {
  const spaceRef = useRef();
  const { gl } = useThree();
  const { nodes, materials } = useGLTF(spaceBoy);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.5;
  const lastTouchX = useRef(0); // Store the last touch position

  const handleScroll = (e) => {
    const sensitivity = 0.001;
    const delta = e.deltaY * sensitivity;
    rotationSpeed.current += delta;
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      const sensitivity = 0.005; // Adjust as needed
      const currentTouchX = e.touches[0].clientX;
      const deltaX = currentTouchX - lastTouchX.current;
      rotationSpeed.current += deltaX * sensitivity;
      lastTouchX.current = currentTouchX; // Update the last touch position
    }
  };

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      lastTouchX.current = e.touches[0].clientX; // Set initial touch position
    }
  };

  useFrame(() => {
    spaceRef.current.rotation.y += rotationSpeed.current;
    rotationSpeed.current *= dampingFactor;

    if (Math.abs(rotationSpeed.current) < 0.001) {
      rotationSpeed.current = 0;
    }

    const rotation = spaceRef.current.rotation.y;
    const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
     switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('wheel', handleScroll);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchstart', handleTouchStart);

    return () => {
      canvas.removeEventListener('wheel', handleScroll);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
    };
  }, [gl]);

  

  return (
    <group ref={spaceRef} {...props} dispose={null}>
      {/* Your 3D model structure */}
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
            geometry={nodes.body_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.body_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh 
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          geometry={nodes.waves_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          geometry={nodes.particles_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
        <mesh
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh 
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <mesh
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
        <mesh
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        </group>
      </group>
  );
}

useGLTF.preload(spaceBoy);

export default Space;

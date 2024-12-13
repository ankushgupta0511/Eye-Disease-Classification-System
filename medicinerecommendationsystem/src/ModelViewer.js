import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

function MessiModel() {
  const modelRef = useRef();
  // const { scene } = useGLTF('/models/messi1.glb'); // Update with your model path
  const { scene } = useGLTF('/models/messi1.glb'); // Update with your model path

  const [rotationDirection, setRotationDirection] = useState(1); // 1 for clockwise, -1 for counterclockwise
  const rotationSpeed = 0.03; // Speed of rotation

  useEffect(() => {
    if (scene) {
      // Traverse the scene to find meshes and apply a blue material
      scene.traverse((child) => {
        if (child.isMesh) {
          // Apply a blue material to the mesh
          child.material = new MeshStandardMaterial({ color: 'blue' });

          // Enable casting shadows for the model
          child.castShadow = true;

          // Set the scale for the child mesh (to make it smaller)
          child.scale.set(0.7, 0.7, 0.7); // Adjust this value to make the model smaller
        }
      });

      // Set the scale for the entire scene (to make it smaller)
      scene.scale.set(1.2, 1.2, 1.2); // Reduce the overall size of the model
    }

    // Timer to change rotation direction every 5 seconds
    const timer = setInterval(() => {
      setRotationDirection((prev) => -prev); // Toggle direction
    }, 5000); // Change direction every 5 seconds

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, [scene]);

  // Use useFrame to continuously rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationDirection * rotationSpeed; // Rotate based on direction
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[1.0, 1.0, 1.0]} />; // Model size remains slightly smaller
}

const ModelViewer = () => {
  return (
    <div className="w-full h-[80vh]"> {/* Reduced size for model area */}
      <Canvas shadows> {/* Enable shadows in the Canvas */}
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[0, 10, 5]}
          intensity={1}
          shadow-mapSize-width={1024} // Set shadow map resolution
          shadow-mapSize-height={1024}
          shadow-camera-far={50} // Set shadow camera distance
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Transparent Shadow Plane */}
        <mesh receiveShadow position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[10, 10, 1]}>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} /> {/* Semi-transparent shadow */}
        </mesh>
        
        <MessiModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;

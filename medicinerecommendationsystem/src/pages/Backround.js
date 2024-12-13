// Background.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Background() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      {/* Add a 3D health-related model here. For example, you can use a sphere or any custom model */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

export default Background;

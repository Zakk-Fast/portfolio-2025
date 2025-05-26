"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/thinker.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return <primitive ref={ref} object={scene} scale={2} />;
}

export default function ModelRender() {
  return (
    <div style={{ height: 600, width: 450 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[0.4, 0, 0.5]} intensity={0.1} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Center>
          <Model />
        </Center>
      </Canvas>
    </div>
  );
}

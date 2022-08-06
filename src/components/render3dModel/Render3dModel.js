import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Render3dModel({ modelData }) {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <primitive object={modelData} scale={0.4} />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

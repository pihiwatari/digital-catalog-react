import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import fallbackSTL from "./sample3DModel/sus_part_2.stl";
import {
  GizmoHelper,
  GizmoViewcube,
  OrbitControls,
  Bounds,
  OrthographicCamera,
  Stage,
  Environment,
  Center,
} from "@react-three/drei";

function Model(props) {
  // Select loader
  const stl = useLoader(STLLoader, props.url || fallbackSTL);

  // create ref for mesh
  const ref = useRef();

  // Suscribe to render-loop, rotating mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.z += 0.005));

  const { camera } = useThree();
  camera.lookAt([0, 0, 0]);

  return (
    <Bounds fit observe>
      <mesh {...props} ref={ref}>
        <primitive object={stl} attach="geometry" />
        <meshStandardMaterial color="black" roughness={1} />
      </mesh>
    </Bounds>
  );
}

export default function Render3dModel({ photo, url }) {
  return (
    <Canvas camera={{ position: [-150, 50, 100] }}>
      <Suspense fallback={null}>
        <Stage position={[0, 0, 0]} environment="studio" intensity={0.5}>
          <Model position={[0, 0, 50]} />
        </Stage>
      </Suspense>
      <OrbitControls autoRotate makeDefault />
    </Canvas>
  );
}

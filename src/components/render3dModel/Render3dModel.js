import React, { Suspense, useEffect, useRef } from "react";
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
} from "@react-three/drei";

function Model(props) {
  const stl = useLoader(STLLoader, props.url || fallbackSTL);

  // create ref for mesh
  const ref = useRef();

  // Suscribe to render-loop, rotating mesh every frame
  useFrame((state, delta) => (ref.current.rotation.z += 0.005));

  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt([0, 0, 0]);
  });

  return (
    <Bounds fit clip>
      <OrthographicCamera>
        <mesh {...props} ref={ref}>
          <primitive object={stl} attach="geometry" />
          <meshStandardMaterial color="orange" />
        </mesh>
      </OrthographicCamera>
    </Bounds>
  );
}

export default function Render3dModel({ photo, url }) {
  return (
    <Canvas camera={{ position: [-150, 50, 100] }}>
      <Suspense fallback={null}>
        <Stage
          contactShadow
          shadows
          adjustCamera
          intensity={0.65}
          environment="city"
          preset="rembrandt"
        >
          <Model position={[0, 0, 0]} rotation={[-1.5708, 0, 0]} />
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewcube />
          </GizmoHelper>
        </Stage>
        <OrbitControls makeDefault />
      </Suspense>
    </Canvas>
  );
}

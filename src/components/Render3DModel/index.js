import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, Bounds } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { ErrorBoundary } from "../ErrorBoundary";

function Model(props) {
  // Access to 3D mesh to future manipulations
  const ref = useRef();

  const geo = useLoader(STLLoader, props.url);

  return (
    <Bounds fit>
      <mesh
        {...props}
        ref={ref}
        scale={1.0}
        position={[0, 0, 0]}
        geometry={geo}
      >
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Bounds>
  );
}

function Render3DModel({ url }) {
  return (
    <>
      <ErrorBoundary>
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 10, 20] }}
        >
          <Model url={url} />
          <Environment preset="sunset" />
        </Canvas>
      </ErrorBoundary>
    </>
  );
}

export { Render3DModel };

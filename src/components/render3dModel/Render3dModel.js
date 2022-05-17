import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function CreateMesh(props) {
  // mesh reference
  const mesh = useRef();

  // State for hover and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Suscribe to render-loop, rotating mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  // Return view (regular three.js element converted to react)
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function Render3dModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <CreateMesh position={[-1.2, 0, 0]} />
      <CreateMesh position={[1.2, 0, 0]} />
    </Canvas>
  );
}

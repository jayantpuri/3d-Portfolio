import React from "react";
import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react.glb");
  return (
    <Float floatIntensity={1}>
      <group scale={0.03} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[10, 10, 10]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;

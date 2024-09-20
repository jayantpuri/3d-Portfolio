import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile }) => {
  const cameraRef = useRef();
  useFrame((state, delta) => {
    if (isMobile) {
      easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    } else {
      easing.dampE(
        cameraRef.current.rotation,
        [-state.pointer.y / 4, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={cameraRef} scale={isMobile ? 0.6 : 1.1}>
      {children}
    </group>
  );
};

export default HeroCamera;

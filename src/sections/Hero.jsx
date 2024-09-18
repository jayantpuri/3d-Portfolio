import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

import HackerRoom from "../componets/HackerRoom";
import Loader from "../componets/Loader";
import { calculateSizes } from "../constants";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTbalet = useMediaQuery({ maxWWWidth: 1024, minWidth: 768 });

  const { deskPosition, deskScale } = calculateSizes(
    isSmall,
    isMobile,
    isTbalet
  );

  return (
    <div className="min-h-screen w-full mx-auto flex flex-col relative">
      <div className="w-full flex flex-col text-center c-space mx-auto gap-3 sm:mt-36 mt-24">
        <p className="sm:text-3xl text-1xl text-gray-300">
          Hi, my name is Jayant{" "}
          <img
            src="/assets/waving-hand.png"
            className="waving-hand sm:h-8 sm:w-8  h-4 w-4 mb-2 sm:ml-2 ml-1"
          />
        </p>
        <p className="sm:text-5xl text-2xl font-black text-gray-400">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="h-full w-full">
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <HackerRoom
              position={[1.2, -7, 1.9]}
              rotation={[0.3, -3.1, 0]}
              scale={0.1}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;

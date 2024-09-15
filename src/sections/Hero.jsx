import { Canvas } from "@react-three/fiber";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full mx-auto flex flex-col items center">
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
      <div>
        <Canvas></Canvas>
      </div>
    </div>
  );
};

export default Hero;

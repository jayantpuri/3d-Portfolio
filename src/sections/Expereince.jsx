import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { experience } from "../constants";

import Loader from "../componets/Loader";
import Avatar from "../componets/Avatar";

const Expereince = () => {
  const [anim, setAnim] = useState("idle");

  return (
    <section className="w-full h-full c-space my-24 xl:mt-40 flex flex-col gap-24">
      <div className="text-3xl font-bold text-neutral-50">My Experience</div>
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col lg:flex-row gap-5 lg:gap-7">
          <div className="lg:basis-[40%] basis-1 bg-black-200 border-black-300 rounded-lg">
            <Canvas>
              <spotLight position={[-1, 10, 10]} angle={0.15} penumbra={1} />
              <ambientLight intensity={3} />
              <directionalLight position={[10, 10, 10]} intensity={3} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<Loader />}>
                <Avatar position={[0, -3, 0]} scale={3} animationName={anim} />
              </Suspense>
            </Canvas>
          </div>
          <div className="flex flex-col gap-10 basis-1 lg:basis-[60%] bg-black-200 border-black-300 rounded-lg p-5">
            {experience.map(
              ({
                id,
                company,
                logo,
                jobTitle,
                description,
                date,
                animation,
              }) => (
                <div
                  key={id}
                  onMouseEnter={() => setAnim(animation)}
                  onClick={() => setAnim(animation)}
                  onPointerOver={() => setAnim(animation)}
                  onPointerOut={() => setAnim("idle")}
                  className="group flex gap-12 p-5 items-start transition-all duration-300 cursor-pointer ease-in-out hover:bg-black-600 rounded-lg"
                >
                  <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-16 h-16 rounded-3xl bg-black-600 p-2"
                  />

                  <div className="flex flex-col gap-2 items-center">
                    <h3 className="text-white text-lg">{company}</h3>
                    <h6 className="text-[16px] text-slate-400">
                      {jobTitle} -- {date}
                    </h6>
                    <p className="my-6 text-white-600 transition-all ease-in-out duration-300 group-hover:text-white-800">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expereince;

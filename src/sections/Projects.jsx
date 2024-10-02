import React, { Suspense, useState } from "react";
import { projects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import Computer from "../componets/Computer";
import Loader from "../componets/Loader";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];
  const naviageToProject = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return prev === projects.length - 1 ? 0 : prev + 1;
      } else if (direction === "previous") {
        return prev === 0 ? projects.length - 1 : prev - 1;
      }
    });
  };
  return (
    <section className="w-full h-full p-6 flex flex-col gap-24 sm:p-6 xl:p-16 my-28">
      <div className="text-3xl font-bold text-neutral-50">My Projects</div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
        <div
          key={currentProject.id}
          style={{ backgroundImage: `${currentProject.spotlight}` }}
          className="grid-container"
        >
          <img
            src={currentProject.logo}
            alt={`project ${currentProject.id} logo`}
            className="w-20 h-20 rounded-md"
          />
          <h2 className="head-text">{currentProject.title}</h2>
          <div className="grid-subtext flex flex-col gap-4">
            <p> {currentProject.description}</p>
            <p>{currentProject.subDescription}</p>
          </div>
          <div className="flex justify-between w-full my-4">
            <div className="flex items-center gap-1 lg:gap-2">
              {currentProject.techStack.map((technology) => (
                <div key={technology.id}>
                  <img
                    src={technology.link}
                    alt={technology.name}
                    className="tech-logo"
                  />
                </div>
              ))}
            </div>
            <a
              href={
                currentProject.link
                  ? currentProject.link
                  : currentProject.github
              }
              target="_blank"
              className="grid-subtext text-lg flex items-center gap-3"
            >
              {currentProject.link ? "Check Live Site" : "Check Github"}
              <img
                src={"/assets/arrow-up.png"}
                alt="arrow up"
                className="h-5 w-5"
              />
            </a>
          </div>
          {/* Adding Nav buttons */}
          <div className="w-full flex justify-between mt-7">
            <button onClick={() => naviageToProject("previous")}>
              <img
                src={"/assets/left-arrow.png"}
                alt="left arrow"
                className="arrow-btn"
              />
            </button>
            <button onClick={() => naviageToProject("next")}>
              <img
                src={"/assets/right-arrow.png"}
                alt="right arrow"
                className="arrow-btn"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas className="w-full h-full">
            <ambientLight intensity={3.4} />
            <directionalLight intensity={1} position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<Loader />}>
                <group position={[0, -1.5, 0]} rotation={[0, -0.3, 0]}>
                  <Computer />
                </group>
              </Suspense>
            </Center>
            <OrbitControls enableZoom = {false} maxPolarAngle={Math.PI / 2}/>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;

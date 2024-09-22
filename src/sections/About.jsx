import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../componets/Button";

const About = () => {
  const [copyEmail, setCopyEmail] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("jayantpuri16@gmail.com");
    setCopyEmail(true);
    setTimeout(() => {
      setCopyEmail(false);
    }, 3000);
  };

  return (
    <div className="w-full h-full p-16 sm:p-20 xl:p-32 my-28 grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 sm:gap-7">
      <div className="grid-container col-span-1 xl:row-span-3">
        <img
          src={"/assets/grid1.png"}
          className="w-full md:w-[300px] h-[300px] object-cover mx-auto"
        />
        <div>
          <p className="grid-headtext">Hi, I am Jayant</p>
          <p className="grid-subtext">
            With 3 years of experience, I have honed my skills as a frontend and
            a backend developer.
          </p>
        </div>
      </div>
      <div className="grid-container col-span-1 xl:row-span-3">
        <img
          src={"/assets/grid2.png"}
          className="w-full md:w-[300px] h-[300px] object-cover mx-auto"
        />
        <div>
          <p className="grid-headtext">Tech Stack</p>
          <p className="grid-subtext">
            I specialize in JavaScript/Typescript with a focus on React and
            NextJS ecosystems.
          </p>
        </div>
      </div>
      <div className="grid-container col-span-1 xl:row-span-4">
        <div className="rounded-md flex justify-center itens-center">
          <Globe
            height={330}
            width={330}
            backgroundColor="rgba(0, 0, 0, 0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
          />
        </div>
        <div>
          <p className="grid-headtext">I work remotely as well as in person</p>
          <p className="grid-subtext">
            I am based in India, currently living in Surrey, Canada.
          </p>
        </div>
        <Button
          name={"Contact me"}
          isBeam={true}
          btnClass={"w-[75%] mt-2 xl:mt-8 btn-primary"}
        ></Button>
      </div>
      <div className="grid-container col-span-1 row-span-1 xl:row-span-3 xl:col-span-2">
        <img
          src={"assets/grid3.png"}
          className="w-full md:w-[300px] h-[300px] xl-w-[400px] xl:h-[400px] object-cover mx-auto"
        />
        <div>
          <p className="grid-headtext">My passion for coding</p>
          <p className="grid-subtext">
            I love solving problems and building things through code.
          </p>
        </div>
      </div>
      <div className="grid-container col-span-1 xl:row-span-2">
        <img
          src={"assets/grid4.png"}
          className="w-full md:w-[250px] h-[250px] object-contain mx-auto"
        />
        <div>
          <p className="grid-headtext">Contact me</p>
          <p className="grid-subtext flex gap-4 items-center">
            jayantpuri6@gmail.com
            <img
              src={copyEmail ? "assets/tick.svg" : "assets/copy.svg"} className="cursor-pointer"
              onClick={() => copy()}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

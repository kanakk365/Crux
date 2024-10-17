import React from "react";
import GridPattern from "./ui/animated-grid-pattern";
import { FlipWords } from "./ui/flip-words";
import WordRotate from "./ui/word-rotate";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import Particles from "./ui/particles";

function HeroSection() {
  return (
    <div className="text-center w-full ">
      <GridPattern/>
     
      <div className="flex flex-col mt-32 mb-20 gap-24  ">
        <div className=" z-50  flex flex-col gap-16 ">
          <div className="flex flex-col gap-4">
            <h1 className="z-50 text-6xl font-semibold">Search, Apply & </h1>
            <div className=" w-full flex text-6xl justify-center  gap-1 font-semibold">
              <div>Get Your Dream</div>
              <div className="font-normal w-24">
                <FlipWords />
              </div>
            </div>
          </div>

          <div>
            <p>
              Explore exciting job opportunities tailored just for you. Connect
              with top employers and take the{" "}
            </p>
            <span>first step toward your ideal career!</span>
          </div>
        </div>

        <div>
          <PlaceholdersAndVanishInput />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

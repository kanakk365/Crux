import React, { useState } from "react";
import GridPattern from "./ui/animated-grid-pattern";
import { FlipWords } from "./ui/flip-words";
import WordRotate from "./ui/word-rotate";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import Particles from "./ui/particles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "@/store/Slice/jobSlice";

function HeroSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const searchJobHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };
  return (
    <div className="text-center w-full ">
      <div className="overflow:hidden">
        
        <GridPattern />
      </div>

      <div className="flex flex-col mt-32 mb-20 gap-24  ">
        <div className="   flex flex-col gap-16 ">
          <div className="flex flex-col gap-2">
            <h1 className=" text-5xl sm:text-6xl font-semibold">
              Search, Apply &{" "}
            </h1>
            <div className=" w-full flex text-[2.8rem] sm:text-6xl justify-center  gap-1 font-semibold">
              <div>Get Your Dream</div>
              <div className="font-normal w-24">
                <FlipWords />
              </div>
            </div>
          </div>
          <div className=" sm:px-0 px-4  block sm:hidden">
            <p>
              Explore exciting job opportunities tailored just for you. Connect
              with top employers and take the first step toward your ideal
              career!
            </p>
          </div>
          <div className="sm:px-0 px-4  hidden sm:block">
            <p>
              Explore exciting job opportunities tailored just for you. Connect
              with top employers and take the{" "}
            </p>
            <span>first step toward your ideal career!</span>
          </div>
        </div>

        <div className="sm:px-0 px-4 ">
          <PlaceholdersAndVanishInput
            onSubmit={searchJobHandler}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

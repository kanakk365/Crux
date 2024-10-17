import React from "react";
import Marquee from "./ui/marquee";
import { Button } from "./ui/button";

function CategoryCarousel() {
  return (
    <div className="w-full max-w-2xl mx-auto my-16  ">
      <Marquee>
        <button className=" mx-4 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Frontend Developer
        </button>
        <button className="mx-4  px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Backend Developer
        </button>
        <button className=" mx-4 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Data Science
        </button>
        <button className="mx-4 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Graphic Designer
        </button>
        <button className=" mx-4 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          FullStack Developer
        </button>
      </Marquee>
    </div>
  );
}

export default CategoryCarousel;

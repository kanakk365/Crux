import React from "react";
import Marquee from "./ui/marquee";
import { Button } from "./ui/button";
import { setSearchQuery } from "@/store/Slice/jobSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CategoryCarousel() {
  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
  ];

  const navigate = useNavigate()
  const dispatch= useDispatch()
  const searchJobHandler = (query) => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };
  return (
    <div className="w-full max-w-2xl mx-auto my-16  ">
      <Marquee>
        {category.map((item, index) => (
          <button onClick={()=>{searchJobHandler(item)}} className=" mx-4 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            {item}
          </button>
        ))}
      </Marquee>
    </div>
  );
}

export default CategoryCarousel;

import {
  Bookmark,
  Briefcase,
  FileText,
  IndianRupee,
  MapPin,
} from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

function JobCard({ onClick }) {
  const jobId = "afdraerer";
  return (
    <>
      <Link to={`/details/${jobId}`}>
        <div  className="w-full border-2 border-gray-200 p-4 rounded-lg hover:shadow-xl duration-300 cursor-pointer">
          <div className="flex w-full items-center justify-between">
            <div className="">
              <h1 className="font-bold">Web Developer</h1>
              <p className="text-sm font-semibold">Company Name</p>
            </div>
            <div className="border-2 aspect-square h-[2.9rem] rounded-md">
              <img
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-8 mt-4">
            <p className="flex gap-1 items-center">
              <span className="text-gray-400 ">
                <Briefcase size={18} />
              </span>
              0 Yrs
            </p>
            <div className="border-l-2 border-gray-300 w-0 "></div>
            <p className="flex gap-1 items-center">
              <span className="text-gray-400 ">
                <IndianRupee width={18} />
              </span>
              Salary
            </p>
            <div className="border-l-2 border-gray-300 w-0 h-"></div>

            <p className="flex gap-1 items-center">
              {" "}
              <span className="text-gray-500 ">
                <MapPin width={18} />
              </span>{" "}
              Location
            </p>
          </div>
          <div className="flex gap-4 mt-3">
            <span className="text-gray-500 ">
              <FileText width={18} />
            </span>
            <p className="line-clamp-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              suscipit voluptates ratione nesciunt accusantium nihil, eaque illo
              cumque corporis, facere dolorum expedita provident sit autem iste.
              Recusandae eius minus doloremque!
            </p>
          </div>
          <div className="flex gap-6 mt-3">
            <Badge className={"bg-[#011627] text-xs"}>2 Positions</Badge>
            <Badge className={"bg-[#011627]"}> Full Time</Badge>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-sm">10 Days Ago</p>
            <div>
              <button className="flex gap-1 hover:scale-110 duration-700 ">
                {" "}
                <span className="text-gray-400">
                  <Bookmark width={18} />
                </span>{" "}
                Save
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default JobCard;

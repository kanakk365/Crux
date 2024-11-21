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

function JobCard({ job }) {
  const createdDate = new Date(job.createdAt);
  const now = new Date();
  const diff = now - createdDate;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return (
    <>
      <Link to={`/details/${job._id}`}>
        <div className="w-full border-2 border-gray-200 p-4 rounded-lg hover:shadow-xl duration-300 cursor-pointer">
          <div className="flex w-full items-center justify-between">
            <div className="">
              <h1 className="font-bold">{job.title}</h1>
              <p className="text-sm font-semibold">{job.company.name}</p>
            </div>
            <div className="border-2 aspect-square h-[2.9rem] rounded-md">
              <img src={job?.company?.logo} alt="" />
            </div>
          </div>
          <div className="flex gap-8 mt-4">
            <p className="flex gap-1 items-center">
              <span className="text-gray-400 ">
                <Briefcase size={18} />
              </span>
              {job.experienceLevel} years
            </p>
            <div className="border-l-2 border-gray-300 w-0 "></div>
            <p className="flex gap-1 items-center">
              <span className="text-gray-400 ">
                <IndianRupee width={18} />
              </span>
              {job.salary}
            </p>
            <div className="border-l-2 border-gray-300 w-0 h-"></div>

            <p className="flex gap-1 items-center">
              {" "}
              <span className="text-gray-500 ">
                <MapPin width={18} />
              </span>{" "}
              {job.location}
            </p>
          </div>
          <div className="flex gap-4 mt-3">
            <span className="text-gray-500 ">
              <FileText width={18} />
            </span>
            <p className="line-clamp-1">{job.description}</p>
          </div>
          <div className="flex gap-6 mt-3">
            <Badge className={"bg-[#011627] text-xs"}>
              {job.position} Positions
            </Badge>
            <Badge className={"bg-[#011627]"}> {job.jobType}</Badge>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-sm">{days} Days Ago</p>
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

import JobCard from "@/components/JobCard";
import Navbar from "@/components/shared/Navbar";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { setSearchQuery } from "@/store/Slice/jobSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Browse() {
  useGetAllJobs();
  const dispatch = useDispatch();
  const { allJobs } = useSelector((store) => store.job);
  useEffect(() => {
    console.log("hell");
    return () => {
      dispatch(setSearchQuery(""));
    };
  });

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col gap-6 mt-8 ">
        <h1 className="text-lg font-semibold">{`Search Result (${allJobs?.length})`}</h1>
        {allJobs?.map((job) => (
          <div className="">
            <JobCard job={job} key={job?._id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;

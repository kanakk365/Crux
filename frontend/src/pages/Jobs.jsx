import FilterSection from "@/components/FilterSection";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { useSelector } from "react-redux";


function Jobs() {

  const {allJobs}= useSelector(store=>store.job)
  console.log(allJobs)
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="flex w-[80%] mx-auto gap-10 mt-8  ">
        <div className="w-[25%]">
          <FilterSection/>
        </div>
        <div className="w-[75%] flex flex-col gap-6">
          {
            allJobs.length>0 ? 
            allJobs.map((job)=>(
              <JobCard job={job} key={job._id}/>
            )): <div> No Jobs</div>
          }
        </div>
      </div>
    </div>
  );
}

export default Jobs;

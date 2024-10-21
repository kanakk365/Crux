import FilterSection from "@/components/FilterSection";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/shared/Navbar";
import React from "react";

function Jobs() {

  const jobs= [1,2,3,4,5]
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="flex w-[80%] mx-auto gap-10 mt-8  ">
        <div className="w-[25%]">
          <FilterSection />
        </div>
        <div className="w-[75%] flex flex-col gap-6">
          {
            jobs.map((job)=>(
              <JobCard/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Jobs;

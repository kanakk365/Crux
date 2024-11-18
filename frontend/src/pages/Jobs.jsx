import FilterSection from "@/components/FilterSection";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/shared/Navbar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Jobs() {
  const { allJobs, searchQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);


  useEffect(() => {
    if (searchQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
         
        );
      });
      setFilterJobs(filteredJobs)
    } else {
      setFilterJobs(allJobs);
    }
  },[allJobs , searchQuery]);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="flex w-[80%] mx-auto gap-10 mt-8  ">
        <div className="w-[25%]">
          <FilterSection />
        </div>
        <div className="w-[75%] flex flex-col gap-6">
          {filterJobs.length > 0 ? (
            filterJobs.map((job) => <JobCard job={job} key={job._id} />)
          ) : (
            <div> No Jobs</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;

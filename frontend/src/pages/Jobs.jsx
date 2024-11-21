import FilterSection from "@/components/FilterSection";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/shared/Navbar";
import { IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Jobs() {
  const { allJobs, searchQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const [showFilters, setShowFilters] = useState(false); // State for filter visibility

  useEffect(() => {
    if (searchQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchQuery]);

  return (
    <div className="sm:max-w-7xl mx-auto">
      <Navbar />
      <div className="flex sm:flex-row flex-col sm:w-[80%] w-[95%] mx-auto sm:gap-10 gap-2 mt-8">
      
        <div className="w-[25%] sm:block hidden">
          <FilterSection />
        </div>

     
        <div className=" w-full sm:hidden flex justify-start h-8">
          <button
            className="  bg-[#011627] text-white w-full rounded-md shadow-md"
            onClick={() => setShowFilters(true)}
          >
           Filters
          </button>
        </div>

      
        {showFilters && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
        
            <button
              className="self-end p-3"
              onClick={() => setShowFilters(false)}
            >
              <IconX/>
            </button>

          
            <div className="flex-1 p-4 overflow-y-auto">
              <FilterSection />
            </div>
          </div>
        )}

    
        <div className="sm:w-[75%] w-full flex flex-col gap-6">
          {filterJobs.length > 0 ? (
            filterJobs.map((job) => <JobCard job={job} key={job._id} />)
          ) : (
            <div>No Jobs</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;

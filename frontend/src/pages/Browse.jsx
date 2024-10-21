import JobCard from "@/components/JobCard";
import Navbar from "@/components/shared/Navbar";
import React from "react";

function Browse() {
  const jobs = [1, 2, 3, 4, 5];
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col gap-6 mt-8 ">
        <h1 className="text-lg font-semibold">{`Search Result (${jobs.length})`}</h1>
        {jobs.map((job) => (
          <div className="">
            <JobCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;

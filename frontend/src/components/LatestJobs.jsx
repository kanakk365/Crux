import { useSelector } from "react-redux";
import { HoverEffect } from "./ui/card-hover-effect";
import { Card, CardTitle, CardDescription } from "./ui/card-hover-effect";

export default function LatestJobs() {
  const {allJobs}= useSelector(store=>store.job)

  
  
  return (
    <div className="container mx-auto">
      <div className="sm:w-[80%] w-[93%] mx-auto">
        <h1 className=" text-3xl font-bold">Latest and Top Job Openings</h1>

        <HoverEffect items={allJobs} className="" />
      </div>
    </div>
  );
}

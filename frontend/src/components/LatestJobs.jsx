import { HoverEffect } from "./ui/card-hover-effect";
import { Card, CardTitle, CardDescription } from "./ui/card-hover-effect";

export default function LatestJobs() {
  const items = [
    {
      link: "/page-1",
      companyName: "Google",
      jobTitle:"Frontend dev",
      companyLocation:"India",
      description: "This is a description for card 1. This is a description for card 1. ",
      positions:"12 Positions",
      jobType: "Full-Time",
      salary:"54 LPA"
    },
    {
        link: "/page-1",
        companyName: "Google",
        jobTitle:"Frontend dev",
        companyLocation:"India",
        description: "This is a description for card 1. This is a description for card 1. ",
        positions:"12 Positions",
        jobType: "Full-Time",
        salary:"54 LPA"
      },{
        link: "/page-1",
        companyName: "Google",
        jobTitle:"Frontend dev",
        companyLocation:"India",
        description: "This is a description for card 1. This is a description for card 1. ",
        positions:"12 Positions",
        jobType: "Full-Time",
        salary:"54 LPA"
      },{
        link: "/page-1",
        companyName: "Google",
        jobTitle:"Frontend dev",
        companyLocation:"India",
        description: "This is a description for card 1. This is a description for card 1. ",
        positions:"12 Positions",
        jobType: "Full-Time",
        salary:"54 LPA"
      },{
        link: "/page-1",
        companyName: "Google",
        jobTitle:"Frontend dev",
        companyLocation:"India",
        description: "This is a description for card 1. This is a description for card 1. ",
        positions:"12 Positions",
        jobType: "Full-Time",
        salary:"54 LPA"
      },{
        link: "/page-1",
        companyName: "Google",
        jobTitle:"Frontend dev",
        companyLocation:"India",
        description: "This is a description for card 1. This is a description for card 1. ",
        positions:"12 Positions",
        jobType: "Full-Time",
        salary:"54 LPA"
      },
  ];
  return (
    <div className="container mx-auto">
      <div className="w-[75%] mx-auto">
        <h1 className=" text-3xl font-bold">Latest and Top Job Openings</h1>

        <HoverEffect items={items} className="" />
      </div>
    </div>
  );
}

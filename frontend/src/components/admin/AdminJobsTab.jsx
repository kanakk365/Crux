import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminJobsTab() {
  const navigate= useNavigate()
  const { allAdminJobs , searchAdminJobByText} = useSelector(
    (store) => store.job
  );
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);

  useEffect(() => {
    if (searchAdminJobByText) {
      const filteredJob = allAdminJobs.filter((job) =>
        job?.company.name?.toLowerCase().includes(searchAdminJobByText.toLowerCase()) || job?.title?.toLowerCase().includes(searchAdminJobByText.toLowerCase())
      );
      setFilterJobs(filteredJob);
    } else {
      setFilterJobs(allAdminJobs);
    }
  }, [allAdminJobs, searchAdminJobByText]);

  return (
    <div className="mx-10 p-5">
      <Table>
        <TableCaption>A list of your recent registered </TableCaption>
        <TableHeader>
          <TableRow>
            
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs.map((job) => (
            <TableRow key={job.id || job.name}>
             
              <TableCell>{job.company.name}</TableCell>
              <TableCell >{job.title}</TableCell>
              <TableCell >{job.createdAt.split("T")[0]}</TableCell>
              
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-24">
                    <div onClick={()=>navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                      <Edit2 className="w-4" />
                      <span className="text-base">Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminJobsTab;

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  APPLICATION_API_ENDPOINT,
  JOB_API_ENDPOINT,
} from "@/components/utils/constants";
import { setSingleJob } from "@/store/Slice/jobSlice";
import { toast } from "sonner";

export default function JobDetails() {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [applied, setApplied] = useState(isApplied);
  console.log(isApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setApplied(true);
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updateSingleJob));
        toast.success(res.data.message);
      }
      console.log(res);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (e) {
        console.log(`Error while getting job details: ${e}`);
      }
    };

    if (jobId) fetchAllJobs();
  }, [jobId, dispatch]);
  if (!singleJob) return <div>Loading</div>;

  const createdDate = new Date(singleJob?.createdAt);
  const now = new Date();
  const diff = now - createdDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center ">
            <img className="rounded-lg " src={singleJob?.company?.logo} alt="logo" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{singleJob.company.name}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={applied ? null : applyJobHandler}
            disabled={applied}
            className={`rounded-lg ${
              applied ? "bg-gray-600 cursor-not-allowed" : "bg-black "
            }`}
          >
            {applied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">{singleJob.title}</h1>
      <div className="flex text-sm sm:text-base gap-2 text-gray-600 mb-4">
        <span>₹ {singleJob.salary}</span>
        <span>|</span>
        <span>{singleJob.location}</span>
        <span>|</span>
        <span>{singleJob.experienceLevel} years of exp</span>
        <span>|</span>
        <span>{singleJob.jobType}</span>
      </div>
      <div className="flex gap-2 text-gray-600">
        <p className="text-gray-500 mb-6">Posted: {days} days ago</p>{" "}
        <span>|</span>{" "}
        <p className="text-gray-500 mb-6">
          {" "}
          Applications: {singleJob.applications.length}{" "}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {singleJob.requirements.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t pt-6 mt-4">
        <h3 className="text-2xl font-bold mb-4">Job Description</h3>
        <div className="space-y-4">{singleJob.description}</div>
      </div>
    </div>
  );
}

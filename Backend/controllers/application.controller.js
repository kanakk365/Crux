import { Application } from "../modles/application.model.js";
import { Job } from "../modles/job.model.js";
import { User } from "../modles/user.model.js";

export const applyJob = async (req, res) => {
  try {

    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required",
        success: false,
      });
    }
    const existinsgApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    
    if (existinsgApplication) {
      return res.status(400).json({
        message: "You already applied",
        success: false,
      });
    }

    const job = await Job.findById(jobId);
   
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      message: "Job applied successfully.",
      success: true,
    });
  } catch (e) {
    console.log(`Error while applying Job ${e}`);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;

    const application = await Application.find({ applicant: userId })
      .sort({ created: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!application) {
      return res.status(404).json({
        message: "No Applications",
        success: false,
      });
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (e) {
    console.log(`Error while getting all applied jobs ::  ${e}`);
  }
};

export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    console.log(job)
    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }
    console.log(job)
    return res.status(200).json({
      job,
      succees: true,
    });
  } catch (e) {
    console.log(`Error while getting all applicants of this job :: ${e}`);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(400).json({
        message: "status is required",
        success: false,
      });
    }

    const application = await Application.findOne({ _id: applicationId });

    if (!application) {
      return res.status(404).json({
        message: "Application not found.",
        success: false,
      });
    }

    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully.",
      success: true,
    });
  } catch (e) {
    console.log(`Error while updating status :: ${e}`);
  }
};

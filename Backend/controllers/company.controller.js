import { Company } from "../modles/company.model.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    const userId= req.id
    if (!companyName) {
      return res.status(400).json({
        message: "Company name required",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyName });

    if (company) {
      return res.status(400).json({
        message: "Company already exists",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (e) {
    console.log(`Error while creating the company ${e}`);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    let companies = await Company.find({ userId });
    if (!companies) {
      return res.status(400).json({
        message: "Companies not found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (e) {
    console.log(`Error while getting all companies of user :: ${e}`);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (e) {
    console.log(`Error while getting company by id :: ${e}`);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    
    console.log(file);
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url
    console.log({ name, description, website, location , logo })
    
    const updatedData = { name, description, website, location , logo };
    
    

    const company = await Company.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });
    console.log(company)

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company information updated.",
      success: true,
    });
  } catch (e) {
    console.log(`Error while updating company information ${e}`);
  }
};

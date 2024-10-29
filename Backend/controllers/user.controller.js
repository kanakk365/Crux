import { User } from "../modles/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber, role } = req.body;
    console.log({ fullName, email, password, phoneNumber, role });

    if (!fullName || !email || !password || !phoneNumber || !role) {
      return res.status(400).json({
        message: "Please enter all creds ",
        success: false,
      });
    }
    const file = req.file;
    console.log(file);
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists ",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    User.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      },
    });
    res.status(201).json({
      message: " Accound created successfully",
      success: true,
    });
  } catch (error) {
    console.log(`Error while registering user ${error}`);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Please fill all creds",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Password do not match",
        success: false,
      });
    }

    if (role !== user.role) {
      return res.status(400).json({
        message: "User doesn't exists with current role",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullName}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(`Some went wrong while loggin in user ${error}`);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", " ", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (e) {
    console.log(`Error while logging out`);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;

    const file = req.file;
    console.log(file);

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id;

    let user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(400).json({
        message: "User not found ",
        success: false,
      });
    }
    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skillsArray) user.profile.skills = skillsArray;
    if (file) user.profile.resume = file.filename;

    if (file) {
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      if (cloudResponse) {
        user.profile.resume = cloudResponse.secure_url;
        user.profile.resumeOriginName = file.originalname;
      }
    }
    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile updated ",
      user,
      success: true,
    });
  } catch (e) {
    console.log(` error while updating user info ${e.message}`);
  }
};

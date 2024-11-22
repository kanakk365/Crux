import React, { useEffect, useRef, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { ScInput } from "../ui/scInput";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import store from "@/store/store";
import { setLoading } from "@/store/Slice/authSlice";
import { Loader2 } from "lucide-react";

function Signup() {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const signupRef = useRef();


function focusOnSignup(){
signupRef.current.focus()
  }

  function changeEventHandler(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function changeFileHandler(e) {
    setInput({ ...input, file: e.target.files?.[0] });
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (e) {
      console.log(`Error while registering user ${e}`);
      toast.error(e.response.data.message);
      focusOnSignup()
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  return (
    <div>
      <Navbar />
      <div className="flex mx-auto items-center justify-center max-w-7xl px-4 sm:px-8">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-3/4 md:w-1/2 flex flex-col gap-2 border border-gray-200 rounded-md px-4 sm:px-8 py-4 sm:my-10 my-8"
        >
          <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
            Sign Up
          </h1>

          <div>
            <Label> Full Name</Label>
            <Input
              ref={signupRef}
              value={input.fullName}
              onChange={changeEventHandler}
              type="text"
              name="fullName"
              placeholder="Enter your name"
              className="w-full"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              value={input.email}
              onChange={changeEventHandler}
              type="email"
              name="email"
              placeholder="kain243@gmail.com"
              className="w-full"
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              value={input.phoneNumber}
              onChange={changeEventHandler}
              type="text"
              name="phoneNumber"
              placeholder="8080808080"
              className="w-full"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              value={input.password}
              onChange={changeEventHandler}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <RadioGroup className="flex items-center gap-2 sm:gap-4 my-3 sm:my-5">
                <div className="flex items-center space-x-2">
                  <ScInput
                    onChange={changeEventHandler}
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer shadow-none h-10 focus-visible:ring-0"
                  />
                  <Label htmlFor="r1">Jobseeker 
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <ScInput
                    onChange={changeEventHandler}
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="!bg-transparent cursor-pointer shadow-none focus-visible:ring-0"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
                <Label className="font-semibold">Profile Image</Label>
                <Input
                  onChange={changeFileHandler}
                  accept="image/*"
                  type="file"
                  className="cursor-pointer w-full sm:w-56"
                />
              </div>
            </div>

            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </Button>
            ) : (
              <Button type="submit" className="w-full my-4">
                Signup
              </Button>
            )}
          </div>
          <span className="text-center text-sm">
            Already have an account?{" "}
            <Link to={"/login"}>
              <Button
                className="px-1 font-semibold text-blue-600"
                variant="link"
              >
                Login
              </Button>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;

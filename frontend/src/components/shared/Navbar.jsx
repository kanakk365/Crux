import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ShimmerButton from "../ui/shimmer-button";
import ShinyButton from "../ui/shiny-button";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/store/Slice/authSlice";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";
import { toast } from "sonner";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.auth);
  
  const logoutHandler = async (event) => {
    event.stopPropagation()
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/logout`, { withCredentials: true });

      
      if (res.data.success) {
        console.log("done")
        dispatch(logoutUser(null));
        toast.success(res.data.message);
        navigate("/");  
      }
  
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred while logging out");
    }
  };
  


  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mx-auto max-w-7xl h-16 pt-2">
        <div>
          <Link to={"/"}>
            <h1 className="text-3xl font-semibold cursor-pointer">Crux</h1>
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex items-center font-medium text-lg gap-10">
            <Link to={"/"}>
              <li className="text-gray-600 hover:text-black duration-500 hover:text-xl cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"/jobs"}>
              <li className="text-gray-600 hover:text-black duration-500 hover:text-xl cursor-pointer">
                Jobs
              </li>
            </Link>
            <Link to={"/browse"}>
              <li className="text-gray-600 hover:text-black duration-500 hover:text-xl cursor-pointer">
                Browse
              </li>
            </Link>
          </ul>
          <div>
            {user ? (
              <Popover className="z-99 bg-white">
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-72 border border-gray-100 p-3 rounded-md shadow-lg pt-6 mt-1 ">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 space-y-2 items-center">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src={user?.profile?.profilePhoto}
                          alt="@shadcn"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Kanak</h4>
                        <p className="text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2 text-gray-600 gap-3">
                      <div className="flex  w-fit items-center cursor-pointer text-base">
                        {" "}
                        <User2 />
                        <Link to={"/profile"}>
                          <Button variant="link">View Profile</Button>
                        </Link>
                      </div>
                      <div className="flex  w-fit items-center cursor-pointer">
                        {" "}
                        <LogOut />{" "}
                        <Button className="z-99" variant="link" onClick={logoutHandler}>
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex items-center gap-2">
                <Link to={"/login"}>
                  <ShinyButton>Login</ShinyButton>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

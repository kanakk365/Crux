import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from "../../ui/sidebar";
import classNames from "classnames"; // If you don't have 'classnames' library installed, run npm install classnames
import { useDispatch, useSelector } from "react-redux";
import store from "@/store/store";
import { toast } from "sonner";
import axios from "axios";
import { COMPANY_API_ENDPOINT, USER_API_ENDPOINT } from "../../utils/constants";
import { logoutUser } from "@/store/Slice/authSlice";
import { Button } from "../../ui/button";
import { ScInput } from "../../ui/scInput";
import CompaniesTab from "../CompaniesTab";
import { Label } from "@/components/ui/label";

export function SidebarDemo() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const name = user.fullName;
  const navigate = useNavigate();

  const logoutHandler = async (event) => {
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        console.log("done");
        dispatch(logoutUser(null));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "An error occurred while logging out"
      );
    }
  };

  const links = [
    {
      label: "Companies",
      href: "/admin/companies",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Jobs",
      href: "/admin/jobs",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      onClick: logoutHandler,
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={classNames(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[100vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: name,
                href: "#",
                icon: (
                  <img
                    src={user?.profile?.profilePhoto}
                    alt="Avatar"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre text-xl"
      >
        Crux
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const  [companyName , setCompanyName]= useState()
  const registerNewCompany= async()=>{
    try {
      const res = await axios.post(`${COMPANY_API_ENDPOINT}/register` , {companyName} , {
        headers:{
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      if(res.data?.success){
        toast.success(res.data.message)
        const companyId= res?.data?.company?._id
        navigate(`/admin/companies/${companyId}`)
      }
      console.log(res)
    } catch (error) {
      
    }
  }
  return (
    <div className="flex flex-1">
      <div className=" p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="m-20 p-10">
          <div className="flex flex-col gap-2 mb-5">
            <h1 className="text-2xl font-semibold">Your Company Name</h1>
            <p className="text-gray-500">
              What would you like to give your company name? You can change this
              later
            </p>
          </div>
          <Label className="text-base">Company Name</Label>
          <ScInput
            type="text"
            className="my-2 "
            placeholder="Google, Chat gpt..."
            onChange={(e)=>setCompanyName(e.target.value)}
          />
          <div className="flex gap-5 my-10 ">
            <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
            <Button onClick={registerNewCompany}>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function AdminSidebar() {
  return (
    <div>
      <SidebarDemo />
    </div>
  );
}

export default AdminSidebar;

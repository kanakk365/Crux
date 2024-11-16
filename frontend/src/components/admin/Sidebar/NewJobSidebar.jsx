import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from "../../ui/sidebar";
import classNames from "classnames"; 
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { COMPANY_API_ENDPOINT, USER_API_ENDPOINT } from "../../utils/constants";
import { Button } from "../../ui/button";
import { ScInput } from "../../ui/scInput";
import CompaniesTab from "../CompaniesTab";
import { ArrowLeft, Loader2 } from "lucide-react";

import { Label } from "@/components/ui/label.jsx";
import { logoutUser } from "../../../store/Slice/authSlice";
import useGetSingleCompany from "@/hooks/useGetSingleCompany";

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
  const params = useParams();
  console.log("here")
  useGetSingleCompany(params.id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      console.log(input);
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_ENDPOINT}/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (e) {
      console.log(e);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="max-w-xl mx-auto my-20">
          <form onSubmit={submitHandler}>
            <div className="flex items-center gap-5 p-8">
              <Button
                onClick={() => navigate("/admin/companies")}
                variant="outline"
                className="flex items-center gap-2 text-gray-500 font-semibold"
              >
                <ArrowLeft />
                <span>Back</span>
              </Button>
              <h1 className="font-bold text-xl">Company Setup</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Company Name</Label>
                <ScInput
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Description</Label>
                <ScInput
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Website</Label>
                <ScInput
                  type="text"
                  name="website"
                  value={input.website}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Location</Label>
                <ScInput
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Logo</Label>
                <ScInput
                  type="file"
                  accept="image/*"
                  onChange={changeFileHandler}
                />
              </div>
            </div>
            {loading ? (
              <Button className="w-full my-4">
                {" "}
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
              </Button>
            ) : (
              <Button type="submit" className="w-full my-4">
                Update
              </Button>
            )}
          </form>
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

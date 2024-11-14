import React, { useEffect } from "react";
import AdminSidebar from "./Sidebar/AdminSidebar";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setAllCompanies } from "@/store/Slice/companySlice";
import { COMPANY_API_ENDPOINT } from "../utils/constants";
import axios from "axios";

function SeeCompanies() {
  
  console.log("SeeCompanies component rendered");

 useGetAllCompanies()

  return (
    <div>
      <AdminSidebar />
    </div>
  );
}

export default SeeCompanies;

import { USER_API_ENDPOINT } from "@/components/utils/constants";
import { setSingleCompany } from "@/store/Slice/companySlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function useGetSingleCompany(companyId) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/get/${companyId}`);
        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
        }
      } catch (e) {
        console.log(e)
      }
    };
    fetchCompany()
  }, [companyId , dispatch]);
}

export default useGetSingleCompany;

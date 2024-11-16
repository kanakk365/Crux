import { JOB_API_ENDPOINT } from '@/components/utils/constants'
import { setAllAdminJobs } from '@/store/Slice/jobSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function useGetAllAdminJobs() {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchJobs= async ()=>{
            try {
                const res = await axios.get(`${JOB_API_ENDPOINT}/getadminjobs`, {withCredentials: true})
                if(res.data.success){
                    dispatch(setAllAdminJobs(res.data.jobs))
                }
            } catch (e) {
                console.log("error while getting admin jobs")
            }
        }
        fetchJobs()
    },[])

 
    
}

export default useGetAllAdminJobs
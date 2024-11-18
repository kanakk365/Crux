

import { APPLICATION_API_ENDPOINT } from '@/components/utils/constants'
import { setAllAppliedJobs } from '@/store/Slice/applicantSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function useGetAllAppliedJobs() {
    const dispatch= useDispatch()
 useEffect(()=>{
    const fetchAppliedJobs= async ()=>{
        try {
            const res = await axios.get(`${APPLICATION_API_ENDPOINT}/get` , {withCredentials: true})
            if(res.data.success){
                dispatch(setAllAppliedJobs(res.data.application))
            }
        } catch (error) {
           console.log(`There is a error while getting all applied jobs ${error}`) 
        }
    }
    fetchAppliedJobs()
 },[])
}

export default useGetAllAppliedJobs
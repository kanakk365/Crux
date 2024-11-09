import { JOB_API_ENDPOINT } from '@/components/utils/constants'
import { setAllJobs } from '@/store/Slice/jobSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function useGetAllJobs() {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchAllJobs= async ()=>{
            try {
                const res= await axios.get(`${JOB_API_ENDPOINT}/get` , {withCredentials: true})
               
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs))
                }

            } catch (e) {
                console.log(`error while getting all jobs ${e}`)
            }
        }
        fetchAllJobs()
    },[ ])
}

export default useGetAllJobs
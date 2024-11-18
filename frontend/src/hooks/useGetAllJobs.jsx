import { JOB_API_ENDPOINT } from '@/components/utils/constants'
import { setAllJobs } from '@/store/Slice/jobSlice'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function useGetAllJobs() {
    const dispatch = useDispatch()
    const {searchQuery} = useSelector(store=> store.job)
    console.log("here")
    useEffect(()=>{
        const fetchAllJobs= async ()=>{
            try {
                const res= await axios.get(`${JOB_API_ENDPOINT}/get?keyword=${searchQuery}` , {withCredentials: true})
               
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
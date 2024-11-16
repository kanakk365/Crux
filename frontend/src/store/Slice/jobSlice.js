import { createSlice } from "@reduxjs/toolkit"


const jobSlice= createSlice({
    name: "job",
    initialState:{
        allJobs:[],
        singleJob:null,
        allAdminJobs:[],
        loading: false,
        searchAdminJobByText: ""
    },
    reducers:{
        setAllJobs: (state, action)=>{
            state.allJobs= action.payload
        },
        setSingleJob:(state , action)=>{
            state.singleJob= action.payload
        },
        setAllAdminJobs:(state , action)=>{
            state.allAdminJobs= action.payload
        },
        setSearchAdminJobByText:(state, action)=>{
            state.searchAdminJobByText=action.payload
        }
    }
})

export default jobSlice.reducer

export const{ setAllJobs ,setSingleJob ,setAllAdminJobs,setSearchAdminJobByText} = jobSlice.actions
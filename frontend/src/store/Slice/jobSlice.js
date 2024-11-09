import { createSlice } from "@reduxjs/toolkit"


const jobSlice= createSlice({
    name: "job",
    initialState:{
        allJobs:[],
        singleJob:null,
    },
    reducers:{
        setAllJobs: (state, action)=>{
            state.allJobs= action.payload
        },
        setSingleJob:(state , action)=>{
            state.singleJob= action.payload
        }
    }
})

export default jobSlice.reducer

export const{ setAllJobs ,setSingleJob} = jobSlice.actions
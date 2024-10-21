import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    loading:false,
    user: JSON.parse(localStorage.getItem('userData'))|| null

}

const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLoading:(state , action)=>{
            state.loading= action.payload
        },
        setAuthUser:(state , action)=>{
            state.user= action.payload
        }
    }
})

export const {setLoading , setAuthUser} = authSlice.actions;

export default authSlice.reducer
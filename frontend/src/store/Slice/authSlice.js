import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    loading:false,
    user:   null

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
        },
        logoutUser:(state, action)=>{
            state.user=null
            localStorage.removeItem("userData");
        }
    }
})

export const {setLoading , setAuthUser ,logoutUser} = authSlice.actions;

export default authSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice.js"

const store = configureStore({
    reducer:{
        auth : authSlice
    }
})

export default store
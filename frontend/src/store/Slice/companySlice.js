const { createSlice } = require("@reduxjs/toolkit");

const initialState= {
    singleCompany:null,
}

const companySlice= createSlice({
    name:"company",
    initialState,
    reducers:{
        setSingleCompany:(state, action)=>{
            state.singleCompany = action.payload
        }
    }
})

export const {setSingleCompany} = companySlice.actions
export default companySlice.reducer
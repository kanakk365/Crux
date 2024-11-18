import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  applicants: null,
  allAppliedJobs: []
};
const applicantSlice = createSlice({
  name: "applicant",
  initialState,
  reducers: {
    setAllApplicants: (state, actions) => {
      state.applicants = actions.payload;
    },
    setAllAppliedJobs:(state, action)=>{
      state.allAppliedJobs= action.payload
    }
  },
});

export const { setAllApplicants, setAllAppliedJobs } = applicantSlice.actions;
export default applicantSlice.reducer;

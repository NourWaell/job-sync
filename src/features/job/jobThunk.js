import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import { clearValues } from "./jobSlice";
import customFetch, { checkForUnauthorizedRequest } from "../../utils/axios";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const res = await customFetch.post("/jobs", job);
    thunkAPI.dispatch(clearValues());
    return res.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const res = await customFetch.delete(`/jobs/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return res.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const res = await customFetch.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return res.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

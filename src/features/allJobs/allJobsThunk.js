import customFetch, { checkForUnauthorizedRequest } from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, page, sort, searchStatus, searchType } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?status=${searchStatus}&page=${page}&sort=${sort}&jobType=${searchType}`;
  if (search) url += `&search=${search}`;

  try {
    const res = await customFetch(url);
    return res.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch("/jobs/stats");
    return res.data;
  } catch (error) {
    return checkForUnauthorizedRequest(error, thunkAPI);
  }
};

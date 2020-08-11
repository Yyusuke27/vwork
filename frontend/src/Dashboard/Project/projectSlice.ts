import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

const apiUrl = "http://localhost:5000/";
const token = localStorage.token;

export const fetchAsyncAllMyProjects = createAsyncThunk(
  "project/allMyProjects",
  async (workspace: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspace}/projects`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

interface projectState {
  projects: {
    _id: string;
    name: string;
    color: number;
    icon: number;
  }[];
}

const initialState: projectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncAllMyProjects.fulfilled, (state, action) => {
      state.projects = action.payload.data;
    });
    builder.addCase(fetchAsyncAllMyProjects.rejected, (state, action) => {});
  },
});

export const selectProjects = (state: RootState) => state.project.projects;

export default projectSlice.reducer;

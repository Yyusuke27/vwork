import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

import { toast } from "react-toastify";

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

export const fetchAsyncGetProject = createAsyncThunk(
  "project/project",
  async (id: string) => {
    const res = await axios.get(`${apiUrl}api/v1/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

export const fetchAsyncCreateProject = createAsyncThunk(
  "project/create",
  async (data: {
    workspace: string;
    projectData: { name: string; description: string };
  }) => {
    const res = await axios.post(
      `${apiUrl}api/v1/workspaces/${data.workspace}/projects`,
      data.projectData,
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
  project: {
    _id: string;
    name: string;
    color: number;
    icon: number;
    description: string;
    members: {
      active: boolean;
      email: string;
      name: string;
      registration: boolean;
      role: string;
      _id: string;
    }[];
    tasks: {
      _id: string;
      user: string;
      name: string;
      description: string;
      startDateAt: string;
      endDateAt: string;
      state: number;
      progress: number;
      priority: number;
      project: string | null;
      todaysTask: boolean;
    }[];
  };
}

const initialState: projectState = {
  projects: [],
  project: {
    _id: "",
    name: "",
    color: 0,
    icon: 0,
    description: "",
    members: [],
    tasks: [],
  },
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
    builder.addCase(fetchAsyncGetProject.fulfilled, (state, action) => {
      state.project = action.payload.data;
    });
    builder.addCase(fetchAsyncCreateProject.fulfilled, (state, action) => {
      state.projects = action.payload.data;
      toast.info("プロジェクトを追加しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  },
});

export const selectProjects = (state: RootState) => state.project.projects;
export const selectProject = (state: RootState) => state.project.project;

export default projectSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
const token = localStorage.token;

export const fetchAsyncGetWorkspaces = createAsyncThunk(
  "workspace/all",
  async () => {
    const res = await axios.get(`${apiUrl}api/v1/workspaces/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

export const fetchAsyncUpdateWorkspace = createAsyncThunk(
  "workspace/update",
  async (data: {
    workspace: string;
    bodyData: { name?: string; toOwner?: string; toMember?: string };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/workspaces/${data.workspace}`,
      data.bodyData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

interface workspaceState {
  workspaces: { _id: string; name: string }[];
}

const initialState: workspaceState = {
  workspaces: [],
};

const workspaceSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetWorkspaces.fulfilled, (state, action) => {
      state.workspaces = action.payload.data;
    });
    builder.addCase(fetchAsyncUpdateWorkspace.fulfilled, (state, action) => {
      toast.info("ワークスペース情報を更新しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncUpdateWorkspace.rejected, (state, action) => {
      toast.error("ワークスペース情報を更新できませんでした。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  },
});

export const selectWorkspaces = (state: RootState) =>
  state.workspace.workspaces;

export default workspaceSlice.reducer;

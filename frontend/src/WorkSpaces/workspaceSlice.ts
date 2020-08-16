import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

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
  },
});

export const selectWorkspaces = (state: RootState) =>
  state.workspace.workspaces;

export default workspaceSlice.reducer;

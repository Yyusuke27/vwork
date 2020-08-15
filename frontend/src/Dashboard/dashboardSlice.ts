import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface dashboardState {
  owner: boolean;
  workspace: string;
  selectedMembers: { _id: string; name: string }[];
}

const initialState: dashboardState = {
  owner: false,
  workspace: "",
  selectedMembers: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setWorkspace(state, action) {
      state.workspace = action.payload;
    },
    setSelectedMembers(state, action) {
      state.selectedMembers = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setWorkspace, setSelectedMembers } = dashboardSlice.actions;
export const selectNowWorkspace = (state: RootState) =>
  state.dashboard.workspace;
export const selectSelectedMembers = (state: RootState) =>
  state.dashboard.selectedMembers;

export default dashboardSlice.reducer;

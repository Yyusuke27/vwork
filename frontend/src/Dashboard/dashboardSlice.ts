import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authSlice } from "../Auth/authSlice";

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
  extraReducers: (builder) => {
    builder.addCase(authSlice.actions.setUser, (state, action) => {
      state.selectedMembers = [action.payload];
    });
  },
});

export const { setWorkspace, setSelectedMembers } = dashboardSlice.actions;
export const selectNowWorkspace = (state: RootState) =>
  state.dashboard.workspace;
export const selectSelectedMembers = (state: RootState) =>
  state.dashboard.selectedMembers;

export default dashboardSlice.reducer;

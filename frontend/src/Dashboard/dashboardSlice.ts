import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface dashboardState {
  owner: boolean;
  workspace: string;
}

const initialState: dashboardState = {
  owner: false,
  workspace: "string",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setWorkspace(state, action) {
      state.workspace = action.payload;
    },
  },
});

export const { setWorkspace } = dashboardSlice.actions;
export const selectNowWorkspace = (state: RootState) =>
  state.dashboard.workspace;

export default dashboardSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface appState {
  owner: boolean;
  workspace: string;
}

const initialState: appState = {
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
export const selectWorkspace = (state: RootState) => state.dashboard.workspace;

export default dashboardSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface appState {
  loading: boolean;
}

const initialState: appState = {
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { toggleLoading } = appSlice.actions;
export const selectLoader = (state: RootState) => state.app.loading;

export default appSlice.reducer;

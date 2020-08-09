import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const apiUrl = "http://localhost:5000/";
const token = localStorage.token;

export const fetchAsyncLogin = createAsyncThunk(
  "auth/login",
  async (auth: { email: string; password: string }) => {
    const res = await axios.post(`${apiUrl}api/v1/auth/login`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const fetchAsyncSignup = createAsyncThunk(
  "auth/signup",
  async (auth: { email: string; password: string }) => {
    const res = await axios.post(`${apiUrl}api/v1/auth/signup`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  }
);

export const fetchAsyncCurrentUser = createAsyncThunk(
  "auth/current",
  async () => {
    const res = await axios.get(`${apiUrl}api/v1/auth/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

interface AuthState {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    registration: boolean;
    role: string;
  };
}

const initialState: AuthState = {
  token: "",
  user: {
    id: "",
    name: "",
    email: "",
    registration: false,
    role: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      if (action.payload.token) {
        console.log("login success");
        // action.payload.workspaceCount > 1
        //   ? (window.location.href = "/workspaces")
        //   : (window.location.href = "/");
      }
    });
    builder.addCase(fetchAsyncCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
    });
    builder.addCase(fetchAsyncSignup.fulfilled, (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      if (action.payload.token) {
        console.log("Registration success");
        // action.payload.workspaceCount > 1
        //   ? (window.location.href = "/workspaces")
        //   : (window.location.href = "/");
      }
    });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;

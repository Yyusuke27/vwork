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
    // これを各データの処理まえに呼び出す
    const res = await axios.get(`${apiUrl}api/v1/auth/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

interface AuthState {
  token: number | string;
  user: {
    name: string;
    email: string;
    registration: boolean;
    role: string;
  };
  workspaceCount: number;
  workspace: string;
}

const initialState: AuthState = {
  token: "",
  user: {
    name: "",
    email: "",
    registration: false,
    role: "",
  },
  workspaceCount: 0,
  workspace: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setWorkspace(state, action) {
      state.workspace = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      if (action.payload.token) {
        console.log("login success");
        action.payload.workspaceCount > 1
          ? (window.location.href = "/workspaces")
          : (window.location.href = "/");
      }
    });
    builder.addCase(fetchAsyncCurrentUser.fulfilled, (state, action) => {
      state.token = localStorage.token;
      state.user = action.payload.data;
      state.workspaceCount = localStorage.wc;

      const path = window.location.pathname;
      if (path === "/auth/login" || path === "/auth/signup") {
        window.location.href = "/";
      }
    });
    builder.addCase(fetchAsyncCurrentUser.rejected, (state, action) => {
      const path = window.location.pathname;
      if (path !== "/auth/login" && path !== "/auth/signup") {
        window.location.href = "/auth/login";
      }
    });
    builder.addCase(fetchAsyncSignup.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      if (action.payload.token) {
        console.log("welcom");
        window.location.href = "/regist/welcome";
      }
    });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;

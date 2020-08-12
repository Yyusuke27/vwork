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

export const fetchAsyncLogout = createAsyncThunk("auth/logout", async () => {
  const res = await axios.get(`${apiUrl}api/v1/auth/logout`);
  return res.data;
});

export const fetchAsyncUpdateUser = createAsyncThunk(
  "auth/updateUser",
  async (data: {
    userId: string;
    postData: { lastAccessWorkspace: string };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/users/${data.userId}`,
      data.postData,
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

interface AuthState {
  token: number | string;
  user: {
    _id: string;
    name: string;
    email: string;
    registration: boolean;
    role: string;
    lastAccessWorkspace: string;
  };
  workspaceCount: number;
  workspace: { id: string; name: string };
  errorMessage: string;
  errorOpen: boolean;
}

const initialState: AuthState = {
  token: "",
  user: {
    _id: "",
    name: "",
    email: "",
    registration: false,
    role: "",
    lastAccessWorkspace: "",
  },
  workspaceCount: 0,
  workspace: { id: "", name: "" },
  errorMessage: "",
  errorOpen: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setErrorOpen(state, action) {
      state.errorOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.errorMessage = "";
      localStorage.setItem("token", action.payload.token);
      if (action.payload.token) {
        console.log("login success");
        action.payload.workspaceCount > 1
          ? (window.location.href = "/workspaces")
          : (window.location.href = "/");
      }
    });
    builder.addCase(fetchAsyncLogin.rejected, (state, action) => {
      let message = "認証情報が間違っています。";
      state.errorMessage = message;
      state.errorOpen = true;
    });
    builder.addCase(fetchAsyncCurrentUser.fulfilled, (state, action) => {
      state.errorMessage = "";
      state.token = localStorage.token;
      state.user = action.payload.data;
      state.workspace = action.payload.workspace;
      state.workspaceCount = localStorage.wc;
      localStorage.setItem(
        "workspace",
        action.payload.data.lastAccessWorkspace
      );

      const path = window.location.pathname;
      if (path === "/auth/login" || path === "/auth/signup") {
        window.location.href = "/";
      }

      //　登録済のユーザーは登録ステップの画面にランディングできない
      if (state.user.registration && path.includes("/regist")) {
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
      state.errorMessage = "";
      localStorage.setItem("token", action.payload.token);
      if (action.payload.token) {
        console.log("welcom");
        window.location.href = "/regist/welcome";
      }
    });
    builder.addCase(fetchAsyncSignup.rejected, (state, action) => {
      let message = "登録に失敗しました。";
      state.errorMessage = message;
      state.errorOpen = true;
    });
    builder.addCase(fetchAsyncLogout.fulfilled, (state, action) => {
      localStorage.clear();
      window.location.href = "/auth/login";
    });
    builder.addCase(fetchAsyncUpdateUser.fulfilled, (state, action) => {});
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectWorkspace = (state: RootState) =>
  state.auth.user.lastAccessWorkspace;
export const selectUserRegistration = (state: RootState) =>
  state.auth.user.registration;
export const selectWorkspaceName = (state: RootState) => state.auth.workspace;
export const selectErrorMessage = (state: RootState) => state.auth.errorMessage;
export const selectErrorOpen = (state: RootState) => state.auth.errorOpen;

export const { setErrorOpen } = authSlice.actions;

export default authSlice.reducer;

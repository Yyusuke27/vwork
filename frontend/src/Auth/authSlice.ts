import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { accessToken, uid, client, expiry} from "../shared/util/auth"

import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAsyncLogin = createAsyncThunk(
  "auth/login",
  async (auth: { email: string; password: string }) => {
    const res = await axios.post(`${apiUrl}api/v1/auth/sign_in`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.headers;
  }
);

export const fetchAsyncSignup = createAsyncThunk(
  "auth/signup",
  async (auth: { email: string; password: string; password_confirmation: string }) => {
    const res = await axios.post(`${apiUrl}api/v1/auth`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.headers;
  }
);

export const fetchAsyncCurrentUser = createAsyncThunk(
  "auth/current",
  async (workspacePathId: string) => {
    // これを各データの処理まえに呼び出す
    const res = await axios.get(`${apiUrl}api/v1/users/current`, {
      params: {
        workspacePathId
      },
      headers: {
        "token-type": "Bearer",
        "access-token": accessToken,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      },
    });

    return res.data;
  }
);

export const fetchAsyncLogout = createAsyncThunk("auth/logout", async () => {
  const res = await axios.delete(`${apiUrl}api/v1/auth/sign_out`,{
    headers: {
      "token-type": "Bearer",
      "access-token": accessToken,
      "client": client,
      "expiry": expiry,
      "uid": uid,
    },
  }
  );
  return res.data;
});

export const fetchAsyncUpdateUser = createAsyncThunk(
  "auth/updateUser",
  async (data: {
    userId: string;
    postData: { currentWorkspace: string };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/users/${data.userId}`,
      data.postData,
      {
        headers: {
          "Content-Type": "application/json",
          "token-type": "Bearer",
          "access-token": accessToken,
          "client": client,
          "expiry": expiry,
          "uid": uid,
        },
      }
    );
    return res.data;
  }
);

export const fetchAsyncForgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email: string) => {
    const res = await axios.post(
      `${apiUrl}api/v1/auth/forgotpassword`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  }
);

export const fetchAsyncResetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (auth: { resetToken: string; password: string }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/auth/resetpassword/${auth.resetToken}`,
      { password: auth.password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  }
);

interface AuthState {
  header: { uid: string, client: string, accessToken: string }
  token: number | string;
  user: {
    id: string;
    name: string;
    email: string;
    registration: boolean;
    role: string;
  };
  current_workspace: string;
  workspaceCount: number;
  workspace: { id: string; name: string; owners: string[] };
  owner: boolean;
  errorMessage: string;
  errorOpen: boolean;
  profile: { id: string; position: string };
  unread: number;
}

const initialState: AuthState = {
  header: { uid: "", client: "", accessToken: "" },
  token: "",
  user: {
    id: "",
    name: "",
    email: "",
    registration: false,
    role: "",
  },
  current_workspace: "",
  workspaceCount: 0,
  workspace: { id: "", name: "", owners: [] },
  owner: false,
  errorMessage: "",
  errorOpen: false,
  profile: {
    id: "",
    position: "",
  },
  unread: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setErrorOpen(state, action) {
      state.errorOpen = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setHeader(state, action) {
      state.header = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.errorMessage = "";

      const accessToken = action.payload['access-token']
      const uid = action.payload['uid']
      const client = action.payload['client']
      const expiry = action.payload['expiry']

      localStorage.setItem(
        'vwork',
        JSON.stringify({
          accessToken: accessToken,
          uid: uid,
          client: client,
          expiry: expiry
        })
      );

      window.location.href = "/workspaces"
    });
    builder.addCase(fetchAsyncLogin.rejected, (state, action) => {
      let message = "認証情報が間違っています。";
      state.errorMessage = message;
      state.errorOpen = true;
    });
    builder.addCase(fetchAsyncCurrentUser.fulfilled, (state, action) => {
      state.errorMessage = "";

      state.user = action.payload.user;
      state.unread = action.payload.unread;

      state.profile = action.payload.profile;
      state.owner = action.payload.owner;

      const path = window.location.pathname;

      if (!state.user.registration && !path.includes("/register")) {
        window.location.href = "/register/welcome";
      } else {
        if (path === "/auth/login" || path === "/auth/signup") {
          window.location.href = "/workspaces";
        }

        // 登録済のユーザーは登録ステップの画面にランディングできない
        if (
          state.user.registration &&
          path.includes("/regist") &&
          !path.includes("/invitee")
        ) {
          window.location.href = "/";
        }
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

      const accessToken = action.payload['access-token']
      const uid = action.payload['uid']
      const client = action.payload['client']
      const expiry = action.payload['expiry']

      localStorage.setItem(
        'vwork',
        JSON.stringify({
          accessToken: accessToken,
          uid: uid,
          client: client,
          expiry: expiry
        })
      );

      window.location.href = "/register/welcome"
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
    builder.addCase(fetchAsyncForgotPassword.fulfilled, (state, action) => {
      window.location.href = "/auth/forgot/complete";
    });
    builder.addCase(fetchAsyncForgotPassword.rejected, (state, action) => {
      toast.error("再設定の申請に失敗しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncResetPassword.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      if (action.payload.token) {
        console.log("login success");
        action.payload.workspaceCount > 1
          ? (window.location.href = "/workspaces")
          : (window.location.href = "/");
      }
    });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectHeader = (state: RootState) => state.auth.header;
export const selectProfile = (state: RootState) => state.auth.profile;
export const selectWorkspace = (state: RootState) =>
  state.auth.current_workspace;
export const selectWorkspaceName = (state: RootState) => state.auth.workspace;
export const selectErrorMessage = (state: RootState) => state.auth.errorMessage;
export const selectErrorOpen = (state: RootState) => state.auth.errorOpen;
export const selectIsWorkspaceOwner = (state: RootState) => state.auth.owner;
export const selectUnreadNotification = (state: RootState) => state.auth.unread;
export const selectWorkspaceOwners = (state: RootState) =>
  state.auth.workspace.owners;

export const { setErrorOpen, setHeader } = authSlice.actions;

export default authSlice.reducer;

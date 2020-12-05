import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { accessToken, uid, client, expiry} from "../shared/util/auth"
import { workspacePathId } from "../shared/util/workspacePathId"

import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
interface RegisterType {
  workspace: {
    name: string;
  };
  userProfile: {
    name: string;
    position: string;
  };
  project: {
    name: string;
    description: string;
  };
  invitations: {
    name: string;
    email: string;
  }[];
}

interface RegisterInviteeType {
  user_profile: {
    name: string;
    position: string;
  };
}

interface InvitationTokenType {
  invitation: {
    invitationToken: string;
  };
}

export const fetchAsyncRegisterUser = createAsyncThunk(
  "register/user",
  async (register: RegisterType) => {
    const res = await axios.post(`${apiUrl}api/v1/workspaces/`, register, {
      headers: {
        "Content-Type": "application/json",
        "token-type": "Bearer",
        "access-token": accessToken,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      },
    });

    if (res.headers['access-token']){
      localStorage.setItem(
        'vwork',
        JSON.stringify({
          accessToken: res.headers['access-token'],
          uid: res.headers['uid'],
          client: res.headers['client'],
          expiry: res.headers['expiry']
        })
      );
    }
    return res.data;
  }
);

export const fetchAsyncInvitation = createAsyncThunk(
  "register/invitation",
  async (invitationToken: InvitationTokenType) => {

    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/invitations/auth/${invitationToken}`
    );
    return res.data;
  }
);

export const fetchAsyncRegisterInvitee = createAsyncThunk(
  "register/invitee",
  async (register: RegisterInviteeType) => {
    const res = await axios.post(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/invitations/register/`,
      register,
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

export const fetchAsyncInviteeSignIn = createAsyncThunk(
  "register/inviteeLogin",
  async (auth: { email: string; password: string }) => {
    const res = await axios.post(`${apiUrl}api/v1/auth/sign_in`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.headers;
  }
);

export const fetchAsyncInviteeSignup = createAsyncThunk(
  "register/inviteeSignup",
  async (auth: { email: string; password: string; password_confirmation: string }) => {
    const res = await axios.post(`${apiUrl}api/v1/auth`, auth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.headers;
  }
);

interface RegisterState {
  register: {
    workspace: {
      name: string;
    };
    userProfile: {
      name: string;
      position: string;
    };
    project: {
      name: string;
      description: string;
    };
    invitations: {
      name: string;
      email: string;
    }[];
  };
  invite: {
    auth: {
      workspaceName: string;
      email: string;
      name: string;
      isRegistered: boolean;
    },
    token: string;
    user: {
      email: string;
      password: string;
      registration: boolean;
    };
    userProfile: {
      name: string;
      position: string;
    };
  };
}

const initialState: RegisterState = {
  register: {
    workspace: {
      name: "",
    },
    userProfile: {
      name: "",
      position: "",
    },
    project: {
      name: "",
      description: "",
    },
    invitations: [],
  },
  invite: {
    auth: {
      workspaceName: "",
      email: "",
      name: "",
      isRegistered: false,
    },
    token: "",
    user: {
      email: "",
      password: "",
      registration: false,
    },
    userProfile: {
      name: "",
      position: "",
    }
  },
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    editWorkspace(state, action) {
      state.register.workspace.name = action.payload;
    },
    editUserProfile(state, action) {
      state.register.userProfile = action.payload;
    },
    editProject(state, action) {
      state.register.project = action.payload;
    },
    editInvitations(state, action) {
      state.register.invitations = action.payload;
    },
    editInviteToken(state, action) {
      state.invite.token = action.payload;
    },
    editInviteUser(state, action) {
      state.invite.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncRegisterUser.fulfilled, (state, action) => {
      const workspacePathId = action.payload.workspace.path_id
      if (workspacePathId) {
        window.location.href = `/${workspacePathId}`;
      } else {
        window.location.href = "/register/step/1";
      }
    });
    builder.addCase(fetchAsyncRegisterUser.rejected, (state, action) => {
      window.location.href = "/register/step/1";
    });
    builder.addCase(fetchAsyncInvitation.fulfilled, (state, action) => {
      state.invite.auth.workspaceName = action.payload.workspace_name;
      state.invite.auth.email = action.payload.email;
      state.invite.auth.name = action.payload.name;
      state.invite.auth.isRegistered = action.payload.isRegistered;
    });
    builder.addCase(fetchAsyncInvitation.rejected, (state, action) => {
      localStorage.clear();
      window.location.href = "/auth/signup";
    });
    builder.addCase(fetchAsyncRegisterInvitee.fulfilled, (state, action) => {
      if (workspacePathId) {
        window.location.href = `/${workspacePathId}`;
      } else {
        window.location.href = `/${workspacePathId}/register/invitee/step1`;
      }
    });
    builder.addCase(fetchAsyncRegisterInvitee.rejected, (state, action) => {
      window.location.href = `/${workspacePathId}/register/invitee/step1`;
    });
    builder.addCase(fetchAsyncInviteeSignIn.fulfilled, (state, action) => {
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

      const inviteeToken = localStorage.Itoken;

      window.location.href = `/${workspacePathId}/register/invitee/welcome/?${inviteeToken}`
    });
    builder.addCase(fetchAsyncInviteeSignIn.rejected, (state, action) => {
      toast.error("認証情報が間違っています。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncInviteeSignup.fulfilled, (state, action) => {
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

      const inviteeToken = localStorage.Itoken;
      
      window.location.href = `/${workspacePathId}/register/invitee/welcome/?${inviteeToken}`
    });
    builder.addCase(fetchAsyncInviteeSignup.rejected, (state, action) => {
      toast.error("登録に失敗しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  },
});

export const {
  editWorkspace,
  editInvitations,
  editUserProfile,
  editInviteUser,
} = registerSlice.actions;

export const selectRegister = (state: RootState) => state.register.register;
export const selectInviteUser = (state: RootState) => state.register.invite.user;
export const selectInviteAuth = (state: RootState) => state.register.invite.auth;
export const selectInviteUserMail = (state: RootState) =>
  state.register.invite.user.email;
export const selectInviteUserName = (state: RootState) =>
  state.register.invite.auth.name;

export default registerSlice.reducer;

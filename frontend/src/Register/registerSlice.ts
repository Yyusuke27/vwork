import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

let accessToken = ""
let uid = ""
let client = ""
let expiry = ""
let storeJsonData = localStorage.getItem('vwork')
if (storeJsonData) {
  const storedData = JSON.parse(storeJsonData);
  accessToken = storedData.accessToken;
  uid = storedData.uid;
  client = storedData.client;
  expiry = storedData.expiry;
}

const inviteeToken = localStorage.Itoken;

interface RegisterType {
  workspace: {
    name: string;
  };
  user: {
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
  token: string;
  user: {
    name: string;
    email: string;
    position: string;
    password: string;
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
  async (queryToken: string) => {
    if (!queryToken) {
      queryToken = inviteeToken;
    }
    const res = await axios.get(
      `${apiUrl}api/v1/registration/invitee/${queryToken}`
    );
    return res.data;
  }
);

export const fetchAsyncRegisterInvitee = createAsyncThunk(
  "register/invitee",
  async (register: RegisterInviteeType) => {
    const res = await axios.post(
      `${apiUrl}api/v1/registration/invitee/`,
      register,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  }
);

interface RegisterState {
  register: {
    workspace: {
      name: string;
    };
    user: {
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
    token: string;
    workspace: string;
    user: {
      name: string;
      email: string;
      position: string;
      password: string;
      registration: boolean;
    };
  };
}

const initialState: RegisterState = {
  register: {
    workspace: {
      name: "",
    },
    user: {
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
    token: "",
    workspace: "",
    user: {
      name: "",
      email: "",
      position: "",
      password: "",
      registration: false,
    },
  },
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    editWorkspace(state, action) {
      state.register.workspace.name = action.payload;
    },
    editUser(state, action) {
      state.register.user = action.payload;
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
      console.log(action.payload);
      
      // window.location.href = "/";
    });
    builder.addCase(fetchAsyncRegisterUser.rejected, (state, action) => {
      console.log(action.payload);
      // window.location.href = "/register/step/1";
    });
    builder.addCase(fetchAsyncInvitation.fulfilled, (state, action) => {
      state.invite.workspace = action.payload.workspace;
      state.invite.user = action.payload.data;
    });
    builder.addCase(fetchAsyncInvitation.rejected, (state, action) => {
      window.location.href = "/auth/signup";
    });
    builder.addCase(fetchAsyncRegisterInvitee.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      window.location.href = "/";
    });
    builder.addCase(fetchAsyncRegisterInvitee.rejected, (state, action) => {
      window.location.href = "/register/invitee/step1";
    });
  },
});

export const {
  editWorkspace,
  editInvitations,
  editUser,
  editInviteUser,
} = registerSlice.actions;

export const selectRegister = (state: RootState) => state.register.register;
export const selectInviteUser = (state: RootState) => state.register.invite.user;
export const selectInviteUserMail = (state: RootState) =>
  state.register.invite.user.email;
export const selectInviteUserName = (state: RootState) =>
  state.register.invite.user.name;

export default registerSlice.reducer;

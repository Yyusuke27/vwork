import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
const token = localStorage.token;
const inviteeToken = localStorage.Itoken;

interface RegistType {
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

interface RegistInviteeType {
  token: string;
  user: {
    name: string;
    email: string;
    position: string;
    password: string;
  };
}

export const fetchAsyncRegistUser = createAsyncThunk(
  "regist/user",
  async (regist: RegistType) => {
    const res = await axios.post(`${apiUrl}api/v1/registration`, regist, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

export const fetchAsyncInvitation = createAsyncThunk(
  "regist/invitation",
  async (queryToken: string) => {
    console.log(queryToken);
    if (!queryToken) {
      queryToken = inviteeToken;
    }
    const res = await axios.get(
      `${apiUrl}api/v1/registration/invitee/${queryToken}`
    );
    return res.data;
  }
);

export const fetchAsyncRegistInvitee = createAsyncThunk(
  "regist/invitee",
  async (regist: RegistInviteeType) => {
    const res = await axios.post(
      `${apiUrl}api/v1/registration/invitee/`,
      regist,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  }
);

interface RegistState {
  regist: {
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

const initialState: RegistState = {
  regist: {
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

const registSlice = createSlice({
  name: "regist",
  initialState,
  reducers: {
    editWorkspace(state, action) {
      state.regist.workspace.name = action.payload;
    },
    editUser(state, action) {
      state.regist.user = action.payload;
    },
    editProject(state, action) {
      state.regist.project = action.payload;
    },
    editInvitations(state, action) {
      state.regist.invitations = action.payload;
    },
    editInviteToken(state, action) {
      state.invite.token = action.payload;
    },
    editInviteUser(state, action) {
      state.invite.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncRegistUser.fulfilled, (state, action) => {
      window.location.href = "/";
    });
    builder.addCase(fetchAsyncRegistUser.rejected, (state, action) => {
      window.location.href = "/regist/step/1";
    });
    builder.addCase(fetchAsyncInvitation.fulfilled, (state, action) => {
      state.invite.workspace = action.payload.workspace;
      state.invite.user = action.payload.data;
    });
    builder.addCase(fetchAsyncInvitation.rejected, (state, action) => {
      window.location.href = "/auth/signup";
    });
    builder.addCase(fetchAsyncRegistInvitee.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      window.location.href = "/";
    });
    builder.addCase(fetchAsyncRegistInvitee.rejected, (state, action) => {
      window.location.href = "/regist/invitee/step1";
    });
  },
});

export const {
  editWorkspace,
  editInvitations,
  editProject,
  editUser,
  editInviteToken,
  editInviteUser,
} = registSlice.actions;

export const selectRegist = (state: RootState) => state.regist.regist;
export const selectInviteUser = (state: RootState) => state.regist.invite.user;
export const selectInviteUserMail = (state: RootState) =>
  state.regist.invite.user.email;
export const selectInviteUserName = (state: RootState) =>
  state.regist.invite.user.name;

export default registSlice.reducer;

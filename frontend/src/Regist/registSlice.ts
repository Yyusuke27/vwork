import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const apiUrl = "http://localhost:5000/";
const token = localStorage.token;

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
    user: {
      name: string;
      email: string;
      position: string;
      password: string;
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
    user: {
      name: "",
      email: "",
      position: "",
      password: "",
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncRegistUser.fulfilled, (state, action) => {
      window.location.href = "/regist/step/5";
    });
    builder.addCase(fetchAsyncRegistUser.rejected, (state, action) => {
      window.location.href = "/regist/step/1";
    });
  },
});

export const {
  editWorkspace,
  editInvitations,
  editProject,
  editUser,
} = registSlice.actions;

export const selectRegist = (state: RootState) => state.regist.regist;

export default registSlice.reducer;

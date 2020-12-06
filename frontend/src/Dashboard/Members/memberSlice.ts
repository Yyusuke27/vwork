import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { accessToken, uid, client, expiry} from "../../shared/util/auth"
import { workspacePathId } from "../../shared/util/workspacePathId"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

// メンバー管理のメンバー一覧
export const fetchAsyncGetMembers = createAsyncThunk(
  "member/all",
  async () => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/members`,
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

// メンバー管理のメンバー詳細(ユーザー選択後の名前、email、役職の取得)
// userとprofile情報を返す
export const fetchAsyncGetMember = createAsyncThunk(
  "member/single",
  async (id: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/members/${id}`,
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

interface memberState {
  members: {
    name: string;
    email: string;
    id: string;
  }[];
  member: {
    user: { name: string; email: string };
    profile: { position: string };
  };
}

const initialState: memberState = {
  members: [],
  member: {
    user: { name: "", email: "" },
    profile: { position: "" },
  },
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMembers(state, action) {
      state.members = action.payload;
    },
    setMember(state, action) {
      state.member = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetMembers.fulfilled, (state, action) => {
      state.members = action.payload.members;
    });
    builder.addCase(fetchAsyncGetMembers.rejected, (state, action) => {
      window.location.href = "/";
    });
    builder.addCase(fetchAsyncGetMember.fulfilled, (state, action) => {
      state.member.user = action.payload.user;
      state.member.profile = action.payload.profile;
    });
    builder.addCase(fetchAsyncGetMember.rejected, (state, action) => {
      window.location.href = "/";
    });
  },
});

export const selectMembers = (state: RootState) => state.member.members;
export const selectMember = (state: RootState) => state.member.member;

export default memberSlice.reducer;

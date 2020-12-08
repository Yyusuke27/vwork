import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { accessToken, uid, client, expiry} from "../shared/util/auth"
import { workspacePathId } from "../shared/util/workspacePathId"

import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAsyncInviteMember = createAsyncThunk(
  "dashboard/invite",
  async (invitations: { name: string; email: string }[]) => {
    const res = await axios.post(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/invitations`,
      { invitations },
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

export const fetchAsyncUpdateUserProfile = createAsyncThunk(
  "dashboard/updateProfile",
  async (data: {
    userId: string;
    bodyData: { name?: string; email?: string; position?: string };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/users/${data.userId}`,
      data.bodyData,
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

interface dashboardState {
  owner: boolean;
  workspace: string;
  selectedMembers: { id: string; name: string }[];
}

const initialState: dashboardState = {
  owner: false,
  workspace: "",
  selectedMembers: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setWorkspace(state, action) {
      state.workspace = action.payload;
    },
    setSelectedMembers(state, action) {
      state.selectedMembers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncInviteMember.fulfilled, (state, action) => {
      toast.info("招待メールを送信しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncInviteMember.rejected, (state, action) => {
      toast.error("招待に失敗しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncUpdateUserProfile.fulfilled, (state, action) => {
      toast.info("プロフィールを更新しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncUpdateUserProfile.rejected, (state, action) => {
      toast.error("プロフィールの更新に失敗しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  },
});

export const { setSelectedMembers } = dashboardSlice.actions;
export const selectSelectedMembers = (state: RootState) =>
  state.dashboard.selectedMembers;

export default dashboardSlice.reducer;

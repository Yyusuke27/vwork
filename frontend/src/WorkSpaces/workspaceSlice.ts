import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { accessToken, uid, client, expiry} from "../shared/util/auth"
import { toast } from "react-toastify";
import axios from "axios";
import { RootState } from "../store";
import { workspacePathId } from "../shared/util/workspacePathId"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAsyncGetWorkspaces = createAsyncThunk(
  "workspace/all",
  async () => {
    const res = await axios.get(`${apiUrl}api/v1/workspaces/`, {
      headers: {
        "Content-Type": "application/json",
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

export const fetchAsyncUpdateWorkspace = createAsyncThunk(
  "workspace/update",
  async (bodyData: { name?: string; toOwner?: string; toMember?: string }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/workspaces/${workspacePathId}`,
      bodyData,
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

interface workspaceState {
  workspaces: { path_id: string; name: string }[];
}

const initialState: workspaceState = {
  workspaces: [],
};

const workspaceSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetWorkspaces.fulfilled, (state, action) => {
      state.workspaces = action.payload.workspaces;
    });
    builder.addCase(fetchAsyncUpdateWorkspace.fulfilled, (state, action) => {
      if (action.payload.success) {
        toast.info("ワークスペース情報を更新しました。", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(action.payload.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });
    builder.addCase(fetchAsyncUpdateWorkspace.rejected, (state, action) => {
      toast.error("ワークスペース情報を更新できませんでした。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  },
});

export const selectWorkspaces = (state: RootState) =>
  state.workspace.workspaces;

export default workspaceSlice.reducer;

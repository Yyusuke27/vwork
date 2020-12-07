import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "axios";
import { accessToken, uid, client, expiry} from "../../shared/util/auth"
import { workspacePathId } from "../../shared/util/workspacePathId"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAsyncGetNotifications = createAsyncThunk(
  "notification/getAll",
  async () => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/notifications`,
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

export const fetchAsyncUpdateNotification = createAsyncThunk(
  "notification/updateNotification",
  async (data: {
    notificationId: string;
    bodyData: { unread: boolean };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/notifications/${data.notificationId}`,
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

interface notificationState {
  notifications: {
    id: string;
    createdAt: string;
    type: number;
    unread: boolean;
    task: {
      id: string;
      name: string;
      project: { name: string };
    };
  }[];
}

const initialState: notificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload.notifications;
    });
    builder.addCase(
      fetchAsyncUpdateNotification.fulfilled,
      (state, action) => {}
    );
  },
});

export const selectNotifications = (state: RootState) =>
  state.notification.notifications;

export default notificationSlice.reducer;

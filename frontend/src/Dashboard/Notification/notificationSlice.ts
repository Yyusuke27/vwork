import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
const token = localStorage.token;

export const fetchAsyncGetNotifications = createAsyncThunk(
  "notification/getAll",
  async (workspaceId: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspaceId}/notifications`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

export const fetchAsyncUpdateNotification = createAsyncThunk(
  "notification/updateNotification",
  async (data: {
    workspaceId: string;
    notificationId: string;
    bodyData: { unread: boolean };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/workspaces/${data.workspaceId}/notifications/${data.notificationId}`,
      data.bodyData,
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
      state.notifications = action.payload.data;
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

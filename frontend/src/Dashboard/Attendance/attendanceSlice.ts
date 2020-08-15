import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "axios";

import { toast } from "react-toastify";

const apiUrl = "http://localhost:5000/";
const token = localStorage.token;

export const fetchAsyncTodaysAttendance = createAsyncThunk(
  "attendance/today",
  async (workspace: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspace}/attendances/today`,
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

export const fetchAsyncUpdateTodaysAttendance = createAsyncThunk(
  "attendance/update",
  async (data: {
    id: string;
    attendance: {
      startedAt?: string;
      endedAt?: string;
      restStartedAt?: string;
      restEndedAt?: string;
      comment?: string;
      tasks?: string[];
    };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/attendances/${data.id}`,
      data.attendance,
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

interface attendanceState {
  today: {
    _id: string;
    startedAt: string;
    endedAt: string;
    restStartedAt: string;
    restEndedAt: string;
  };
}

const initialState: attendanceState = {
  today: {
    _id: "",
    startedAt: "",
    endedAt: "",
    restStartedAt: "",
    restEndedAt: "",
  },
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncTodaysAttendance.fulfilled, (state, action) => {
      state.today = action.payload.data;
    });
    builder.addCase(
      fetchAsyncUpdateTodaysAttendance.fulfilled,
      (state, action) => {
        toast.info("勤怠情報を更新しました。", {
          position: toast.POSITION.TOP_CENTER,
        });
        state.today = action.payload.data;
      }
    );
  },
});

export const selectTodaysAttendance = (state: RootState) =>
  state.attendance.today;

export default attendanceSlice.reducer;

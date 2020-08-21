import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "axios";

import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
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

export const fetchAsyncGetMyAttendances = createAsyncThunk(
  "attendance/myAttendances",
  async (data: {
    workspace: string;
    query?: { year: string; month: string };
  }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/attendances${
        data.query ? `?year=${data.query.year}&month=${data.query.month}` : ""
      }`,
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

export const fetchAsyncGetAttendance = createAsyncThunk(
  "attendance/attendance",
  async (data: { id: string; workspace: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/attendances/${data.id}`,
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

// メンバー管理のユーザーの勤怠情報一覧
export const fetchAsyncGetMemberAttendance = createAsyncThunk(
  "attendance/memberAttendance",
  async (data: { userId: string; workspace: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/users/${data.userId}/attendances`,
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
  attendances: {
    tasks: string[];
    _id: string;
    user: string;
    workspace: string;
    createdAt: string;
    startedAt: string;
    endedAt: string;
    restStartedAt: string;
    restEndedAt: string;
    comment: string;
  }[];
  attendance: {
    data: {
      tasks: string[];
      _id: string;
      user: string;
      workspace: string;
      createdAt: string;
      startedAt: string;
      endedAt: string;
      restStartedAt: string;
      restEndedAt: string;
      comment: string;
    };
    tasks: {
      name: string;
      project: { _id: string; name: string };
      endDateAt: string;
      _id: string;
      user: { _id: string; name: string };
    }[];
  };
  selectedAttendance: string;
}

const initialState: attendanceState = {
  today: {
    _id: "",
    startedAt: "",
    endedAt: "",
    restStartedAt: "",
    restEndedAt: "",
  },
  attendances: [],
  attendance: {
    data: {
      tasks: [],
      _id: "",
      user: "",
      workspace: "",
      createdAt: "",
      startedAt: "",
      endedAt: "",
      restStartedAt: "",
      restEndedAt: "",
      comment: "",
    },
    tasks: [],
  },
  selectedAttendance: "",
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    setSelectedAttendance(state, action) {
      state.selectedAttendance = action.payload;
    },
    setAttendance(state, action) {
      state.attendance = action.payload;
    },
  },
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
    builder.addCase(fetchAsyncGetMyAttendances.fulfilled, (state, action) => {
      state.attendances = action.payload.data;
    });
    builder.addCase(fetchAsyncGetAttendance.fulfilled, (state, action) => {
      state.attendance.data = action.payload.data;
      state.attendance.tasks = action.payload.tasks;
    });
    builder.addCase(
      fetchAsyncGetMemberAttendance.fulfilled,
      (state, action) => {
        state.attendance.data = action.payload.data;
      }
    );
  },
});

export const selectTodaysAttendance = (state: RootState) =>
  state.attendance.today;
export const selectAttenances = (state: RootState) =>
  state.attendance.attendances;
export const selectSelectedAttenances = (state: RootState) =>
  state.attendance.selectedAttendance;
export const selectAttendance = (state: RootState) =>
  state.attendance.attendance;

export const { setSelectedAttendance, setAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;

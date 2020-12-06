import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "../../store";
import axios from "axios";
import { accessToken, uid, client, expiry} from "../../shared/util/auth"
import { workspacePathId } from "../../shared/util/workspacePathId"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAsyncTodaysAttendance = createAsyncThunk(
  "attendance/today",
  async () => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/attendances/today`,
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
      tasks?: {
        name: string;
        description: string;
        startDateAt: string;
        endDateAt: string;
        state: number;
        progress: number;
        priority: number;
      }[];
    };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/attendances/${data.id}`,
      {
        attendance: {
          started_at: data.attendance.startedAt,
          end_at: data.attendance.endedAt,
          rest_started_at: data.attendance.restStartedAt,
          rest_ended_at: data.attendance.restEndedAt,
          comment: data.attendance.comment,
          tasks: data.attendance.tasks,
        }
      },
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

export const fetchAsyncGetMyAttendances = createAsyncThunk(
  "attendance/myAttendances",
  async (query?: { year: string; month: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/attendances${
        query ? `?year=${query.year}&month=${query.month}` : ""
      }`,
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

export const fetchAsyncGetAttendance = createAsyncThunk(
  "attendance/attendance",
  async (data: { id: string; workspace: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/attendances/${data.id}`,
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

// メンバー管理のユーザーの勤怠情報一覧
export const fetchAsyncGetMemberAttendance = createAsyncThunk(
  "attendance/memberAttendance",
  async (data: {
    userId: string;
    workspace: string;
    query?: { year: string; month: string };
  }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/users/${
        data.userId
      }/attendances${
        data.query ? `?year=${data.query.year}&month=${data.query.month}` : ""
      }`,
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

interface attendanceState {
  today: {
    id: string;
    startedAt: string;
    endedAt: string;
    restStartedAt: string;
    restEndedAt: string;
  };
  attendances: {
    tasks: string[];
    id: string;
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
      id: string;
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
      project: { id: string; name: string };
      endDateAt: string;
      id: string;
      user: { id: string; name: string };
    }[];
  };
  selectedAttendance: string;
}

const initialState: attendanceState = {
  today: {
    id: "",
    startedAt: "",
    endedAt: "",
    restStartedAt: "",
    restEndedAt: "",
  },
  attendances: [],
  attendance: {
    data: {
      tasks: [],
      id: "",
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
    setAttendances(state, action) {
      state.attendances = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncTodaysAttendance.fulfilled, (state, action) => {
      console.log(action.payload);
      
      state.today = action.payload.attendance;

      console.log(state.today);
      
    });
    builder.addCase(
      fetchAsyncUpdateTodaysAttendance.fulfilled,
      (state, action) => {
        toast.info("勤怠情報を更新しました。", {
          position: toast.POSITION.TOP_CENTER,
        });
        state.today = action.payload.attendance;
      }
    );
    builder.addCase(fetchAsyncGetMyAttendances.fulfilled, (state, action) => {
      console.log(action.payload);
      
      state.attendances = action.payload.attendances;
    });
    builder.addCase(fetchAsyncGetAttendance.fulfilled, (state, action) => {
      state.attendance.data = action.payload.data;
      state.attendance.tasks = action.payload.tasks;
    });
    builder.addCase(
      fetchAsyncGetMemberAttendance.fulfilled,
      (state, action) => {
        state.attendances = action.payload.data;
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

export const {
  setSelectedAttendance,
  setAttendance,
  setAttendances,
} = attendanceSlice.actions;

export default attendanceSlice.reducer;

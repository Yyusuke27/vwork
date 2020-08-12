import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

const apiUrl = "http://localhost:5000/";
const token = localStorage.token;

export const fetchAsyncAddTask = createAsyncThunk(
  "task/add",
  async (body: {
    task: {
      user: string;
      name: string;
      description: string;
      startDateAt: string;
      endDateAt: string;
      state: number;
      progress: number;
      priority: number;
      project: string | null;
      todaysTask: boolean;
    };
    workspace: string;
  }) => {
    const res = await axios.post(
      `${apiUrl}api/v1/workspaces/${body.workspace}/tasks`,
      body.task,
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

export const fetchAsyncTasks = createAsyncThunk(
  "task/get",
  async (workspace: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspace}/tasks`,
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

interface taskState {
  tasks: {
    _id: string;
    count: number;
    countTodaysTask: number;
    data: {
      name: string;
      project: { _id: string; name: string };
      endDateAt: string;
      _id: string;
      user: { _id: string; name: string };
    }[];
    todaysTasks: {
      name: string;
      project: { _id: string; name: string };
      endDateAt: string;
      _id: string;
      user: { _id: string; name: string };
    }[];
  };
}

const initialState: taskState = {
  tasks: {
    _id: "",
    count: 0,
    countTodaysTask: 0,
    data: [],
    todaysTasks: [],
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncAddTask.fulfilled, (state, action) => {
      console.log("タスク追加完了");
      console.log(action.payload);
    });
    builder.addCase(fetchAsyncTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const selectTasks = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;

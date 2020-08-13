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
  "task/getAll",
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

export const fetchAsyncTask = createAsyncThunk(
  "task/get",
  async (id: string) => {
    const res = await axios.get(`${apiUrl}api/v1/tasks/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

export const fetchAsyncUpdateTask = createAsyncThunk(
  "task/update",
  async (data: {
    id: string;
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
  }) => {
    const res = await axios.put(`${apiUrl}api/v1/tasks/${data.id}`, data.task, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

export const fetchAsyncRecentTasks = createAsyncThunk(
  "task/getRecent",
  async (workspace: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspace}/tasks/recent`,
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
export const fetchAsyncNearDeadlineTasks = createAsyncThunk(
  "task/getNearDeadline",
  async (workspace: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspace}/tasks/near_deadline`,
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
  selectedTask: string;
  recentTasks: {
    name: string;
    project: { _id: string; name: string };
    endDateAt: string;
    _id: string;
    user: { _id: string; name: string };
  }[];
  nearDeadlineTasks: {
    name: string;
    project: { _id: string; name: string };
    endDateAt: string;
    _id: string;
    user: { _id: string; name: string };
  }[];
}

const initialState: taskState = {
  tasks: {
    _id: "",
    count: 0,
    countTodaysTask: 0,
    data: [],
    todaysTasks: [],
  },
  task: {
    user: "",
    name: "",
    description: "",
    startDateAt: "",
    endDateAt: "",
    state: 0,
    progress: 0,
    priority: 0,
    project: "",
    todaysTask: false,
  },
  selectedTask: "",
  recentTasks: [],
  nearDeadlineTasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncAddTask.fulfilled, (state, action) => {});
    builder.addCase(fetchAsyncTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(fetchAsyncTask.fulfilled, (state, action) => {
      state.task = action.payload.data;
    });
    builder.addCase(fetchAsyncRecentTasks.fulfilled, (state, action) => {
      state.recentTasks = action.payload.data;
    });
    builder.addCase(fetchAsyncNearDeadlineTasks.fulfilled, (state, action) => {
      state.nearDeadlineTasks = action.payload.data;
    });
  },
});

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectTask = (state: RootState) => state.task.task;
export const selectSelectedTask = (state: RootState) => state.task.selectedTask;
export const selectRecentTasks = (state: RootState) => state.task.recentTasks;
export const selectNearDeadlineTasks = (state: RootState) =>
  state.task.nearDeadlineTasks;

export const { setSelectedTask } = taskSlice.actions;

export default taskSlice.reducer;

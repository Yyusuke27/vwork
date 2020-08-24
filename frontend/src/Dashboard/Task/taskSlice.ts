import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { RootState } from "../../store";

const apiUrl = process.env.REACT_APP_BACKEND_URL;
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
  async (data: { workspace: string; query?: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/tasks${
        data.query ? `?state=${data.query}` : ""
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

export const fetchAsyncProjectTasks = createAsyncThunk(
  "task/getProjectTask",
  async (projectId: string) => {
    const res = await axios.get(`${apiUrl}api/v1/projects/${projectId}/tasks`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
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
    log: {
      user?: string;
      name?: string;
      description?: string;
      startDateAt?: string;
      endDateAt?: string;
      state?: number;
      progress?: number;
      priority?: number;
      project?: string | null;
      todaysTask?: boolean;
    };
  }) => {
    const res = await axios.put(
      `${apiUrl}api/v1/tasks/${data.id}`,
      { task: data.task, log: data.log },
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

// ユーザー管理のユーザーに紐づくタスク一覧
export const fetchAsyncMemberTasks = createAsyncThunk(
  "task/member",
  async (data: { workspace: string; userId: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/users/${data.userId}/tasks`,
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

// タスクにコメント追加
export const fetchAsyncTaskComment = createAsyncThunk(
  "task/addComment",
  async (data: { taskId: string; comment: string }) => {
    const res = await axios.post(
      `${apiUrl}api/v1/tasks/${data.taskId}/comments`,
      {
        comment: data.comment,
      },
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

// タスクのログ、コメント表示
export const fetchAsyncTaskHistory = createAsyncThunk(
  "task/showHistory",
  async (taskId: string) => {
    const res = await axios.get(`${apiUrl}api/v1/tasks/${taskId}/histories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
  todaysDoneTasks: string[];
  query: string;
  taskHistories: {
    createdAt: string;
    type: number;
    log?: {
      type: string;
      oldState?: string;
      newState: string;
      user: { name: string };
    };
    comment?: {
      comment: string;
      user: {
        name: string;
      };
    };
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
  todaysDoneTasks: [],
  query: "",
  taskHistories: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask(state, action) {
      state.task = action.payload;
    },
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    setSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
    setTodaysDoneTasks(state, action) {
      state.todaysDoneTasks = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncAddTask.fulfilled, (state, action) => {
      toast.info("タスクを追加しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncUpdateTask.fulfilled, (state, action) => {
      toast.info("タスクを更新しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncUpdateTask.rejected, (state, action) => {
      toast.error("更新に失敗しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(fetchAsyncProjectTasks.fulfilled, (state, action) => {
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
    builder.addCase(fetchAsyncMemberTasks.fulfilled, (state, action) => {
      state.tasks.data = action.payload.data;
    });
    builder.addCase(fetchAsyncTaskComment.fulfilled, (state, action) => {
      toast.info("コメントを追加しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncTaskComment.rejected, (state, action) => {
      toast.error("コメントに失敗しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncTaskHistory.fulfilled, (state, action) => {
      state.taskHistories = action.payload.data;
    });
  },
});

export const selectTasks = (state: RootState) => state.task.tasks;
export const selectTask = (state: RootState) => state.task.task;
export const selectSelectedTask = (state: RootState) => state.task.selectedTask;
export const selectRecentTasks = (state: RootState) => state.task.recentTasks;
export const selectNearDeadlineTasks = (state: RootState) =>
  state.task.nearDeadlineTasks;
export const selectTodaysDoneTasks = (state: RootState) =>
  state.task.todaysDoneTasks;
export const selectTaskQuery = (state: RootState) => state.task.query;
export const selectTaskHistory = (state: RootState) => state.task.taskHistories;

export const {
  setSelectedTask,
  setTodaysDoneTasks,
  setTasks,
  setTask,
  setQuery,
} = taskSlice.actions;

export default taskSlice.reducer;

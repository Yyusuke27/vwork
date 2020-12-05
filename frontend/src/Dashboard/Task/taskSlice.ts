import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { RootState } from "../../store";
import { accessToken, uid, client, expiry} from "../../shared/util/auth"
import { workspacePathId } from "../../shared/util/workspacePathId"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAsyncAddTask = createAsyncThunk(
  "task/add",
  async (task: {
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
    }) => {
    const res = await axios.post(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/tasks`,
      {
        task: {
          user_id: task.user,
          name: task.name,
          description: task.description,
          start_date_at: task.startDateAt,
          end_date_at: task.endDateAt,
          state: task.state,
          progress: task.progress,
          priority: task.priority,
          project_id: task.project,
          todays_task: task.todaysTask,
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

export const fetchAsyncTasks = createAsyncThunk(
  "task/getAll",
  async (query?: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/tasks${
        query ? `?state=${query}` : ""
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

export const fetchAsyncMyTasks = createAsyncThunk(
  "task/getMy",
  async (query?: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/tasks/my${
        query ? `?state=${query}` : ""
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

export const fetchAsyncProjectTasks = createAsyncThunk(
  "task/getProjectTask",
  async (projectId: string) => {
    const res = await axios.get(`${apiUrl}api/v1/projects/${projectId}/tasks`, {
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

export const fetchAsyncTask = createAsyncThunk(
  "task/get",
  async (params: {id: string, workspacePathId: string}) => {
    const res = await axios.get(`${apiUrl}api/v1/workspaces/${params.workspacePathId}/tasks/${params.id}`, {
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
      `${apiUrl}api/v1/workspaces/${workspacePathId}/tasks/${data.id}`,
      {
        task: {
          user_id: data.task.user,
          name: data.task.name,
          description: data.task.description,
          start_date_at: data.task.startDateAt,
          end_date_at: data.task.endDateAt,
          state: data.task.state,
          progress: data.task.progress,
          priority: data.task.priority,
          project_id: data.task.project,
          todays_task: data.task.todaysTask,
        },
        log: {
          user_id: data.log.user,
          name: data.log.name,
          description: data.log.description,
          start_date_at: data.log.startDateAt,
          end_date_at: data.log.endDateAt,
          state: data.log.state,
          progress: data.log.progress,
          priority: data.log.priority,
          project_id: data.log.project,
          todays_task: data.log.todaysTask,
        },
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

export const fetchAsyncRecentTasks = createAsyncThunk(
  "task/getRecent",
  async () => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/tasks/recent`,
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

export const fetchAsyncNearDeadlineTasks = createAsyncThunk(
  "task/getNearDeadline",
  async () => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/tasks/near_deadline`,
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

// ユーザー管理のユーザーに紐づくタスク一覧
export const fetchAsyncMemberTasks = createAsyncThunk(
  "task/member",
  async (data: { workspace: string; userId: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/users/${data.userId}/tasks`,
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

// タスクにコメント追加
export const fetchAsyncTaskComment = createAsyncThunk(
  "task/addComment",
  async (data: { taskId: string; comment: string }) => {
    const res = await axios.post(
      `${apiUrl}api/v1/tasks/${data.taskId}/comments`,
      {
        comment: {
          body: data.comment
        },
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

// タスクのログ、コメント表示
export const fetchAsyncTaskHistory = createAsyncThunk(
  "task/showHistory",
  async (taskId: string) => {
    const res = await axios.get(`${apiUrl}api/v1/tasks/${taskId}/histories`, {
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

interface taskState {
  data: {
    id: string;
    count: number;
    countTodaysTask: number;
    tasks: {
      name: string;
      project: { id: string; name: string };
      endDateAt: string;
      id: string;
      user: { id: string; name: string };
    }[];
    todaysTasks: {
      name: string;
      project: { id: string; name: string };
      endDateAt: string;
      id: string;
      user: { id: string; name: string };
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
    project: { id: string; name: string };
    endDateAt: string;
    id: string;
    user: { id: string; name: string };
  }[];
  nearDeadlineTasks: {
    name: string;
    project: { id: string; name: string };
    endDateAt: string;
    id: string;
    user: { id: string; name: string };
  }[];
  todaysDoneTasks: string[];
  query: string;
  taskHistories: {
    createdAt: string;
    type: number;
    log?: {
      type: number;
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
  data: {
    id: "",
    count: 0,
    countTodaysTask: 0,
    tasks: [],
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
      state.data = action.payload;
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
      console.log(action.payload);
      
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
      state.data = action.payload;
    });
    builder.addCase(fetchAsyncMyTasks.fulfilled, (state, action) => {
      console.log(action.payload);
      
      state.data = action.payload.data;

      console.log(state.data);
      
    });
    builder.addCase(fetchAsyncProjectTasks.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchAsyncTask.fulfilled, (state, action) => {
      console.log(action.payload);
      
      state.task = action.payload.task;
    });
    builder.addCase(fetchAsyncRecentTasks.fulfilled, (state, action) => {
      state.recentTasks = action.payload.tasks;
    });
    builder.addCase(fetchAsyncNearDeadlineTasks.fulfilled, (state, action) => {
      state.nearDeadlineTasks = action.payload.tasks;
    });
    builder.addCase(fetchAsyncMemberTasks.fulfilled, (state, action) => {
      state.data.tasks = action.payload.data;
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
      console.log(action.payload);
      
      state.taskHistories = action.payload.histories;
    });
  },
});

export const selectTasks = (state: RootState) => state.task.data;
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

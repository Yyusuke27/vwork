import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { toast } from "react-toastify";
import { accessToken, uid, client, expiry} from "../../shared/util/auth"
import { workspacePathId } from "../../shared/util/workspacePathId"

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAsyncAllMyProjects = createAsyncThunk(
  "project/allMyProjects",
  async () => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/projects/my`,
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

export const fetchAsyncAllProjects = createAsyncThunk(
  "project/allProjects",
  async () => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/projects`,
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

export const fetchAsyncGetProject = createAsyncThunk(
  "project/project",
  async (id: string) => {
    const res = await axios.get(`${apiUrl}api/v1/workspaces/${workspacePathId}/projects/${id}`, {
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

export const fetchAsyncCreateProject = createAsyncThunk(
  "project/create",
  async (projectData: { name: string; description: string }) => {
    const res = await axios.post(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/projects`,
      projectData,
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

export const fetchAsyncGetNewMembers = createAsyncThunk(
  "project/newMembers",
  async (projectId: string) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/projects/new_members`,
      {
        params: {
          projectId
        },
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

export const fetchAsyncGetProjectMember = createAsyncThunk(
  "project/member",
  async (data: { workspaces: string; projectId: string; userId: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspaces}/projects/${data.projectId}/users/${data.userId}`,
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

export const fetchAsyncAddMembers = createAsyncThunk(
  "project/addMember",
  async (data: { projectId: string; members: string[] }) => {
    const res = await axios.post(
      `${apiUrl}api/v1/workspaces/${workspacePathId}/projects/members`,
      { 
        members: data.members,
        projectId: data.projectId
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

// メンバー管理でユーザーに紐づくプロジェクトを見られるようにする
export const fetchAsyncGetMemberProjects = createAsyncThunk(
  "project/memberProjects",
  async (data: { workspace: string; userId: string }) => {
    const res = await axios.get(
      `${apiUrl}api/v1/workspaces/${data.workspace}/users/${data.userId}/projects`,
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

interface projectState {
  projects: {
    id: string;
    name: string;
    color: number;
    icon: number;
  }[];
  selectedProjects: {
    id: string;
    name: string;
    color: number;
    icon: number;
  }[];
  project: {
    id: string;
    name: string;
    color: number;
    icon: number;
    description: string;
    members: {
      active: boolean;
      email: string;
      name: string;
      registration: boolean;
      role: string;
      id: string;
    }[];
    tasks: {
      id: string;
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
    }[];
  };
  newMembers: { name: string; id: string }[];
  member: {
    user: {
      id: string;
      name: string;
      email: string;
      registration: boolean;
      role: string;
    };
    tasks: {
      name: string;
      project: { id: string; name: string };
      endDateAt: string;
      id: string;
      user: { id: string; name: string };
    }[];
    profile: { position: string };
  };
  selectedMember: string;
}

const initialState: projectState = {
  projects: [],
  selectedProjects: [],
  project: {
    id: "",
    name: "",
    color: 0,
    icon: 0,
    description: "",
    members: [],
    tasks: [],
  },
  newMembers: [],
  member: {
    user: {
      id: "",
      name: "",
      email: "",
      registration: false,
      role: "",
    },
    tasks: [],
    profile: { position: "" },
  },
  selectedMember: "",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setSelectedMember(state, action) {
      state.selectedMember = action.payload;
    },
    setProjectMember(state, action) {
      state.member = action.payload;
    },
    setProject(state, action) {
      state.project = action.payload;
    },
    setSelectedProject(state, action) {
      state.selectedProjects = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncAllMyProjects.fulfilled, (state, action) => {
      state.projects = action.payload.projects;
    });
    builder.addCase(fetchAsyncAllProjects.fulfilled, (state, action) => {
      state.selectedProjects = action.payload.data;
    });
    builder.addCase(fetchAsyncAllProjects.rejected, (state, action) => {
      window.location.href = "/";
    });
    builder.addCase(fetchAsyncAllMyProjects.rejected, (state, action) => {});
    builder.addCase(fetchAsyncGetProject.fulfilled, (state, action) => {
      state.project = action.payload.project;
    });
    builder.addCase(fetchAsyncCreateProject.fulfilled, (state, action) => {
      state.projects = [
        ...state.projects,
        action.payload.project
      ];
      state.selectedProjects = [
        ...state.selectedProjects,
        action.payload.project
      ];
      toast.info("プロジェクトを追加しました。", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncGetNewMembers.fulfilled, (state, action) => {
      console.log(action.payload);
      
      state.newMembers = action.payload.data;
    });
    builder.addCase(fetchAsyncGetProjectMember.fulfilled, (state, action) => {
      state.member.user = action.payload.user;
      state.member.profile = action.payload.profile;
      state.member.tasks = action.payload.tasks;
    });
    builder.addCase(fetchAsyncAddMembers.fulfilled, (state, action) => {
      toast.info("プロジェクトにメンバーを追加しました", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    builder.addCase(fetchAsyncGetMemberProjects.fulfilled, (state, action) => {
      state.selectedProjects = action.payload.data;
    });
    builder.addCase(fetchAsyncGetMemberProjects.rejected, (state, action) => {
      window.location.href = "/";
    });
  },
});

export const selectProjects = (state: RootState) => state.project.projects;
export const selectSelectedProjects = (state: RootState) =>
  state.project.selectedProjects;
export const selectProject = (state: RootState) => state.project.project;
export const selectSelectedProjectMember = (state: RootState) =>
  state.project.selectedMember;
export const selectProjectMember = (state: RootState) => state.project.member;
export const selectNewMembers = (state: RootState) => state.project.newMembers;

export const {
  setSelectedMember,
  setProjectMember,
  setProject,
  setSelectedProject,
} = projectSlice.actions;

export default projectSlice.reducer;

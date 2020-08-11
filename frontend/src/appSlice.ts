import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface appState {
  loading: boolean;
  openMenu: boolean;
  addProjectButton: boolean;
  inviteMemberClicked: boolean;
  setProfileClicked: boolean;
  taskCardClicked: boolean;
  addTaskButton: boolean;
  kintaiCardClicked: boolean;
  addButtonAfterTask: boolean;
  addedTaskText: boolean;
  addMemberButton: boolean;
  memberIconClicked: boolean;
}

const initialState: appState = {
  loading: false,
  openMenu: true,
  addProjectButton: false,
  inviteMemberClicked: false,
  setProfileClicked: false,
  taskCardClicked: false,
  addTaskButton: false,
  kintaiCardClicked: false,
  addButtonAfterTask: false,
  addedTaskText: false,
  addMemberButton: false,
  memberIconClicked: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
    toggleOpenMenu(state, action) {
      state.openMenu = action.payload;
    },
    toggleAddProjectButton(state, action) {
      state.addProjectButton = action.payload;
    },
    toggleInviteMemberClicked(state, action) {
      state.inviteMemberClicked = action.payload;
    },
    toggleSetProfileClicked(state, action) {
      state.setProfileClicked = action.payload;
    },
    toggleTaskCardClicked(state, action) {
      state.taskCardClicked = action.payload;
    },
    toggleAddTaskButton(state, action) {
      state.addTaskButton = action.payload;
    },
    toggleKintaiCardClicked(state, action) {
      state.kintaiCardClicked = action.payload;
    },
    toggleAddButtonAfterTask(state, action) {
      state.addButtonAfterTask = action.payload;
    },
    toggleAddedTaskText(state, action) {
      state.addedTaskText = action.payload;
    },
    toggleAddMemberButton(state, action) {
      state.addMemberButton = action.payload;
    },
    toggleMemberIconClicked(state, action) {
      state.memberIconClicked = action.payload;
    },
  },
});

export const {
  toggleLoading,
  toggleOpenMenu,
  toggleAddProjectButton,
  toggleInviteMemberClicked,
  toggleSetProfileClicked,
  toggleTaskCardClicked,
  toggleAddTaskButton,
  toggleKintaiCardClicked,
  toggleAddButtonAfterTask,
  toggleAddedTaskText,
  toggleAddMemberButton,
  toggleMemberIconClicked,
} = appSlice.actions;
export const selectLoader = (state: RootState) => state.app.loading;
export const selectOpenMenu = (state: RootState) => state.app.openMenu;
export const selectAddProjectButton = (state: RootState) =>
  state.app.addProjectButton;
export const selectInviteMemberClicked = (state: RootState) =>
  state.app.inviteMemberClicked;
export const selectSetProfileClicked = (state: RootState) =>
  state.app.setProfileClicked;
export const selectTaskCardClicked = (state: RootState) =>
  state.app.taskCardClicked;
export const selectAddTaskButton = (state: RootState) =>
  state.app.addTaskButton;
export const selectKintaiCardClicked = (state: RootState) =>
  state.app.kintaiCardClicked;
export const selectAddButtonAfterTask = (state: RootState) =>
  state.app.addButtonAfterTask;
export const selectAddedTaskText = (state: RootState) =>
  state.app.addedTaskText;
export const selectAddMemberButton = (state: RootState) =>
  state.app.addMemberButton;
export const selectMemberIconClicked = (state: RootState) =>
  state.app.memberIconClicked;

export default appSlice.reducer;

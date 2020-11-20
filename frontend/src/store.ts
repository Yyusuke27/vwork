import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import appReducer from "./appSlice";
import dashboardReducer from "./Dashboard/dashboardSlice";
import registerReducer from "./Register/registerSlice";
import projectReducer from "./Dashboard/Project/projectSlice";
import taskReducer from "./Dashboard/Task/taskSlice";
import workspaceReducer from "./WorkSpaces/workspaceSlice";
import attendanceReducer from "./Dashboard/Attendance/attendanceSlice";
import memberReducer from "./Dashboard/Members/memberSlice";
import notificationReducer from "./Dashboard/Notification/notificationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    dashboard: dashboardReducer,
    register: registerReducer,
    project: projectReducer,
    task: taskReducer,
    workspace: workspaceReducer,
    attendance: attendanceReducer,
    member: memberReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<returnType = void> = ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>;

export default store;

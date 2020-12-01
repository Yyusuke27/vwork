import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import Home from "./Home";
import MemberDetail from "../Members/pages/MemberDetail";
import ProjectManage from "../Project/pages/ProjectManage";
import WorkspaceManage from "../WorkSpace/pages/WorkspaceManage";
import Notification from "../Notification/pages/Notification";
import MyTask from "../Task/pages/MyTask";
import Members from "../Members/pages/Members";
import MyAttendance from "../Attendance/pages/MyAttendance";
import Project from "../Project/pages/Project";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NewProjectDrawer from "../Project/components/NewProjectDrawer";
import InviteMemberInAddIconDrawer from "../components/InviteMemberInAddIconDrawer";
import ProjectMemberClickedDrawer from "../Project/components/ProjectMemberClickedDrawer";
import SetProfileInAvatarIconDrawer from "../Project/components/SetProfileInAvatarIconDrawer";
import TaskCardClickedDrawer from "../Task/components/TaskCardClickedDrawer";
import NewTaskAddDrawer from "../Task/components/NewTaskAddDrawer";
import KintaiCardClickedDrawer from "../Attendance/components/KintaiCardClickedDrawer";
import { fetchAsyncCurrentUser, selectWorkspace } from "../../Auth/authSlice";
import { fetchAsyncAllMyProjects } from "../Project/projectSlice";
import {
  selectOpenMenu,
  selectAddProjectButton,
  selectInviteMemberClicked,
  selectSetProfileClicked,
  selectTaskCardClicked,
  selectAddTaskButton,
  selectMemberIconClicked,
  selectKintaiCardClicked,
} from "../../appSlice";
import {
  fetchAsyncNearDeadlineTasks,
  fetchAsyncRecentTasks,
} from "../Task/taskSlice";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const workspace = useSelector(selectWorkspace);

  const workspacePathId = window.location.pathname.split('/')[1]  

  const fetchUser = useCallback(async () => {
    await dispatch(fetchAsyncCurrentUser(workspacePathId));
  }, [dispatch, workspacePathId]);

  const fetchProject = useCallback(async () => {
    console.log(workspacePathId);
    
    await dispatch(fetchAsyncAllMyProjects(workspacePathId));
  }, [dispatch, workspacePathId]);

  const fetchNearDeadlineTasks = useCallback(async () => {
    await dispatch(fetchAsyncNearDeadlineTasks(workspace));
  }, [dispatch, workspace]);

  const fetchRecentTasks = useCallback(async () => {
    await dispatch(fetchAsyncRecentTasks(workspace));
  }, [dispatch, workspace]);

  const mounted = useRef(false);

  useEffect(() => {
    console.log('hello');
    
    if (mounted.current) {
      console.log('hello if');
    } else {
      console.log('hello else');
      fetchUser();
      fetchProject();
      fetchNearDeadlineTasks();
      fetchRecentTasks();
      mounted.current = true;
    }
  }, [
    fetchUser,
    fetchProject,
    fetchNearDeadlineTasks,
    fetchRecentTasks,
  ]);

  const openMenu = useSelector(selectOpenMenu);
  const addProjectButton = useSelector(selectAddProjectButton);
  const inviteMemberClicked = useSelector(selectInviteMemberClicked);
  const setProfileClicked = useSelector(selectSetProfileClicked);
  const taskCardClicked = useSelector(selectTaskCardClicked);
  const addTaskButton = useSelector(selectAddTaskButton);
  const memberIconClicked = useSelector(selectMemberIconClicked);
  const kintaiCardClicked = useSelector(selectKintaiCardClicked);

  return (
    <div className={classes.root}>
      <MainNavigation />
      <ToastContainer hideProgressBar autoClose={2000} />
      <CssBaseline />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openMenu,
        })}
      >
        <div className={classes.drawerHeader} />
        {addProjectButton ? <NewProjectDrawer /> : ""}
        {inviteMemberClicked ? <InviteMemberInAddIconDrawer /> : ""}
        {setProfileClicked ? <SetProfileInAvatarIconDrawer /> : ""}
        {taskCardClicked ? <TaskCardClickedDrawer /> : ""}
        {addTaskButton ? <NewTaskAddDrawer /> : ""}
        {memberIconClicked ? <ProjectMemberClickedDrawer /> : ""}
        {kintaiCardClicked ? <KintaiCardClickedDrawer /> : ""}
        <Switch>
          <Route path="/:workspacePathId" exact>
            <Home />
          </Route>
          <Route path="/:workspacePathId/mytask" exact>
            <MyTask />
          </Route>
          <Route path="/:workspacePathId/work_manage" exact>
            <MyAttendance />
          </Route>
          <Route path="/:workspacePathId/members" exact>
            <Members />
          </Route>
          <Route path="/:workspacePathId/members/:memberId">
            <MemberDetail />
          </Route>
          <Route path="/:workspacePathId/project_manage" exact>
            <ProjectManage />
          </Route>
          <Route path="/:workspacePathId/project/:projectId" exact>
            <Project />
          </Route>
          <Route path="/:workspacePathId/workspace_manage" exact>
            <WorkspaceManage />
          </Route>
          <Route path="/:workspacePathId/notification" exact>
            <Notification />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;

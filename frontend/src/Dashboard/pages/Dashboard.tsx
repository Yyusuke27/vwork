import React, { useEffect, useRef, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import clsx from "clsx";
import Home from "./Home";
import MyTask from "../Task/pages/MyTask";
import MyAttendance from "../Attendance/pages/MyAttendance";
import Project from "../Project/pages/Project";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { fetchAsyncCurrentUser, selectWorkspace } from "../../Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import NewProjectDrawer from "../Project/components/NewProjectDrawer";
import NewProjectMemberDrawer from "../Project/components/NewProjectMemberDrawer";
import NewProfileDrawer from "../Project/components/NewProfileDrawer";
import NewTaskCardClickedDrawer from "../Task/components/NewTaskCardClickedDrawer";
import NewTaskAddDrawer from "../Task/components/NewTaskAddDrawer";
import NewAttendanceDrawer from "../Attendance/components/NewAttendanceDrawer";
import { fetchAsyncAllMyProjects } from "../Project/projectSlice";
import { selectOpenMenu } from "../../appSlice";

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

  const fetchUser = useCallback(async () => {
    await dispatch(fetchAsyncCurrentUser());
  }, [dispatch]);

  const fetchProject = useCallback(async () => {
    await dispatch(fetchAsyncAllMyProjects(workspace));
  }, [dispatch, workspace]);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      fetchProject();
    } else {
      fetchUser();
      mounted.current = true;
    }
  }, [fetchUser, fetchProject, workspace]);

  const openMenu = useSelector(selectOpenMenu);

  return (
    <div className={classes.root}>
      <MainNavigation />
      <CssBaseline />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openMenu,
        })}
      >
        <div className={classes.drawerHeader} />
        <NewProjectDrawer />
        <NewProjectMemberDrawer />
        <NewProfileDrawer />
        <NewTaskCardClickedDrawer />
        <NewTaskAddDrawer />
        <NewAttendanceDrawer />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/my_task" exact>
            <MyTask />
          </Route>
          <Route path="/work_manage" exact>
            <MyAttendance />
          </Route>
          <Route path="/my_project" exact>
            <Project />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;

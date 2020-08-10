import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import clsx from "clsx";
import AppContext from "../../AppContext";
import Home from "./Home";
import MyTask from "../Task/pages/MyTask";
import MyAttendance from "../Attendance/pages/MyAttendance";
import EachProject from "../Project/pages/EachProject";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { fetchAsyncCurrentUser } from "../../Auth/authSlice";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../../appSlice";
import NewTaskDrawer from "../Task/components/NewTaskDrawer";
import NewProjectDrawer from "../Project/components/NewProjectDrawer";
import NewProjectMemberDrawer from "../Project/components/NewProjectMemberDrawer";
import NewProfileDrawer from "../Project/components/NewProfileDrawer";
import NewTaskCardClickedDrawer from "../Task/components/NewTaskCardClickedDrawer";

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
  useEffect(() => {
    dispatch(toggleLoading(true));
    dispatch(fetchAsyncCurrentUser());
    dispatch(toggleLoading(false));
  }, [dispatch]);

  // メニューアイコンをクリックした時の処理
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // アドアイコンをクリックした時の処理
  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };

  // アバターアイコンをクリックした時の処理
  const [AvatarMenu, setAvatarMenu] = React.useState<null | HTMLElement>(null);
  const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAvatarMenu(event.currentTarget);
  };
  const HandleClose = () => {
    setAvatarMenu(null);
  };

  // タスク追加をクリックした時の処理
  const [openTask, setOpenTask] = useState(false);
  const OpenTask = () => {
    setOpenTask(true);
  };
  const CloseTask = () => {
    setOpenTask(false);
  };

  // プロジェクト追加をクリックした時の処理
  const [openProject, setOpenProject] = useState(false);
  const OpenProject = () => {
    setOpenProject(true);
  };
  const CloseProject = () => {
    setOpenProject(false);
  };

  // メンバー招待をクリックした時の処理
  const [openMember, setOpenMember] = useState(false);
  const OpenMember = () => {
    setOpenMember(true);
  };
  const CloseMember = () => {
    setOpenMember(false);
  };

  // プロフィール設定をクリックした時の処理
  const [openProfile, setOpenProfile] = useState(false);
  const OpenProfile = () => {
    setOpenProfile(true);
  };
  const CloseProfile = () => {
    setOpenProfile(false);
  };

  // タスク関連のカードをクリックした時に表示されるドロワーを出すための処理
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenHandler = () => {
    setOpenDrawer(true);
  };
  const handleCloseHandler = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={classes.root}>
      <AppContext.Provider
        value={{
          handleDrawerOpen,
          handleDrawerClose,
          open,
          handleClick,
          handleClose,
          menu,
          HandleClick,
          HandleClose,
          AvatarMenu,
          OpenTask,
          CloseTask,
          openTask,
          OpenProject,
          CloseProject,
          openProject,
          OpenMember,
          CloseMember,
          openMember,
          OpenProfile,
          CloseProfile,
          openProfile,
          handleOpenHandler,
          handleCloseHandler,
          openDrawer,
        }}
      >
        <MainNavigation />
        <CssBaseline />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <NewTaskDrawer />
          <NewProjectDrawer />
          <NewProjectMemberDrawer />
          <NewProfileDrawer />
          <NewTaskCardClickedDrawer />
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
              <EachProject />
            </Route>
          </Switch>
        </main>
      </AppContext.Provider>
    </div>
  );
};

export default Dashboard;

import React from "react";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CheckAttendanceArea from "../Attendance/components/CheckAttendanceArea";
import TaskAlertArea from "../Task/components/TaskAlertArea";
import AttendingProjectArea from "../AttendingProject/components/AttendingProjectArea";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainNavigation />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CheckAttendanceArea />
        <TaskAlertArea />
        <AttendingProjectArea />
      </main>
    </div>
  );
};

export default Dashboard;

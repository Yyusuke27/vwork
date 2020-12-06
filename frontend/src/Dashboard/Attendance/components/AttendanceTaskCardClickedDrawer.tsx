import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  selectAttendanceTaskCardClicked,
  toggleAttendanceTaskCardClicked,
} from "../../../appSlice";
import TaskForm from "./AttendanceTaskForm";
import { selectSelectedAttenanceTask } from "../attendanceSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    historyArea: {
      bottom: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#F0F7F8",
    },
    historyOutputArea: {
      height: "calc(100% - 90px)",
      overflowY: "scroll",
      overflowX: "hidden",
    },
    commentArea: {
      width: "100%",
    },
  })
);

const AttendanceTaskCardClickedDrawer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const attendanceTaskCardClicked = useSelector(selectAttendanceTaskCardClicked);
  const selectedAttenanceTask = useSelector(selectSelectedAttenanceTask);


  console.log(attendanceTaskCardClicked);
  
  const closeTaskCard = useCallback(
    () => {
      dispatch(toggleAttendanceTaskCardClicked(false))
      // dispatch(
      //   setAttendanceTask({
      //     user: "",
      //     name: "",
      //     description: "",
      //     startDateAt: "",
      //     endDateAt: "",
      //     state: 0,
      //     progress: 0,
      //     priority: 0,
      //     project: "",
      //     todaysTask: false,
      //   })
      // );
    },
    [dispatch]
  );

  // taskはreadonly propertyだから新しい変数に渡す
  // const taskData = { ...task };

  useEffect(() => {
    return function cleanup() {
      // if (!pathName.includes("project")) {
      //   dispatch(
      //     setProject({
      //       id: "",
      //       name: "",
      //       color: 0,
      //       icon: 0,
      //       description: "",
      //       members: [],
      //       tasks: [],
      //     })
      //   );
      // }

    };
  }, [dispatch]);

  return (
    <>
      <Dialog 
        open={attendanceTaskCardClicked}
        onClose={closeTaskCard}
        keepMounted
        className="taskDialog">
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Container maxWidth="md">
              <Box mt={5}>
                <TaskForm
                  taskData={selectedAttenanceTask}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default AttendanceTaskCardClickedDrawer;

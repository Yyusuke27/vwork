import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VwDrawer from "../../../shared/components/Common/VwDrawer";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  selectAttendanceTaskCardClicked,
  toggleAttendanceTaskCardClicked,
} from "../../../appSlice";
import AttendanceTaskForm from "./AttendanceTaskForm";
import { selectSelectedAttenanceTask, setSelectedAttendanceTask } from "../attendanceSlice";

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

  return (
    <>
      <VwDrawer
        open={attendanceTaskCardClicked}
        click={() => {
          dispatch(toggleAttendanceTaskCardClicked(false))
          dispatch(
            setSelectedAttendanceTask({
              name: "",
              description: "",
              startDateAt: "",
              endDateAt: "",
              state: 0,
              progress: 0,
              priority: 0,
              id: ""
            })
          );
        }}
      >
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid
            item
            xs={12}
          >
            <Container maxWidth="md">
              <Box mt={5}>
                <AttendanceTaskForm
                  taskData={selectedAttenanceTask}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </VwDrawer>
    </>
  );
};

export default AttendanceTaskCardClickedDrawer;

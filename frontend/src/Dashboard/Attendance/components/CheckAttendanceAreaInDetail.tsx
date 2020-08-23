import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../shared/util/color";
import TaskList from "../../Task/components/TaskList";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { toggleKintaiCardClicked } from "../../../appSlice";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { selectAttendance } from "../attendanceSlice";
import moment from "moment";
import { setAttendance } from "../attendanceSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 10,
      backgroundColor: Color.VWORK_LIGHT_BLUE,
      height: 235,
      marginTop: 25,
      width: "60%",
    },
    title: {
      fontSize: 20,
    },
    comment: {
      fontSize: 14,
    },
  })
);
const CheckAttendanceAreaInDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const attendance = useSelector(selectAttendance);

  let hour;
  let minutes;

  if (attendance.data) {
    //　勤務時間
    const start = moment(attendance.data.startedAt).utcOffset("+09:00");
    const end = moment(attendance.data.endedAt).utcOffset("+09:00");
    const diff = Math.round(end.diff(start, "minute", true));

    // 休憩時間を引く
    const restStart = moment(attendance.data.restStartedAt).utcOffset("+09:00");
    const restEnd = moment(attendance.data.restEndedAt).utcOffset("+09:00");
    const restDiff = Math.round(restEnd.diff(restStart, "minute", true));

    const totalDiff = diff - restDiff;

    hour = Math.round(totalDiff / 60);
    minutes = totalDiff % 60;
  }

  useEffect(() => {
    return function cleanup() {
      dispatch(
        setAttendance({
          data: {
            tasks: [],
            _id: "",
            user: "",
            workspace: "",
            createdAt: "",
            startedAt: "",
            endedAt: "",
            restStartedAt: "",
            restEndedAt: "",
            comment: "",
          },
          tasks: [],
        })
      );
    };
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="md">
        <Box mt={6}>
          <Grid container direction="column">
            <Grid item>
              <Box borderBottom={1}>
                <Typography variant="h5">
                  {attendance.data && attendance.data.createdAt
                    ? moment(attendance.data.createdAt)
                        .utcOffset("+09:00")
                        .format("YYYY年MM月DD日")
                    : ""}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box mb={3}>
                <Card className={classes.root}>
                  <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={classes.title}
                  >
                    <Box mt={3} ml={3}>
                      <Grid item>
                        出社:
                        {attendance.data && attendance.data.startedAt
                          ? moment(attendance.data.startedAt)
                              .utcOffset("+09:00")
                              .format("HH:mm")
                          : ""}
                      </Grid>
                    </Box>
                    <Box mt={3} ml={3}>
                      <Grid item>
                        休憩:
                        {attendance.data && attendance.data.restStartedAt
                          ? moment(attendance.data.restStartedAt)
                              .utcOffset("+09:00")
                              .format("HH:mm")
                          : ""}
                        ~
                        {attendance.data && attendance.data.restEndedAt
                          ? moment(attendance.data.restEndedAt)
                              .utcOffset("+09:00")
                              .format("HH:mm")
                          : ""}
                      </Grid>
                    </Box>
                    <Box mt={3} ml={3}>
                      <Grid item>
                        退社:
                        {attendance.data && attendance.data.endedAt
                          ? moment(attendance.data.endedAt)
                              .utcOffset("+09:00")
                              .format("HH:mm")
                          : ""}
                      </Grid>
                    </Box>
                    <Box mt={3} ml={2}>
                      <Grid item>
                        <span style={{ fontWeight: 600 }}>【勤務時間</span>:
                        {hour || minutes
                          ? `${hour}時間${minutes}分`
                          : "0時間0分"}
                        】
                      </Grid>
                    </Box>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            <Box mt={5}>
              <Grid item>
                <Grid container direction="column" justify="flex-start">
                  <Grid item>
                    <Grid container direction="row">
                      <Box mr={2}>
                        <Grid item>
                          <ChatBubbleIcon />
                        </Grid>
                      </Box>
                      <Grid item className={classes.title}>
                        振り返り
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box mt={1}>
                    <Grid item>
                      <pre className={classes.comment}>
                        {attendance.data && attendance.data.comment}
                      </pre>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid
                item
                onClick={() => dispatch(toggleKintaiCardClicked(false))}
              >
                <TaskList title="対応タスク" taskData={attendance.tasks} />
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CheckAttendanceAreaInDetail;

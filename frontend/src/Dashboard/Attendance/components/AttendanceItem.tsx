import React, { FC } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { toggleKintaiCardClicked } from "../../../appSlice";
import { setSelectedAttendance } from "../attendanceSlice";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      borderRadius: 10,
      marginTop: 25,
    },
    space: {
      marginTop: 20,
    },
    title: {
      fontSize: 18,
    },
    time: {
      marginRight: 30,
    },
    task: {
      fontSize: 20,
    },
  })
);

interface AttendanceItemProps {
  attendance: {
    tasks: string[];
    id: string;
    user: string;
    workspace: string;
    createdAt: string;
    startedAt: string;
    endedAt: string;
    restStartedAt: string;
    restEndedAt: string;
    comment: string;
  };
}

const AttendanceItem: FC<AttendanceItemProps> = ({ attendance }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //　勤務時間
  const start = moment(attendance.startedAt).utcOffset("+09:00");
  const end = moment(attendance.endedAt).utcOffset("+09:00");
  const diff = Math.round(end.diff(start, "minute", true));

  // 休憩時間を引く
  const restStart = moment(attendance.restStartedAt).utcOffset("+09:00");
  const restEnd = moment(attendance.restEndedAt).utcOffset("+09:00");
  const restDiff = Math.round(restEnd.diff(restStart, "minute", true));

  const totalDiff = diff - restDiff;

  const hour = Math.round(totalDiff / 60);
  const minutes = totalDiff % 60;

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() => {
            dispatch(setSelectedAttendance(attendance.id));
            dispatch(toggleKintaiCardClicked(true));
          }}
        >
          <Container>
            <Box pt={2} pb={3}>
              <Grid container direction="column">
                <Grid item className={classes.space}>
                  <Box borderBottom={1}>
                    <Typography variant="h5">
                      {moment(attendance.createdAt)
                        .utcOffset("+09:00")
                        .format("YYYY年MM月DD日")}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item style={{ width: "90%" }}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        className={clsx(classes.title, classes.space)}
                      >
                        <Grid item className={classes.time}>
                          <span style={{ fontWeight: 600 }}>出社</span>:
                          {attendance.startedAt
                            ? moment(attendance.startedAt)
                                .utcOffset("+09:00")
                                .format("HH:mm")
                            : ""}
                        </Grid>
                        <Grid item className={classes.time}>
                          <span style={{ fontWeight: 600 }}>休憩</span>:
                          {attendance.restStartedAt
                            ? moment(attendance.restStartedAt)
                                .utcOffset("+09:00")
                                .format("HH:mm")
                            : ""}
                          ~
                          {attendance.restEndedAt
                            ? moment(attendance.restEndedAt)
                                .utcOffset("+09:00")
                                .format("HH:mm")
                            : ""}
                        </Grid>
                        <Grid item className={classes.time}>
                          <span style={{ fontWeight: 600 }}>退社</span>:
                          {attendance.endedAt
                            ? moment(attendance.endedAt)
                                .utcOffset("+09:00")
                                .format("HH:mm")
                            : ""}
                        </Grid>
                        { hour && minutes ? 
                          <Grid item className={classes.time}>
                            <span style={{ fontWeight: 600 }}>【勤務時間</span>:
                            { `${hour}時間${minutes}分` }】
                          </Grid>
                        : "" }
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Box mr={3}>
                      <Grid item>
                        <CheckCircleIcon color="secondary" />
                      </Grid>
                    </Box>
                    <Grid item className={classes.task}>
                      <Typography variant={"body1"}>
                        {attendance.tasks && attendance.tasks.length}
                        件のタスクに対応
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Box mt={3}>
                    <Grid container direction="row" justify="flex-start">
                      <Grid item>
                        <Box mr={3}>
                          <ChatBubbleIcon color="secondary" />
                        </Box>
                      </Grid>
                      <Grid item style={{ width: "90%" }}>
                        <Typography variant={"body1"}>
                          {attendance.comment}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </CardActionArea>
      </Card>
    </>
  );
};

export default AttendanceItem;

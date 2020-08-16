import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";

import NewTaskAddAfterWorkDrawer from "../../Task/components/TaskAddButtonAfetrWorkDrawer";
import AddedTaskTextAfterWorkDrawer from "../../Task/components/AddedTaskTextAfterWorkDrawer";
import {
  selectAddButtonAfterTask,
  selectAddedTaskText,
  toggleAddButtonAfterTask,
} from "../../../appSlice";
import {
  fetchAsyncUpdateTodaysAttendance,
  selectTodaysAttendance,
} from "../attendanceSlice";

import Color from "../../../shared/util/color";

import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import { selectTodaysDoneTasks } from "../../Task/taskSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainTitle: {
      width: "30%",
      fontSize: 23,
    },
    root: {
      borderRadius: 10,
      backgroundColor: Color.VWORK_LIGHT_BLUE,
      marginTop: 25,
    },
    title: {
      fontSize: 18,
    },
    timeArea: {
      width: "100%",
      fontSize: 18,
    },
    appBar: {
      position: "relative",
      backgroundColor: Color.VWORK_BLACK,
      boxShadow: "none",
    },
    dialogTitle: {
      fontSize: 30,
      paddingLeft: 2,
    },
    dialogText: {
      fontSize: 20,
    },
    additionalButton: {
      borderRadius: 10,
      width: "10%",
      fontSize: 20,
    },
    todayUpdate: {
      marginBottom: 10,
    },
    textField: {
      width: "85%",
    },
    out: {
      borderRadius: 10,
      width: 150,
      fontSize: 20,
    },
  })
);

// TODO: 出社時、退社時にuserのactiveを切り替える

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CheckAttendanceArea = () => {
  const classes = useStyles();
  const moment = require("moment");
  const [open, setOpen] = React.useState(false);

  const todaysAttendance = useSelector(selectTodaysAttendance);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const attendedClicked = async () => {
    await dispatch(
      fetchAsyncUpdateTodaysAttendance({
        id: todaysAttendance._id,
        attendance: { startedAt: moment() },
      })
    );
  };

  const restStartedClicked = async () => {
    await dispatch(
      fetchAsyncUpdateTodaysAttendance({
        id: todaysAttendance._id,
        attendance: { restStartedAt: moment() },
      })
    );
  };

  const restEndClicked = async () => {
    if (window.confirm("休憩を終了しますか？")) {
      await dispatch(
        fetchAsyncUpdateTodaysAttendance({
          id: todaysAttendance._id,
          attendance: { restEndedAt: moment() },
        })
      );
    }
  };

  const dispatch = useDispatch();
  const addButtonAfterTask = useSelector(selectAddButtonAfterTask);
  const addedTaskText = useSelector(selectAddedTaskText);
  const todaysDoneTasks = useSelector(selectTodaysDoneTasks);

  return (
    <>
      <Box borderBottom={1} className={classes.mainTitle}>
        勤怠管理
      </Box>
      {todaysAttendance._id ? (
        <>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {moment().format("YYYY年MM月DD日")}
              </Typography>
              <Grid
                container
                spacing={5}
                direction="row"
                className={classes.timeArea}
              >
                <Grid item>
                  <span style={{ fontWeight: 600 }}>出社</span>：
                  {todaysAttendance.startedAt
                    ? moment(todaysAttendance.startedAt)
                        .utcOffset("+09:00")
                        .format("HH:mm")
                    : ""}
                </Grid>
                <Grid item>
                  <Grid item>
                    <span style={{ fontWeight: 600 }}>休憩</span>：
                    {todaysAttendance.restStartedAt
                      ? moment(todaysAttendance.restStartedAt)
                          .utcOffset("+09:00")
                          .format("HH:mm") + " ~ "
                      : ""}
                    {todaysAttendance.restEndedAt
                      ? moment(todaysAttendance.restEndedAt)
                          .utcOffset("+09:00")
                          .format("HH:mm")
                      : ""}
                  </Grid>
                </Grid>
                <Grid item>
                  <span style={{ fontWeight: 600 }}>退社</span>：
                  {todaysAttendance.endedAt
                    ? moment(todaysAttendance.endedAt)
                        .utcOffset("+09:00")
                        .format("HH:mm")
                    : ""}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container direction="row" justify="flex-end">
                <Box mr={1}>
                  <Grid item>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      disabled={!!todaysAttendance.startedAt}
                      onClick={attendedClicked}
                    >
                      出社
                    </Button>
                  </Grid>
                </Box>
                <Box mr={1}>
                  <Grid item>
                    {!todaysAttendance.restStartedAt ? (
                      <Button
                        size="small"
                        variant="contained"
                        disabled={
                          !todaysAttendance.startedAt ||
                          !!todaysAttendance.restStartedAt ||
                          !!todaysAttendance.endedAt
                        }
                        color="primary"
                        onClick={restStartedClicked}
                      >
                        休憩
                      </Button>
                    ) : (
                      ""
                    )}
                    {todaysAttendance.restStartedAt ? (
                      <Button
                        size="small"
                        variant="contained"
                        disabled={
                          !todaysAttendance.startedAt ||
                          !!todaysAttendance.restEndedAt ||
                          !!todaysAttendance.endedAt
                        }
                        color="secondary"
                        onClick={restEndClicked}
                      >
                        休憩終了
                      </Button>
                    ) : (
                      ""
                    )}
                  </Grid>
                </Box>
                <Box mr={1}>
                  <Grid item>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={handleClickOpen}
                      disabled={
                        !todaysAttendance.startedAt ||
                        !!todaysAttendance.endedAt ||
                        (!!todaysAttendance.restStartedAt &&
                          !todaysAttendance.restEndedAt)
                      }
                    >
                      退社
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </CardActions>
          </Card>
          <Dialog fullScreen open={open} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo192.png`}
                  style={{ height: 25 }}
                  className="imgstyle"
                  alt="icon"
                />
                <Typography variant="h6" className={classes.dialogTitle}>
                  VWORK
                </Typography>
              </Toolbar>
            </AppBar>
            <Box mt={10}>
              <Grid container direction="column" className={classes.dialogText}>
                <Container maxWidth="lg">
                  <Grid item>勤務お疲れさまでした</Grid>
                  <Box mt={7}>
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>今日行ったタスクの確認をして下さい。</Grid>
                        <Box mt={3}>
                          <Grid item>
                            <Button
                              className={classes.additionalButton}
                              onClick={() =>
                                dispatch(toggleAddButtonAfterTask(true))
                              }
                              variant="contained"
                              color="secondary"
                            >
                              追加
                            </Button>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Grid item>
                    <Typography variant="h5">
                      <span className="vwork-red">
                        {todaysDoneTasks && todaysDoneTasks.length > 0
                          ? todaysDoneTasks.length
                          : "0"}
                        件
                      </span>
                      のタスクを追加済
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box mt={3}>
                      <Formik
                        initialValues={{ comment: "" }}
                        validationSchema={Yup.object().shape({})}
                        onSubmit={async (values, actions) => {
                          actions.setSubmitting(false);

                          await dispatch(
                            fetchAsyncUpdateTodaysAttendance({
                              id: todaysAttendance._id,
                              attendance: {
                                endedAt: moment(),
                                comment: values.comment,
                                tasks: todaysDoneTasks,
                              },
                            })
                          );

                          setOpen(false);
                        }}
                      >
                        {(props) => (
                          <Form>
                            <FormControl className={classes.textField}>
                              <Field
                                component={TextField}
                                name="comment"
                                variant="outlined"
                                label="今日の振り返り"
                                margin="normal"
                                fullWidth
                                multiline
                                id="comment"
                                value={props.values.comment}
                                rows={4}
                              />
                            </FormControl>
                            <Box mt={10} mr={4}>
                              <Grid
                                container
                                direction="row"
                                justify="flex-end"
                              >
                                <Button
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                  className={classes.out}
                                >
                                  退勤する
                                </Button>
                              </Grid>
                            </Box>
                          </Form>
                        )}
                      </Formik>
                    </Box>
                  </Grid>
                </Container>
              </Grid>
            </Box>
            {addButtonAfterTask ? <NewTaskAddAfterWorkDrawer /> : ""}

            {addedTaskText ? <AddedTaskTextAfterWorkDrawer /> : ""}
          </Dialog>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CheckAttendanceArea;

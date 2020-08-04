import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import TaskInDetailList from "../../Task/components/TaskInDetailItem";

const drawerWidth = "55%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 10,
      backgroundColor: Color.VWORK_LIGHT_BLUE,
      height: 185,
      marginTop: 25,
      width: "60%",
    },

    title: {
      fontSize: 20,
      // fontWeight:
    },
    maintitle: {
      m: 1,
      width: "20rem",
      fontSize: 18,
    },
    dialogtitle: {
      fontSize: 30,
    },
    color: {
      backgroundColor: Color.VWORK_RED,
    },
    button: {
      cursor: "pointer",
    },
    appBar: {
      position: "relative",
      backgroundColor: Color.VWORK_BLACK,
    },
    dialogText: {
      fontSize: 20,
    },
    dialogStyle: {
      marginTop: "5%",
    },
    additionalButton: {
      backgroundColor: Color.VWORK_BLUE,
      color: Color.VWORK_WHITE,
      borderRadius: 10,
      width: 100,
      fontSize: 20,
    },
    takinButton: {
      backgroundColor: Color.VWORK_RED,
      color: Color.VWORK_WHITE,
      borderRadius: 10,
      width: 150,
      fontSize: 20,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

const CheckAttendanceAreaInDetail = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Grid container direction="column" style={{ marginTop: "7%" }}>
          <Grid item>DatePickerと連動</Grid>
          <Grid item>
            <Card className={classes.root}>
              <Grid
                container
                direction="column"
                justify="space-between"
                className={classes.title}
              >
                <Grid item style={{ marginTop: "4.5%", marginLeft: "3%" }}>
                  出社:{" "}
                </Grid>
                <Grid item style={{ marginTop: "4.5%", marginLeft: "3%" }}>
                  休憩:{" "}
                </Grid>
                <Grid item style={{ marginTop: "4.5%", marginLeft: "3%" }}>
                  退社:{" "}
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item style={{ marginTop: "5%" }}>
            <Grid container>
              <Grid item style={{ marginRight: "2%" }}>
                <CheckCircleIcon />
              </Grid>
              <Grid item className={classes.title}>
                対応タスク
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TaskInDetailList title="UI画面の実装" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckAttendanceAreaInDetail;

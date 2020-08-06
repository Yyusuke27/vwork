import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import TaskInDetailList from "../../Task/components/TaskInDetailItem";

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

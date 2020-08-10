import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Color from "../../../shared/util/color";
import TaskInDetailList from "../../Task/components/TaskInDetailItem";
import Box from "@material-ui/core/Box";

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
    },
  })
);

const CheckAttendanceAreaInDetail = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Box mt={6}>
          <Grid container direction="column">
            <Grid item>DatePickerと連動</Grid>
            <Grid item>
              <Card className={classes.root}>
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  className={classes.title}
                >
                  <Box mt={3} ml={3}>
                    <Grid item>出社:</Grid>
                  </Box>
                  <Box mt={3} ml={3}>
                    <Grid item>休憩:</Grid>
                  </Box>
                  <Box mt={3} ml={3}>
                    <Grid item>退社:</Grid>
                  </Box>
                </Grid>
              </Card>
            </Grid>
            <Box mt={10}>
              <Grid item>
                <Grid container direction="row" alignItems="center">
                  <Box mr={2}>
                    <Grid item>
                      <CheckCircleIcon />
                    </Grid>
                  </Box>
                  <Grid item className={classes.title}>
                    対応タスク
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box mt={3}>
              <Grid item>
                <TaskInDetailList title="UI画面の実装" />
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CheckAttendanceAreaInDetail;

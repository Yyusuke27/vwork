import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
    height: 300,
    marginTop: 25,
  },

  title: {
    fontSize: 18,
  },
  space: {
    marginTop: 20,
  },
});

const AttendanceItem = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <Container>
          <Grid container direction="column">
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    className={clsx(classes.title, classes.space)}
                  >
                    <Grid item>出社: 09:15</Grid>
                    <Grid item>休憩: 12:05~13:00</Grid>
                    <Grid item>退社: 18:55</Grid>
                  </Grid>
                </Grid>
                <Grid item>DatePickerと連動</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                style={{ marginTop: 40 }}
              >
                <Grid item style={{ marginRight: 20 }}>
                  <CheckCircleIcon />
                </Grid>
                <Grid item style={{ fontSize: 20 }}>
                  2件のタスクに対応
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                style={{ marginTop: 25 }}
              >
                <Grid item>
                  <ChatBubbleIcon style={{ marginRight: 20 }} />
                </Grid>
                <Grid item style={{ width: "93%" }}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Card>
    </>
  );
};

export default AttendanceItem;

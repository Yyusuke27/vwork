import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { toggleKintaiCardClicked } from "../../../appSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    task: {
      fontSize: 20,
    },
  })
);

const AttendanceItem = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={() => dispatch(toggleKintaiCardClicked(true))}>
          <Container>
            <Grid container direction="column">
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
                      <Grid item style={{ width: "20%" }}>
                        <span style={{ fontWeight: 600 }}>出社</span>: 09:15
                      </Grid>
                      <Grid item style={{ width: "20%" }}>
                        <span style={{ fontWeight: 600 }}>休憩</span>:
                        12:05~13:00
                      </Grid>
                      <Grid item style={{ width: "20%" }}>
                        <span style={{ fontWeight: 600 }}>退社</span>: 18:55
                      </Grid>
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
                >
                  <Box mr={3}>
                    <Grid item>
                      <CheckCircleIcon />
                    </Grid>
                  </Box>
                  <Grid item className={classes.task}>
                    2件のタスクに対応
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box mt={3}>
                  <Grid container direction="row" justify="flex-start">
                    <Grid item>
                      <ChatBubbleIcon style={{ marginRight: 10 }} />
                    </Grid>
                    <Grid item style={{ width: "90%" }}>
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={5}
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </CardActionArea>
      </Card>
    </>
  );
};

export default AttendanceItem;
